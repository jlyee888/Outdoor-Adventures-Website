import topHeader from '../../../scripts/render/top-header.js'
import homePic from '../render/home-pic.js'
import areaNavBar from '../../../scripts/render/main-nav.js' //'./area-nav-bar.js'
import footerContainer from '../../../scripts/render/footer-container.js'
import bottomFooter from '../../../scripts/render/bottom-footer.js'

window.customElements.define('top-header', topHeader)
window.customElements.define('home-pic', homePic)
window.customElements.define('area-nav-bar', areaNavBar)
window.customElements.define('footer-container', footerContainer)
window.customElements.define('bottom-footer', bottomFooter)