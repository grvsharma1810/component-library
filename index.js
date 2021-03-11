document.querySelectorAll('.do-validation').forEach(forms => {
    forms.addEventListener('submit',function(event) {
        event.preventDefault();
        event.stopPropagation();
        let formFields = event.target.querySelectorAll("form input, form textarea, form select");        
        formFields.forEach(formField => {
            console.log(formField.value);
        })
    })
    // inpEl.addEventListener('input', () => {
    //     console.log("Hi");
    //     inpEl.parentElement.removeAttribute('data-error')
    // })
})
// (function () {
//     'use strict'

//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')

//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//         .forEach(function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (!form.checkValidity()) {
//                 event.preventDefault()
//                 event.stopPropagation()
//                 }

//                 form.classList.add('was-validated')
//             }, false)
//         })
// })()