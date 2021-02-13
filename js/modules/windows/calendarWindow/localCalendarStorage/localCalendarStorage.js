import store from "../../../store/store";

export const localCalendarStorage = {
    membersStorage: [...store.members]
}

export function fillMembersStorage(members){
    localCalendarStorage.membersStorage = [...members];
}

export function emptyMembersStorage(){
    localCalendarStorage.membersStorage = [];
}

export function pushMembersStorage(pushedElement){
    localCalendarStorage.membersStorage.push(pushedElement);
}


