'use client';
import { Modal } from "@/components/modal";
import { ArrowRight, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { Field, Form } from "react-final-form";

export default function Riwayat() {
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
                            Riwayat Appointment
                        </div>
                    </Link>
                </section>
                <section className='m-2 mt-4'>
                    <Form onSubmit={onSubmit} render={({ handleSubmit }) => (
                        <div className='w-full'>
                            <div className='flex w-full h-[53px] bg-white rounded-[5px] items-center shadow-custom'>
                                <form onChange={handleSubmit} className='w-full mx-2 text-abuabu font-normal text-sm'>
                                    <Field name='profil' component="select" validate={''}
                                        className="w-full border border-abuabu rounded-md p-2 focus:outline-none focus:border-primary1 bg-white">
                                        <option value="--" defaultValue="true">-- Pilih Profil --</option>
                                        <option value="---">Felly Chandra</option>
                                        <option value="----">Chandra Felly</option>
                                    </Field>
                                </form>
                            </div>
                        </div>
                    )} />
                </section>
                <section className='px-2'>
                    <div className='grid grid-cols-1 gap-3 overflow-y-auto scrollbar-hide mt-5' style={{ maxHeight: 'calc(100vh - 210px)' }}>
                        <div className='w-full h-full bg-white rounded-[5px] shadow-custom p-2'>
                            <div className='text-sm flex justify-between items-center'>
                                <div className='font-medium'>No. Booking : 109007872</div>
                                <div className='p-1 sm:mr-3 fold:mr-1 text-green-800 font-semibold rounded-[10px]'>Selesai</div>
                            </div>
                            <div className='text-sm font-medium'>
                                No. Antrian   : 1
                            </div>
                            <div className='text-sedang text-abuabu'>
                                Jum, 14 Okt 2024 08.10 - 12.00
                            </div>
                            <div className='text-sedang text-abuabu'>
                                dr Felly Chandra dr. Sp. A
                            </div>
                            <div className="flex items-center justify-between text-abuabu">
                                <div className='font-normal text-xs'>Dokter Spesialis Kegantengan</div>
                                <Link href={`/riwayat/id`} className='bg-primary1 p-1 w-[6rem] flex justify-between items-center transition text-center rounded-[5px] font-normal text-[12px] text-white'>
                                    Lihat Detail
                                    <ArrowRight size={19} />
                                </Link>
                            </div>
                            {/* <Modal open={openRiwayat} onClose={''}>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center pb-2 border-b-2">
                                        <div className="text-base">Riwayat Medis</div>
                                        <X onClick={handleCloseRiwayat} size={24} weight="bold" />
                                    </div>
                                    <div className="grid grid-cols-1 gap-2 justify-between items-center max-h-[75vh] overflow-y-auto">
                                        <div className="grid grid-cols-1 gap-1 text-sm">
                                            <div className="border p-2">
                                                <div className="border p-2 grid gap-2">
                                                    <div className="border-b">
                                                        Keluhan :
                                                    </div>
                                                    <div>
                                                        nyeri sendi mantab jiwa
                                                    </div>
                                                </div>
                                                <div className="border p-2 grid gap-2">
                                                    <div className="border-b">
                                                        Observasi :
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-1">
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
                                                <div className="border p-2 grid gap-2">
                                                    <div className="border-b">Diagnosa :</div>
                                                    <div className="grid grid-cols-2 gap-1">
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
                                                <div className="border p-2 grid gap-2"><div className="border-b">
                                                    Resep Obat :
                                                </div>
                                                    <div>
                                                        nyeri sendi mantab jiwa
                                                    </div>
                                                </div>
                                                <div className="border p-2 grid gap-2">
                                                    <div className="border-b">
                                                        Tindakan :
                                                    </div>
                                                    <div>
                                                        nyeri sendi mantab jiwa
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2 items-center pt-3">
                                        <button onClick={handleCloseRiwayat} className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-[12px] text-white'>Tutup</button>
                                    </div>
                                </div>
                            </Modal> */}
                        </div>
                    </div>
                </section >
            </div >
        </>
    )
}