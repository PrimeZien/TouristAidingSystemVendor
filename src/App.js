import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import EmailVerification from "./Component/CreateAccount/SecondPage/EmailVerification";
import CreateAccount from "./View/CreateAccount/CreateAccount";
import Main from "./View/Main/Main";
import SignIn from "./View/SignIn/SignIn";
import VenderType from "./View/VenderType/VenderType";
import AccommodationRegistrationBasicDetails from "./View/AccommodationRegistrationBasicDetails/AccommodationRegistrationBasicDetails";
import RegPageNavbar from "./Component/RegistrationPageNavbar/RegPageNavbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/emailVerification" element={<EmailVerification />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/vender-type" element={<VenderType />} />
          <Route path="/basicDetails" element={<AccommodationRegistrationBasicDetails/>}/>
          <Route path="/regPageNavbar" element={<RegPageNavbar/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
