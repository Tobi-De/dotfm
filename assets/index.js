import "./styles.css";
import "./code.css"
import 'htmx.org';
import 'giscus';
import Alpine from 'alpinejs'

import mermaidAPI from 'mermaid';

window.htmx = require('htmx.org');

mermaidAPI.initialize({'theme': 'dark', startOnLoad: true});

window.Alpine = Alpine

Alpine.start()
