export default class Model{
    constructor(){
        this.view = null;
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        if( !this.tasks || this.tasks.length<1 ){
            this.tasks=[
                {
                    id: 0,
                    title: 'Crear lista de tareas',
                    description: 'Ver tutoriales de JavaScript',
                    completed: true,
                }
            ]
            this.currentId=1;
        }else{
            this.currentId = this.tasks[this.tasks.length - 1].id + 1;
        }
        
    }
    setView(view){
        this.view = view;
    }
    save(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    findTask(id){
        return this.tasks.findIndex((TASK) => TASK.id === id);
    }
    completeTask(id){
        const INDEX = this.findTask(id);
        const TASK = this.tasks[INDEX];
        TASK.completed = !TASK.completed;
        this.save();
        console.log(this.tasks);
    }
    editTask(id, values){
        const INDEX = this.findTask(id);
        Object.assign(this.tasks[INDEX], values);
        this.save();
    }
    getTasks(){
        return this.tasks;
    }
    addTask(title, description){
        const TASK = {
            id: this.currentId++,
            title,
            description,
            completed: false,
        }
        this.tasks.push(TASK);
        console.log(this.tasks);

        //retorno un clon del objeto para que nadie mueva el modelo
        //objeto rest
        this.save();
        return {...TASK}
    }
    removeTask(id){
        const INDEX = this.findTask(id);
       this.tasks.splice(INDEX, 1);
       this.save();
    }

}