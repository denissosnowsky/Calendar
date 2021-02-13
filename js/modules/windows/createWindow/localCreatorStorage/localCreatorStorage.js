export const localCreatorStorage={
    membersStorage: [],
    chosenSlotStorage: []
};

export function fillMembersStorage(members){
    localCreatorStorage.membersStorage = [...members];
}

export function emptyMembersStorage(){
    localCreatorStorage.membersStorage = [];
}

export function pushMembersStorage(pushedElement){
    localCreatorStorage.membersStorage.push(pushedElement);
}

export function chosenSlotStorageFirstId(id){
    localCreatorStorage.chosenSlotStorage[0]=id;
}

export function chosenSlotStorageSecondId(id){
    localCreatorStorage.chosenSlotStorage[1]=id;
}

export function emptyChosenSlotStorage(){
    localCreatorStorage.chosenSlotStorage=[];
}

