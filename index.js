
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Bnav from './components/Bnav';
import Greeting from './js/greeting';


document
    .querySelector('#root')
    .innerHTML = `
 ${Navigation}
 ${Header}
 ${Content}
 ${Footer}
 ${Bnav}
 `;

Greeting();