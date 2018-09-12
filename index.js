import Navigo from 'navigo';
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

var tog = 0;


function render(state){
    console.log('router ->',  router);

    document;
    root.innerHTML = `
            ${Navigation(state[state.active])}
            ${Header(state[state.active])}
            ${Content(state[state.active])}
            ${Footer()}
            ${Bnav()}
 `;

    router.updatePageLinks();
}

function handelNavigation(activePage){
    var newState = Object.assign({}, State);

    newState.active = activePage;

    render(newState); // eslint-disable-line
}

function showKnow(){
    if(tog === 0){
        document.querySelectorAll('.about li')[0]
            .addEventListener(
                'click',
                () => {
                    document.querySelector('.about ul ul').style.display = 'block';
                    console.log('this is working');
                    tog = 1;
                }
            );
    }
    else if(tog !== 0){
        document.querySelector('.about ul ul').style.display = 'none';
        console.log('this is not working');
        tog = 0;
    }
}
router
    .on('/:page',(params) => handelNavigation(params.page))
    .on('/', () => handelNavigation('Home'))
    .resolve();
    
// about[1]
//     .addEventListener(
//         'click',
//         (event) => {
//             document.querySelector('.about ul ul').style.display = 'block';
//             console.log('this is working');
//         }
//     )
// ;
// about[2]
//     .addEventListener(
//         'click',
//         (event) => {
//             document.querySelector('.about ul ul').style.display = 'block';
//             console.log('this is working');
//         }
//     )

// Greeting();
showKnow();
