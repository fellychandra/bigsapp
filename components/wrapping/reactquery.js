'use client';
import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Navigasi from '@/components/navigation';



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
