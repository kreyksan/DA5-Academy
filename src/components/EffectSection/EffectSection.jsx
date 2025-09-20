import { useEffect, useState, useCallback } from 'react'
import './EffectSection.scss'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import useInput from '../../hooks/useInput'

export default function EffectSection() {

    const input = useInput()

    const [modal, setModal] = useState(false)

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }, [])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])


    return (
        <>
            <h1 className='more-info'>Больше информации:</h1>

            <Button onClick={() => setModal(true)}>Показать</Button>

            <Modal open={modal}>
                <h3>Вы нашли супер код!</h3>
                <p-eff>Бонусный курс по коду:<b>39djf-ka1ck-wlwyc</b></p-eff>
                <Button onClick={() => setModal(false)}>Скрыть</Button>
            </Modal>

            <hr></hr>
            <h3>Последние посетители сайта:</h3>
            { loading && <p-eff>Loading...</p-eff> }
            { !loading && <>
                <input {...input}></input>
                <br></br>
                <ul-eff>
                    {users.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())).map(user => <li-eff key={user.id}>{user.name}</li-eff>)}
                </ul-eff> 
            </>}
        </>
    )
}