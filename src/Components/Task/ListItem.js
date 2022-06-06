import React, {useState} from "react";
import "./ListItem.scss";
import { listItemSliceActions } from "../../store/ListItemsSlice";
import { useDispatch, useSelector } from "react-redux";
const ListItem = ({ task, completed, id, dragging, swapItems }) => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme)
  const [onTop, setOnTop] = useState(false)

  const markAsCompleted = (e) => {
    dispatch(listItemSliceActions.taskCompleted(id));
  };
  const removeTask = (e) => {
    dispatch(listItemSliceActions.removeTask(id));
  };

  const dragStart = (e) => {
    dispatch(listItemSliceActions.dragStart(id));
  
  };

  const dragEnd = (e) => {
    dispatch(listItemSliceActions.dragEnd(id));
  };

  const dragEnter = e =>{ 
      setOnTop(true)

     
  }

  const dragLeave = e => {
    setOnTop(false)
    swapItems(id)
  }


  return (
    <div
      className={`itemContainer ${completed ? "completed" : ""} ${
        dragging ? "dragging" : ""
      } ${onTop ? 'onTop' : ''} ${darkTheme ? 'dark-theme' : ''}`}
      draggable="true"
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
     
    >
     
      <button className="gradient"></button>
      <button className="selector" onClick={markAsCompleted}>
        {completed && (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="9">
          <path fill="none" stroke="#FFF" d="M1 4.304L3.696 7l6-6" />
        </svg>)}
      </button>
  
     
      <span className={`text ${completed ? "completed" : ""}`}>{task}</span>
      <span className="cross" onClick={removeTask}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </span>
    </div>
  );
};

export default ListItem;
