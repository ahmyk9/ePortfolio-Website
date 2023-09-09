//service_m79iba7 service id
//template id template_k6h6fif
// key 


let isModalOpen = false;
let contrastToggle = false;




function toggleContrast(){
    contrastToggle = !contrastToggle;
    if (contrastToggle){
        document.body.classList += " dark-theme"

    }
    else{
        document.body.classList.remove("dark-theme")
    }


}


function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_m79iba7',
            'template_k6h6fif', 
            event.target,
            '9q8O9v7mpnCW-sjga'
        ).then(()=> {
            // throw new Error("error"); //troubleshooting - forces an error
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is down. Please contact directly! ahmedkhilji99@gmail.com"
            );
        })
}


function toggleModal(){
    // toggleModal
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }

        isModalOpen = true;
        document.body.classList += " modal--open"

        //Scroll to the very top of the page
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 

        
}



