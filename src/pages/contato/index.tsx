import { ReactElement } from 'react'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { NextPageWithLayout } from '../_app'

const Contact: NextPageWithLayout = () => {
  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1>Formulário</h1>

      {/* <form
        action="https://formsubmit.co/darlan.jesus@agerba.ba.gov.br"
        method="POST"
        className="flex flex-col gap-8"
      >
        <input type="text" name="name" placeholder="Nome" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" id="message" cols="30" rows="10" />

        <input type="hidden" name="_captcha" value="false" />

        <button type="submit">Enviar</button>
      </form> */}
    </article>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Contact
