import {useState} from 'react'
import {
  MainContainer,
  SubContainer,
  Head,
  Para,
  Input,
  Error,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangeInput = event => setPassword(event.target.value)
  return (
    <MainContainer>
      <SubContainer>
        <Head>Password Validator</Head>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" onChange={onChangeInput} />
        {password.length >= 8 ? (
          ''
        ) : (
          <Error>Your password must be at least 8 characters</Error>
        )}
      </SubContainer>
    </MainContainer>
  )
}
export default PasswordValidator
