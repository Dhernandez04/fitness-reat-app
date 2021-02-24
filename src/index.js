// const element = document.createElement('h1');
// element.innerHTML = 'Hello React'

// const container = document.getElementById('root');

// container.appendChild(element);

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName: 'Deimer',
  lastName: 'Hernandez',

}
function getName(user) {
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hello Stranger</h1>
}
const name = 'Deimer'
const element = <div>{ getGreeting(user) }</div>
const container = document.getElementById('root');

 ReactDOM.render(element,container)