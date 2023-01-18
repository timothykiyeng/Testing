import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";
//import PortalAppts from "./components/PortalPatient";
import PortalCalendar from "./components/PortalCalendar";
import PortalPatients from "./components/PortalPatients";
import Portal from "./components/Portal";
import PortalAppts from "./components/PortalAppts";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";


import { fetchAppointments } from './FetchData/appointmentsSlice.js'
import { fetchPatients } from './FetchData/patientsSlice.js'
import { fetchDepartments } from './FetchData/departmentsSlice.js'
import { fetchDoctors } from './FetchData/doctorsSlice.js'
import { fetchHistory } from './FetchData/medicalHistory'

function App() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState('')
  //const [dept, setDept] = useState(null)
  //const [doc, setDoc] = useState(null)
  const [patientAppts, setPatientAppts] = useState([])
  const [patientNames, setPatientNames] = useState([])
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchAppointments())
    .then(dispatch(fetchDepartments()))
    .then(dispatch(fetchPatients()))
    .then(dispatch(fetchDoctors()))
    .then(dispatch(fetchHistory()))
  }, [dispatch]);


  //const departments = useSelector(state => state.departments.entities)
  const patients = useSelector(state => state.patients.entities)
  //const doctors = useSelector(state => state.doctors.entities)
  //const history = useSelector(state => state.history.entities)
  const docAppointments = useSelector(state => state.appointments.entities)



  useEffect(() => {
    if(user && !user.doc){
      setPatientAppts(docAppointments.filter(appt => appt.patient_id === user.id))
    } 
    if(user && user.doc){
      setPatientNames(patients.map(p => ({id: p.id, text: p.name})))
    }
  }, [user])

  const filterPatients = () => {
    if(search === '' ){
      return patients
    } else {
      return patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path = '/portal' element={<Portal user={user} />}/>
          <Route path = '/portal/patients' element={<PortalPatients patients={filterPatients()} docAppointments={docAppointments} search={search} setSearch={setSearch} user={user} />}/>
          <Route path = '/portal/calendar' element={<PortalCalendar docAppointments={docAppointments} user={user} patientAppts={patientAppts} patients={patients} patientNames={patientNames} />}/>
          <Route path='/portal/appointments' element={<PortalAppts patientAppts={patientAppts} user={user} /> } />
          <Route path="/doctor" element={<Doctor setUser={setUser} />} />
          <Route path="/patient" element={<Patient setUser={setUser} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
