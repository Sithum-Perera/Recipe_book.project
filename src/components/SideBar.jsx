import React from 'react'

const SideBar = () => {
  return (
    <>
     <DesktopSidebar/>
     <MobileSidebar/>
    </>
  )
}

export default SideBar;

const DesktopSidebar = () => {
    return (
        <div className='p-3 md:p-3 border-r min-h-screen w-24 md:w-64 hidden sm:block'>
            <div className='flex flex-col gap-20 sticky top-10 left-0'>
                <div className='w-full'>
                    <img src='/logo.svg' alt='logo' className='hidden md:block'/>
                    <img src='/mobile-logo.svg' alt='logo' className='block md:hidden'/>
                </div>
            </div>
        </div>
    )
}