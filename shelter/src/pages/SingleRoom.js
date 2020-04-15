import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Banner from "../components/Banner"
import {Link } from "react-router-dom"
import {RoomContext} from '../context'
import Styledhero from "../components/Styledhero"
export default class Singleroom extends Component {
  constructor(props){
      super(props)
     // console.log(this.props)
  this.state={
      slug:this.props.match.params.slug,
      defaultBcg  
  
    };
  
    }
    static contextType= RoomContext
  componentDidMount(){


  }
   
    render() {
        const {getRoom}=this.context;
        const room=getRoom(this.state.slug)
      if(!room){
          return<div className='error'>
              <h3>No such room found...</h3>
            <Link to='/rooms' className='btn-primary'>Back to Rooms</Link>
          </div>
      }


      const {name,description,capacity,size,price,extras,breakfast,pets,images}= room;
      const [mainImg,...defaultImg]=images;
return (

<>

<Styledhero img={mainImg || this.state.defaultBcg } >
    <Banner title={`${name} room`}>
        <Link to='/rooms' className='btn-primary'>Back to Rooms</Link>
    </Banner>
</Styledhero>
<section className='single-room'>
  <div className='single-room-images'>
    
    {defaultImg.map((item,index)=>{
    return   <img key={index} src={item} alt={name}/>
    })}
    </div>
    <div className="single-room-info">
      <article  className='desc'>
        <h3>Details</h3>
  <p>{description}</p>
      </article>
      <article className='info'>
        <h3>Info</h3>
  <h6>Price:Rs{price}</h6>
  <h6>Size:{size}SQFT</h6>
  <h6>Max Capacity:{capacity>1 ?`${capacity}people`: `${capacity}person`}</h6>
  <h6>{pets ? 'pets allowed':'no pets allowed'}</h6>
  <h6>{breakfast && 'free breakfast included'}</h6>
      </article>
    </div>
</section>
<section className='room-extras'>
<h6>Extras:</h6>
<ul className='extras'>
{extras.map((item,index)=>{
  return <li key={index}>-{item}</li>
})}
</ul>
</section>
</>
            )
    }
}
