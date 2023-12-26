'use client';
import Card from '@/components/card'
import Logo from '@/components/logo'
import Menu from '@/components/menu'
import Slider from '@/components/slider'
import React from 'react'

export default function Beranda() {
    return (
        <>
            <div className='px-4'>
                <section className='pt-10'>
                    <Logo />
                    <Slider />
                </section>
                <section>
                    <div className='py-2'>
                        <div className='text-base font-bold pb-1'>Menu</div>
                        <div className='grid grid-cols-2 gap-3  place-items-center justify-center py-[9px] px-2 sm:px-2 bg-white h-[213px] w-full shadow-custom rounded-[5px]'>
                            <Menu style={'bg-pink1 h-full w-full'} teks={"Poliklinik"} link={"/beranda/poliklinik"} />
                            <Menu style={'bg-pink2 h-full w-full'} teks={"Info Layanan"} link={"/beranda//info-layanan"} />
                            <Menu style={'bg-primary h-full w-full'} teks={"BMI"} link={"/beranda//bmi"} />
                            <Menu style={'bg-ungu1 h-full w-full'} teks={"Kritik & Saran"} link={"/beranda//kritik-saran"} />
                        </div>
                    </div>
                </section>
                <section className='mb-14'>
                    <div className='py-2'>
                        <div className='text-base font-bold pb-1'>Dokter Tersedia</div>
                        <div className='grid grid-cols-1 gap-3'>
                            <Card style={'bg-white h-[69px] w-full items-center'} data={""} />
                            <Card style={'bg-white h-[69px] w-full items-center'} data={""} />
                            <Card style={'bg-white h-[69px] w-full items-center'} data={""} />
                            <Card style={'bg-white h-[69px] w-full items-center'} data={""} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
