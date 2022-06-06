import React from 'react'
import './Main.scss'
import InputForm from './InputForm'
import TaskList from './Task/TaskList'

const Main = () => {
  return (
    <div className='main'>
        <InputForm />
        <TaskList />
    </div>
  )
}

export default Main