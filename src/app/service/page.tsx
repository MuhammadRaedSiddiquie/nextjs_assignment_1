import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-green-200 gap-6">
        <div className='flex border-2 border-green-200 flex-col rounded-[5px] bg-green-100 px-6 py-14 items-center justify-center gap-6'>
            <h2 className='text-3xl'>Web Development Services</h2>
            <button className="bg-green-600 border-2 border-white flex items-center justify-center py-2 px-8 rounded-[10px] text-xl text-white "><Link href={'./service/webdev'}>Visit</Link></button>

        </div>
        <div className='flex border-2 border-green-200 flex-col rounded-[5px] bg-green-100 px-6 py-14 items-center justify-center gap-6'>
            <h2 className='text-3xl'>App Development Services</h2>
            <button className="bg-green-600 border-2 border-white flex items-center justify-center py-2 px-8 rounded-[10px] text-xl text-white "><Link href={'./service/appdev'}>Visit</Link></button>

        </div>
      
    </div>
  )
}

export default page
