import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginHome from "./pages/LoginHome";
import CartHome from "./pages/CartHome";
import DetailsHome from "./pages/DetailsHome";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import CartAdd from "./users/CartAdd";
import CartEdit from "./users/CartEdit";
import CartView from "./users/CartView";
import DetailsAdd from "./users/DetailsAdd";
import DetailsEdit from "./users/DetailsEdit";
import DetailsView from "./users/DetailsView";
import Authentication from "./pages/Authentication"
import HomeFeatures from "./pages/HomeFeatures";
import UserCartHome from "./pages/UserCartHome";
import UserHome from "./pages/UserHome";
import UserLoginHome from "./pages/UserLoginHome";
import UserDetailsHome from "./pages/UserDetailsHome";
import FirstPage from "./pages/FirstPage";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/homefeatures" element={<HomeFeatures/>} />
          <Route path="/userhome" element={<UserHome/>} />
          <Route path="/usercart" element={<UserCartHome/>} />
          <Route path="/userlogin" element={<UserLoginHome/>} />
          <Route path="/userdetails" element={<UserDetailsHome/>} />
          <Route path="/loginhome" element={<LoginHome/>} />
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="/edituser/:id" element={<EditUser/>}/>
          <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
          <Route exact path="/carthome" element={<CartHome/>}/>
          <Route exact path="/cartadd" element={<CartAdd/>}/>
          <Route exact path="/cartedit/:id" element={<CartEdit/>}/>
          <Route exact path="/cartview/:id" element={<CartView/>}/>
          <Route exact path="/detailshome" element={<DetailsHome/>}/>
          <Route exact path="/detailsadd" element={<DetailsAdd/>}/>
          <Route exact path="/detailsedit/:id" element={<DetailsEdit/>}/>
          <Route exact path="/detailsview/:id" element={<DetailsView/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
