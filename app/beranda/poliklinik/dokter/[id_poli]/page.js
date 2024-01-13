'use client';
import Card from '@/components/card';
import Loading from '@/components/loading';
import { Search } from '@/components/search';
import { GetDoctor } from '@/service/pendukung.servcie';
import { CaretLeft } from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react'

const DokterById = ({ params }) => {
    const { data, isLoading, error } = GetDoctor(params.id_poli);
    console.log(data?.data);
    if (isLoading) {
        return (<Loading />)
    }
    return (
        <>
            <div className='bg-primary w-full h-[200px] -z-10 absolute top-0 left-0 right-0'></div>
            <div className='px-2'>
                <section className='mt-5'>
                    <Link href={'/beranda/poliklinik'} className='flex items-center p-1 font-bold text-lg gap-1 text-white'>
                        <CaretLeft size={18} weight='bold' />
                        <div className=''>
                            Dokter
                        </div>
                    </Link>
                </section>
                <section className='m-2 mt-4'>
                    <Search cari={'Dokter'} />
                </section>
                <section className='px-2'>
                    <div className='grid grid-cols-1 gap-3 overflow-y-auto scrollbar-hide mt-5' style={{ maxHeight: 'calc(100vh - 225px)' }} >
                        {
                            data?.data.map((item, index) =>
                                <Card data={item} key={index} />
                            )
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default DokterById
