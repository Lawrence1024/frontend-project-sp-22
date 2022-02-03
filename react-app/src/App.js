// import Header from './components/Header'
// import Tasks from './components/Tasks'
// import AddTask from './components/AddTask'
// import Footer from './components/Footer'
// import About from './components/About'
import Navigation from './compo/Navigation'
import Cards from './compo/Cards'
import { useState, useEffect } from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [allData, setallData] = useState([])
   useEffect(() => {
     const getType = async()=>{
       const data = await fetchData()
       setallData(data)
       console.log(data)
     }
     getType()
   },[])

  const fetchData = async()=>{
    const res = await fetch("http://localhost:5000/data")
    const data = await res.json()
    return data
  }

  const fetchATask = async(id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks",{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(task),
    })
    const data = await res.json()
    setallData([...allData,data])

    // const id = Math.floor(Math.random()*10000)+1
    // const newTask={id,...task}
    // setTasks([...tasks, newTask])
  }


  const deleteTask = async (id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:"DELETE"
    })
    setallData(allData.filter((data) => data.id !== id))
  }

  const toggleReminder = async(id) =>{
    const fetchedTask = await fetchATask(id)
    const updatedTask = {
      ...fetchedTask, reminder : !fetchedTask.reminder
    }

    const req = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:"PUT",
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(updatedTask),
    })
    const data = await req.json()
    setallData(
      allData.map(
        (data)=> data.id === id ? {...data, reminder : data.reminder} : data
      )
    )
  }

  return (
    <Router>
      <div className="">
        {/* <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/> */}
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <img src="/images/home-banner.png" className="home-banner"></img>
              <h2 className='home-title'>Duck Fashion Show</h2>
              <h3 className='home-subtitle'>The animal kingdom’s most cut-throat competition – may the best gown win!</h3>
              {/* {showAddTask && <AddTask onAdd={addTask}/>}
              {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:'To Task To Show'} */}

            </>
          }/> 
          <Route path="/voting" element={<Cards />}></Route>
          {/* <Route path='/about' element={<About />}/> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
