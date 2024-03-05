'use client';
import Logo from '@/components/logo';
import Image from 'next/image';
import React, { useState } from 'react'
import Ilustrasi from '@/public/assets/images/forgot-password.svg'
import Link from 'next/link';

function ForgotPassword() {
    const [nik, setNIK] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('NIK:', nik);
        console.log('email:', email);
        console.log('Repeat Password:', repeatPassword);
        console.log('Password:', password);
    };

    return (
        <div className="min-h-screen py-14 flex items-center w-full bg-white justify-center">
            <div className="flex flex-col items-center">
                <Logo />
                <Image src={Ilustrasi} alt='ilustrasi' height={200} width={200} priority className="w-full h-auto mt-3 px-6" />
                <div className='px-8 w-96'>
                    <div className='text-base font-medium text-center text-gray my-3'>Lupa Password</div>
                    <form>
                        <div className="mb-2">
                            <label htmlFor="nik" className="block text-gray-600 text-sm font-medium mb-2">NIK</label>
                            <input
                                type="text"
                                id="nik"
                                name="nik"
                                value={nik}
                                onChange={(e) => setNIK(e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        
                        <div className="mt-3">
                            <button
                                type="button"
                                onClick={handleLogin}
                                className="w-full bg-primary1 text-white p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Kirim Tautan
                            </button>
                        </div>
                        <div className='text-center text-kecil cursor-pointer underline text-sky-600 p-3'>
                            <Link href={'/login'}>Sudah Punya Akun? Masuk!</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword
