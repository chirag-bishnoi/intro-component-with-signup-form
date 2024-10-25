const form = document.getElementById('form');
let emailPlaceholder = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();
    const firstName = form['first-name'].value;
    const lastName = form['last-name'].value;
    const email = form['email'].value;
    const password = form['password'].value;
    
    if(firstName === ""){
        addError('first-name', 'First Name cannot be empty')
    }else{
        removeError('first-name')
    }

    if(lastName === ""){
        addError('last-name', 'Last Name cannot be empty')
    }else{
        removeError('last-name')
    }

    if(email === ""){
        addError('email', 'Email cannot be empty');
    } else if(!isValid(email)){
        addError('email', 'Looks like this is not an email');
        emailPlaceholder.placeholder = "email@example.com";
    } else{
        removeError('email')
        emailPlaceholder.placeholder = "Email Address";
    }

    if(password === ""){
        addError('password', 'Password cannot be empty')
    }else{
        removeError('password')
    }
} );

function addError(field, message){
    const label = form[field].parentNode;
    label.classList.add('show');
    const msg = form[field].parentNode.querySelector('.error');
    msg.innerText = message;
}

function removeError(field){
    const label = form[field].parentNode;
    label.classList.remove('show');
}

function isValid(email){
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    return pattern.test(String(email).toLowerCase());
}