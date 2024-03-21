import React from 'react'

function Homepage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#D8C3A5" }}>
    <main role="main" style={{ flex: 1, marginTop: 100 }}>
      {/* Main jumbotron for a primary marketing message or call to action */}
      <div className="jumbotron " style={{backgroundColor: "#D8C3A5"}}>
        <div className="container">
          <h1 className="display-3">Hello, Folks!</h1>
          <p>
            "Nahar Group" is a conglomerate based in India with diversified business interests including textiles, cement, real estate, hospitality, and renewable energy. The company was founded by Late Shri O.P. Mundhra in 1949 and has grown to become a significant player in the Indian business landscape.
          </p>
        </div>
      </div>
    </main>
    <footer className="bg-light text-center text-lg-start">
  <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
    © 2023 - till date Copyright:
    <a className="text-dark" href="https://www.nahar.om/">NaharOMFamily Office.com</a>
  </div>
</footer>

  </div>
  )
}

export default Homepage