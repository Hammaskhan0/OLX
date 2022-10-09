import { getAuth } from "firebase/auth";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from '../../src/views/Signup'
import CreateAd from "../components/CreateAd";
import Detail from "../components/Detail";
import MyAds from "../components/MyAds";
import Navbar from "../components/Navbar";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Profile from "../views/profile";

function App(props){
    const user =getAuth().currentUser

    const protectedRoute = (item) => {
        const result = props.user ? item : <Login />
        return result
    }

    return(
        <Router>
            <Routes>
                <Route path="/" element={protectedRoute(<Dashboard/>)}/>
                <Route path="/dashboard" element={user ?<Dashboard/> : <Login/>}/>
                <Route path="/profile" element={user ?<Profile/> : <Login/>}/>
                <Route path="/createad" element={user ? <CreateAd/> :<Login/>}/>
                <Route path="/signup" element={user ? <Signup/>:<Login/>}/>
                <Route path="/login" element={user ? <Login/>:<Login/>}/>
                <Route path="/myads" element={user ? <MyAds/>:<Login/>}/>
                <Route path="/detail/:adId" element={user ? <Detail/>:<Login/>}/>
                <Route path="/login" element={<Login/>}/>



            </Routes>
        </Router>
    )
}
export default App