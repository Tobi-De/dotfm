import "./styles.css";
import "./code.css"
import 'htmx.org';

import mermaidAPI from 'mermaid';

window.htmx = require('htmx.org');

mermaidAPI.initialize({'theme': 'dark'});
