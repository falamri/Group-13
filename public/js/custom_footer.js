//header component

class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
      <footer class="bg-dark text-center">
      <span class="text-light ">© 2023 Gallery Canvas</span>
      <div class="container text-center">
        <div class="row ">
          <div class="col">
            <a href="about" class="text-white">About us</a>
          </div>
          <div class="col">
            <a href="explore" class="text-white">Explore</a>
          </div>
          <div class="col">
            <a href="contact_us" class="text-white">Support</a>
          </div>
          <div class="col">
            <a href="https://linkedin.com"><img src="../images/Logos/github-color-svgrepo-com.svg" alt="" width="30px"></a>
            <a href="https://www.x.com"><img src="../images/Logos/twitter-color-svgrepo-com.svg" alt=""  width="30px"></a>
            <a href="https://www.facebook.com"><img src="../images/Logos/facebook-color-svgrepo-com.svg" alt=""  width="30px"></a>
            <a href="https://www.instagram.com"><img src="../images/Logos/instagram-svgrepo-com.svg" alt=""  width="35px"></a>
          </div>
        </div>
      </div>
    </footer>
      `;
    }
  }
  
  customElements.define('info-footer', Footer);