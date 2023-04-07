import { useState } from 'react'
import Header from './components/Header'
import TravelList from './components/TravelList'
import './App.css'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const journals = data.map(item => {
    return (
      <TravelList 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className='wrapper'>
      <Header />
      <section className='travel-journal-list'>
          {journals}
      </section>
    </div>
  )
}

export default App
