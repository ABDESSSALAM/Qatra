import React from 'react'
import TopHeader from './TopHeader'

function Header() {
  return (
    <header className='flex flex-col  '>
        <TopHeader />
        <div className='bg-primary w-full  h-72 my-0 flex items-center justify-around py-0 opacity-95 text-white cursor-pointer'>
            <div>
              {/* <p className='font-semibold text-2xl'>
              " قال تعالى " وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا
              </p> */}
              <p className='font-semibold text-2xl'>
                Lorem ipsum dolor sit amet.
              </p>
            {/* <img src="/imgs/headerQatra.png" className='w-72'  /> */}
            </div>
            <div>
                <img src="/imgs/img-header.png" className='w-72'  />
            </div>
        </div>
    </header>
  )
}

export default Header