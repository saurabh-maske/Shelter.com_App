import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";
export default class Services extends Component {
    
    state={
        services:[
            {
            icon:<FaCocktail/>,
            title:"Free cocktails",
            info:"Free cocktails on every booking made with us for two person",
        },
        {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:"Free hiking on every booking made with us for two person",
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free Shuttle",
            info:"Free shuttle on every booking made with us for two person",
        },
        {
            icon:<FaBeer/>,
            title:"Strong Beer",
            info:"Free stronest beer on every booking made with us for two person",
        }
           
        ]
    }
    
    render() {
        return (
           <section className="services">
               <Title title="Services"/>
             <div className="services-center">
                 {this.state.services.map((item,index)=>{
return <article key={index} className="service">
<span>{item.icon}</span>
                 <h6>{item.title}</h6>
                 <p>{item.info}</p>


</article>
                 })}
             </div>
         </section>
        )
    }
}
