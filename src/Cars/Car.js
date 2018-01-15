import React from 'react'
import {Link} from 'react-router-dom'

const imageStyle={
  height:'40%',
  width:'40%'
}
const thumbStyle={
  thumb:{height:'15%',
        width:'15%'
  } 
}
const Car = ({name,img, id, cars}) =>(
  <div key={id}>
    <h1>{name}</h1>
    <img src={img} alt={img} style={imageStyle}/><br/>
    Rate:{" "}
    <select>
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select><br/>
    {cars.map(car =>(
      <Link to={`/cars/${car.id}`}><img style={thumbStyle.thumb} src={car.img} alt={car.img} /></Link>))}<br/>
      <Link to="/cars">Back</Link>{" "}
  </div>
)
export default Car;