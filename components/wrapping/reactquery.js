'use client';
import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Navigasi from '@/components/navigation';
import { usePathname } from 'next/navigation';



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const enableNav = ["/", "/riwayat", "/status-perjanjian", "/profile"]

function ReactQueryWrapper({ children }) {
  const pathName = usePathname();

  return (
    <QueryClientProvider client={queryClient}>

      {/* <Header /> */}
      {children}
      {enableNav.includes(pathName) && <Navigasi />}


    </QueryClientProvider>
  );
}

export default ReactQueryWrapper;
