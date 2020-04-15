import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import FeaturedRooms from "../components/FeaturedRooms"
import Services from "../components/Services"
import RoomsContainer from "../components/RoomsContainer"
function Home() {
    return (
        <div>
           <Hero >
           <Banner title="Luxurious Rooms" subtitle="delux rooms starting @ 1999">
               <Link to="/rooms"className="btn-primary">Get Rooms</Link>
           </Banner>
           </Hero>
           <Services/>
           <FeaturedRooms/>
         <RoomsContainer/>        </div>
    )
}

export default Home
