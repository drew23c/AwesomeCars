import React from 'react'
import {Link} from 'react-router-dom'

const CarList = ({ cars }) => (
  <div>
    <h1>List of Amazing Cars</h1>
    <ul>
      {cars.map(car => (
        <li>
          <Link to={`/cars/${car.id}`} key={car.id}><h2>{car.name}</h2></Link>
        </li>))}
    </ul>
  </div>
)

export default CarList;