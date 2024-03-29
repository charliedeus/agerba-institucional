import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { v4 as uuidV4 } from 'uuid'

export function IntegratorBar() {
  const menuItems = [
    {
      id: uuidV4(),
      title: 'Governo do Estado',
      url: 'http://www.ba.gov.br/',
    },
    {
      id: uuidV4(),
      title: 'Sites do Governo',
      url: 'http://www.ba.gov.br/modules/conteudo/conteudo.php?conteudo=6',
    },
    {
      id: uuidV4(),
      title: 'Transparência',
      url: 'http://www.ba.gov.br/modules/conteudo/conteudo.php?conteudo=7',
    },
    {
      id: uuidV4(),
      title: 'Ouvidoria Geral',
      url: 'http://www.ouvidoriageral.ba.gov.br/',
    },
    {
      id: uuidV4(),
      title: 'Acesso à Informação',
      url: 'http://www.acessoainformacao.ba.gov.br/',
    },
    {
      id: uuidV4(),
      title: 'Redes Sociais Governo',
      url: 'http://www.ba.gov.br/modules/conteudo/conteudo.php?conteudo=9',
    },
  ]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75, stiffness: 300 }}
        className="absolute top-[-33px] w-full mx-auto h-[3rem] hidden desktop:inline-block"
      >
        <ul className="flex items-end justify-center gap-4 w-2/3 h-full mx-auto pb-1 rounded-full overflow-hidden text-white text-xs bg-primary shadow-lg z-50">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link legacyBehavior href={`${item.url}`}>
                <a target={'_blank'} className="hover:underline">
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  )
}
