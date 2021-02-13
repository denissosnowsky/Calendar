import cancelButton from "./buttons/cancelButton";
import createButton from "./buttons/createButton";
import inputButton from "./buttons/inputButton";
import listButtons from "./buttons/listButtons";
import errorRender from "./functions/errorRender";


function creationComponent(){
    listButtons();
    inputButton();
    errorRender();
    cancelButton();
    createButton();    
}

export default creationComponent;