import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header' 
import TeachingSection from './components/TeachingSection/TeachingSection'
import TabsSection from './components/TabsSection/TabsSection'
import IntroSection from './components/IntroSection/IntroSection'
import SwitchPage from './components/SwitchPageSection/SwitchPageSection'
import ContactUs from './components/ContactUs/ContactUs'
import EffectSection from './components/EffectSection/EffectSection'
import Footer from './components/Footer/Footer'


export default function App() {

  const [page, setPage] = useState('description')

  return (
    <>
      <Header />
      <main>
        <SwitchPage active={page} onChange={current => setPage(current)}/>

        {page === 'description' && <>
          <IntroSection />
          <TeachingSection />
          <TabsSection />
        </> }

        {page === 'contact' && <>
          <ContactUs />
        </>}

        {page === 'effect' && <>
          <EffectSection />
        </>}

        <Footer />
      </main>
    </>
  )
}
