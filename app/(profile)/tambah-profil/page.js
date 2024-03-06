'use client';
import { CaretLeft } from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useRef } from 'react'
import { Field, Form } from 'react-final-form';

function TambahProfile() {
  const textAreaRef = useRef(null);

  const onSubmit = (values) => {
    console.log('Form submitted with values:', values);
  };
  return (
    <>
      <div className='bg-primary1 w-full h-[200px] -z-10 absolute top-0 left-0 right-0'></div>
      <div>
        <div className='bg-primary1 w-full h-[200px] -z-10 absolute top-0 left-0 right-0'></div>
        <div className='px-2'>
          <section className='mt-5'>
            <Link href={'/profile'} className='flex items-center p-1 font-bold text-lg gap-1 text-white'>
              <CaretLeft size={18} weight='bold' />
              <div className=''>
                Tautkan Profil Pasien
              </div>
            </Link>
          </section>
          <section className='m-2 mt-4'>
            <div className='w-full h-full bg-white rounded-[5px] shadow-custom p-3 mt-5'>
              <div className="flex flex-col gap-2">
                <Form onSubmit={onSubmit} render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-2 justify-between items-center">

                      <div className="grid grid-cols-1 gap-1 text-sm">
                        <div className="font-medium">Pemilik Profil :</div>
                        <Field name="dataorang" component="select" validate={''} className='w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1' id="">
                          <option value="--" defaultValue="true">-- Pilih --</option>
                          <option value="---">Diri Sendiri</option>
                          <option value="----">Orang lain</option>
                        </Field>
                      </div>
                      <div className="grid grid-cols-1 gap-1 text-sm">
                        <div className="font-medium">No. HP :</div>
                        <Field name="jenisvalidasi" component="select" validate={''} className='w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1' id="">
                          <option value="--" defaultValue="true">-- Pilih --</option>
                          <option value="---">NIK KTP</option>
                          <option value="----">No. Rekam Medis</option>
                        </Field>
                      </div>
                      <div className="grid grid-cols-1 gap-1 text-sm">
                        <div className="font-medium">NIK/No. Rekam Medis :</div>
                        <Field name="nik" component={"input"} type='text' validate={''} placeholder='Masukkan NIK / No. Rekam Medis' className='w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1' />
                      </div>
                      <div className="flex items-center pt-2">
                        <button className='bg-primary1 p-2 w-full transition text-center rounded-[5px] font-normal text-[12px] text-white'>Tautkan</button>
                      </div>
                    </div>
                  </form>
                )}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default TambahProfile
