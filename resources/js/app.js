import './bootstrap';
import '../css/nav.css'
import '../css/bootatrap-rtl.css'

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createRouter, createWebHistory } from 'vue-router';
import Routes from './routes.js';
import './tailwind.css';
import 'bootstrap/dist/js/bootstrap.js';
// import { createI18n } from 'vue-i18n'
// import i18n from "./i18n"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret,faHome,faPenNib,faBookOpen,faBomb,faServer
, faBriefcase,faLanguage, faEnvelope, faListAlt, faMoon, faSun, faDownload, faArrowAltCircleUp, faDatabase, faRss, faWandMagicSparkles, faCheck, faCode, faShare
} from '@fortawesome/free-solid-svg-icons'
// import { faHouse } from '@fortawesome/free-thin-svg-icons'
import { faGithub, faHtml5, faLaravel, faLinkedin, faPhp, faVuejs, faWhatsapp,faSquareJs, faCss3Alt, faJsSquare, faBootstrap } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faHome,faBookOpen,faBomb,faServer,faBriefcase,faGithub,faLanguage, faLinkedin, faWhatsapp, faEnvelope
    ,faListAlt,faMoon,faSun,faDownload, faArrowAltCircleUp,faPhp,faLaravel,faVuejs,faDatabase,faHtml5,faSquareJs,faCss3Alt,
    faJsSquare,faRss,faBootstrap,faWandMagicSparkles,faPenNib,faCheck,faCode,faBriefcase,faShare )





const app = createApp({});
const router = createRouter({
    routes: Routes,
    history: createWebHistory(),
});

app.use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
