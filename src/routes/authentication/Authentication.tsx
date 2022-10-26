import { SignInForm, SignUpForm } from '../../components'
import { AuthContainer } from './Authentication.styles'

const Authentication = () => {

  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  )
}

export default Authentication