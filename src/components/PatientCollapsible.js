import React, {useState} from "react";

const PatientCollapsible = ({patient, docAppointments}) => {

    const [expand, setExpand] = useState(false)

    const handleClick = () => {
        setExpand(!expand)
      }
    
      return (
        <div>
          <div>
            <button className={expand ? 'bttn-clicked': 'bttn'} onClick={handleClick}>
              {patient.name} ({patient.total_appts})
              <span className={expand ? 'hamburger cross' : 'hamburger'}>
                <span className="line line--top"></span>
                <span className="line line--middle"></span>
                <span className="line line--bottom"></span>
              </span>
            </button>
          </div>
          <div className='collapsible'>
            {docAppointments.map(appt => {
              if(appt.patient_id === patient.id) {
                return (
                  <ul key={appt.id} className={expand ? "expanded" : 'collapsed'}>
                    <h3>{appt.start_date.split('-')[1]}/{appt.start_date.split('-')[2].split('T')[0]}/{appt.start_date.split('-')[0]}:</h3>
                    <li>Title: {appt.title}</li>
                    <li>Notes: {appt.notes}</li>
                  </ul>
                )
              }
            })}
          </div>
        </div>
      )
    }
    
    export default PatientCollapsible
