import Link from 'next/link';
import React from 'react'
import Icon from '@/public/assets/icon/labor.png'
import Image from 'next/image';

const Card = ({ teks, icon }) => {

    return (
        <>
            <Link href={'/beranda/poliklinik/dokter'} className='w-full'>
                <div className='flex w-full h-[156px] p-2 bg-white/20 rounded-[5px] items-center justify-center cursor-pointer border-[2px]'>
                    <div className='flex flex-col items-center'>
                        <Image src={Icon} height={80} width={80} alt='icon' className=''/>
                        <div className='mt-2 text-center text-sm font-bold text-zinc-900'>{teks}</div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card
