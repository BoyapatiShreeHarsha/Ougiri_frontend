import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './screens/Home/Home'
import Events from './screens/Events/Event'
import Registration from './screens/Registration/Registration'
import EventForm from './screens/EventForm/EventForm';
import TicketState from './context/registration/TicketState';
import TicketSuccess from './screens/TicketSuccess/TicketSuccess';
import TicketFailure from './screens/TicketFailure/TicketFailure';

function App() {
  return (
    <>
      <TicketState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/events" element={<Events/>} />
          <Route exact path="/events/success" element={<TicketSuccess/>} />
          <Route exact path="/events/failure" element={<TicketFailure/>}/>
          <Route exact path="/events/eform" element={<EventForm/>}/>
          <Route exact path="/registration" element={<Registration/>} />
        </Routes>
      </BrowserRouter>
      </TicketState>
    </>
  );
}

export default App;
