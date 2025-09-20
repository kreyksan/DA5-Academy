import './SwitchPageSection.scss'
import Button from '../Button/Button'

export default function SwitchPage({ active, onChange }) {
    return (
        <>
            <section className='switch-btns'>
                <Button isActive={active === 'description'} onClick={() => onChange('description')}>Описание</Button>
                <Button isActive={active === 'contact'} onClick={() => onChange('contact')}>Поступление</Button>
                <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>Другое</Button>
            </section>
        </>
    )
}