import React from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import Cars from './Cars/Cars'
import AddCar from './Cars/AddCar'
import Home from './Home'
import Style from './Style.css'

const noListStye={

}
const App = () =>(
  <div>
  <nav>
    <Link to="/">Home</Link>
    {" "}
    <Link to="/cars">Cars</Link>
    {" "}
  </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cars" component={Cars} />
    </Switch>
  </div>
)
export default App;