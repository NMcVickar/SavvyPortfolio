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

var tog = [ false, false, false ];
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
            ${Content(state[state.active])}
            ${Footer()}
            ${Bnav()}
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
    var newState = Object.assign({}, State);

    newState.active = activePage;

    render(newState); // eslint-disable-line
}


// function showKnow(){
//     console.log(tog);
//     if(tog === 0){
//         document.querySelector('.about li')
//             .addEventListener(
//                 'click',
//                 () => {
//                     console.log('click', tog);
//                     document.querySelector('.about ul ul').style.display = 'block';
//                     console.log('this is working');
//                     tog = 1;
//                 }
//             );
//     }
//     else if(tog === 1){
//         document.querySelector('.about li')
//             .addEventListener(
//                 'click',
//                 () => {
//                     console.log('click else');
//                     document.querySelector('.about ul ul').style.display = 'none';
//                     console.log('this is not working');
//                     tog = 0;
//                 }
//             );
//     }
// }
// document.querySelectorAll('.about li')[1]
//     .addEventListener(
//         'click',
//         () => {
//             document.querySelector('.about ul ul').style.display = 'block';
//             console.log('this is working');
//         }
//     );


// document.querySelector('.about li')[2]
//     .addEventListener(
//         'click',
//         () => {
//             document.querySelector('.about ul ul').style.display = 'block';
//             console.log('this is working');
//         }
//     );

router
    .on('/:page',(params) => handelNavigation(params.page))
    .on('/', () => handelNavigation('Home'))
    .resolve();
    

// Greeting();
// showKnow();