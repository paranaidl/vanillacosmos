// components/Header.js
// import setHeader from '../utils/header';

class Header extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `    
    <header>
      <div class="inner">
        <ul class="main-menu">
          <li class="item">
            <a href="/">
              <div class="item__name">HOME</div>
              <div class="item__contents">About</div>
            </a>
          </li>
          <li class="item">
            <a href="/pages/solarcraft.html">
              <div class="item__name">SOLARCRAFT</div>
              <div class="item__contents">AC Saga</div>
            </a>
          </li>
          <li class="item">
            <a href="/pages/ghostwolf.html">
              <div class="item__name">GHOSTWOLF</div>
              <div class="item__contents">The Killer</div>
            </a>
          </li>
          <li class="item">
            <a href="/pages/cacophonia.html">
              <div class="item__name">CACOPHONIA</div>
              <div class="item__contents">Into the lungs of Hell</div>
            </a>
          </li>
          <li class="item">
            <a href="/pages/lodols.html">
              <div class="item__name">LODOLS</div>
              <div class="item__contents">The Lord of Idols</div>
            </a>
          </li>
        </ul>
      </div>
    </header> `;
  }

  connectedCallback() {}
}

customElements.define("main-header", Header);
