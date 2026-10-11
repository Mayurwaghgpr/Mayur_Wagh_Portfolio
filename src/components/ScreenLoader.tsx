
import { ImSpinner2 } from 'react-icons/im'

function ScreenLoader() {
  return (
    <div className="fixed inset-0 z-50 w-full flex justify-center items-center bg-white/70 dark:bg-zinc-950/70 backdrop-blur-sm">
      <ImSpinner2 className="animate-spin text-zinc-800 dark:text-zinc-200 text-3xl" />
    </div>
  );
}

export default ScreenLoader