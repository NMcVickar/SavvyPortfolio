export default function welcomeUser(state){
    var userName = prompt("What is you're Designation User?");

    if(userName === ''){
        welcomeUser(state);
    }
    else{
        // alert('Welcome to my Page, ' + userName);
        document.querySelectorAll('#greeting').textContent = 'Welcome to my test page, ' + userName;
    }
}