'use client';
import { Modal } from "@/components/modal";
import { ArrowRight, CaretRight, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { Field, Form } from "react-final-form";

export default function Profile() {
  const [openRiwayat, setOpenRiwayat] = useState(false);
  const handleCloseRiwayat = () => setOpenRiwayat(false);

  const onSubmit = (values) => {
    console.log('Form submitted with values:', values);
  };
  return (
    <>
      <div className='bg-primary1 w-full h-[200px] -z-10 absolute top-0 left-0 right-0'></div>
      <div className='px-2'>
        <section className='mt-5'>
          <Link href={'/beranda'} className='flex items-center p-1 font-bold text-lg gap-1 text-white'>
            <div className='ml-1'>
              Profile Pasien
            </div>
          </Link>
        </section>
        <section className='m-2 mt-4'>
          <div className='w-full h-full bg-white rounded-[5px] items-center shadow-custom'>
            <div className="w-full p-2">
              <div className="">
                <p className="text-kecil text-abuabu">Tekan tombol berikut untuk menambahkan profil : </p>
                <Link href={'/tambah-profil'}>
                  <div className="p-1 text-sm text-center bg-primary1 w-full rounded-lg text-white">
                    Tambah / Tautkan Profil Pasien
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='px-2'>
          <div className='grid grid-cols-1 gap-2 overflow-y-auto scrollbar-hide mt-5' style={{ maxHeight: 'calc(100vh - 210px)' }}>
            <Link href={`/profile/id`}>
              <div className='w-full h-full bg-white rounded-[5px] shadow-custom p-2'>
                <div className='text-sm flex justify-between items-center'>
                  <div className="">
                    <div className='font-medium'>Nama Pasien</div>
                    <div className='text-kecil font-normal'>1384566926554*****</div>
                  </div>
                  <div className='p-1'>
                    <div className="rounded-full p-1 bg-abuabu/20 cursor-pointer">
                      <CaretRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section >
      </div >
    </>
  )
}