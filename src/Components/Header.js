import React from 'react'


const Header = () => {

  return (
    <div>
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" to="#"><img src=""></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href='/home' >Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href='/speciality' >speciality</a></li>
        <li className="nav-item">
        <a className="nav-link" href='/popular' >Popular</a>
        </li>
        <a className="nav-link" href='/gallery' >Gallery</a>
        <li class="nav-item">
        </li>
        <li className="nav-item">
        <a className="nav-link " href='/order'>LogIn</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



    </div>


  )
}




export default Header
