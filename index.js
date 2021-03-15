document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit',function(event) {        
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
        form.classList.add('was-validated')
    },false);

})

document.querySelector('.navbar .toggle').addEventListener('click',function(event) {
    const navLinks = document.querySelector('.navbar .nav-links');    
    if(navLinks.classList.contains('active')){
        navLinks.classList.remove('active');
    }
    else{
        navLinks.classList.add('active');
    }
})

function showSnackbar() {    
    var x = document.getElementById("snackbar");      
    x.className = "show";    
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
