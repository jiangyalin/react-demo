import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
  Home,
} from './containers'

export default (
  <Route path="/" component={Home}>
    <IndexRoute component={Home}/>
  </Route>
);