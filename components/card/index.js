'use client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { Modal } from '@/components/modal/index';
import { Calendar, X } from '@phosphor-icons/react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

const Card = ({ data }) => {
    const slides = [
        { url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { url: 'https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];
    const pathName = usePathname();
    const [open, setOpen] = useState(false);
    const [openJadwal, setOpenJadwal] = useState(false);
    const handleClose = () => setOpen(false);
    const handleCloseJadwal = () => setOpenJadwal(false);

    const validDate = (current) => {
        // Mendapatkan tanggal hari ini
        const currentDate = new Date();

        // Mengatur waktu hari ini ke awal hari
        currentDate.setHours(0, 0, 0, 0);

        // Memeriksa apakah tanggal yang dipilih lebih besar dari tanggal hari ini
        return current.isAfter(currentDate);
    };


    return (
        <>
            <div className={`bg-white h-full w-full items-center p-3 transition-all shadow-custom rounded-[5px] cursor-pointer`}>
                <div className="flex items-center">
                    <div style={{ backgroundImage: `url(${slides[0].url})` }} className='rounded-full w-14 h-14 bg-center bg-cover flex justify-center'>
                    </div>
                    <div className='items-center ml-2'>
                        <div className='font-bold text-base'>dr. Felly Chandra Ganteng</div>
                        <div className='text-abutext font-normal text-sm'>Klinik jaya abadi </div>
                    </div>
                </div>
                {
                    pathName.includes('dokter') && (
                        <div className='flex justify-between pt-2'>
                            <div onClick={() => setOpenJadwal(true)} className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-[12px] text-white'>Lihat Jadwal</div>
                            <div onClick={() => setOpen(true)} className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-[12px] text-white'>Buat Janji</div>
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
        </>
    )
}

export default Card
