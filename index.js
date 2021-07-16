
const BTN_ADD = document.getElementById('add');
const INP_TITLE = document.getElementById('title');
const INP_DESCIPTION = document.getElementById('description');
const TABLE = document.getElementById('table');
const ALERT = document.getElementById('alert');
let id = 1;

function removeTask(id){
    console.log(id);
    document.getElementById(id).remove();
}

function addTask(){
    if(INP_TITLE.value === '' || INP_DESCIPTION.value === ''){
        // console.error('Algún campo esta vacio');
        ALERT.classList.remove('d-none');
        ALERT.innerText = 'El título y la descripción son requeridos';
        return;
    }

    ALERT.classList.add('d-none');
    const ROW = TABLE.insertRow();
    ROW.setAttribute('id', id++);
    ROW.innerHTML=`
        <td>
            ${INP_TITLE.value}
        </td>
        <td>
            ${INP_DESCIPTION.value}
        </td>
        <td class="text-center">
            <input type="checkbox">
        </td>
        <td class="text-right">
            <button class="btn btn-primary mb-1">
            <i class="fa fa-pencil"></i>
            </button>
        </td>
    `;

    const REMOVEBTN = document.createElement('button');
    REMOVEBTN.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
    REMOVEBTN.innerHTML = '<i class="fa fa-trash"></i>';
    REMOVEBTN.onclick = function(e){
        removeTask(ROW.getAttribute('id'));
    }
    ROW.children[3].appendChild(REMOVEBTN);
    
}

BTN_ADD.onclick =addTask;
