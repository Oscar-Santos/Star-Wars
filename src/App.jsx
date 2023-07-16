
import { useState } from 'react'
import './App.css'
import DisplayData from './components/DisplayData'
import Form from './components/Form'

function App() {
 
const [data, setData] = useState([]);

function getData(input) {
  // fetch data from api
  alert('getData ' + input)
}

  return (
    <div>
      <Form getData={getData}/>
      <DisplayData data={data}/>
    </div>
  )
}

export default App
