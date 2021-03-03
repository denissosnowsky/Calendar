import { fromStringToObject, getData, putData } from "../../../api";
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
            
            getData('events')
            .then(events=>{
                events.forEach(obj=>{
                    let newObj = fromStringToObject(obj.data);
                    if(newObj.id==chosenSlotId){
                        if(newObj.isOrdered==true){
                            openErrorWindow("slot");
                        }else{
                            let eId = obj.id;
                            let newPh = localCreatorStorage.membersStorage.join("','");
                            let filledObj = JSON.stringify({data:`{id:${newObj.id},isOrdered:true,text:'${nameOfTheEvent.value}',members:['${newPh}']}`,id:"string"});
                            putData(`events/${eId}`, filledObj)
                                .then(()=>{
                                    renderTheCalendar();
                                    clearTheForm();
                                });
                        }
                    }
                });
            });

        }
    });
}

export default createButton;