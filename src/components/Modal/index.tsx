import { Dialog } from '@headlessui/react'

interface ModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function Modal({ isOpen, setIsOpen }: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-x-hidden outline-none laptop:p-0 bg-neutral-800/70 focus:outline-none">
        <Dialog.Panel
          as="div"
          className="relative flex flex-col justify-between w-full h-full max-w-5xl duration-300 rounded-md laptop:h-fit laptop:aspect-video translate bg-blend-exclusion bg-gradient-to-br from-secondary to-primary"
        >
          <div className="absolute inset-0 flex flex-col gap-8 p-8 leading-relaxed">
            <Dialog.Title className="absolute w-full p-4 text-lg font-bold text-white rounded-md laptop:text-xl laptop:w-1/2 -left-2 bg-primary clip-path-mypoligon">
              COMUNICADO IMPORTANTE!!!
            </Dialog.Title>

            <div className="flex flex-col flex-1 gap-10 p-8 mt-20 leading-relaxed bg-white rounded-lg laptop:p-4 laptop:gap-4 laptop:text-xl text-zinc-900 laptop:mt-20">
              <Dialog.Description className="text-2xl font-semibold">
                Prezados,
              </Dialog.Description>

              <Dialog.Description className="flex flex-col gap-2 font-medium">
                <p>
                  Em decorrência da manutenção necessária junto ao datacenter da
                  PRODEB, comunicamos a indisponibilidade de soluções utilizadas
                  no atendimento aos públicos interno e externo, sendo:
                </p>

                <p className="mt-4 font-semibold">Das soluções afetadas:</p>

                <ul className="list-disc list-inside">
                  <li>Site Institucional da Agência;</li>
                  <li>SIDER, e:</li>
                  <li>STIP.</li>
                </ul>

                <p className="mt-4 font-semibold">
                  Período previsto de indisponibilidade:
                </p>
                <p>
                  Entre os dias <strong>14/08/2023, à partir das 18h</strong> e
                  dia <strong>15/08/2023 às 18h</strong>.
                </p>
              </Dialog.Description>

              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 mt-auto text-white rounded-md laptop:ml-auto bg-primary"
              >
                Fechar
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
