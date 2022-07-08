import React from 'react'
import Person from './Person';



function NameList() {
    const names=['Anjana', 'Asharani', 'Pallavi', 'Asharani']
    const persons = [
        {
            id: 1,
            name: 'Anjana',
            age: 25,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Asharani',
            age: 23,
            skill: 'Node.js'
        },
        {
            id: 3,
            name: 'Pallavi',
            age: 24,
            skill: 'Angular'
        }

    ]
    
      const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
      return <div>{nameList}</div>
     
  
}

export default NameList