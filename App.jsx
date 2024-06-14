import React from 'react'
import Products from './products'
import Rating from './Rating'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function formatName(user) {
  return user.firstName + ' ' + user.lastName
}


function App() {

  const isValid = true
  return (
    <div>
        <Products />
    </div>
  )
}

export default App
