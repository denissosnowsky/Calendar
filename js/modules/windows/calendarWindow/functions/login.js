import store from "../../../store/store";
import { Admin, User } from "../../../store/userClasses";


let logedUser;

function login(){
    const memberList = document.querySelector('.loginWindow__window-selection-listInput-list'),
        listBtn = document.querySelector('.loginWindow__window-selection-listInput-button'),
        loginWindow = document.querySelector('.loginWindow'),
        listBtnText = document.querySelector('.loginWindow__window-selection-listInput-button-text'),
        listBtnTextSpan = document.querySelector('.loginWindow__window-selection-listInput-button-text span'),
        listBtnArrow = document.querySelector('.loginWindow__window-selection-listInput-button-arrow'),
        confirmBtn = document.querySelector('.loginWindow__window-answers-confirm'),
        createBtn = document.querySelector('.calendarWindow__wrapper-header-addButton-button');
    let listItemsOfMembersInCalendar,
        nameInTheCalendar,
        widthOfNameInTheCalendar,
        widthOfNameInTheCalendarWithoutPX;

    class MemberList{
        constructor(name, parent, value){
            this.name = name;
            this.parent = parent;
            this.value = value;
        }
        render() {
            const name = document.createElement('div');
            name.classList.add("loginWindow__window-selection-listInput-list-person");
            name.innerHTML = `
                    <span>${this.name}</span>
            `;
            this.parent.append(name);
        }
    }

    store.members.forEach((item, i)=>{
        new MemberList(item, memberList).render();
        listItemsOfMembersInCalendar = document.querySelectorAll('.loginWindow__window-selection-listInput-list-person');
        nameInTheCalendar = document.querySelectorAll('.loginWindow__window-selection-listInput-list-person')[0];
        widthOfNameInTheCalendar = window.getComputedStyle(nameInTheCalendar).height;
        widthOfNameInTheCalendarWithoutPX = widthOfNameInTheCalendar.replace(/\D/g, '');
    });

    if(memberList.querySelectorAll('div').length>3){
        memberList.style.height = widthOfNameInTheCalendarWithoutPX*3 + "px";
        memberList.style.overflow = "auto";
    }

    listBtn.addEventListener('click', ()=>{
        memberList.classList.toggle('activeBlock');
    });
    
    loginWindow.addEventListener('click', (e)=>{
        if(e.target && e.target!=listBtn && e.target!=listBtnText && e.target!=listBtnTextSpan && e.target!=listBtnArrow){
            memberList.classList.remove('activeBlock');    
        }
        listItemsOfMembersInCalendar.forEach((el, i)=>{
            if(e.target==el || e.target==el.querySelector('span')){
                listBtnTextSpan.innerHTML=el.querySelector('span').innerHTML;
            }
        });

    });



    confirmBtn.addEventListener('click', ()=>{
        let chosenName = listBtnTextSpan.innerHTML;
        if(chosenName.length>0){
            if(store.admins.indexOf(chosenName)!=-1){
                logedUser = new Admin(chosenName);
                logedUser.createEvent();
            }else{
                logedUser = new User(chosenName);
                createBtn.style.opacity = '.5';
            }
            loginWindow.style.display = 'none';
        }
    });
    
}

export default login;
export {logedUser};