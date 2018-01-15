import React from 'react'
import Add from './AddCar';
import {Route,Switch} from 'react-router-dom'
import Car from './Car'
import carAPI from './carAPI'
import CarList from './CarList'




class Cars extends React.Component{
  constructor() {
    super()
    this.cars = carAPI.getAll();
    this.state = {
    }
  }
  renderCarList = () =>{
    const cars = carAPI.getAll()
    return(
      <CarList cars={cars}/>
    )
  }
  renderCar = props =>{
    const {id} = props.match.params
    const car = carAPI.getOne(id)
    const cars = carAPI.getAll()
    if(!car){
      return <div>Wrong Selection</div>
    }else{
    return(
      <Car
        cars={cars}
        name={car.name}
        img={car.img}
        id={car.id} />
      )
    }
  }

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }



  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/cars" render={this.renderCarList}/>
          <Route path="/cars/:id" render={this.renderCar}/>
        </Switch>
      </div>
    )
  }
}
export default Cars;