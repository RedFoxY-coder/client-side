'use client'
import { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const Provider: NextPage<{children: React.ReactNode}> = ({children}) => {
    const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>{children}
      <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
}

export default Provider