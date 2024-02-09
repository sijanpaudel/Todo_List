import AddTodo from "./MyComponents/AddTodo";
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import { useState, useEffect } from "react";
import About from "./MyComponents/About";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


function App() {
  let initTodo
  if(localStorage.getItem("todos")!==null){
    initTodo =JSON.parse(localStorage.getItem("todos"))
  }
  else{
    initTodo = []
  }

  const onDelete = (todo)=>{
    console.log("I am ondelete",todo);
    setTodos(todos.filter((e)=>{
    return e!==todo
    }
    ))
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc)
    let sno = todos[0]?(todos[todos.length-1].sno + 1):1
    const myTodo ={
      sno:sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <AddTodo addTodo={addTodo}/>
       <Todos todos={todos} onDelete={onDelete}/>
        </>
      ),
    },
    {
      path: "about",
      element: <About/>,
    },
  ]);

  return (
    <>
     <Header title="MyTodosList" searchBar={false}/>
     <RouterProvider router={router} />
     <Footer/>
    </>
  )
}

export default App
