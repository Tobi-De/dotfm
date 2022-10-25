import "./styles.css";
import "./code.css"
import 'htmx.org';
import 'giscus';
import 'swiper/swiper-bundle.min.css';
import Swiper, {Pagination} from 'swiper';

import mermaidAPI from 'mermaid';


window.htmx = require('htmx.org');

mermaidAPI.initialize({'theme': 'dark'});

new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 1,
    loop: true,
    modules: [Pagination],
});
