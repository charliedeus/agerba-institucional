import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full h-full min-h-[300px] max-h-[300px] flex items-center justify-center bg-[#3F3F95]">
      <Link href="/">
        <img className="max-w-[59px]" src="/logo-white.png" alt="" />
      </Link>
    </footer>
  )
}
