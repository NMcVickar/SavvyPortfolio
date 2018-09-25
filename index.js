import Navigo from 'navigo';
import Axios from 'axios';
import Victor from 'victor';
import MouseMove from './components/MouseMove';
import Game from './components/Dots';
import Navigation from './components/Navigation';
import Greeter from './components/Greeter';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Bnav from './components/Bnav';
import store from './store/Store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var greeter = new Greeter(store.dispatch.bind(store));


// The vars below are for the dropdown lits
var tog = [ true, true, true ];
var visibility = [ 'none', 'none', 'none' ];
var about;
var dropdown;


function show(event){
    tog[event.target.value] = !tog[event.target.value];
    visibility[event.target.value] === 'none'
        ? (visibility[event.target.value] = 'block')
        : (visibility[event.target.value] = 'none');
}

function render(state){
    var state = store.getState();

    root.innerHTML = `
            ${Navigation(state[state.active])}
            ${Header(state)}
            ${Content(state)}
            ${Footer(state)}
            ${Bnav(state[state.active])}
 `;

    greeter.render(root);

    about = document.querySelectorAll('.about>ul>li');
    dropdown = document.querySelectorAll('.dropdown');
    for(let i = 0; i < about.length; i++){
        let li = about[i];

        let drop = dropdown[i];

        li.value = i;

        li.addEventListener('click', (event) => {
            drop.style.display = visibility[i];
            console.log('this is working');
            show(event);
        });
    }

    router.updatePageLinks();

    var i = 0;

    while(i > 20){
        Game();
        i++;
    }
}

function handelNavigation(activePage){
    store.dispatch((state) => Object.assign(state, { 'active': activePage }));
}


router
    .on('/:page', (params) => handelNavigation(params.page))
    .on('/', () => handelNavigation('Home'))
    .resolve();

Axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    store.dispatch((state) => {
        state.posts = response.data;

        return state;
    });
});

Axios.get('http://api.openweathermap.org/data/2.5/weather?q=Belleville,62223&APPID=94f1c8fc237e5c6513b5c800e4c67e16')
    .then((response) => {
        store.dispatch((state) => {
            state.Weather = response.data;

            return state;
        });
    });

Axios.get('https://api.github.com/users/nmcvickar/repos',{
    'Headers': {
        'Authorization': `token ${process.env.GITHUB_API_KEY}` //eslint-disable-line
    }
})
    .then((response) => {
        store.dispatch((state) => {
            state.repos = response.data;

            return state;
        });
    });


store.addStateListener(render);


// Greeting();
