//header component

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
      <header class="pb-5">
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
            <div class="container-fluid">
              <a class="navbar-brand" href="/home">Gallery Canvas</a> <!-- index.html -->
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="explore">Explore</a> <!-- exploreArt.html -->
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="artwork/vintage">Vintage</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="artwork/poetry">Poetry</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="contact_us">Contact Us</a> <!-- contact_us.html -->
                  </li>
                  <li>
                    <a class="nav-link" href="/">Login/SignUp</a> <!-- login_signup.html -->
                  </li>
                </ul>
               
                 <!-- search -->
                 <input id="artistNameInput" placeholder="Search for Artist" aria-label="Search">
                  <button class="btn btn-secondary" onclick="searchArtist()">Search</button>
                
                </div>
            </div>
        </nav> 
    </header>
      `;
    }
  }
  
  customElements.define('nav-header', Header);