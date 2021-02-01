import './header.css'
import logob from '../img/azullogo.png'

export default ()=>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-azul">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logob} className="logoHeader"></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item navls">
          <a class="nav-link active navls" aria-current="page" href="#"><h2>Home</h2></a>
        </li>
        <li class="nav-item navls">
          <a class="nav-link" href="#"><h2>BLOG</h2></a>
        </li>
        <li class="nav-item navls">
          <a class="nav-link" href="#"><h2>Home</h2></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" >
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}