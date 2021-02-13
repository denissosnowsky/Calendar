import store, { fillTheVault } from "../../../store/store";
import renderTheCalendar from "../../calendarWindow/functions/renderTheCalendar";
import clearTheForm from "../functions/clearTheForm";
import openErrorWindow from "../functions/openErrorWindow";
import { localCreatorStorage } from "../localCreatorStorage/localCreatorStorage";

function createButton(){
    const createBtn = document.querySelector('.creatorWindow__wrapper-approval-create');
    let nameOfTheEvent = document.querySelector('.creatorWindow__wrapper-creation-button-inner-input'),
        chosenSlotId;

    createBtn.addEventListener('click', ()=>{
        if(nameOfTheEvent.value==""){
            openErrorWindow("name");
        }else if(localCreatorStorage.membersStorage.length==0){
            openErrorWindow("members");
        }else if (!localCreatorStorage.chosenSlotStorage[1]){
            openErrorWindow("day");
        }else if(!localCreatorStorage.chosenSlotStorage[0]){
            openErrorWindow("time");
        }else{
            chosenSlotId = localCreatorStorage.chosenSlotStorage[0]+localCreatorStorage.chosenSlotStorage[1];
    
            store.state.forEach((item, i)=>{
                if(item.id==chosenSlotId){
                    if(item.isOrdered==true){
                        openErrorWindow("slot");
                    }else{
                        fillTheVault(item, nameOfTheEvent.value, localCreatorStorage.membersStorage);
                        clearTheForm();
                        renderTheCalendar();
                    }
                }
            });
        }
    });
}

export default createButton;