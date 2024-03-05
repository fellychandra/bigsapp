'use client';
import React, { useRef } from 'react'
import { Form, Field } from 'react-final-form'

const KritikDanSaran = () => {
  const textAreaRef = useRef(null);

  const onSubmit = (values) => {
    console.log('Form submitted with values:', values);
  };
  return (
    <>
      <div>
        <div className='bg-primary1 w-full h-[200px] -z-10 absolute top-0 left-0 right-0'></div>
        <div className='px-2'>
          <section className='mt-5'>
            <div className='flex items-center p-1 font-bold text-lg gap-1 text-white'>
              <div className='pl-1'>
                Kritik dan Saran
              </div>
            </div>
          </section>
          <section className='m-2 mt-4'>
            <div className='w-full h-full bg-white rounded-[5px] shadow-custom p-3 mt-5'>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center pb-2 border-b-2">
                  <div className="text-base">Berikan Kritik dan Saran Anda</div>
                </div>
                <Form onSubmit={onSubmit} render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-2 justify-between items-center">

                      <div className="grid grid-cols-1 gap-1 text-sm">
                        <div className="font-medium">Nama :</div>
                        <Field name="nama" component={"input"} type='text' validate={''} placeholder='Masukkan nama anda' className="w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1" />
                      </div>
                      <div className="grid grid-cols-1 gap-1 text-sm">
                        <div className="font-medium">No. HP :</div>
                        <Field name="noHp" component={"input"} type='text' validate={''} placeholder='Masukkan No. HP' className='w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1' />
                      </div>
                      <div className="grid grid-cols-1 gap-1 text-sm">
                        <div className="font-medium">Perihal :</div>
                        <Field name="layanan" component="select" validate={''} className='w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1' id="">
                          <option value="--" defaultValue="true">-- Pilih Perihal --</option>
                          <option value="---">Bagian Pendaftaran</option>
                          <option value="----">Bagian Dokter (Pelayanan Medis)</option>
                        </Field>
                      </div>
                      <div className="grid grid-cols-1 gap-1 text-sm">
                        <div className="font-medium">Ceritakan pengalaman anda :</div>
                        <Field
                          name="catatan"
                          component="textarea"
                          type="textarea"
                          validate={''}
                          className='w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1'
                        />
                      </div>
                      <div className="flex items-center pt-2">
                        <button className='bg-primary1 p-2 w-full transition text-center rounded-[5px] font-normal text-[12px] text-white'>Kirim</button>
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

export default KritikDanSaran
