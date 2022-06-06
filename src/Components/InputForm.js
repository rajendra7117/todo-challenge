import React, {useState} from 'react'
import './InputForm.scss'
import { useSelector, useDispatch } from 'react-redux'
import { listItemSliceActions } from '../store/ListItemsSlice'

const InputForm = () => {

    const [enteredInput, setEnteredInput] = useState('')
    const [showCheck, setShowCheck] = useState(false)
    const darkTheme = useSelector((state) => state.theme.darkTheme)
    const dispatch = useDispatch()


    const inputHandler = e => {
        setEnteredInput(e.target.value)
        
    }
  
    const showCheckMark = e => {
      setShowCheck(true)
      console.log('s')
    }

    const hideCheckMark = e => {
      setShowCheck(false)
    }

    const submitHandler = e => {
      e.preventDefault()
      if(enteredInput.trim()!==''){
        let item = {id: `${enteredInput}${Math.floor(Math.random(10, 1000) *100)}`, task: enteredInput, completed: false, dragging: false}
    dispatch(listItemSliceActions.addItem(item))
    setEnteredInput('')
      }
    
    }
  return (
    <div className={`inputContainer ${darkTheme ? 'dark-theme' : ''}`}>
        <form >
             <button onClick={submitHandler} className={`submit-btn ${showCheck ? 'show-svg' : ''}`} onMouseEnter={showCheckMark} onMouseLeave={hideCheckMark}>
             <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
             </button>
            <input type="text" className='textInput' onChange={inputHandler} value={enteredInput} placeholder="create a new todo"/>
        </form>
    </div>
  )
}

export default InputForm