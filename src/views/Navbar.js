import {useContext} from 'react'
import jwt_decode from "jwt-decode"
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

function Navbar() {

  const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")

  if (token){
    const decoded = jwt_decode(token) 
    var user_id = decoded.user_id
  }

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark"   >
        <div class="container-fluid" style={{backgroundColor: '#EAE7DC' }}>
          <a class="navbar-brand" href="#">
            <img style={{width:"200px", padding:"6px"}} src="https://static.wixstatic.com/media/72f1e4_571f92190b6d45418894b1bbc41bbe5a~mv2.png/v1/crop/x_19,y_19,w_785,h_168/fill/w_279,h_62,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/FINAL%20LOGO%20FOR%20WEB.png" alt="" />

          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon-custom"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link active" style={{ fontSize: "1.2rem", color: "blue" }} aria-current="page" href="/#">Home</a>
              </li>
              {token === null && 
              <>
                <li class="nav-item">
                  <Link class="nav-link" style={{ fontSize: "1.2rem", color: "blue" }} to="/login">Login</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" style={{ fontSize: "1.2rem", color: "blue" }} to="/register">Register</Link>
                </li>
              </>
              }

            {token !== null && 
              <>
                <li class="nav-item">
                  <a class="nav-link" style={{ fontSize: "1.2rem", color: "blue" }} href="/dashboard">Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={logoutUser} style={{ cursor: "pointer", fontSize: "1.2rem", color: "blue" }}>Logout</a>
                </li>
              </>
              }   
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar