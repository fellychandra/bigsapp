'use client';
import { MagnifyingGlass } from "@phosphor-icons/react"

export const Search = ({ children }) => {
    return (
        <>
            <div className='w-full'>
                <div className='flex w-full h-[45px] bg-white rounded-[5px] items-center shadow-custom'>
                    <div className="relative p-2 w-full text-abuabu font-normal text-sm">
                        {children}
                        <span className="absolute inset-y-0 right-0 pr-4 flex items-center top-1/2 transform -translate-y-[12px]">
                            <MagnifyingGlass size={20} className="text-abuabu" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}