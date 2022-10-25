import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FormInput } from '../../components'
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/Button'
import { emailSignInStart, googleSignInStart } from '../../store/users/user.action'
import { ButtonsContainer, SignUpContainer } from '../sign-up-form/SignUpForm.styles'

const SignInForm = () => {
    const dispatch = useDispatch()
    const defaultFormFields = {
        email: '',
        password: '',
    }

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            dispatch(emailSignInStart(email, password))
            resetFormFields()
        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email')
                    break
                case 'auth/user-not-found':
                    alert('No user associated with this email')
                    break
                default:
                    console.log(err);
            }
        }
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
    }

    return (
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with yor email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='text'
                    required
                    name="email"
                    value={email}
                    onChange={handleChange}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    name="password"
                    value={password}
                    onChange={handleChange}
                />

                <ButtonsContainer>
                    <Button type='submit'>
                        Sign In
                    </Button>
                    <Button
                        type='button'
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    )
}

export default SignInForm