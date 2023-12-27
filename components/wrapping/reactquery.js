'use client';
import React, { ReactNode, Suspense } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Navigasi from '@/components/navigation';
import Loading from '@/components/loading';



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function ReactQueryWrapper({ children }) {
  return (
    <QueryClientProvider client={queryClient}>

        {/* <Header /> */}
        {children}
      <Navigasi />
    </QueryClientProvider>
  );
}

export default ReactQueryWrapper;
