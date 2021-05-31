const Modal = {
    open(){
        document
            .querySelector('.modal')
            .classList
            .add('active');

        console.log("Clicado");
    },
    close(){
        document
            .querySelector('.modal')
            .classList
            .remove('active');
    }
} 
