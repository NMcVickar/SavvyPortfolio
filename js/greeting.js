var welcomeUser = function welcomeUser(){
    var userName = prompt('What is you\'re Designation User?');

    if(userName === ''){
        welcomeUser();
    }
    else{
        alert('Welcome to my Page, ' + userName);
    }
};

welcomeUser();

