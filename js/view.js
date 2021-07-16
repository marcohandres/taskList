import AddTask from "./components/addTask.js";
import Modal from "./components/modal.js";

export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addTaskForm = new AddTask();
        this.modal = new Modal();

        this.addTaskForm.onClick((title, description) => this.addTask(title, description));
        this.modal.onClick((id, values) => this.editTask(id, values));
    }

    setModel(model){
        this.model = model;
    }
    render(){
        const TASKS = this.model.getTasks();
        TASKS.forEach(task => this.createTask(task));
    }

    addTask(title, description){
        const TASK = this.model.addTask(title, description);
        this.createTask(TASK);
    }
    completeTask(id){
        this.model.completeTask(id);
    }
    editTask(id, values){
        this.model.editTask(id, values);
        const ROW = document.getElementById(id);
        ROW.children[0].innerText = values.title;
        ROW.children[1].innerText = values.description;
        ROW.children[2].children[0].checked = values.completed;
    }

    removeTask(id){
        this.model.removeTask(id);
        document.getElementById(id).remove();

    }

    createTask(task){
        const ROW = this.table.insertRow();
        ROW.setAttribute('id', task.id);
        ROW.innerHTML=`
            <td>
                ${task.title}
            </td>
            <td>
                ${task.description}
            </td>
            <td class="text-center">
               
            </td>
            <td class="text-right">
                
            </td>
        `;
    
        const CHECKBOX = document.createElement('input');
        CHECKBOX.type= 'checkbox';
        CHECKBOX.checked = task.completed;
        CHECKBOX.onclick = () => this.completeTask(task.id);
        ROW.children[2].appendChild(CHECKBOX);

        const EDITBTN = document.createElement('button');
        EDITBTN.classList.add('btn', 'btn-primary', 'mb-1');
        EDITBTN.innerHTML = '<i class="fa fa-pencil"></i>';
        EDITBTN.onclick = () => this.modal.setValues(task);
        EDITBTN.setAttribute('data-toggle', 'modal');
        EDITBTN.setAttribute('data-target', '#modal');
        ROW.children[3].appendChild(EDITBTN);

        const REMOVEBTN = document.createElement('button');
        REMOVEBTN.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        REMOVEBTN.innerHTML = '<i class="fa fa-trash"></i>';
        REMOVEBTN.onclick = () => this.removeTask(task.id);
        ROW.children[3].appendChild(REMOVEBTN);
    }
}