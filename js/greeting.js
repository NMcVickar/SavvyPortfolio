export default function welcomeUser(){
    var userName = prompt('What is you\'re Designation User?');

    if(userName === ''){
        welcomeUser();
    }
    else{
        // alert('Welcome to my Page, ' + userName);
        document.querySelector('#greeting').textContent = `<h3>Welcome to my test page, ${userName} </h3>`;
    }
}
