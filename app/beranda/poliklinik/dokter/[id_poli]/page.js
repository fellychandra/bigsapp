'use client';
import Card from '@/components/card';
import Loading from '@/components/loading';
import { Search } from '@/components/search';
import { GetDoctor } from '@/service/pendukung.servcie';
import { CaretLeft } from '@phosphor-icons/react';
import Link from 'next/link';
import React, { useState } from 'react'

const DokterById = ({ params }) => {
    const [search, setSearch] = useState('')
    const { data, isLoading, error } = GetDoctor(params.id_poli);

    const filterData = () => {
        return data?.data?.filter((item) => {
            return item.nama_dokter.toLowerCase().includes((search.toLowerCase()));
        });
    }

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
                    <Search>
                        <input
                            type="text"
                            className="w-full border border-abuabu rounded-md p-3 focus:outline-none focus:border-primary1"
                            placeholder="Cari Dokter"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Search>
                </section>
                <section className='px-2'>
                    <div className='grid grid-cols-1 gap-3 overflow-y-auto scrollbar-hide mt-5' style={{ maxHeight: 'calc(100vh - 225px)' }} >
                        {
                            filterData()?.map((item, index) =>
                                <Card dataDokter={item} key={index} />
                            )
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default DokterById
