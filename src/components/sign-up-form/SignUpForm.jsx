import { useState } from "react"
import { FormInput , Button} from "../../components"
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase"
import './SignUpForm.styles.scss'

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
            const response = await createAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use!')
            }
            console.log('User creation encounted an error!', err.message)
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
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
        </div>
    )
}

export default SignUpForm