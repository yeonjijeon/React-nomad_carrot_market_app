import { NextApiRequest, NextApiResponse } from 'next'
import client from '@libs/server/client'
import withHandler, { ResponseType } from '@libs/server/withHandler'
import twilio from 'twilio'
import smtpTransport from '@libs/server/mail'

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body
  const user = phone ? { phone } : email ? { email } : null
  if (!user) {
    return res.json({ ok: false })
  }

  const payload = Math.floor(100000 + Math.random() * 900000) + ''
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: 'Anonymous',
            ...user,
          },
        },
      },
    },
  })
  console.log(token)

  if (phone) {
    /*const mesage = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      from: process.env.SEND_PHONE,
      to: process.env.MY_PHONE!,
      body: `Your login token is ${payload}`,
    })
    console.log(mesage)
    */
  }

  if (email) {
    /*
    const mailOptions = {
      from: process.env.MAIL_ID,
      to: process.env.MAIL_ID,
      subject: 'Nomad Carrot Authentication Email',
      text: `Authentication Code : ${payload}`,
    }
    const result = smtpTransport.sendMail(mailOptions, (error, res) => {
      if (error) {
        console.log(error)
        return null
      } else {
        console.log(res)
        return null
      }
    })
    smtpTransport.close()
    return console.log(result)
    */
  }

  return res.json({
    ok: true,
  })
}

export default withHandler({
  method: 'POST',
  handler: handler,
  isPrivate: false,
})
