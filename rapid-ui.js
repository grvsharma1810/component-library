
export function formSubmit(event) {
    const form = event.target;
    console.log(form)
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }
    form.classList.add('was-validated')
}

export function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal.classList.contains('active')) {
        modal.classList.remove('active')
    }
    else {
        modal.classList.add('active')
    }
}

export function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal.classList.contains('active')) {
        modal.classList.remove('active')
    }
    else {
        modal.classList.add('active')
    }
}

// document.querySelector('.navbar .toggle').addEventListener('click',function(event) {
//     const navLinks = document.querySelector('.navbar .nav-links');    
//     if(navLinks.classList.contains('active')){
//         navLinks.classList.remove('active');
//     }
//     else{
//         navLinks.classList.add('active');
//     }
// })

export function showToast(toastId) {
    const x = document.getElementById(toastId);
    x.classList.add('show')
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

export function check(navId) {
    const navLinks = document.getElementById(navId).querySelector('.nav-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active')
    }
    else {
        navLinks.classList.add('active')
    }
    // event.target.parentElement.parentElement
}