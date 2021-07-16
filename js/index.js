import Model from './model.js';
import View from './view.js';

document.addEventListener("DOMContentLoaded",() => {
    //instanciamos modelos
    const MODEL = new Model();
    const VIEW = new View();
    MODEL.setView(VIEW);
    VIEW.setModel(MODEL);
    VIEW.render();
});