// components/Footer.js

class Footer extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <footer>
    <div class="inner">
      <div class="info">
        <span>VANILLACOSMOS</span>
        <span>paranaidl@gmail.com</span>
        <span>Design: YI Hee-Seong</span>
      </div>
      <p class="copyright">
        &copy; <span class="this-year"></span> VANILLACOSMOS Company. All Rights Reserved.
      </p>
      </div>
    </footer>
    `;
  }

  connectedCallback() {}
}

customElements.define("main-footer", Footer);

/*
올해가 몇 년도인지 계산
*/
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
