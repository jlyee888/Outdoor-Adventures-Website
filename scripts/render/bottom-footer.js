export default class bottomFooter extends HTMLElement{
    constructor() {
        super();
        
        this.innerHTML = `<footer>
      Copyright © 2022 Justin Yee
    </footer>`
    }
}

// window.customElements.define('bottom-footer', bottomFooter)

/*  | <a href="#">Sitemap</a> |
      <a href="#"> Acknowledgements</a> | <a href="#"> Contact</a> |
      <a href="#"> Other</a>
      */