
import { ImSpinner2 } from 'react-icons/im'

function ScreenLoader() {
  return (
     <div className='fixed left-0 top-0 bottom-0 right-0 z-50 w-full flex justify-center items-center '><ImSpinner2  className='animate-spin  text-purple-500 text-4xl' /></div>
  )
}

export default ScreenLoader