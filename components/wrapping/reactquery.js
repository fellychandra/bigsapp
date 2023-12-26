'use client';
import React, { ReactNode, Suspense } from 'react';
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
      {/* <Suspense fallback={<Loading />}> */}
      {/* <Header /> */}
      {children}
      {/* </Suspense> */}
      <Navigasi />
    </QueryClientProvider>
  );
}

export default ReactQueryWrapper;
