'use client';
import { useEffect } from "react";
import Logo from '@/components/logo'
import Menu from '@/components/menu'
import Slider from '@/components/slider'
import React from 'react'

export default function Home() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);
  return (
    <>
      <div className='px-4'>
        <section className='pt-10'>
          <Logo />
          <Slider />
        </section>
        <section>
          <div className='py-2'>
            <div className='text-lg font-medium pb-1'>Menu</div>
            <div className='grid grid-cols-2 gap-3 place-items-center justify-center py-[9px] px-2 sm:px-2 bg-white h-[213px] w-full shadow-custom rounded-[5px]'>
              <Menu style={'bg-pink1 h-full w-full'} link={"/poliklinik"}>
                Poliklinik
              </Menu>
              <Menu style={'bg-pink2 h-full w-full'} link={"/info-layanan"}>
                Info Layanan
              </Menu>
              <Menu style={'bg-primary h-full w-full'} link={"/bmi"}>
                BMI
              </Menu>
              <Menu style={'bg-ungu1 h-full w-full'} link={"/kritik-saran"}>
                Kritik & Saran
              </Menu>
            </div>
          </div>
        </section>
        <section className='mb-14'>
          <div className='py-2'>
            <div className='text-lg font-medium pb-1'>Dokter Tersedia</div>
            <div className='grid grid-cols-1 gap-3'>
              {/* <Card style={'bg-white h-[69px] w-full items-center'} data={""} />
                            <Card style={'bg-white h-[69px] w-full items-center'} data={""} />
                            <Card style={'bg-white h-[69px] w-full items-center'} data={""} />
                            <Card style={'bg-white h-[69px] w-full items-center'} data={""} /> */}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
