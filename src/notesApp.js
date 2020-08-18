import React,{useState,Component} from 'react';
import './App.css';
import Input from './Input';
import Inputs from './Inputs';
import TodoList from './Component/TodoList'

const App = () => {
  const [count,setCount] = useState(0)
  const [phrase,setPhrase] = useState('this is the phrase')
  const [name,setName] = useState({first:"", last:""})

  const updateName = (evt) =>{
    let field = evt.target.name;
    let value = evt.target.value;

    setName({...name, [field]:value})
    
  }

  return (
    <div className="App">

      <Input />
      <input onChange={(evt)=>setPhrase(evt.target.value)}/>
      <div>{phrase}</div>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>Click</button>
      
    {name.first} {name.last}
    <Inputs label='first' value={name.first} onChange={updateName} />
    <Inputs label='last' value={name.last} onChange={updateName} />


    </div>
  );
}



export default App;
