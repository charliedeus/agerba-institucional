/* eslint-disable import/no-anonymous-default-export */
import nodemailer, { SentMessageInfo } from 'nodemailer'

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: 'envio.ba.gov.br',
  port: 25,
  secure: false,
  auth: {
    user: '',
    pass: '',
  },
})

export default {
  send: (
    from: string,
    to: string,
    subject: string,
    text?: string,
    html?: string,
    attachments?: any[],
  ): Promise<SentMessageInfo> => {
    // Setup e-mail data
    const options = {
      from,
      to,
      subject,
      text,
      html,
      attachments,
    }

    return transporter.sendMail(options)
  },
}
