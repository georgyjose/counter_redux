import React, { Component } from 'react';
import Counter from './Counter'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'



const App = () => <div class="ui container">

  <Route path="/"
    exact component = {
      Counter
    }
  />

</div>



export default App
