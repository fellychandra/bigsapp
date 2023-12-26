import Image from 'next/image'
import React from 'react'
import logo from "@/public/assets/logo/emesysGo.png"


const Logo = () => {
    return (
        <>
            <div className='flex justify-center pt-10'>
                <Image src={logo} height={180} width={180} alt='logo' />
            </div>
        </>
    )
}

export default Logo
