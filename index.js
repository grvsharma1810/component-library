// function ValidateEmail(mail){
//     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
//         return true
//     }    
//     return false
// }


// function valid(field){
//     console.log(field.type);        
//     if(field.type === 'text' || field.type === 'number' || field.type === 'password'){
//         if(field.value === undefined || (field.value.length === 0 && field.getAttribute('required') === 'required')){
//             return false;
//         }
//         return true;
//     }
//     else if(field.type === 'email'){        
//         if(field.value === undefined || (!ValidateEmail(field.value) && field.getAttribute('required') === 'required')){
//             return false;
//         }
//         return true;
//     }
//     else if(field.type === 'select-one'){  
//         if(field.value === undefined || ((field.value === '' || String.toLowerCase(field.value) === "choose") && field.getAttribute('required') === 'required')){
//             return false;
//         }
//         return true;
//     }   
//     else if(field.type === 'checkbox'){  
//         if(field.value === undefined || (field.checked === false && field.getAttribute('required') === 'required')){
//             return false;
//         }
//         return true;
//     }    
//     return true;
// }

document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit',function(event) {        
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
        form.classList.add('was-validated')
        // let formFields = event.target.querySelectorAll("form input, form textarea, form select");                       
        // formFields.forEach(formField => {
        //     // console.log(formField.parentElement);            
        //     if(formField != undefined && formField != null && valid(formField)){
        //         //console.log("VALID",formField);
        //         let successMessage = formField.parentElement.querySelector('.success-msg');
        //         let errorMessage = formField.parentElement.querySelector('.error-msg');
        //         if(successMessage !== undefined && successMessage != null ){
        //             successMessage.style.display = 'block';                                        
        //         }
        //         if(errorMessage !== undefined && errorMessage != null){                    
        //             errorMessage.style.display = 'none';
        //         }
        //     }
        //     else{
        //         //console.log("INVALID",formField);
        //         let successMessage = formField.parentElement.querySelector('.success-msg');
        //         let errorMessage = formField.parentElement.querySelector('.error-msg');
        //         if(successMessage !== undefined && successMessage != null ){
        //             successMessage.style.display = 'none';                                        
        //         }
        //         if(errorMessage !== undefined && errorMessage != null){                    
        //             errorMessage.style.display = 'block';
        //         }
        //     }
        // })
    },false);
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