import { ButtonHTMLAttributes, FC } from 'react'
import { BaseButton, ButtonSpinner, GoogleSignInButton, InvertedButton } from './Button.styles'

export enum BUTTON_TYPE_CLASSES  {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,

    }[buttonType]
)

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES
    loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, buttonType, loading, ...otherProps }) => {
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton {...otherProps} disabled={loading}>
            {loading ? <ButtonSpinner /> : children}
        </CustomButton>
    )
}

export default Button