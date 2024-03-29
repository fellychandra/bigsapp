'use client';
import { LoadingPage } from '@/components/loading';
import { Search } from '@/components/search';
import { GetPoly } from '@/service/pendukung.servcie';
import { CaretLeft, CaretRight, DotOutline } from '@phosphor-icons/react'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
// import data from '@/service/data.json'
import Avatar from '@/public/assets/images/information.png'


const Poliklinik = () => {
  const [search, setSearch] = useState('')
  const { data, isLoading } = GetPoly();

  const filterData = () => {
    return data?.data?.filter((item) => {
      return item.poli.toLowerCase().includes((search.toLowerCase()));
    });
  }
  // console.log(data);
  if (isLoading) {
    return (<LoadingPage />)
  }

  return (
    <>
      <div className='bg-primary1 w-full h-[200px] -z-10 absolute top-0 left-0 right-0'></div>
      <div className='px-2'>
        <section className='mt-5'>
          <Link href={'/'} className='flex items-center p-1 font-medium text-lg gap-1 text-white'>
            <CaretLeft size={18} weight='bold' />
            <div className=''>
              Poliklinik
            </div>
          </Link>
        </section>
        <section className='m-2 mt-4'>
          <Search>
            <input
              type="text"
              className="w-full border border-abuabu rounded-md p-1 focus:outline-none focus:border-primary1"
              placeholder="Cari Poliklinik"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Search>
        </section>
        <section className='px-2'>
          <div className='w-full h-full bg-white rounded-[5px] shadow-custom p-2 mt-5'>
            <div className='grid grid-cols-2 gap-3 place-items-center justify-center overflow-y-auto scrollbar-hide' style={{ maxHeight: 'calc(100vh - 25.5vh)' }} >
              {filterData()?.map((item, index) => (
                <Link href={`/poliklinik/dokter/${item.id_poli}`} className='w-full' key={index}>
                  <div className='flex w-full h-[156px] p-2 bg-white/20 rounded-[5px] items-center justify-center cursor-pointer border-[2px]'>
                    <div className='flex flex-col items-center'>
                      <Image src={item.gambar ? `data:imagepng;base64;${item.gambar}` : Avatar} loading='eager' height={80} width={80} alt={item.id_poli} className='' />
                      <div className='mt-2 text-center text-sm font-medium text-zinc-900'>
                        <span className='capitalize'>
                          {(item?.poli).toLowerCase()}
                        </span></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>

  )
}

export default Poliklinik
