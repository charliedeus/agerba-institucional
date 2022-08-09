import Link from 'next/link'

export function NextLink(props: any) {
  const { href, children, ...rest } = props

  return (
    <Link href={href} passHref>
      <a {...rest} className="text-gray-900">
        {children}
      </a>
    </Link>
  )
}
