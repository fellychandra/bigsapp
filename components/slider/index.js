'use client';
import { CaretLeft, CaretRight, DotOutline } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'


const Slider = () => {
    const slides = [
        { url: 'https://plus.unsplash.com/premium_photo-1703382946661-8f9d09135270?q=80&w=1875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { url: 'https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { url: 'https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndext = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndext)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndext = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndext)
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);


    return (
        <div className=' h-[200px] w-full m-auto py-3 relative group'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
            <div className='hidden group-hover:block absolute top-[100px] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
                <CaretLeft onClick={prevSlide} size={32} />
            </div>
            <div className='hidden group-hover:block absolute top-[100px] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
                <CaretRight onClick={nextSlide} size={32} />
            </div>
            <div className='flex justify-center top-[150px] -translate-x-0 translate-y-[-90%] py-2  text-white cursor-pointer'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                        <DotOutline size={20} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider
