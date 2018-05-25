import index from "./index.st.css";
import './test.js';

document.documentElement.classList.add(index.root);
window.backgroundColorAtLoadTime = getComputedStyle(document.documentElement).backgroundColor;