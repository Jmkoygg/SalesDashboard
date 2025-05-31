import { AvatarsList, CardComponent, Header, CustomTable } from '@/components'
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

const mockTableData = {
  headers: ['Nome', 'E-mail', 'Ações'],
  rows: [
    [<span>Nome 1</span>, <span>nome1@email.com</span>, <button>Ação</button>],
    [<span>Nome 2</span>, <span>nome2@email.com</span>, <button>Ação</button>],
    [<span>Nome 3</span>, <span>nome3@email.com</span>, <button>Ação</button>],
  ],
}
function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>Card</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
