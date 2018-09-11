import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Bnav from './components/Bnav';
import Greeting from './js/greeting';
import * as State from './store';

var root = document
    .querySelector('#root');

var tog = 0;

function handelNavigation(event){
    var newState = State;

    newState.active = event.target.textContent;

    event.preventDefault();


    render(newState); // eslint-disable-line
}

function render(state){
    var links;

    document;
    root.innerHTML = `
            ${Navigation(state[state.active])}
            ${Header(state[state.active])}
            ${Content(state[state.active])}
            ${Footer()}
            ${Bnav()}
 `;
    links = document.querySelectorAll('#navigation a');

    for(let i = 0; i < links.length; i++){
        links[i]
            .addEventListener(
                'click',
                handelNavigation
            )
        ;
    }
}
render(State);

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


Greeting();
showKnow();