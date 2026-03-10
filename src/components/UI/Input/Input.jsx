import cl from './Input.module.css'

const Input = (props) => {
    return (
        <input className={cl.input} {...props} type="text"/>
    )
}

export default Input;