'use client';
import { useEffect } from "react";
import Beranda from './beranda/page';

export default function Home() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);
  return (
    <>
      <Beranda />
    </>
  )
}
