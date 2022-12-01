import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { IntegratorBar } from '../IntegratorBar'
import { LogoDefault } from '../LogoDefault'

export function Header() {
  return (
    <header className="hidden px-[14px] laptop:px=0 tablet:flex tablet:w-full tablet:h-full border-t-8 border-t-secondary">
      <div className="w-full desktop:max-w-[1280px] h-[6.25rem] flex items-center justify-between m-auto relative">
        <AnimatePresence>
          <Link legacyBehavior href="/">
            <motion.a
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75 }}
              exit={{ x: -500, opacity: 0 }}
              className="cursor-pointer"
            >
              <LogoDefault />
            </motion.a>
          </Link>
        </AnimatePresence>

        <div className="hidden laptop:inline">
          <AnimatePresence>
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75 }}
              exit={{ x: 500, opacity: 0 }}
              className="social-links w-[12.5rem] h-full flex items-center justify-end gap-4"
            >
              <Link legacyBehavior href="https://www.instagram.com/seinfraba">
                <a className="py-2 border-2 border-transparent hover:border-b-primary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                      stroke="#3F3F95"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.9997 11.3701C16.1231 12.2023 15.981 13.0523 15.5935 13.7991C15.206 14.5459 14.5929 15.1515 13.8413 15.5297C13.0898 15.908 12.2382 16.0397 11.4075 15.906C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1903 8.22744 13.4229 8.09377 12.5923C7.96011 11.7616 8.09177 10.91 8.47003 10.1584C8.84829 9.40691 9.45389 8.7938 10.2007 8.4063C10.9475 8.0188 11.7975 7.87665 12.6297 8.00006C13.4786 8.12594 14.2646 8.52152 14.8714 9.12836C15.4782 9.73521 15.8738 10.5211 15.9997 11.3701Z"
                      stroke="#3F3F95"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 6.5H17.51"
                      stroke="#3F3F95"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Link>

              <Link legacyBehavior href="https://www.facebook.com/seinfra.ba">
                <a className="py-2 border-2 border-transparent hover:border-b-primary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      stroke="#3F3F95"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <IntegratorBar />
      </div>
    </header>
  )
}
