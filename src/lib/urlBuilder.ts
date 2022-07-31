export const urlBuilder = (src: string) => {
  const fullUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_BASEURL}${src}`
  return fullUrl
}
