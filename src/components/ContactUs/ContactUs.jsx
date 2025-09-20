import './ContactUs.scss'
import Button from '../Button/Button'
import { useState } from 'react'


export default function ContactUs() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [hasErrorName, setHasErrorName] = useState(false)
    const [hasErrorEmail, setHasErrorEmail] = useState(false)

    return (
        <>
            <section className='contactSec'>
                <h1>Вы на верном пути!</h1>
                <form>
                    <label htmlFor='name'>Ваше имя</label>
                    <input 
                        style={{
                            border: hasErrorName ? '2px solid rgba(184, 5, 5, 1)' : null
                        }} 

                        value={name} 

                        onChange={(event) => {
                            setName(event.target.value)
                            setHasErrorName(event.target.value.trim().length === 0)
                        }} 

                        placeholder='Алексей' 
                        id='name' 
                        type='text' 
                        >
                    </input>

                    <label htmlFor='email'>Электронная почта</label>
                    <input 
                        style={{
                            border: hasErrorEmail ? '2px solid rgba(184, 5, 5, 1)' : null
                        }} 

                        value={email} 

                        onChange={(event) => {
                            setEmail(event.target.value)
                            setHasErrorEmail(event.target.value.trim().length === 0)
                        }} 

                        placeholder='example@gmail.com' 
                        id='email' 
                        type='email' 
                        >
                    </input>

                    <label id='comment' type='text'>Комментарий (необязательно)</label>
                    <input value={comment} onChange={event => setComment(event.target.value)} placeholder='Когда начало?' id='comment' type='text'></input>
                    
                    <Button disabled={name.length === 0 || email.length === 0} className='send-btn'>Отправить</Button>
                </form>
                <p><strong>Примечание:</strong>При открытии новой группы здесь появится форма! Внимательно прочитайте и заполните ее. Окончание набора в группу ожидается примерно в ноябре 2025 года.</p>
            </section>
        </>
    )
}