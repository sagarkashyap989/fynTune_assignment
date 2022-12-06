import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import List from './components/List'
import {BrowserRouter as Router,Route, Routes } from "react-router-dom"
import {Provider} from "react-redux"
import store from './state/store';
const App = () => {
  return (
      <>
      <Provider store={store}>
        <Router>
        <Navbar />
        {/* <Form /> */}


            <Routes>
                <Route exact path='/' element={<List />}/>
                <Route  path='/add-shop' element={<Form />}/>
            </Routes>
        </Router>
        </Provider>
    </>
  )
}

export default App