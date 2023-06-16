import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Calender from './components/Calender'

function App() {
  // 년,월, 일 생성 및 state
  const [ year, setYear ] = useState(new Date().getFullYear());
  const [ month, setMonth ] = useState(new Date().getMonth());
  const [ date, setDate ] = useState(new Date().getDate());
  console.log(year, month, date);

  return (
    <div>
      <Header />
      {/* 년, 월, 일 state를 calender 컴포넌트에 전달 */}
      <Calender year={year} month={month} date={date} />
    </div>
  )
}

export default App
