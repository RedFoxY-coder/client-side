'use client'
import { CardService } from '@/services/CardService'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'

const Page: FC = ({}) => {
  const router = useRouter()

  useEffect(() => {
    router.push('/welcome')
  }, [router])

  return <div></div>
}

export default Page
