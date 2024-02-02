import {useState,useEffect} from 'react'
export default   function App(){
  const [time,setTime]=useState(100);
  const [timer,setTimer]=useState(null);
  const [running,setRunning]=useState(true);
  useEffect(()=>{
    if(!timer){
    const ptr=setInterval(()=>setTime((time)=>time-1),1000);
    setTimer(ptr);
    }
  },[timer]);
  function onStopHandler(){
    clearInterval(timer);
    setRunning(false);
  }
  function onResumeHandler(){
    if(timer!==0 && !running){
      setTimer(null);
      setRunning(true);
    }
  }
  if(time===0){
  if(timer)  clearInterval(timer);
  }
  return (
    <div>
      <button>{time}</button>
      <button onClick={onStopHandler}>stop</button>
      <button onClick={onResumeHandler}>resume</button>
    </div>
  );
}