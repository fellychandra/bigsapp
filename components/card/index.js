import React from 'react'

const Card = ({ style, data }) => {
    const slides = [
        { url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { url: 'https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];
    return (
        <>
            <div className={`${style} flex px-[9px] shadow-custom rounded-[5px] cursor-pointer`}>
                <div style={{ backgroundImage: `url(${slides[0].url})` }} className='rounded-full w-12 h-12 bg-center bg-cover flex justify-center'>
                </div>
                <div className='items-center ml-3'>
                    <div className='font-bold text-sm overflow-hidden'>dr. Felly Chandra Ganteng Kali </div>
                    <div className='text-abutext font-normal text-[11px] overflow-hidden'>Klinik jaya abadi </div>
                </div>
            </div>
        </>
    )
}

export default Card
