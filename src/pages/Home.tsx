import { AvatarsList, CardComponent, Header } from '@/components'
import { Container } from '@mui/material'
import { currencyConterter } from '@/utils'
const mockListData = [
  {
    avatar: '/dnc-avatar.svg',
    name: 'Nome Sobrenome1',
    subtitle: currencyConterter(1000),
  },
  {
    avatar: '/dnc-avatar.svg',
    name: 'Nome Sobrenome2',
    subtitle: currencyConterter(1300),
  },
  {
    avatar: '/dnc-avatar.svg',
    name: 'Nome Sobrenome3',
    subtitle: currencyConterter(1040),
  },
  {
    avatar: '/dnc-avatar.svg',
    name: 'Nome Sobrenome4',
    subtitle: currencyConterter(1001),
  },
]
function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>Card</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
