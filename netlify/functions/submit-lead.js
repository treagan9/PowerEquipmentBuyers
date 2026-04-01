// netlify/functions/submit-lead.js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const RESEND_KEY = process.env.RESEND_API_KEY
const ADMIN_EMAIL = process.env.ADMIN_EMAIL
const FROM_EMAIL = 'Power Equipment Buyers <leads@powerequipmentbuyers.com>'

async function sendEmail(to, subject, html) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_KEY}`
    },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html })
  })
  if (!res.ok) {
    const err = await res.text()
    console.error('Resend error:', err)
  }
}

function clientEmailHtml(name) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0f1a; color: #f1f5f9; padding: 40px 30px; border-radius: 12px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <div style="display: inline-block; background: #3b82f6; color: white; font-weight: 800; font-size: 14px; padding: 8px 14px; border-radius: 8px; letter-spacing: 0.05em;">PE</div>
      </div>
      <h1 style="font-size: 22px; font-weight: 700; margin-bottom: 16px; color: #f1f5f9;">We Received Your Submission</h1>
      <p style="font-size: 15px; line-height: 1.7; color: #94a3b8; margin-bottom: 24px;">
        Hi ${name},<br/><br/>
        Thank you for reaching out to Power Equipment Buyers. We have received your equipment details and photos.
        Our buyer will review your submission and respond with an offer, typically within one hour during business hours.
      </p>
      <div style="background: #141b2d; border: 1px solid #1e293b; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="font-size: 14px; color: #94a3b8; margin: 0;">
          <strong style="color: #f1f5f9;">What happens next:</strong><br/>
          1. We evaluate your equipment based on the details and photos provided<br/>
          2. You receive a competitive offer<br/>
          3. If accepted, we coordinate pickup and payment
        </p>
      </div>
      <p style="font-size: 13px; color: #64748b; text-align: center; margin-top: 30px;">
        Power Equipment Buyers &mdash; Direct buyer of transformers and switchgear
      </p>
    </div>
  `
}

function adminEmailHtml(data, photoUrls) {
  const photoHtml = photoUrls.length > 0
    ? photoUrls.map((url) => `<img src="${url}" style="width: 120px; height: 90px; object-fit: cover; border-radius: 6px; border: 1px solid #1e293b;" />`).join(' ')
    : '<p style="color: #64748b; font-size: 14px;">No photos uploaded</p>'

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0f1a; color: #f1f5f9; padding: 40px 30px; border-radius: 12px;">
      <div style="background: #22c55e; color: white; display: inline-block; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 6px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.08em;">New Lead</div>
      <h1 style="font-size: 20px; font-weight: 700; margin-bottom: 20px;">New Equipment Submission</h1>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 130px;">Name</td><td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${data.name}</td></tr>
        <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${data.email}" style="color: #3b82f6;">${data.email}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone</td><td style="padding: 8px 0; font-size: 14px;"><a href="tel:${data.phone}" style="color: #3b82f6;">${data.phone}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Equipment Type</td><td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #f59e0b;">${data.equipment_type}</td></tr>
      </table>
      <div style="background: #141b2d; border: 1px solid #1e293b; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="font-size: 12px; color: #64748b; margin: 0 0 6px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">Description</p>
        <p style="font-size: 14px; color: #94a3b8; margin: 0; line-height: 1.6; white-space: pre-wrap;">${data.description || 'No description provided'}</p>
      </div>
      <div style="margin-bottom: 24px;">
        <p style="font-size: 12px; color: #64748b; margin: 0 0 10px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">Photos</p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${photoHtml}
        </div>
      </div>
    </div>
  `
}

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    const formData = await req.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const equipment_type = formData.get('equipment_type')
    const description = formData.get('description')
    const photoFiles = formData.getAll('photos')

    // Upload photos to Supabase storage
    const photoUrls = []
    for (const file of photoFiles) {
      if (!file || !file.name) continue
      const timestamp = Date.now()
      const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
      const path = `leads/${timestamp}-${safeName}`
      const buffer = Buffer.from(await file.arrayBuffer())

      const { error: uploadError } = await supabase.storage
        .from('lead-photos')
        .upload(path, buffer, {
          contentType: file.type,
          upsert: false
        })

      if (!uploadError) {
        const { data: urlData } = supabase.storage
          .from('lead-photos')
          .getPublicUrl(path)
        photoUrls.push(urlData.publicUrl)
      }
    }

    // Insert lead into database
    const { error: dbError } = await supabase.from('leads').insert({
      name,
      email,
      phone,
      equipment_type,
      description,
      photos: photoUrls,
      status: 'new'
    })

    if (dbError) {
      console.error('DB error:', dbError)
      return new Response(JSON.stringify({ error: 'Database error' }), { status: 500 })
    }

    // Send emails
    await Promise.all([
      sendEmail(email, 'We Received Your Equipment Submission', clientEmailHtml(name)),
      sendEmail(ADMIN_EMAIL, `New Lead: ${equipment_type} from ${name}`, adminEmailHtml({ name, email, phone, equipment_type, description }, photoUrls))
    ])

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err) {
    console.error('Function error:', err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}

export const config = {
  path: '/.netlify/functions/submit-lead'
}
