import { SignIn } from '@clerk/nextjs'
import type { NextPage } from 'next'

const Page: NextPage = () => (
  <div className="grid h-[80dvh] place-items-center">
    <SignIn path="/sign-in" />
  </div>
)

export default Page
