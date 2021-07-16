import Alert from "./alert.js";
export default class AddTask{
    constructor(){
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
        this.alert = new Alert('alert');
    }
    onClick(callback){
        this.btn.onclick=()=>{
            if(this.title.value === '' || this.description.value === ''){
               this.alert.show('El título y la descripción son requeridos');
            }else{
                this.alert.hide();
                callback(this.title.value, this.description.value);
            }
        }
    }

}