import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
//import UserGreeting from './components/UserGreeting';
//import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';





class App extends Component {
  render(){
 return (

    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 classname={styles.success}>Success</h1>
      <Inline />

      {/* <Stylesheet primary={true}/> */}
      
      {/* <UserGreeting/>
      <NameList /> */}
      
      

      {/*<ParentComponent />*/}
     {/*<FunctionClick />
      <ClassClick />
 <EventBind />*/}
      {/*<Counter />*/}
     {/*Greet name="Anjana" cityname="Bangalore"/>
      <p>
        This is a Trempplin company
      </p>
 </Greet>*/}
     {/*<Greet name="Asharani" cityname="Bidar"/>*/}
      {/*<button>
        Action
      </button>
     </Greet>
<Greet name="Pallavi" cityname="Tumkur"/>*/}

     
    {/*<Welcome name="Anjana" cityname="Bangalore"/>*/}
    {/*<Welcome name="Asharani" cityname="Bidar"/>*/}
 {/*<Welcome name="Pallavi" cityname="Tumkur"/>*/}
     {/* <Hello />*/}
     {/*<Message />*/}

      </div>
  );
}
}
export default App;
