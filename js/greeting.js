var welcomeUser = function welcomeUser(){
    var userName = prompt('What is you\'re Designation User?');

    if(userName === ''){
        welcomeUser();
    }
    else{
        // alert('Welcome to my Page, ' + userName);
        document.querySelector('#greeting').innerHTML = `<h3>Welcome to my Portfolio page, ${userName} </h3>`;
    }
};


welcomeUser();