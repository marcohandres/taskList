export default class Alert{
    constructor(id){
         this.alert = document.getElementById(id);
    }
    show(message){
        this.alert.classList.remove('d-none');
        this.alert.innerText = message;
    }
    hide(){
        this.alert.classList.add('d-none');
    }
}