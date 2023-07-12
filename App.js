import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos  from './MyComponents/Todos'; 
import AddTodo from "./MyComponents/AddTodo";
import React , {useState, useEffect} from 'react';
import About from "./MyComponents/About";

import { cleanup } from '@testing-library/react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() { 

  let initTodo;
  if(localStorage.getItem("todos")=== null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    console.log("I am on Delete of todo",todo)
    setTodods(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }


  const addTodo = (title,desc)=>{
    console.log("I am adding todo",title,desc);
    let sno;
    if(todos.length === 0){
      sno = 0;
    }
    else{
     sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodods([...todos,myTodo]);  // update the todos. We make a ...(array)
    console.log(myTodo);
  }

  const[todos,setTodods]= useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
    // return()=>{
    //   cleanup
    // }
  },[todos]);
    // {
    //   sno:1,
    //   title: "Go to the market",
    //   Desc: " You need to go to the market to get this job done"
    // }, {
    //   sno:2,
    //   title: "Go to the mall",
    //   Desc: " You need to go to the mall to get this job done2"
    // },
    // {
    //   sno:3,
    //   title: "Go to the Relative Home ",
    //   Desc: " You need to go to the Relative Home to get this job done3"
    // }  Predefined todos but we want to fresh start todo then
  //])


//   return (
//     <>
//     <Router>
//     <Header title="My Todods  List" searchBar = {false}/>
//     <Routes>
//       <Route  exact path="/" element={()=>{
//         return(
//           <>
//           <AddTodo addTodo={addTodo}/>
//           <Todos todos= {todos} onDelete={onDelete}/>
//           </>)
//       }}>
//       </Route>
//       <Route exact path="/about" element={<About />}> </Route>
//       </Routes>
//     <Footer/>
//     </Router>
//     </>
//   );
// }
return (
  <>
    <Router>
      <Header title="My Todods List" searchBar={false} />
      <Routes>
        <Route  path="/" element= {
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
        }  />
        <Route  path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  </>
     );
      }
export default App;
