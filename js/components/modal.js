import Alert from "./alert.js";
export default class Modal{
    constructor(){
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.completed = document.getElementById('modal-completed');
        this.btnSave = document.getElementById('modal-btn');
        this.task = null;
        this.alert = new Alert('modal-alert');
    }
    setValues(task){
        this.task= task;
        this.title.value = task.title;
        this.description.value = task.description;
        this.completed.checked = task.completed;
    }

    onClick(callback){
        this.btnSave.onclick=()=>{
            if(!this.title.value || !this.description.value){
               this.alert.show('El título y la descripción son requeridos');
            }else{
                this.alert.hide();
                $('#modal').modal('toggle');
                callback(this.task.id, {
                    title: this.title.value,
                    description: this.description.value,
                    completed: this.completed.checked,
                })
            }
        }
    }


}