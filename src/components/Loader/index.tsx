export function Loader() {
  const fadeOut = () => {
    const loaderWrapper = document.querySelector('#wrapper')
    loaderWrapper?.classList.add('fade')
  }

  window.addEventListener('load', fadeOut)

  return (
    <div className="wrapper fixed inset-0 z-50 bg-gray-700 grid place-items-center transition-opacity duration-[.25s] visible-[1s]">
      <div className="loader"></div>
    </div>
  )

  // const loaderRoot = document.getElementById('loader-root') as HTMLElement
  // if (typeof window !== 'undefined') {
  //   return ReactDOM.createPortal(
  //     <section className="w-full h-screen absolute top-0 left-0 bg-gray-800 flex items-center justify-center">
  //       <h1 className="font-bold text-white">Loader</h1>
  //     </section>,
  //     loaderRoot,
  //   )
  // }
  // return null
}
