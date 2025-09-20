import { useState, useEffect } from 'react'
import './Header.scss'
import logo from '/da5-logo.jpg'


export default function Header() {

  useEffect(() => {
    const interval = setInterval(() => setContentType(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const [contentType, setContentType] = useState(new Date())

  return (
    <header>
      <img src={ logo } alt='da5-company'></img>
      <span>{ contentType.toLocaleTimeString() }</span>
    </header>
  )
}