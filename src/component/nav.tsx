
function Nav() {
  return (
    <header className="w-full p-3">
    <nav className='w-full flex items-center h-20  justify-between  border  rounded-lg bg-gradient-to-r from-slate-400/20 to-white/50 backdrop-blur-sm bg-opacity-30 border-black'>
      <div className='w-full flex justify-start gap-10 items-center  px-10'>
        <h1 className='px-2 text-3xl font-bold  '>M.</h1>
       
      </div>
      <div className='w-full flex text-2xl justify-end px-10'>
        <i className="bi bi-file-earmark-person"></i>
      </div>
      </nav>
      </header>
  )
}

export default Nav