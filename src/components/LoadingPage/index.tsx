import { BounceLoader } from 'react-spinners'

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-70px)] m-auto">
      <BounceLoader color="#3F3F95" size={40} />
    </div>
  )
}
