import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import Purecomp from './components/PureComp';
import ParentComp from './components/ParentComp';
import PureComp from './components/PureComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounterTwo from './components/HoverCounterTwo';
import ClickCounteTwor from './components/ClickCounteTwor';
import User from './components/User';
import Counter123 from './components/Counter123';
import { UserProvider } from './components/UserContext';
import ComponentC from './components/ComponentC';






class App extends Component {
  render(){
 return (

    <div className="App">
      <UserProvider value="asharani"></UserProvider>
      <ComponentC/>
       <Form />
       
       {/* <Counter123 
        render={(count,incrementCount)=>
        (<ClickCounteTwor count={count} incrementCount={incrementCount}/>
        )}
        />
        
        <Counter123 
        render={(count,incrementCount)=>
        (<HoverCountertwo count={count} incrementCount={incrementCount}/>
        )}
        />
         */}

         {/* 
  <User render={(isLoggedIn)=>isLoggedIn?'Anjana':'guest'}/>
        <ClickCounteTwor/>
        <HoverCountertwo/> */}
       {/* <ClickCounter name="Anjana" />

<HoverCounter/> */}

        {/* <ClickCounter/>
      <ErrorBoundary>
    <Hero heroName="asha"/></ErrorBoundary>
    <ErrorBoundary> <Hero heroName="pallavi"/></ErrorBoundary>
    <ErrorBoundary><Hero heroName="anjana"/>
    </ErrorBoundary> */}
    
    {/* <Hero heroName="asharani"/> */}
       {/* <PortalDemo/> */}
        
        {/* <FRParentInput/> */}
        {/* <FocusInput/>
        <RefsDemo/> */}
        {/* <ParentComp/> */}
        {/* <PureComp/> */}
        {/* <Table/>
       <FragmentDemo/> 
          <Form/>
          <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success
        </h1>
         <Inline/>  
         <LifeCycleA /> 
         <Stylesheet primary={true}/>
         <NumberList/> 
        
         <UserGreeting/> 
         <ParentComponent/>
          <EventBind/>
        <FunctionClick/>
        <ClassClick/>  

 <Counter/> 



      {/* <h1 className='error'>Error</h1>
      <h1 classname={styles.success}>Success</h1>
      <Inline /> */}

      {/* <Stylesheet primary={true}/> */}
      
      {/* <UserGreeting/>
      <NameList /> */}
      
      

      {/*<ParentComponent />*/}
     
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
