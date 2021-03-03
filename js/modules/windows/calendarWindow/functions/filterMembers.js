import { fromStringToObject, getData } from "../../../api";
import { localCalendarStorage } from "../localCalendarStorage/localCalendarStorage";

function filterMembers(){
    const calendarWindow = document.querySelector('.calendarWindow');
    let vaultsHolders = document.querySelectorAll('.calendarWindow__wrapper-content-vaults-order');

    vaultsHolders.forEach((item)=>{
        item.querySelector('.calendarWindow__wrapper-content-vaults-order-appeared').style.display="none";
    });
    getData('events')
    .then(events=>{
        events.forEach(obj=>{
            let newObj = fromStringToObject(obj.data);
            if(localCalendarStorage.membersStorage.some(name=>newObj.members.indexOf(name)!=-1)){
                calendarWindow.querySelector(`[id="${newObj.id}"]`).querySelector('.calendarWindow__wrapper-content-vaults-order-appeared').style.display="grid";
            }
        })
    });
}

export default filterMembers;