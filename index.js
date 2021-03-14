document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit',function(event) {        
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
        form.classList.add('was-validated')
    },false);

})

document.querySelector('.toggle').addEventListener('click',function(event) {
    document.querySelectorAll('nav .item').forEach(navItem => {   
        console.log(navItem.classList)     ;
        if(navItem.classList.contains('active')){
            navItem.classList.remove('active');
        }
        else{
            navItem.classList.add('active');
        }
    })
})


// document.querySelector('.launch-modal').addEventListener('click',function(event) {
//     document.querySelector('.modal-bg').classList.add('modal-active')    
// })

// document.querySelector('.modal-bg .btn-dismiss').addEventListener('click',function(event) {
//     document.querySelector('.modal-bg').classList.remove('modal-active')
// })
