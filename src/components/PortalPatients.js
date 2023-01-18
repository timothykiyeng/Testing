import React from "react";
import PortalNav from "./PortalNav";
import PatientCollapsible from "./PatientCollapsible";

function PortalPatients({ search, setSearch, patients, docAppointments, user }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <PortalNav user={user} />
      <div>
        <label>
          Search Patient:
          <input
            type="text"
            placeholder="patient name..."
            className="patientSearch"
            onChange={handleChange}
            value={search}
          />
        </label>
      </div>
      <br></br>
      <div>
        {patients.map((p) => {
          return (
            <PatientCollapsible
              key={p.id}
              patient={p}
              docAppointments={docAppointments}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PortalPatients;
