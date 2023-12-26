import Card from '@/components/card'
import Logo from '@/components/logo'
import Menu from '@/components/menu'
import Slider from '@/components/slider'
import React from 'react'

export default function Beranda() {
    return (
        <>
            <div className='px-4'>
                <section>
                    <Logo />
                    <Slider />
                </section>
                <section>
                    <div className='py-2'>
                        <div className='text-sm font-bold'>Menu</div>
                        <div className='grid grid-cols-2 gap-3  place-items-center justify-center py-[9px] px-2 sm:px-2 bg-white h-[213px] w-full shadow-custom rounded-[5px]'>
                            <Menu style={'bg-pink1 h-[90.549px] w-full'} teks={"Poliklinik"} />
                            <Menu style={'bg-pink2 h-[90.549px] w-full'} teks={"Info Layanan"} />
                            <Menu style={'bg-primary h-[90.549px] w-full'} teks={"BMI"} />
                            <Menu style={'bg-ungu1 h-[90.549px] w-full'} teks={"Kritik & Saran"} />
                        </div>
                    </div>
                </section>
                <section>
                    <div className='py-2'>
                        <div className='text-sm font-bold'>Dokter Tersedia</div>
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
