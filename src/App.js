import {useState,useEffect} from 'react'
function App() {
  const [counter,setCounter]=useState(100);

  useEffect(()=>{
  setInterval(()=>{
    console.log(counter);
      setCounter((c)=>c-1)
    },1000);
  },[]);  
 /* const resumeHandler=()=>{
    timer=setInterval(()=>{
      setCounter((counter)=>counter-0.1)
    },10);
  }
  const pauseHandler=()=>{
    clearInterval(timer);
  }*/
  return (
    <div>
        
        {counter}

    </div>
  );
}

export default App;
