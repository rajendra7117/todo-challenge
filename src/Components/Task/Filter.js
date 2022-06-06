import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listItemSliceActions } from '../../store/ListItemsSlice'
const Filter = () => {
    const selectedFilter = useSelector((state) => state.list.filter)
    
    const dispatch = useDispatch()
    const [filter, setFilter] = useState(selectedFilter)
    const toggleFilter = (identifier, e) => {
        dispatch(listItemSliceActions.setFilter(identifier))
      }
  return (
    <div className='filterContainer'>
          <button onClick={toggleFilter.bind(this, 'all')} className={`${selectedFilter==='all' ? 'active' : ''}`}>All</button>
          <button onClick={toggleFilter.bind(this, 'active')} className={`${selectedFilter==='active' ? 'active' : ''}`}>Active</button>
          <button onClick={toggleFilter.bind(this, 'completed')} className={`${selectedFilter==='completed' ? 'active' : ''}`}>Completed</button>
    </div>
  )
}

export default Filter