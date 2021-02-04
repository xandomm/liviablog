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
    <div class="collapse navbar-collapse Header-l" id="navbarNavDropdown">
      <ul class="navbar-nav Header-l">
        <li class="nav-item navls">
          <a class="nav-link active navls" aria-current="page" href="#"><h3>HOME</h3></a>
        </li>
        <li class="nav-item navls">
          <a class="nav-link" href="#"><h3>BLOG</h3></a>
        </li>
        <li class="nav-item navls">
          <a class="nav-link" href="#"><h3>QUEM SOMOS NÓS</h3></a>
        </li>
        <li class="nav-item dropdown">

          <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" >
          <h3>NOSSOS SERVIÇOS</h3>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">CONSULTORIA PESSOAL</a></li>
            <li><a class="dropdown-item" href="#">CONSULTORIA EMPRESARIAL</a></li>
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