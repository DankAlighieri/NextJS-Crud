interface BotaoProps {
    cor?: string
    className?: string
    children?: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray'
    const className = props.className
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md 
            ${className}
        `}>
            {props.children}
        </button>
    )
}