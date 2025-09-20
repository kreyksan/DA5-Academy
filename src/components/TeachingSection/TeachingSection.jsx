import './TeachingSection.scss'
import TabInfo from '../Carts/Carts'
import { cartInfo } from '../../data'


export default function TeachingSection() {
    return (
        <section className='all-tech'>
          <h1 className='techSec'>Чему ты научишься на нашем <strong className='fromH1'>FRONT-BRO</strong> курсе:</h1>
          <ul>
            { cartInfo.map(cart => <TabInfo key={cart.title} {...cart}/>) }
          </ul>
        </section>
    )
}