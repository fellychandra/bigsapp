import React from 'react'

const Card = ({ style, data }) => {
    const slides = [
        { url: 'https://plus.unsplash.com/premium_photo-1703382946661-8f9d09135270?q=80&w=1875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { url: 'https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
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
