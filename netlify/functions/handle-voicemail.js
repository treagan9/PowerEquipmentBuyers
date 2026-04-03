// netlify/functions/handle-voicemail.js
// Twilio action URL: triggered when Dial ends (no answer / busy / failed)

const SITE_URL = process.env.URL || 'https://powerequipmentbuyers.netlify.app'

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    const formData = await req.formData()
    const dialStatus = formData.get('DialCallStatus')

    console.log(`Dial ended with status: ${dialStatus}`)

    // If the call was answered, no voicemail needed
    if (dialStatus === 'completed') {
      const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Hangup/>
</Response>`
      return new Response(twiml, {
        status: 200,
        headers: { 'Content-Type': 'text/xml' }
      })
    }

    // Not answered: play voicemail greeting and record
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Thank you for calling MW Grid Solutions. We are unable to take your call right now. Please leave a message with your name, phone number, and a brief description of the equipment you are looking to sell. We will return your call as soon as possible.</Say>
  <Record
    maxLength="120"
    playBeep="true"
    recordingStatusCallback="${SITE_URL}/.netlify/functions/handle-recording"
    recordingStatusCallbackMethod="POST"
  />
  <Say voice="alice">We did not receive a recording. Please call back or visit our website at mwgridsolutions.com. Thank you.</Say>
</Response>`

    return new Response(twiml, {
      status: 200,
      headers: { 'Content-Type': 'text/xml' }
    })
  } catch (err) {
    console.error('handle-voicemail error:', err)
    const fallback = `<?xml version="1.0" encoding="UTF-8"?>
<Response><Hangup/></Response>`
    return new Response(fallback, {
      status: 200,
      headers: { 'Content-Type': 'text/xml' }
    })
  }
}

export const config = {
  path: '/.netlify/functions/handle-voicemail'
}
