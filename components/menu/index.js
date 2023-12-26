import Link from 'next/link';
import React from 'react';

const Menu = ({ style, teks, link }) => {
    return (
        <Link href={`${link}`} className={`${style} flex shadow-custom rounded-[5px] overflow-hidden cursor-pointer relative`}>
            <div className='w-[210px] h-[120px] translate-x-16 -translate-y-12 rotate-45 bg-cover bg-white/20 flex justify-center'></div>
            <div className='absolute bottom-0 text-white font-bold w-full p-2'>
                {teks}
            </div>
        </Link>
    );
};

export default Menu;