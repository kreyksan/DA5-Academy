import './Button.scss'

export default function Button({ children, isActive, ...props }) {
    return <button {...props} className={isActive ? 'just-btn active' : 'just-btn'}>{children}</button>
}