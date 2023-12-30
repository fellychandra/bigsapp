'use client';
import Card from '@/components/card poliklinik/';
import { Search } from '@/components/search';
import { CaretLeft, CaretRight, DotOutline } from '@phosphor-icons/react'
import Link from 'next/link';
import React from 'react'

const Poliklinik = () => {

  const dummy = [
    { teks: 'KLINIK ANAK' },
    { teks: 'KLINIK UMUM' },
    { teks: 'LABORATORIUM' },
    { teks: 'KLINIK GIGI UMUM' },
    { teks: 'KLINIK BEDAH UMUM' },
    { teks: 'Laboratorium' },
    { teks: 'Laboratorium' },
    { teks: 'Laboratorium' },
    { teks: 'Laboratorium' },
  ];
  return (
    <>
      <div className='bg-primary w-full h-[200px] -z-10 absolute top-0 left-0 right-0'></div>
      <div className='px-2'>
        <section className='mt-5'>
          <Link href={'/beranda'} className='flex items-center p-1 font-bold text-lg gap-1 text-white'>
            <CaretLeft size={18} weight='bold' />
            <div className=''>
              Poliklinik
            </div>
          </Link>
        </section>
        <section className='m-2 mt-4'>
          <Search cari={'Poliklinik'} />
        </section>
        <section className='px-2'>
          <div className='w-full h-full bg-white rounded-[5px] shadow-custom p-2 mt-5'>

            <div className='grid grid-cols-2 gap-3 place-items-center justify-center overflow-y-auto scrollbar-hide' style={{ maxHeight: 'calc(100vh - 240px)' }} >
              {dummy?.map((item, index) => (
                <Card teks={item.teks} key={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>

  )
}

export default Poliklinik
