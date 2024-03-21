import {useState, useEffect} from 'react'
import useAxios from "../utils/useAxios"
import jwtDecode from 'jwt-decode'
function Dashboard() {

    const [res, setRes] = useState("")
    const api = useAxios();
    const token = localStorage.getItem("authTokens")

    if (token){
      const decode = jwtDecode(token)
      var user_id = decode.user_id
      var username = decode.username
      var full_name = decode.full_name
      var image = decode.image

    }

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try{
    //       const response = await api.get("/test/")
    //       setRes(response.data.response)
    //     } catch (error) {
    //       console.log(error);
    //       setRes("Something went wrong")
    //     }
    //   }
    //   fetchData()
    // }, [])

    
    // useEffect(() => {
    //   const fetchPostData = async () => {
    //     try{
    //       const response = await api.post("/test/")
    //       setRes(response.data.response)
    //     } catch (error) {
    //       console.log(error);
    //       setRes("Something went wrong")
    //     }
    //   }
    //   fetchPostData()
    // }, [])


  return (
    <div>
      <>
  <div className="container-fluid" style={{ paddingTop: "100px" }}>
    <div className="row justify-content-center align-items-center ">
      
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h1 className="h2">My Dashboard</h1>
          
        </div>
        <span>Hello {username}!</span>
               
      </main>
    </div>
  </div>
  {/* Bootstrap core JavaScript
    ================================================== */}
  {/* Placed at the end of the document so the pages load faster */}
  {/* Icons */}
  {/* Graphs */}
</>

    </div>
  )
}

export default Dashboard