import { fromStringToArray, getData } from "../../../api";

export const localCalendarStorage = {
    membersStorage: []
}

getData('members')
    .then((json) => json[0].data)
    .then((data)=>fromStringToArray(data))
    .then((members)=>{
        localCalendarStorage.membersStorage=[...members];
    });



export function fillMembersStorage(members){
    localCalendarStorage.membersStorage = [...members];
}

export function emptyMembersStorage(){
    localCalendarStorage.membersStorage = [];
}

export function pushMembersStorage(pushedElement){
    localCalendarStorage.membersStorage.push(pushedElement);
}


