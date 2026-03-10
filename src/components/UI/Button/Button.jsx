import cl from './Button.module.css'

const Button = ({children, ...props}) => {
    const buttonClasses = [cl.button];
    
    buttonClasses.push(cl[children.toLowerCase()])

    return (
        <button 
            {...props}
            className={buttonClasses.join(' ')}
        >
        {children}
        </button>
    )
}

export default Button;