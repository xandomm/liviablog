import './header.css'
import logob from '../img/logo3.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg Header-l bg-azul">
  <div class="container-fluid">
    <div className="logoh2">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
</svg></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavDropdown">
      <ul class="navbar-nav Header-l">
        <li class="nav-item navls">
          <a class="nav-link active navls" aria-current="page" href="/"><h5 className="Header-l">HOME</h5></a>
        </li>
        <li class="nav-item navls">
          <a class="nav-link" href="/blog"><h5 className="Header-l">BLOG</h5></a>
        </li>
        <li class="nav-item navls">
          <a class="nav-link" href="/contato"><h5 className="Header-l">CONTATO</h5></a>
        </li>
      </ul>
    </div></div>
  </div>
</nav>
        </div>
    )
}