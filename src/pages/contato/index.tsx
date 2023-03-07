import { User } from 'phosphor-react'
import { ReactElement } from 'react'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { NextPageWithLayout } from '../_app'

const Contact: NextPageWithLayout = () => {
  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <h1>Formulário</h1>

      {/* <form
        action="https://formsubmit.co/charliedeus@gmail.com"
        method="POST"
        className="flex flex-col gap-8"
      >
        <label className="flex items-center border-2 border-gray-200 rounded-md">
          <User size={16} weight="light" className="mx-2 text-gray-600" />
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="
              w-full
              py-2
              rounded-md
              outline-none
              bg-transparent"
          />
        </label>
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
