'use client';
import { CaretLeft, X } from '@phosphor-icons/react'
import Link from 'next/link';
import React from 'react'
import { Field, Form } from 'react-final-form';

const DetailRiwayat = ({ params }) => {
  console.log(params);
  return (
    <>
      <div className='bg-primary1 w-full h-[200px] -z-10 absolute top-0 left-0 right-0'></div>
      <div className='px-2'>
        <section className='mt-5'>
          <Link href={'/beranda'} className='flex items-center p-1 font-bold text-lg gap-1 text-white'>
            <CaretLeft size={18} weight='bold' />
            <div className=''>
              Riwayat Pelayanan
            </div>
          </Link>
        </section>
        <section className='m-2 mt-4'>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-1 gap-1 text-sm">
              <div className="border p-2 grid gap-2 bg-white rounded">
                <div className="border-b">
                  Keluhan :
                </div>
                <div className='text-kecil'>
                  nyeri sendi mantab jiwa
                </div>
              </div>
              <div className="border p-2 grid gap-2 bg-white rounded">
                <div className="border-b">
                  Observasi :
                </div>
                <div className="grid grid-cols-2 gap-1 text-kecil">
                  <div className="pb-1">Tinggi Badan :
                    <div>
                      167 cm
                    </div>
                  </div>
                  <div className="pb-1">berat Badan :
                    <div>
                      56 kg
                    </div>
                  </div>
                  <div className="pb-1">
                    BMI
                    <div>
                      24.5 || Normal
                    </div>
                  </div>
                  <div className="pb-1">
                    Tekanan Darah
                    <div>
                      110/15
                    </div>
                  </div>
                  <div className="pb-1">
                    Suhu
                    <div>
                      39%
                    </div>
                  </div>
                  <div className="pb-1">
                    Pernafasan
                    <div>
                      normal
                    </div>
                  </div>
                  <div className="pb-1">
                    Denyut Nadi
                    <div>
                      60/detik
                    </div>
                  </div>
                  <div className="pb-1">
                    Lingkar Kepala
                    <div>
                      Normal
                    </div>
                  </div>
                  <div className="pb-1">
                    Sistole
                    <div>
                      Normal
                    </div>
                  </div>
                  <div className="pb-1">
                    GDS
                    <div>
                      Normal
                    </div>
                  </div>
                </div>
              </div>
              <div className="border p-2 grid gap-2 bg-white rounded">
                <div className="border-b">Diagnosa :</div>
                <div className="grid grid-cols-2 gap-1 text-kecil">
                  <div className="pb-1">Premier:
                    <div>
                      sakit demam berdarah
                    </div>
                  </div>
                  <div className="pb-1">Sekunder :
                    <div>
                      asdfasdfadf
                    </div>
                    <div>
                      asdfasdfadf
                    </div>
                    <div>
                      asdfasdfadf
                    </div>
                  </div>
                </div>
              </div>
              <div className="border p-2 grid gap-2 bg-white rounded">
                <div className="border-b">
                  Resep Obat :
                </div>
                <div className='text-kecil'>
                  nyeri sendi mantab jiwa
                </div>
              </div>
              <div className="border p-2 grid gap-2 bg-white rounded">
                <div className="border-b">
                  Tindakan :
                </div>
                <div className='text-kecil'>
                  nyeri sendi mantab jiwa
                </div>
              </div>
            </div>
          </div>
        </section>
      </div >



    </>
  )
}

export default DetailRiwayat
