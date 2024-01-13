'use client';
import React, { useRef } from 'react'

const KritikDanSaran = () => {
  const textAreaRef = useRef(null);

  const handleTextAreaChange = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = 'auto';
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };
  return (
    <>
      <div>
        <div className='bg-primary w-full h-[200px] -z-10 absolute top-0 left-0 right-0'></div>
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
                <div className="grid grid-cols-1 gap-2 justify-between items-center">
                  <div className="grid grid-cols-1 gap-1 text-sm">
                    <div className="font-medium">Nama :</div>
                    <input type="text" placeholder='Masukkan nama anda'
                      className='w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1' />
                  </div>
                  <div className="grid grid-cols-1 gap-1 text-sm">
                    <div className="font-medium">No. HP :</div>
                    <input type="text"
                      placeholder='Masukkan No. HP' className='w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1' />
                  </div>
                  <div className="grid grid-cols-1 gap-1 text-sm">
                    <div className="font-medium">Perihal :</div>
                    <select name="" className='w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1' id="">
                      <option value="" disabled selected>-- Pilih Perihal --</option>
                      <option value="">Bagian Pendaftaran</option>
                      <option value="">Bagian Dokter (Pelayanan Medis)</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 gap-1 text-sm">
                    <div className="font-medium">Ceritakan pengalaman anda :</div>
                    <textarea
                      ref={textAreaRef}
                      className='w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1'
                      onChange={handleTextAreaChange}
                      id=""
                      cols="30"
                      rows="10"
                      style={{ overflow: 'hidden' }}></textarea>
                  </div>
                  <div className="flex items-center pt-2">
                    <button className='bg-primary1 p-1 w-full transition text-center rounded-[5px] font-normal text-[12px] text-white'>Hitung</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default KritikDanSaran
