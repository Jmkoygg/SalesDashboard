import styled from 'styled-components'

const RegistrationArea = styled.div`
  background-color: #666666;
`

const RegistrationImage = styled.div`
  background-image: url('/LoginImage.jpg');
  background-size: cover;
  height: 100vh;
  width: 50%;
`

function Registration() {
  return (
    <>
      <RegistrationArea>Registration</RegistrationArea>
      <RegistrationImage />
    </>
  )
}

export default Registration
