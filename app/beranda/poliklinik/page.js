'use client';
import Card from '@/components/card poliklinik/';
import { CaretLeft, CaretRight, DotOutline } from '@phosphor-icons/react'
import Link from 'next/link';
import React from 'react'

const Poliklinik = () => {
  return (
    <>
      <div className='px-2'>
        <section className='pt-3'>
          <Link href={'/beranda'} className='flex items-center font-bold poin'>
            <CaretLeft size={26} />
            <div>
              Poliklinik
            </div>
          </Link>
        </section>
        <section className='p-2'>
          <div className='w-full'>
            <div className='flex w-full h-[53px] bg-white rounded-[5px] items-center shadow-custom'>
              <div className="p-3 w-full text-abuabu font-normal text-[12px]">
                <input
                  type="text"
                  className="w-full border border-abuabu rounded-md py-2 px-3 focus:outline-none focus:border-primary1"
                  placeholder="Cari Poliklinik"
                />
              </div>
            </div>
          </div>
        </section>
        <section className='p-2 overflow-y-auto' style={{ maxHeight: 'calc(100vh - 160px)' }}>
          <div className='grid grid-cols-2 gap-3 place-items-center justify-center p-2 w-full h-full rounded-[5px] shadow-custom '>
            <Card data={""} />
            <Card data={""} />
            <Card data={""} />
            <Card data={""} />
            <Card data={""} />
            <Card data={""} />
            <Card data={""} />
            <Card data={""} />
            <Card data={""} />
            <Card data={""} />
            <Card data={""} />
            <Card data={""} />
          </div>
        </section>
      </div>
    </>

  )
}

export default Poliklinik
