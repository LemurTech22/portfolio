import React , {useRef} from 'react'

const navbar = () => {

    const sidebar = useRef();

    const openMenu = () => {
      sidebar.current.style.transform = 'translateX(-16rem)'  
    }
    const closeMenu = () => {
      sidebar.current.style.transform = 'translateX(16rem)'  
    }
  return (
    <>
    <div>
        <p>add gradient Background refer to time 27:00</p>
    </div>

      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href="#top">
            add image here
        </a>

        <ul className='hidden md:flex items-center gap-5 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
           <li><a className='font-Ovo' href="#Home">Home</a></li>
           <li><a className='font-Ovo' href="#about">About Me</a></li>
           <li><a className='font-Ovo' href="#work">My Work</a></li>
           <li><a className='font-Ovo' href="#contact">Contact Me</a></li> 
        </ul>
        <div className='flex items-center gap-4'>
            <button >
                add button image refer to time 28:52
            </button>
         //  add right image here
            <a href="#contact">Contact</a>
            <button className='block md:hidden ml-3' onClick={openMenu}>
                add black side bar button image refer to time 28:52
            </button>
        </div>

        {/* --------- Mobile Menu --------- */}

        <ul ref={sidebar}className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
           <div>
                add x button here refer to 34:18
                Also refer to 37:38
           </div>
           <li><a className='font-Ovo' onClick={closeMenu} href="#Home">Home</a></li>
           <li><a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a></li>
           <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
           <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a></li> 
        </ul>


      </nav>
    </>
  )
}

export default navbar
