import { fromStringToObject, getData } from "../../../api";
import { logedUser } from "../calendarWindow";
import filterMembers from "./filterMembers";
import Vaults from "./vaultsClass";

function renderTheCalendar(){
    const vaultsWrapper = document.querySelector('.calendarWindow__wrapper-content-vaults');
    let vaultsHolders = document.querySelectorAll('.calendarWindow__wrapper-content-vaults-order'),
        display;

    vaultsHolders.forEach(item=>{
        item.remove();
    })

    getData('events')
    .then(events=>{
        events.forEach(obj=>{
            let newObj = fromStringToObject(obj.data);
            if(newObj.isOrdered){
                display = "grid";
            } else {
                display = "none";
            }
            new Vaults(vaultsWrapper, newObj.text, newObj.isOrdered, display, newObj.id).render();
        });
        filterMembers();
        if(logedUser){
            logedUser.deleteTheEvent();
            logedUser.moveTheEvent();
        }
    });
    
}

export default renderTheCalendar;