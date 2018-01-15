import React from 'react';
import {Link} from 'react-router-dom'

const Add = ({id,name,img,click,input,savedList}) =>(
  <div>
  <h2>Add a car</h2>
    <form>
      <input type='text' id='id' value={id} onInput={input} placeholder="Enter an id"/>{" "}
      <input type='text' id='name' value={name} onInput={input} placeholder="Enter Car name"/>{" "}
      <input type='text' id='img' value={img} onInput={input} placeholder="Enter image url" />
    </form>
    <button onClick={click}>Add Car</button>
    <ul>
      <li></li>
    </ul>
  </div>
)


export default Add;