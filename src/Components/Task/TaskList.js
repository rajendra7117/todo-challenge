import React, {useState, useEffect} from 'react'
import './TaskList.scss'
import { useSelector, useDispatch } from 'react-redux'
import { listItemSliceActions } from '../../store/ListItemsSlice'
import ListItem from './ListItem'
import Filter from './Filter'

const TaskList = () => {
  
    let list = useSelector((state) => state.list.list)
    const [taskList, setTaskList] = useState(list)
    const darkTheme = useSelector((state) => state.theme.darkTheme)
    const filter = useSelector((state) => state.list.filter)

    useEffect(() => {
        setTaskList(list)
    }, [list])
   
    const dispatch = useDispatch()

    const clearCompleted = e => {
        dispatch(listItemSliceActions.clearCompletedTaks())
    }
    const swapItems = (targetId) => {
      
      let fromIndex = list.findIndex((item) => item.dragging===true)
      let currentItem = list[fromIndex]
     
      let targetItemIndex = list.findIndex((item) => item.id===targetId) 
      let targetItem = list[targetItemIndex]
      if(targetId!==currentItem.id){
        let newList = [...list]
        newList[fromIndex] = targetItem
        newList[targetItemIndex] = currentItem
        setTaskList([...newList])
        dispatch(listItemSliceActions.modifiedList(newList))
      }
     
      }
    let filteredList
   if(filter==='all'){
    filteredList = taskList
   }
   if(filter==='active'){
     filteredList=taskList.filter((item) => item.completed===false)
   }
   if(filter==='completed'){
    filteredList=taskList.filter((item) => item.completed===true)
   }
   const content = filteredList?.map((item, index) => <ListItem key={index} id={item.id} task={item.task} completed={item.completed} dragging={item.dragging} swapItems={swapItems}/>);
  

  
 
   
  return (
    <>
    {list.length>0 && ( <div className={`taskList ${darkTheme ? 'dark-theme' : ''}`} >
    {content.length>0 ? content : <div className='no-tasks'><h4>no tasks completed</h4></div>}
    <div className='options'>
      <span className='items-left'>{list.length} items left</span>
      <div className='filter-container'><Filter  /></div>
      <button className='completedBtn' onClick={clearCompleted}>Clear Completed</button>
    </div>
    <div className='filter-container2'><Filter  /></div>
  </div>)}
  </>
  )
}

export default TaskList