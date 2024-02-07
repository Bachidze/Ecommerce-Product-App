import './App.css'
import Desc from './components/Desc'
import Header from './components/Header'
import Product from './components/Product'

function App() {
  

  return (
    <>
    <Header/>
    <div className='xl:flex justify-center items-center xl:mt-[90px] xl:gap-[125px]'>
    <Product/>
    <Desc/>
    </div>
    </>
  )
}

export default App
