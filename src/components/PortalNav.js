import React from "react"
import { NavLink } from 'react-router-dom';


const PortalNav = ({ user }) => {
    return (
      <div className='portal-nav'>
        {user.doc ? 
          <div className='nav-links'>
            <NavLink to='/portal/patients'>Patients</NavLink>
            <NavLink to='/portal/calendar'>Calendar</NavLink>
          </div>
        :
        <div className='nav-links'>
          <NavLink to='/portal/medicalhistory'>Medical History</NavLink>
          <NavLink to='/portal/appointments'>Appointments</NavLink>
          <NavLink to='/portal/calendar'>Calendar</NavLink>
        </div>
        }
      </div>
    )
  }
  
  export default PortalNav