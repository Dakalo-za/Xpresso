const form = document.getElemenetById('form')
const name = document.getElementById('name');
const email = document.getElementById('email');
const date =  document.getElementById('date');
const time = document.getElementById('time');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

/* function for receives an html element and error message */
const error = (element, message) => {
    const inputControl = element.parentElement;
    const errordisplay = inputControl.querySelector('.error')

    errordisplay.innertext = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('.success')
}

const success = (element, message) => {
    const inputControl = element.parentElement;
    const displaysuccess = inputControl.querySelector('.error');

    displaysuccess.iinnertext = '';
    inputControl.classList.add('.success')
    inputControl.classList.remove('.error')
}

/* validate email */
const validEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const dateValue = date.value.trim();
    const timeValue = time.value.trim();

    if (nameValue === '' || nameValue === null) {
        error(name, "Name is required")
    }
    else {
        success(name)
    }

    if (emailValue === '' || emailValue === null){
        error(email, "Email is required")
    }
    else if (validEmail(emailValue)){
        error(email, "Provide a valid email address")
    }
    else {
        success(email)
    }

    if (dateValue === '') {
        error(date, "Date is required")
    }
    else {
        success(date)
    }
    

    if (timeValue === '') {
        error(time, "Time is required")
    }
    else {
        success(time)
    }
}