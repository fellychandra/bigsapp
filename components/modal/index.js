'use client';
import { X } from "@phosphor-icons/react";

export const Modal = ({ visible, onClose }) => {
    const handleOnClose = () => {
        onClose()
    }

    if (!visible) return null;
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="bg-white rounded-lg p-6 w-full mx-4">
                    <div className="flex justify-between items-center pb-2 border-b-2">
                        <div className="text-base">Dokter Anak</div>
                        <X onClick={handleOnClose} size={24} weight="bold" />
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
                        <div onClick={handleOnClose} className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-[12px] text-white'>Batal</div>
                        <div className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-[12px] text-white'>Buat Janji</div>
                    </div>
                </div>
            </div>
        </>
    )
}