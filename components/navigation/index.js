import { BookOpenText, ClipboardText, House, User } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navigasi = () => {
    const pathName = usePathname();
    const isActive = (href) => {
        return pathName.includes(href) ? 'text-primary1 fill-inherit' : 'text-abuabu';
    };

    return (
        <div className='custom-shadow'>
            <nav className="fixed bottom-0 left-0 right-0 bg-white h-14 pt-2">
                <div className="max-w-7xl  mx-auto px-4">
                    <ul className="flex justify-around sm:">
                        <li className='text-center'>
                            <Link href="/beranda">
                                <div className={`text-xs ${isActive('/beranda')} flex flex-col items-center justify-center`}>
                                    <House size={27} />
                                    <h4>Beranda</h4>
                                </div>
                            </Link>
                        </li>
                        <li className='text-center justify-center'>
                            <Link href="/status-perjanjian">
                                <div className={`text-xs ${isActive('/status-perjanjian')} flex flex-col items-center justify-center`}>
                                    <ClipboardText size={27} />
                                    <h4>Perjanjian</h4>
                                </div>
                            </Link>
                        </li>
                        <li className='text-center justify-center'>
                            <Link href="/riwayat">
                                <div className={`text-xs ${isActive('/riwayat')} flex flex-col items-center justify-center`}>
                                    <BookOpenText size={27} />
                                    <h4>Riwayat</h4>
                                </div>
                            </Link>
                        </li>
                        <li className='text-center justify-center'>
                            <Link href="/profile">
                                <div className={`text-xs ${isActive('/profile')} flex flex-col items-center justify-center`}>
                                    <User size={27} />
                                    <h4>Profil</h4>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navigasi;
