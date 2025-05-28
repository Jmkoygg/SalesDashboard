import styled from 'styled-components'

const LoginArea = styled.div`
  background-color: #666666;
`

const LoginImage = styled.div`
  background-image: url('/Login-Image.jpg');
  background-size: cover;
  height: 100vh;
  width: 50%;
`

function Login() {
  return (
    <>
      <LoginArea>Login</LoginArea>
      <LoginImage />
    </>
  )
}

export default Login
