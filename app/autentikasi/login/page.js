'use client';
import Image from 'next/image';
import React, { useState } from 'react'
import Ilustrasi from '@/public/assets/images/login.png'
import Logo from '@/components/logo';


function Login() {
    const [nik, setNIK] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('NIK:', nik);
        console.log('Password:', password);
    };

    return (
        <div className="min-h-screen flex items-center w-full bg-white justify-center">
            <div className="flex flex-col items-center">
                <Logo />
                <Image src={Ilustrasi} alt='ilustrasi' height={200} width={200} priority className="w-full h-auto" />
                <div className='px-8 w-96'>
                    <div className='text-base font-medium text-center text-gray my-3'>Masuk Untuk Menggunakan BigsGo</div>
                    <form>
                        <div className="mb-2">
                            <label htmlFor="nik" className="block text-gray-600 text-sm font-medium mb-2">NIK/No. Rekam Medis</label>
                            <input
                                type="text"
                                id="nik"
                                name="nik"
                                value={nik}
                                onChange={(e) => setNIK(e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className='text-kecil cursor-pointer text-right underline text-sky-600'>Lupa Password?</div>
                        <div className="mt-3">
                            <button
                                type="button"
                                onClick={handleLogin}
                                className="w-full bg-primary1 text-white p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Masuk
                            </button>
                        </div>
                        <div className='text-center text-kecil cursor-pointer underline text-sky-600 p-3'>Belum Punya Akun? Daftar!</div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Login
