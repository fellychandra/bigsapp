'use client';
import { CaretLeft } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

const InfoLayanan = () => {
  return (
    <>
      <div className='bg-primary1 w-full h-[200px] -z-10 absolute top-0 left-0 right-0'></div>
      <div className='px-2'>
        <section className='mt-5'>
          <Link href={'/'} className='flex items-center p-1 font-bold text-lg gap-1 text-white'>
            <CaretLeft size={18} weight='bold' />
            <div className=''>
              Info Layanan Klinik
            </div>
          </Link>
        </section>
        <section className='m-2 mt-4'>
          <div className='w-full h-full bg-white rounded-[5px] shadow-custom p-3 mt-5'>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center pb-2 border-b-2">
                <div className="text-base">Layanan Klinik</div>
              </div>
              <div className="grid grid-cols-1 gap-2 justify-between items-center">
                
              </div>
            </div>
          </div>
        </section>      
      </div>
    </>
  )
}

export default InfoLayanan
