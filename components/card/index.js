'use client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { Modal } from '@/components/modal/index';
import { X } from '@phosphor-icons/react';

const Card = ({ style, data }) => {
    const slides = [
        { url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { url: 'https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];
    const pathName = usePathname();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className={`${style} grid grid-cols-1 p-[9px] transition-all shadow-custom rounded-[5px] cursor-pointer`}>
                <div className="flex items-center">
                    <div style={{ backgroundImage: `url(${slides[0].url})` }} className='rounded-full w-14 h-14 bg-center bg-cover flex justify-center'>
                    </div>
                    <div className='items-center ml-2'>
                        <div className='font-bold text-base'>dr. Felly Chandra Ganteng Kali </div>
                        <div className='text-abutext font-normal text-sm'>Klinik jaya abadi </div>
                    </div>
                </div>
                {
                    pathName.includes('dokter') && (
                        <div className='flex justify-between pt-2'>
                            <div className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-[12px] text-white'>Lihat Jadwal</div>
                            <div onClick={() => setOpen(true)} className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-[12px] text-white'>Buat Janji</div>
                        </div>
                    )
                }

                <Modal open={open} onClose={() => setOpen(false)}>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center pb-2 border-b-2">
                            <div className="text-base">Dokter Anak</div>
                            <X onClick={handleClose} size={24} weight="bold" />
                        </div>
                        <div className="grid grid-cols-1 gap-2 justify-between items-center pt-2">

                            <div className="grid grid-cols-1 gap-1 text-sm">
                                <div className="font-medium">Pilih Tanggal</div>
                                <input
                                    type="text"
                                    className="w-full border border-abuabu rounded-md  p-1 focus:outline-none focus:border-primary1"
                                    placeholder="Cari Poliklinik"
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-1 text-sm">
                                <div className="font-medium">Pilih Jam Praktek</div>
                                <input
                                    type="text"
                                    className="w-full border border-abuabu rounded-md  p-1 focus:outline-none focus:border-primary1"
                                    placeholder="Cari Poliklinik"
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-1 text-sm">
                                <div className="font-medium">Pilih Profil</div>
                                <input
                                    type="text"
                                    className="w-full border border-abuabu rounded-md  p-1 focus:outline-none focus:border-primary1"
                                    placeholder="Cari Poliklinik"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 items-center pt-3">
                            <div onClick={handleClose} className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-[12px] text-white'>Batal</div>
                            <div className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-[12px] text-white'>Buat Janji</div>
                        </div>
                    </div>
                </Modal>


            </div >
        </>
    )
}

export default Card
