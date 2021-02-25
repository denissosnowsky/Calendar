import deleteEvent from "../windows/calendarWindow/functions/deleteEvent";
import newEventButton from "../windows/calendarWindow/buttons/newEventButton";
import moveVaults from "../windows/calendarWindow/functions/moveVaults";



export class User{
    constructor(name){
        this.name = name;
    }
    createEvent(){
        console.log('no authority for the operation');
    }
    deleteTheEvent(){
        console.log('no authority for the operation');
    }
    moveTheEvent(){
        console.log('no authority for the operation');
    }
}

export class Admin extends User{
    constructor(name){
        super(name)
    }
    createEvent(){
        newEventButton();
    }
    deleteTheEvent(){
        deleteEvent();
    }
    moveTheEvent(){
        moveVaults();
    }
}