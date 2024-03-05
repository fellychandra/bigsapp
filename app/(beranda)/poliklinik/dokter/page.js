'use client';
import Card from '@/components/card';
import Loading from '@/components/loading';
import { Modal } from '@/components/modal';
import { Search } from '@/components/search';
import { GetDoctor, GetJadwalDoctor } from '@/service/pendukung.servcie';
import { Calendar, CaretLeft, X } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import Datetime from 'react-datetime';
import data from '@/service/dokter.json'

const DokterById = ({ params }) => {
    const [search, setSearch] = useState('')
    const [idDokter, setIdDokter] = useState();
    // const { status, data, isError, isLoading, error } = GetDoctor(params.id_poli);

    // const [data, isLoading] = GetJadwalDoctor(idDokter);
    console.log(data);

    const pathName = usePathname()
    const [open, setOpen] = useState(false);
    const [openJadwal, setOpenJadwal] = useState(false);
    const handleClose = () => setOpen(false);
    const handleCloseJadwal = () => setOpenJadwal(false);




    const filterData = () => {
        return data?.data?.filter((item) => {
            return item.nama_dokter.toLowerCase().includes((search.toLowerCase()));
        });
    }

    // if (isLoading) {
    //     return (<Loading />)
    // }
    // if (isError) {
    //     return <span>Error: {error.message}</span>
    // }

    const validDate = (current) => {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        return current.isAfter(currentDate);
    };

    return (
        <>
            <div className='bg-primary w-full h-[200px] -z-10 absolute top-0 left-0 right-0'></div>
            <div className='px-2'>
                <section className='mt-5'>
                    <Link href={'/beranda/poliklinik'} className='flex items-center p-1 font-medium text-lg gap-1 text-white'>
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
                            className="w-full border border-abuabu rounded-md p-1 focus:outline-none focus:border-primary1"
                            placeholder="Cari Dokter"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Search>
                </section>
                <section className='px-2'>
                    <div className='grid grid-cols-1 gap-3 overflow-y-auto scrollbar-hide mt-5 h-full' style={{ maxHeight: 'calc(100vh - 24vh)' }} >
                        {
                            filterData()?.map((item, index) =>
                                <div key={index} className={`bg-white h-full w-full items-center p-2 transition-all shadow-custom rounded-[5px] cursor-pointer`}>
                                    <div className="flex items-center">
                                        <Image src={`data:imagepng;base64;${item.gambar}`} alt="gambar" height={40} width={40} className='rounded-full bg-center bg-cover flex justify-center' />
                                        <div className='items-center ml-2'>
                                            <div className='font-medium text-sm'>{item.nama_dokter}</div>
                                            <div className='text-abutext font-normal text-kecil'>
                                                <span className='capitalize'>
                                                    {(item.poli).toLowerCase()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        pathName.includes('dokter') && (
                                            <div className='flex justify-between pt-2'>
                                                <div onClick={() => setOpenJadwal(true)} className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-kecil text-white'>Lihat Jadwal</div>
                                                <div onClick={() => setOpen(true)} className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-kecil text-white'>Buat Janji</div>
                                            </div>
                                        )
                                    }

                                    <Modal open={openJadwal} onClose={() => setOpenJadwal(false)}>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between items-center pb-2 border-b-2">
                                                <div className="text-base">Dokter Anak</div>
                                                <X onClick={handleCloseJadwal} size={24} weight="bold" />
                                            </div>
                                            <div className="grid grid-cols-1 gap-2 justify-between items-center">
                                                <div className="grid grid-cols-1 gap-1 text-sm">
                                                    <table>
                                                        <thead className='border'>
                                                            <tr>
                                                                <th>
                                                                    Hari
                                                                </th>
                                                                <th>
                                                                    Jam
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className='border text-center'>
                                                            <tr>
                                                                <td>
                                                                    Senin
                                                                </td>
                                                                <td>
                                                                    09.00 - 10.00
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Selasa
                                                                </td>
                                                                <td>
                                                                    09.00 - 10.00
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Rabu
                                                                </td>
                                                                <td>
                                                                    09.00 - 10.00
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="flex justify-end gap-2 items-center pt-3">
                                                <button onClick={handleCloseJadwal} className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-[12px] text-white'>Tutup</button>
                                            </div>
                                        </div>
                                    </Modal>
                                    <Modal open={open} onClose={() => setOpen(false)}>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between items-center pb-2 border-b-2">
                                                <div className="text-base">Dokter Anak</div>
                                                <X onClick={handleClose} size={24} weight="bold" />
                                            </div>
                                            <div className="grid grid-cols-1 gap-2 justify-between items-center">

                                                <div className="grid grid-cols-1 gap-1 text-sm">
                                                    <div className="font-medium">Pilih Tanggal</div>
                                                    <div className='flex items-center w-full'>
                                                        <div className='relative w-full'>
                                                            <Datetime
                                                                isValidDate={validDate}
                                                                value={''}
                                                                className='w-full appearance-none focus:outline-none shadow border rounded-md p-1 border-abuabu'
                                                                inputProps={{ style: { outline: 'none', width: '100%' }, placeholder: 'Pilih Tanggal' }}
                                                                dateFormat="DD/MM/YYYY"
                                                                timeFormat={false}
                                                            />
                                                            <span className="absolute inset-y-0 right-0 pr-2 flex items-center top-8 transform -translate-y-[17px]">
                                                                <Calendar size={26} className='text-abuabu' />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 gap-1 text-sm">
                                                    <div className="font-medium">Pilih Jam Praktek</div>
                                                    <select name="" className='w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1' id="">
                                                        <option value="" disabled selected>-- Pilih Jam Praktek Dokter --</option>
                                                        <option value="">10.00 - 12.00</option>
                                                        <option value="">12.00 - 13.00</option>
                                                        <option value="">13.00 - 14.00</option>
                                                    </select>
                                                </div>
                                                <div className="grid grid-cols-1 gap-1 text-sm">
                                                    <div className="font-medium">Pilih Profil</div>
                                                    <select name="" className='w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1' id="">
                                                        <option value="" disabled selected>-- Pilih Profil --</option>
                                                        <option value="">Felly Chandra</option>
                                                        <option value="">Chandra Winata</option>
                                                        <option value="">Chandra Felly</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex justify-end gap-2 items-center pt-3">
                                                <button onClick={handleClose} className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-[12px] text-white'>Batal</button>
                                                <button className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-[12px] text-white'>Buat Janji</button>
                                            </div>
                                        </div>
                                    </Modal>
                                </div >
                            )
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default DokterById
