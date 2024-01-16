'use client';
import { Modal } from "@/components/modal";
import { ArrowRight, CaretLeft, X } from "@phosphor-icons/react";
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
            <div className='bg-primary w-full h-[200px] -z-10 absolute top-0 left-0 right-0'></div>
            <div className='px-2'>
                <section className='mt-5'>
                    <Link href={'/beranda'} className='flex items-center p-1 font-bold text-lg gap-1 text-white'>
                        {/* <CaretLeft size={18} weight='bold' /> */}
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
                                        className="w-full border border-abuabu rounded-md p-2 focus:outline-none focus:border-primary1">
                                        <option value="--" defaultValue="true">-- Pilih Profil --</option>
                                        <option value="---">Felly Chandra</option>
                                        <option value="----">Chandra Felly</option>
                                    </Field>
                                </form>
                            </div>
                        </div>
                    )}
                    />
                </section>
                <section className='px-2'>
                    <div className='grid grid-cols-1 gap-3 overflow-y-auto scrollbar-hide mt-5' style={{ maxHeight: 'calc(100vh - 210px)' }}>
                        <div className='w-full h-full bg-white rounded-[5px] shadow-custom p-2'>
                            <div className='text-sm flex justify-between items-center'>
                                <div className='font-bold'>No. Booking : 109007872</div>
                                <div className='p-1 sm:mr-3 fold:mr-1 text-green-800 font-semibold rounded-[10px]'>Aktif</div>
                            </div>
                            <div className='text-sm font-bold'>
                                No. Antrian   : 1
                            </div>
                            <div className='text-sm text-abuabu'>
                                Jum, 14 Okt 2024 08.10 - 12.00
                            </div>
                            <div className='text-sm text-abuabu'>
                                dr Felly Chandra dr. Sp. A
                            </div>
                            <div className="text-sm flex items-center justify-between text-abuabu">
                                <div className='font-normal text-sm'>Dokter Spesialis Kegantengan</div>
                                <div onClick={() => setOpenRiwayat(true)} className='bg-primary1 p-1 w-[6rem] flex justify-between items-center transition text-center rounded-[5px] font-normal text-[12px] text-white'>
                                    Lihat Detail
                                    <ArrowRight size={19} />
                                </div>
                            </div>
                            <Modal open={openRiwayat} onClose={''}>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center pb-2 border-b-2">
                                        <div className="text-base">Riwayat Medis</div>
                                        <X onClick={handleCloseRiwayat} size={24} weight="bold" />
                                    </div>
                                    <div className="grid grid-cols-1 gap-2 justify-between items-center max-h-[75vh] overflow-y-auto">
                                        <div className="grid grid-cols-1 gap-1 text-sm">
                                            Catatan Tanda Vital :
                                            <Form onSubmit={onSubmit} render={({ }) => (
                                                <div className="border p-2">
                                                    <div className="">
                                                        <div className="pb-1">Tinggi Badan :
                                                            <Field name="tb" component={"input"} type='text' validate={''} className="w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1" />
                                                        </div>
                                                        <div className="pb-1">berat Badan :
                                                            <Field name="tb" component={"input"} type='text' validate={''} className="w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1" />
                                                        </div>
                                                        <div className="pb-1">
                                                            BMI
                                                            <Field name="tb" component={"input"} type='text' validate={''} className="w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1" />
                                                        </div>
                                                        <div className="pb-1">
                                                            Tekanan Darah
                                                            <Field name="tb" component={"input"} type='text' validate={''} className="w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1" />

                                                        </div>
                                                        <div className="pb-1">
                                                            Suhu
                                                            <Field name="tb" component={"input"} type='text' validate={''} className="w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1" />

                                                        </div>
                                                        <div className="pb-1">
                                                            Pernafasan
                                                            <Field name="tb" component={"input"} type='text' validate={''} className="w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1" />

                                                        </div>
                                                        <div className="pb-1">
                                                            Denyut Nadi
                                                            <Field name="tb" component={"input"} type='text' validate={''} className="w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1" />

                                                        </div>
                                                        <div className="pb-1">
                                                            Lingkar Kepala
                                                            <Field name="tb" component={"input"} type='text' validate={''} className="w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1" />

                                                        </div>
                                                        <div className="pb-1">
                                                            Sistole
                                                            <Field name="tb" component={"input"} type='text' validate={''} className="w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1" />

                                                        </div>
                                                        <div className="pb-1">
                                                            GDS
                                                            <Field name="tb" component={"input"} type='text' validate={''} className="w-full border border-abuabu rounded-md shadow p-1 focus:outline-none focus:border-primary1" />

                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="border p-2">Subject :
                                                            <div>
                                                                nyeri sendi mantab jiwa
                                                            </div>
                                                        </div>
                                                        <div className="border p-2">Object :
                                                            <div>
                                                                nyeri sendi mantab jiwa
                                                            </div>
                                                        </div>
                                                        <div className="border p-2">Diagnosa :
                                                            <div>
                                                                nyeri sendi mantab jiwa
                                                            </div>
                                                        </div>
                                                        <div className="border p-2">Edukasi :
                                                            <div>
                                                                nyeri sendi mantab jiwa
                                                            </div>
                                                        </div>
                                                        <div className="border p-2">Obat :
                                                            <div>
                                                                nyeri sendi mantab jiwa
                                                            </div>
                                                        </div>
                                                        <div className="border p-2">Obat Manual :
                                                            <div>
                                                                nyeri sendi mantab jiwa
                                                            </div>
                                                        </div>
                                                        <div className="border p-2">ALKES :
                                                            <div>
                                                                nyeri sendi mantab jiwa
                                                            </div>
                                                        </div>
                                                        <div className="border p-2">Tindakan Dll :
                                                            <div>
                                                                nyeri sendi mantab jiwa
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )} />
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2 items-center pt-3">
                                        <button onClick={handleCloseRiwayat} className='bg-primary1 p-1 w-[5rem] transition text-center rounded-[5px] font-normal text-[12px] text-white'>Tutup</button>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </section >
            </div >
        </>
    )
}