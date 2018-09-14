import Navigo from 'navigo';
import axios from 'axios';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Bnav from './components/Bnav';
import Greeting from './js/greeting';
import * as State from './store';

var root = document
    .querySelector('#root');

var router = new Navigo(window.location.origin);

var newState = Object.assign({}, State);

var tog = [ true, true, true ];
var visibility = [ 'none', 'none', 'none' ];
var about;
var dropdown;

function show(e){
    tog[e.target.value] = !tog[e.target.value];
    visibility[e.target.value] === 'none' ? visibility[e.target.value] = 'block' : visibility[e.target.value] = 'none';
}

function render(state){
    document;
    root.innerHTML = `
            ${Navigation(state[state.active])}
            ${Header(state[state.active])}
            ${Content(state)}
            ${Footer(state[state.active])}
            ${Bnav(state[state.active])}
 `;
    about = document.querySelectorAll('.about>ul>li');
    dropdown = document.querySelectorAll('.dropdown');
    for(let i = 0; i < about.length; i++){
        let li = about[i];

        let drop = dropdown[i];

        li.value = i;
      
        li.addEventListener(
            'click',
            (event) => {
                drop.style.display = visibility[i];
                console.log('this is working');
                show(event);
            });
    }
  
    router.updatePageLinks();
}

function handelNavigation(activePage){
    newState.active = activePage;

    render(newState); // eslint-disable-line
}

router
    .on('/:page',(params) => handelNavigation(params.page))
    .on('/', () => handelNavigation('Home'))
    .resolve();


axios
    .get('http://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        newState.posts = response.data;
        render(newState);
    });