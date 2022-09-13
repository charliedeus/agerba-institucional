import React, { SVGAttributes } from 'react'
import QRCode from 'react-qr-code'
import { urlBuilder } from '../../lib/urlBuilder'

// eslint-disable-next-line no-undef
interface StudentIdProps extends SVGAttributes<HTMLOrSVGElement> {
  studentId?: number
  name?: string
  avatarUrl?: string
  size?: 'big' | 'small'
  document?: string
  school?: string
}

export function StudentId({
  studentId,
  name,
  avatarUrl,
  size = 'small',
  document,
  school,
  ...props
}: StudentIdProps) {
  return (
    <div className={`relative ${size === 'big' ? 'scale-150' : ''}`}>
      {document && (
        <div className="w-[24rem] h-full border flex flex-col items-center gap-4 p-4 bg-primary text-white m-auto">
          <header className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-lg">
              Carteira de Identificação Estudantil
            </h1>
            <p className="font-bold">Nº 01046</p>
            <picture>
              <img
                className="w-32 h-32 rounded-full border-4 border-primary"
                src={urlBuilder(avatarUrl)}
                alt=""
              />
            </picture>
          </header>
          <div className="flex flex-col gap-1 w-full">
            <strong className="text-xl font-bold">{name || 'Nome'}</strong>
            <span className="text-brand-700 text-md">RG 1.286.333-SSP-ES</span>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <span className="text-brand-700 text-md">CPF</span>
            <strong className="text-xl font-bold">{document || 'CPF'}</strong>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <span className="text-brand-700 text-md">Unidade de ensino</span>
            <strong className="text-xl font-bold">
              {school || 'Unidade de ensino'}
            </strong>

            <QRCode
              value={`http://localhost:3000/identidade-estudantil/${document}`}
              size={64}
              className="mt-10"
            />
          </div>

          {/* <svg
            width="1080"
            height="1800"
            viewBox="0 0 1080 1800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_511_86" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 84.375C49.7056 84.375 90 46.599 90 0H990C990 46.599 1030.29 84.375 1080 84.375V1715.62C1030.29 1715.62 990 1753.4 990 1800H90C90 1753.4 49.7056 1715.62 0 1715.62V84.375Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 84.375C49.7056 84.375 90 46.599 90 0H990C990 46.599 1030.29 84.375 1080 84.375V1715.62C1030.29 1715.62 990 1753.4 990 1800H90C90 1753.4 49.7056 1715.62 0 1715.62V84.375Z"
              fill="#3F3F95"
            />
            <path
              d="M90 0V-8H82V0H90ZM0 84.375V76.375H-8V84.375H0ZM990 0H998V-8H990V0ZM1080 84.375H1088V76.375H1080V84.375ZM1080 1715.62V1723.62H1088V1715.62H1080ZM990 1800V1808H998V1800H990ZM90 1800H82V1808H90V1800ZM0 1715.62H-8V1723.62H0V1715.62ZM82 0C82 41.7022 45.7816 76.375 0 76.375V92.375C53.6297 92.375 98 51.4958 98 0H82ZM990 -8H90V8H990V-8ZM1080 76.375C1034.22 76.375 998 41.7022 998 0H982C982 51.4958 1026.37 92.375 1080 92.375V76.375ZM1088 1715.62V84.375H1072V1715.62H1088ZM998 1800C998 1758.3 1034.22 1723.62 1080 1723.62V1707.62C1026.37 1707.62 982 1748.5 982 1800H998ZM90 1808H990V1792H90V1808ZM0 1723.62C45.7815 1723.62 82 1758.3 82 1800H98C98 1748.5 53.6297 1707.62 0 1707.62V1723.62ZM-8 84.375V1715.62H8V84.375H-8Z"
              fill="white"
              mask="url(#path-1-inside-1_511_86)"
            />
          </svg> */}
        </div>
      )}
    </div>
  )
}
