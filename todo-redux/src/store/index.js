import { createStore } from "redux";

function todoReducer(
    state={todos: [], filteredTodo : [] },
    action
    ){
   switch(action.type){
    case  'ADDTODO' :
        return {
            ...state, todos: [ ...state.todos, {item: action.payload, isDone: false}]
        }

    case  'DELETETODO' :
        const todos = [...state.todos];
        todos.splice(action.payload, 1);
        return {
            ...state, todos
        }
    case  'search' :
        const filteredTodo = state.todos.filter((ele,i)=>{
          return  ele.item.includes(action.payload)
        })
       
        return {
            ...state, filteredTodo
        }
      
    default:
        return state
   }
}

let store = createStore(todoReducer);

export default store