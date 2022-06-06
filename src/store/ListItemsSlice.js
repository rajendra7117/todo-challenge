import { createSlice, current } from "@reduxjs/toolkit";

const listItemsSlice = createSlice({
    name: 'listItems',
    initialState: {list: localStorage.getItem('todo-list') ? JSON.parse(localStorage.getItem('todo-list')) : [],
                filter: localStorage.getItem('todo-list-filter') ? JSON.parse(localStorage.getItem('todo-list-filter')) : 'all'},
               
    reducers:{
        addItem(state, action){
            state.list = [...state.list, action.payload]
            localStorage.setItem('todo-list', JSON.stringify(state.list))
        },
        taskCompleted(state, action){
            let taskId = action.payload
          
            let taskIndex = state.list.findIndex((item) => item.id===taskId)
            
           let task = state.list[taskIndex]
            task.completed = true 
            state.list[taskIndex] = task
            localStorage.setItem('todo-list', JSON.stringify(state.list))

        },
        removeTask(state,action){
            let taskId = action.payload
            state.list = state.list.filter((task) => task.id!==taskId)
            localStorage.setItem('todo-list', JSON.stringify(state.list))
        },
        setFilter(state, action){
            state.filter = action.payload
            localStorage.setItem('todo-list-filter', JSON.stringify(state.filter))
        },
        clearCompletedTaks(state){
            state.list = state.list.filter((task) => !task.completed)
            localStorage.setItem('todo-list', JSON.stringify(state.list))
        },
        dragStart(state, action){
            let taskID = action.payload
            let taskIndex = state.list.findIndex((item) => item.id===taskID)
            
            let task = state.list[taskIndex]
             task.dragging = true 
             state.list[taskIndex] = task
             localStorage.setItem('todo-list', JSON.stringify(state.list))
        },
        dragEnd(state, action){
            let taskID = action.payload
            let taskIndex = state.list.findIndex((item) => item.id===taskID)
            
            let task = state.list[taskIndex]
             task.dragging = false
             state.list[taskIndex] = task
             localStorage.setItem('todo-list', JSON.stringify(state.list))
        },
      
        modifiedList(state, action){
            state.list = action.payload
            localStorage.setItem('todo-list', JSON.stringify(state.list))
            
        }
    }
})

export const listItemSliceActions = listItemsSlice.actions

export default listItemsSlice