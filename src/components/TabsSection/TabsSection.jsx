import { useState } from 'react'
import './TabsSection.scss'
import Tabs from '../Tabs/Tabs'
import Button from '../Button/Button'
import { differences } from '../../data.js'

export default function TabsSection() {

    const [contentType, setContentType] = useState('way')

    function buttonClicked(type) {
        setContentType(type)
    }

    return (
        <section>
          <h2 className='tabsSec'>Почему именно мы?</h2>
          <Button isActive={contentType === 'way'} onClick={() => buttonClicked('way')}>Подход</Button>
          <Button isActive={contentType === 'easy'} onClick={() => buttonClicked('easy')}>Доступность</Button>
          <Button isActive={contentType === 'masters'} onClick={() => buttonClicked('masters')}>Специалисты</Button>
          { contentType && <Tabs>{differences[contentType]}</Tabs> }
        </section>
    )
}