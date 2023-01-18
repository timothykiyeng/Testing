import React from "react";
import PortalNav from "./PortalNav";
import ApptCollapsible from "./ApptCollapsible";


const PortalAppts = ({ patientAppts, user }) => {
    console.log('patientAppts: ', patientAppts);
    return (
      <div>
        <PortalNav user={user} />
        <div>
        { patientAppts.map(appt => {
          return (
            <ApptCollapsible key={appt.id} appt={appt} />
          )
        }) }
        </div>
      </div>
    )
  }
  
  export default PortalAppts