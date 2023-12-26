'use client';
import Card from '@/components/card'
import { CaretLeft } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

const Dokter = () => {
    return (
        <>
            <div className='px-2'>
                <section className='mt-5'>
                    <Link href={'/beranda'} className='flex items-center p-1 font-bold text-lg gap-1'>
                        <CaretLeft size={18} weight='bold' />
                        <div className=''>
                            Dokter
                        </div>
                    </Link>
                </section>
                <section className='m-2 mt-4'>
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
                <section className='px-2'>
                    <div className='grid grid-cols-1 gap-3 overflow-y-auto scrollbar-hide' style={{ maxHeight: 'calc(100vh - 200px)' }} >
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                        <Card style={'bg-white h-full w-full items-center'} data={""} />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Dokter
