'use client';
import { CaretLeft } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'
import { Form, Field } from 'react-final-form'

export default function StatusLayanan() {

    const onSubmit = (values) => {
        // Handle form submission logic here
        console.log('Form submitted with values:', values);
    };
    return (
        <>
            <div className='bg-primary w-full h-[200px] -z-10 absolute top-0 left-0 right-0'></div>
            <div className='px-2'>
                <section className='mt-5'>
                    <Link href={'/beranda'} className='flex items-center p-1 font-bold text-lg gap-1 text-white'>
                        {/* <CaretLeft size={18} weight='bold' /> */}
                        <div className='ml-1'>
                            Status Perjanjian
                        </div>
                    </Link>
                </section>
                <section className='m-2 mt-4'>
                    <Form onSubmit={onSubmit} render={({ handleSubmit }) => (
                        <div className='w-full'>
                            <div className='flex w-full h-[53px] bg-white rounded-[5px] items-center shadow-custom'>
                                <form onChange={handleSubmit} className='w-full mx-2 text-abuabu font-normal text-sm'>
                                    <Field name='profil' component="select" validate={''}
                                        className="w-full border border-abuabu rounded-md p-2 focus:outline-none focus:border-primary1">
                                        <option value="--" defaultValue="true">-- Pilih Profil --</option>
                                        <option value="---">Felly Chandra</option>
                                        <option value="----">Chandra Felly</option>
                                    </Field>
                                </form>
                            </div>
                        </div>
                    )}
                    />
                </section>
                <section className='px-2'>
                    <div className='grid grid-cols-1 gap-3 overflow-y-auto scrollbar-hide mt-5' style={{ maxHeight: 'calc(100vh - 210px)' }}>
                        <div className='w-full h-full bg-white rounded-[5px] shadow-custom p-2'>
                            <div className='text-sm flex justify-between items-center'>
                                <div className='font-bold'>No. Booking : 109007872</div>
                                <div className='p-1 sm:mr-3 fold:mr-1 text-green-800 font-semibold rounded-[10px]'>Aktif</div>
                            </div>
                            <div className='text-sm font-bold'>
                                No. Antrian   : 1
                            </div>
                            <div className='text-sm text-abuabu'>
                                Jum, 14 Okt 2024 08.10 - 12.00
                            </div>
                            <div className='text-sm text-abuabu'>
                                dr Felly Chandra dr. Sp. A
                            </div>
                            <div className="text-sm flex items-center justify-between text-abuabu">
                                <div className='font-normal text-xs'>Dokter Spesialis Kegantengan</div>
                                <div className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-[12px] text-white'>Batalkan </div>
                            </div>
                        </div>
                        
                    </div>
                </section >
            </div >
        </>
    )
}
