import LoginPage from '@/components/loginPage/LoginPage'
import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="bg-gray-200 ">
      <LoginPage />
    </div>
  )
}

export default Page
