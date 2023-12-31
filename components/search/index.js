'use client';
import { MagnifyingGlass } from "@phosphor-icons/react"

export const Search = ({ cari }) => {
    return (
        <>
            <div className='w-full'>
                <div className='flex w-full h-[60px] bg-white rounded-[5px] items-center shadow-custom'>
                    <div className="relative p-2 w-full text-abuabu font-normal text-sm">
                        <input
                            type="text"
                            className="w-full border border-abuabu rounded-md p-3 focus:outline-none focus:border-primary1"
                            placeholder={`Cari ${cari}`}
                        />
                        <span className="absolute inset-y-0 right-0 pr-6 flex items-center top-1/2 transform -translate-y-[17px]">
                            <MagnifyingGlass size={24} />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}