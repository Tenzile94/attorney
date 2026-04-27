import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  subject: z.string().min(3),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['qasimovatenzile@gmail.com'],
      replyTo: data.email,
      subject: `Yeni müraciət: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 8px;">
          <h2 style="color: #1a1a2e; font-size: 22px; margin-bottom: 24px; border-bottom: 2px solid #bc9844; padding-bottom: 12px;">
            Yeni Əlaqə Müraciəti
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #555; font-size: 14px; width: 120px; font-weight: bold;">Ad:</td>
              <td style="padding: 10px 0; color: #222; font-size: 14px;">${data.name}</td>
            </tr>
            <tr style="background: #f0f0f0;">
              <td style="padding: 10px 8px; color: #555; font-size: 14px; font-weight: bold;">E-mail:</td>
              <td style="padding: 10px 8px; color: #222; font-size: 14px;"><a href="mailto:${data.email}" style="color: #bc9844;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #555; font-size: 14px; font-weight: bold;">Telefon:</td>
              <td style="padding: 10px 0; color: #222; font-size: 14px;">${data.phone}</td>
            </tr>
            <tr style="background: #f0f0f0;">
              <td style="padding: 10px 8px; color: #555; font-size: 14px; font-weight: bold;">Mövzu:</td>
              <td style="padding: 10px 8px; color: #222; font-size: 14px;">${data.subject}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #555; font-size: 14px; font-weight: bold; margin-bottom: 8px;">Mesaj:</p>
            <div style="background: #fff; border: 1px solid #ddd; border-radius: 6px; padding: 16px; color: #222; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999; text-align: center;">
            Bu mesaj huquqcu.com saytından göndərilmişdir.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Email göndərilmədi' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Məlumatlar düzgün deyil', details: err.errors }, { status: 400 })
    }
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server xətası' }, { status: 500 })
  }
}
