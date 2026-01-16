import LoginClient from './LoginClient'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Login | BabyBloom',
  description:
    'Log in to your BabyBloom account to continue your order, manage your details, or access admin tools.',
}

export default function LoginPage({ searchParams }) {
  const callback = searchParams?.callback || ''
  const email = searchParams?.email || ''

  return <LoginClient initialCallback={callback} initialEmail={email} />
}