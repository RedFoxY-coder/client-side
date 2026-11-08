import Header from '@/components/header/Header'
import MainContent from '@/components/mainContent/MainContent'
import { NextPage } from 'next'
import Sidebar from '@/components/sidebar/Sidebar'
interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <MainContent />
    </div>
  )
}

export default Page
