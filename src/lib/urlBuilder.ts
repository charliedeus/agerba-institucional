interface urlBuilderProps {
  src?: any
}

export const urlBuilder = ({ src }: urlBuilderProps) => {
  const fullUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_BASEURL}src`
  return fullUrl
}
