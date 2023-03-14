import {
  User,
  House,
  Bus,
  PhoneIncoming,
  Buildings,
  ChatCircleDots,
  At,
  UsersFour,
  IdentificationCard,
} from 'phosphor-react'
import { ReactElement } from 'react'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { NextPageWithLayout } from '../_app'
import { motion } from 'framer-motion'

const Contact: NextPageWithLayout = () => {
  return (
    <article className="flex flex-col gap-6 min-h-[calc(100vh-70px)] desktop:max-w-[1280px] m-auto px-[14px] py-16 text-base leading-relaxed">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
        className="font-bold text-[2rem]"
      >
        Formulário - Declaração de Tarifa
      </motion.h1>

      <form
        action="https://formsubmit.co/diretoria.tarifas@agerba.ba.gov.br"
        method="POST"
        className="flex flex-col gap-8"
      >
        <label className=" focus-within:border-primary flex items-center border-2 border-gray-200 rounded-md">
          <User size={22} weight="light" className="mx-2 text-gray-600" />
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="w-full focus-within:border-primary py-2 rounded-md outline-none bg-transparent "
          />
        </label>

        <div className="flex flex-col tablet:flex-row items-center gap-4">
          <label className=" focus-within:border-primary flex items-center flex-1 border-2 w-full border-gray-200 rounded-md">
            <IdentificationCard
              size={22}
              weight="light"
              className="mx-2 text-gray-600"
            />
            <input
              type="text"
              name="CPF"
              placeholder="CPF"
              className="w-full focus-within:border-primary py-2 outline-none bg-transparent"
            />
          </label>

          <label className=" focus-within:border-primary w-full flex items-center flex-1 border-2 border-gray-200 rounded-md">
            <At size={22} weight="light" className="mx-2 text-gray-600" />
            <input
              type="email"
              name="E-mail"
              placeholder="E-mail"
              className="w-full  focus-within:border-primary py-2 rounded-md outline-none bg-transparent"
            />
          </label>

          <label className=" focus-within:border-primary w-full flex items-center flex-1 border-2 border-gray-200 rounded-md">
            <PhoneIncoming
              size={22}
              weight="light"
              className="mx-2 text-gray-600"
            />
            <input
              type="text"
              name="Telefone"
              placeholder="Telefone de Contato"
              className="w-full focus-within:border-primary py-2 rounded-md outline-none bg-transparent"
            />
          </label>
        </div>

        <div className="flex flex-col tablet:flex-row items-center gap-4">
          <label className=" focus-within:border-primary w-full flex items-center flex-1 border-2 border-gray-200 rounded-md">
            <Buildings
              size={22}
              weight="light"
              className="mx-2 text-gray-600"
            />
            <input
              type="text"
              name="Endereço Residencial"
              placeholder="Endereço Residencial"
              className="w-full focus-within:border-primary py-2 rounded-md outline-none bg-transparent"
            />
          </label>

          <label className=" focus-within:border-primary w-full flex items-center flex-1 border-2 border-gray-200 rounded-md">
            <House size={22} weight="light" className="mx-2 text-gray-600" />
            <input
              type="text"
              name="Municipio Residencial"
              placeholder="Municipio Residencial"
              className="w-full focus-within:border-primary py-2 rounded-md outline-none bg-transparent"
            />
          </label>
        </div>

        <div className="flex flex-col tablet:flex-row items-center gap-4">
          <label className=" focus-within:border-primary w-full flex items-center flex-1 border-2 border-gray-200 rounded-md">
            <Bus size={22} weight="light" className="mx-2 text-gray-600" />
            <input
              type="text"
              name="Bairro onde pegará o ônibus"
              placeholder="Bairro onde pegará o ônibus"
              className="w-full focus-within:border-primary py-2 rounded-md outline-none bg-transparent"
            />
          </label>
          <label className=" focus-within:border-primary w-full flex items-center flex-1 border-2 border-gray-200 rounded-md">
            <UsersFour
              size={22}
              weight="light"
              className="mx-2 text-gray-600"
            />
            <input
              type="text"
              name="Empresa que trabalha"
              placeholder="Empresa que trabalha"
              className="w-full focus-within:border-primary py-2 rounded-md outline-none bg-transparent"
            />
          </label>

          <label className=" focus-within:border-primary w-full flex items-center flex-1 border-2 border-gray-200 rounded-md">
            <Buildings
              size={22}
              weight="light"
              className="mx-2 text-gray-600"
            />
            <input
              type="text"
              name="Bairro onde trabalha"
              placeholder="Bairro onde trabalha"
              className="w-full focus-within:border-primary py-2 rounded-md outline-none bg-transparent"
            />
          </label>

          <label className=" focus-within:border-primary w-full flex items-center flex-1 border-2 border-gray-200 rounded-md focus-within:border-primary">
            <Buildings
              size={22}
              weight="light"
              className="mx-2 text-gray-600"
            />
            <input
              type="text"
              name="Cidade onde trabalha"
              placeholder="Cidade onde trabalha"
              className="w-full py-2 rounded-md outline-none bg-transparent"
            />
          </label>
        </div>
        <label className=" focus-within:border-primary w-full flex items-center flex-1 border-2 border-gray-200 rounded-md">
          <ChatCircleDots
            size={22}
            weight="light"
            className="mx-2 text-gray-600"
          />
          <input
            type="text"
            name="Sugestão de Nº de Linha e/ou empresa"
            placeholder="Sugestão de Nº de Linha e/ou empresa"
            className="w-full focus-within:border-primary py-2 rounded-md outline-none bg-transparent"
          />
        </label>

        <textarea
          className="flex items-center border-2 border-gray-200 rounded-md w-full py-2 px-2  outline-none focus-within:border-primary"
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Mensagem"
        />

        <input type="hidden" name="_captcha" value="false" />

        <div className=" flex items-center justify-center flex-1 ">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-48"
          >
            Enviar
          </button>
        </div>
      </form>
    </article>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Contact
