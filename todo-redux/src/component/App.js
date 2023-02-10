import React, { useState } from "react";
import { connect } from 'react-redux';
import { createTodo , delTodo,search} from "../store/action";
import './style.css'

function App(props){

    const [ todoInput , setTodoInput] = useState("");
    const [searchText , setSearchText] = useState("")
    
    function handleSubmit(event){
        event.preventDefault();
        const trimed=todoInput.trim()
        if(!trimed.length){
            setTodoInput("")
            return;
        }

        props.dispatch(createTodo(todoInput));
        setTodoInput("");
       
    }

    function handleDel(i){
       props.dispatch(delTodo(i))
        
    }

    function handleSearch(event){
        setSearchText(event.target.value)
        props.dispatch(search(event.target.value))
    }

    return (
        <>
        <div className="container">

       
        <h1>Todo App</h1>
        <main>
            <div className="search">
                <h2>Search</h2>
                <input  className="search-input"
                onChange={handleSearch}
                 type='text' placeholder="search"/>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input  onChange={(e) => setTodoInput(e.target.value)}
                    type= "text"
                    placeholder="your todo"
                    value={todoInput}
                     />
                     <input  type='submit' />
                </form>
            </div>
            <div>
               <ul>
                { props.todos && !searchText && props.todos.map((ele,i) => {
                    return (
                    <li>
                        <input key={i} type='checkbox' id="${i}"/>
                        <label htmlFor="${i}" className="strikethrough">{ele.item}</label>
                        <button onClick={() => handleDel(i)}>X</button>
                    </li>
                    )
                }) 
            }
               </ul>
               <ul>
                { props.filteredTodo && searchText && props.filteredTodo.map((ele,i) => {
                    return (
                    <li>
                        <input key={i}
                         type='checkbox' id="${i}"/>
                        <label htmlFor="${i}" className="strikethrough">{ele.item}</label>
                        <button onClick={() => handleDel(i)}>X</button>
                    </li>
                    )
                }) 
            }
               </ul>
            </div>
        </main>
        </div>
        </>
    )
}


function mapStatetoProps(state){
    return {
        todos : state.todos ,
        filteredTodo : state.filteredTodo
    }
}

export default connect(mapStatetoProps)(App)