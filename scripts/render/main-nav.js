export default class mainNavBar extends HTMLElement{
    constructor() {
        super();
        
        this.innerHTML = `<nav>
        <ul>
          <li class="implemented">
            <a href="./Area-Information-Pages/oc-cleveland.html">Irvine, OC, Cleveland NF<i class="arrow down"></i></a>
          </li>
          <li class="not_implemented">
            <a href="#"
              >Cucamonga Wilderness (To be implemented soon!)<i class="arrow down"></i
            ></a>
          </li>
          <li class="not_implemented">
            <a href="#">Hike Log (To be implemented soon!)<i class="arrow down"></i></a>
          </li>
        </ul>
      </nav>`
    }
}

// window.customElements.define('main-nav', mainNavBar)

/*
          <li>
            <a href="#"
              >Mt Baldy/Cucamonga Wilderness<i class="arrow down"></i
            ></a>
          </li>
          <li>
            <a href="#">Hike Log<i class="arrow down"></i></a>
          </li>
          <li>
            <a href="#">Angeles NF<i class="arrow down"></i></a>
          </li>
          <li>
            <a href="#"
              >San Bernardino NF/Gorgonio Wild<i class="arrow down"></i
            ></a>
          </li>
          <li>
            <a href="#">San Jacinto NF<i class="arrow down"></i></a>
          </li>
          <li>
            <a href="#">Other<i class="arrow down"></i></a>
          </li>
*/