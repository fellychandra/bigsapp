import React from 'react'

const Menu = ({ style,  teks }) => {
    return (
        <>
            <div className={`${style} flex shadow-custom rounded-[5px] overflow-hidden cursor-pointer`}>
                <div className='w-[210px] h-[120px] translate-x-16 -translate-y-12 rotate-45 bg-cover bg-black flex justify-center'>
                    <span className='text-white font-bold'>{teks}</span>
                </div>
            </div>
        </>
    )
}

export default Menu
