// netlify/functions/handle-voicemail.js
// Twilio action URL: triggered when Dial ends (no answer / busy / failed)

const SITE_URL = process.env.URL || 'https://mwgridsolutions.netlify.app'

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' }
  }

  try {
    const params = new URLSearchParams(event.body)
    const dialStatus = params.get('DialCallStatus')

    console.log(`Dial ended with status: ${dialStatus}`)

    if (dialStatus === 'completed') {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/xml' },
        body: `<?xml version="1.0" encoding="UTF-8"?><Response><Hangup/></Response>`
      }
    }

    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Matthew-Neural">Thank you for calling M W Grid Solutions. We purchase power equipment across the western United States and we'd love to hear from you.</Say>
  <Pause length="1"/>
  <Say voice="Polly.Matthew-Neural">Please leave your name, callback number, and a brief description of the equipment you have available. We'll get back to you within one business day.</Say>
  <Pause length="1"/>
  <Say voice="Polly.Matthew-Neural">Leave your message after the tone.</Say>
  <Record
    maxLength="120"
    playBeep="true"
    recordingStatusCallback="${SITE_URL}/.netlify/functions/handle-recording"
    recordingStatusCallbackMethod="POST"
  />
</Response>`

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/xml' },
      body: twiml
    }
  } catch (err) {
    console.error('handle-voicemail error:', err)
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/xml' },
      body: `<?xml version="1.0" encoding="UTF-8"?><Response><Hangup/></Response>`
    }
  }
}