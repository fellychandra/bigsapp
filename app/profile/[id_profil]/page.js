'use client';
import React, { useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

const ProfilById = ({ params }) => {
    const [search, setSearch] = useState('')
    const [idDokter, setIdDokter] = useState('');
    const [open, setOpen] = useState(false);
    const [openJadwal, setOpenJadwal] = useState(false);

    return (
        <>
            <div className='bg-primary1 w-full h-[200px] -z-10 absolute top-0 left-0 right-0'></div>
            Detail Profile ini ges


        </>
    )
}

export default ProfilById
