import { useState } from "react"
import { Button, FormInput } from "../../components"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase"
import {SignUpContainer,H2} from './SignUpForm.styles'

const SignUpForm = () => {

    const defaultFormFields = {
        dislpayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const [formFields, setFormFields] = useState(defaultFormFields)

    const { dislpayName, email, password, confirmPassword } = formFields


    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('passwords do not match')
            return
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { dislpayName })
            resetFormFields()
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use!')
            }
            console.log('User creation encounted an error!', err.message)
        }
    }

    return (
        <SignUpContainer>
            <H2>Don't have an account?</H2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Display Name'
                    type='text'
                    required
                    name="dislpayName"
                    value={dislpayName}
                    onChange={handleChange} />

                <FormInput
                    label='Email'
                    type='email'
                    required
                    name="email"
                    value={email}
                    onChange={handleChange} />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    name="password"
                    value={password}
                    onChange={handleChange} />

                <FormInput
                    label='Confirm Password'
                    type='password'
                    required
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange} />

                <Button type="submit">
                    Sign Up
                </Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm