import { FormInputLable, Group, Input } from './FormInput.styles'

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />
            {label && (
                <FormInputLable
                    className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </FormInputLable>
            )}
        </Group>
    )
}

export default FormInput