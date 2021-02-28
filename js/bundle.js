/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/store/store.js":
/*!***********************************!*\
  !*** ./js/modules/store/store.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyTheVault": () => (/* binding */ emptyTheVault),
/* harmony export */   "fillTheVault": () => (/* binding */ fillTheVault),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const store = {
    state: [
        {
            id: 11,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 12,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 13,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 14,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 15,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 21,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 22,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 23,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 24,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 25,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 31,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 32,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 33,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 34,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 35,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 41,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 42,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 43,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 44,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 45,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 51,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 52,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 53,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 54,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 55,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 61,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 62,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 63,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 64,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 65,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 71,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 72,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 73,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 74,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 75,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 81,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 82,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 83,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 84,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 85,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 91,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 92,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 93,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 94,
            isOrdered: false,
            text: "",
            members: []
        },
        {
            id: 95,
            isOrdered: false,
            text: "",
            members: []
        }
    ],
    members: ["Dmitry", "Oleg", "Maria", "Natalia", "Artem", "Denis", "Inna"],
    admins: ["Denis", "Inna"]
};

function emptyTheVault(vault){
    vault.isOrdered=false;
    vault.text="";
    vault.members=[];
}

function fillTheVault(vault, text, members){
    vault.isOrdered = true;
    vault.text = text;
    vault.members = [...members];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./js/modules/store/userClasses.js":
/*!*****************************************!*\
  !*** ./js/modules/store/userClasses.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User),
/* harmony export */   "Admin": () => (/* binding */ Admin)
/* harmony export */ });
/* harmony import */ var _windows_calendarWindow_functions_deleteEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../windows/calendarWindow/functions/deleteEvent */ "./js/modules/windows/calendarWindow/functions/deleteEvent.js");
/* harmony import */ var _windows_calendarWindow_buttons_newEventButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../windows/calendarWindow/buttons/newEventButton */ "./js/modules/windows/calendarWindow/buttons/newEventButton.js");
/* harmony import */ var _windows_calendarWindow_functions_moveVaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../windows/calendarWindow/functions/moveVaults */ "./js/modules/windows/calendarWindow/functions/moveVaults.js");






class User{
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

class Admin extends User{
    constructor(name){
        super(name)
    }
    createEvent(){
        (0,_windows_calendarWindow_buttons_newEventButton__WEBPACK_IMPORTED_MODULE_1__.default)();
    }
    deleteTheEvent(){
        (0,_windows_calendarWindow_functions_deleteEvent__WEBPACK_IMPORTED_MODULE_0__.default)();
    }
    moveTheEvent(){
        (0,_windows_calendarWindow_functions_moveVaults__WEBPACK_IMPORTED_MODULE_2__.default)();
    }
}

/***/ }),

/***/ "./js/modules/windows/calendarWindow/buttons/memberListButton.js":
/*!***********************************************************************!*\
  !*** ./js/modules/windows/calendarWindow/buttons/memberListButton.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/store */ "./js/modules/store/store.js");
/* harmony import */ var _functions_filterMembers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/filterMembers */ "./js/modules/windows/calendarWindow/functions/filterMembers.js");
/* harmony import */ var _localCalendarStorage_localCalendarStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localCalendarStorage/localCalendarStorage */ "./js/modules/windows/calendarWindow/localCalendarStorage/localCalendarStorage.js");





function memberListButton(){
    const listBtn = document.querySelector('.calendarWindow__wrapper-header-listInput-button'),
        listBtnText = document.querySelector('.calendarWindow__wrapper-header-listInput-button-text'),
        listBtnTextSpan = document.querySelector('.calendarWindow__wrapper-header-listInput-button-text span'),
        listBtnArrow = document.querySelector('.calendarWindow__wrapper-header-listInput-button-arrow'),
        memberList = document.querySelector('.calendarWindow__wrapper-header-listInput-list'),
        nameInTheCalendar = document.querySelectorAll('.calendarWindow__wrapper-header-listInput-list-person')[0],
        widthOfNameInTheCalendar = window.getComputedStyle(nameInTheCalendar).height,
        widthOfNameInTheCalendarWithoutPX = widthOfNameInTheCalendar.replace(/\D/g, ''),
        calendarWindow = document.querySelector('.calendarWindow');
    let listItemsOfMembersInCalendar;

    class MemberList{
        constructor(name, parent, value){
            this.name = name;
            this.parent = parent;
            this.value = value;
        }
        render() {
            const name = document.createElement('div');
            name.classList.add("calendarWindow__wrapper-header-listInput-list-person");
            name.innerHTML = `
                    <span>${this.name}</span>
                    <div value=${this.value} type="checkbox" class="calendarWindow__wrapper-header-listInput-list-person-input"></div>
            `;
            this.parent.append(name);
        }
    }

    _store_store__WEBPACK_IMPORTED_MODULE_0__.default.members.forEach((item, i)=>{
        new MemberList(item, memberList).render();
        listItemsOfMembersInCalendar = document.querySelectorAll('.calendarWindow__wrapper-header-listInput-list-person');
        
        listItemsOfMembersInCalendar.forEach((item)=>{
            if(item.querySelector('div')){
                item.querySelector('div').style.backgroundColor = '#ddd';
                item.setAttribute('data-checked',"");
            }
        });
    });

    if(memberList.querySelectorAll('div').length>3){
        memberList.style.height = widthOfNameInTheCalendarWithoutPX*3 + "px";
        memberList.style.overflow = "auto";
    }


    listBtn.addEventListener('click', ()=>{
        memberList.classList.toggle('activeBlock');
    });

    calendarWindow.addEventListener('click', (e)=>{
        if(e.target && e.target!=listBtn && e.target!=listBtnText && e.target!=listBtnTextSpan && e.target!=listBtnArrow && e.target!=memberList){
            memberList.classList.remove('activeBlock');    
        }

        memberList.querySelectorAll('div').forEach((item, j)=>{
            if(e.target==item || e.target==item.querySelector('span')){
                memberList.classList.add('activeBlock');
           }
        });

        if(memberList.classList.contains('activeBlock')){
            let allInputs = memberList.querySelectorAll('.calendarWindow__wrapper-header-listInput-list-person-input');
            let chosenInputs = memberList.querySelectorAll('[data-checked]');

            if(e.target==listItemsOfMembersInCalendar[0] || e.target==listItemsOfMembersInCalendar[0].firstElementChild){
                allInputs = memberList.querySelectorAll('.calendarWindow__wrapper-header-listInput-list-person-input');
                chosenInputs = memberList.querySelectorAll('[data-checked]');
                
                if(chosenInputs.length!=allInputs.length){
                    (0,_localCalendarStorage_localCalendarStorage__WEBPACK_IMPORTED_MODULE_2__.fillMembersStorage)(_store_store__WEBPACK_IMPORTED_MODULE_0__.default.members);
                    listBtnTextSpan.innerHTML="All members";
                    listItemsOfMembersInCalendar.forEach((item)=>{
                        if(item.querySelector('div')){
                            item.querySelector('div').style.backgroundColor = '#ddd';
                            item.setAttribute('data-checked',"");
                        }
                    });
                }else if(chosenInputs.length==allInputs.length){
                    (0,_localCalendarStorage_localCalendarStorage__WEBPACK_IMPORTED_MODULE_2__.emptyMembersStorage)();
                    listBtnTextSpan.innerHTML="";
                    listItemsOfMembersInCalendar.forEach((item)=>{
                        if(item.querySelector('div')){
                            item.querySelector('div').style.backgroundColor = "";
                            item.removeAttribute('data-checked');
                        }
                    });
                }
            }else{
                listItemsOfMembersInCalendar.forEach((item, j)=>{
                    if(e.target==item || e.target==item.firstElementChild || e.target==item.lastElementChild){
                        if(item.getAttribute('data-checked')==null){
                            item.lastElementChild.style.backgroundColor = '#ddd';
                            item.setAttribute('data-checked',"");
                        }else {
                            item.lastElementChild.style.backgroundColor = "";
                            item.removeAttribute('data-checked');
                        }

                        (0,_localCalendarStorage_localCalendarStorage__WEBPACK_IMPORTED_MODULE_2__.emptyMembersStorage)();
                        chosenInputs = memberList.querySelectorAll('[data-checked]');
                        chosenInputs.forEach(item=>{
                            (0,_localCalendarStorage_localCalendarStorage__WEBPACK_IMPORTED_MODULE_2__.pushMembersStorage)(item.firstElementChild.innerHTML);
                        });
        
                        if(_localCalendarStorage_localCalendarStorage__WEBPACK_IMPORTED_MODULE_2__.localCalendarStorage.membersStorage.length==allInputs.length){
                            listBtnTextSpan.innerHTML="All members";
                        }else{
                            listBtnTextSpan.innerHTML=_localCalendarStorage_localCalendarStorage__WEBPACK_IMPORTED_MODULE_2__.localCalendarStorage.membersStorage.join(', ');
                            if(listBtnTextSpan.innerHTML.length>20){
                                listBtnTextSpan.innerHTML=listBtnTextSpan.innerHTML.slice(0, 17)+"...";
                            }
                        }
                    }
                });

            }
            (0,_functions_filterMembers__WEBPACK_IMPORTED_MODULE_1__.default)();
        };
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memberListButton);

/***/ }),

/***/ "./js/modules/windows/calendarWindow/buttons/newEventButton.js":
/*!*********************************************************************!*\
  !*** ./js/modules/windows/calendarWindow/buttons/newEventButton.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function newEventButton(){
    const newEventBtn = document.querySelector('.calendarWindow__wrapper-header-addButton-button'),
        calendarWindow = document.querySelector('.calendarWindow'),
        creatorWindow = document.querySelector('.creatorWindow');

    newEventBtn.addEventListener('click', ()=>{
        calendarWindow.style.display = "none";
        creatorWindow.style.display = "block";
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newEventButton);

/***/ }),

/***/ "./js/modules/windows/calendarWindow/calendarWindow.js":
/*!*************************************************************!*\
  !*** ./js/modules/windows/calendarWindow/calendarWindow.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _buttons_memberListButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/memberListButton */ "./js/modules/windows/calendarWindow/buttons/memberListButton.js");
/* harmony import */ var _functions_renderTheCalendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/renderTheCalendar */ "./js/modules/windows/calendarWindow/functions/renderTheCalendar.js");
/* harmony import */ var _functions_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/login */ "./js/modules/windows/calendarWindow/functions/login.js");

//import newEventButton from "./buttons/newEventButton";




function calendarComponent(){
    (0,_functions_login__WEBPACK_IMPORTED_MODULE_2__.default)();
    (0,_functions_renderTheCalendar__WEBPACK_IMPORTED_MODULE_1__.default)();
    (0,_buttons_memberListButton__WEBPACK_IMPORTED_MODULE_0__.default)();
    //newEventButton();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calendarComponent);

/***/ }),

/***/ "./js/modules/windows/calendarWindow/functions/deleteEvent.js":
/*!********************************************************************!*\
  !*** ./js/modules/windows/calendarWindow/functions/deleteEvent.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/store */ "./js/modules/store/store.js");
/* harmony import */ var _renderTheCalendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTheCalendar */ "./js/modules/windows/calendarWindow/functions/renderTheCalendar.js");



function deleteEvent(){
    const deleteWindow = document.querySelector('.deleteWindow'),
        noAnswer = deleteWindow.querySelector('.deleteWindow__window-answers-no'),
        yesAnswer = deleteWindow.querySelector('.deleteWindow__window-answers-yes'),
        eventNameInTheDeleteWindow = deleteWindow.querySelector('.deleteWindow__window-question-text-span-eventName');

    let deleteButtons = document.querySelectorAll('.calendarWindow__wrapper-content-vaults-order-appeared-image'),
        vaultsHoldersForClosing = document.querySelectorAll('.calendarWindow__wrapper-content-vaults-order');

    deleteButtons.forEach((btn, i)=>{
        btn.addEventListener('click', (e)=>{
            let nameOfEvent;
            store.state.forEach(vault=>{
                if(vault.id==vaultsHoldersForClosing[i].getAttribute('id')){
                    nameOfEvent=vault.text;
                }
            });
            eventNameInTheDeleteWindow.innerHTML = `"${nameOfEvent}"`;
            deleteWindow.style.display="block";
            noAnswer.addEventListener('click', ()=>{
                deleteWindow.style.display="none";
            });
            yesAnswer.addEventListener('click', ()=>{
                store.state.forEach((deletedItem, j)=>{
                    if(deletedItem.id==vaultsHoldersForClosing[i].getAttribute("id")){
                        (0,_store_store__WEBPACK_IMPORTED_MODULE_0__.emptyTheVault)(deletedItem);
                        (0,_renderTheCalendar__WEBPACK_IMPORTED_MODULE_1__.default)();
                    }
                });
                deleteWindow.style.display="none";
            }, {once: true});
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteEvent);

/***/ }),

/***/ "./js/modules/windows/calendarWindow/functions/filterMembers.js":
/*!**********************************************************************!*\
  !*** ./js/modules/windows/calendarWindow/functions/filterMembers.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/store */ "./js/modules/store/store.js");
/* harmony import */ var _localCalendarStorage_localCalendarStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localCalendarStorage/localCalendarStorage */ "./js/modules/windows/calendarWindow/localCalendarStorage/localCalendarStorage.js");



function filterMembers(){
    const calendarWindow = document.querySelector('.calendarWindow');
    let vaultsHolders = document.querySelectorAll('.calendarWindow__wrapper-content-vaults-order');

    vaultsHolders.forEach((item)=>{
        item.querySelector('.calendarWindow__wrapper-content-vaults-order-appeared').style.display="none";
    });
    _store_store__WEBPACK_IMPORTED_MODULE_0__.default.state.forEach((vault, j)=>{
        if(_localCalendarStorage_localCalendarStorage__WEBPACK_IMPORTED_MODULE_1__.localCalendarStorage.membersStorage.some(name=>vault.members.indexOf(name)!=-1)){
            calendarWindow.querySelector(`[id="${vault.id}"]`).querySelector('.calendarWindow__wrapper-content-vaults-order-appeared').style.display="grid";
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterMembers);

/***/ }),

/***/ "./js/modules/windows/calendarWindow/functions/login.js":
/*!**************************************************************!*\
  !*** ./js/modules/windows/calendarWindow/functions/login.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "logedUser": () => (/* binding */ logedUser)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/store */ "./js/modules/store/store.js");
/* harmony import */ var _store_userClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/userClasses */ "./js/modules/store/userClasses.js");




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

    _store_store__WEBPACK_IMPORTED_MODULE_0__.default.members.forEach((item, i)=>{
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
            if(_store_store__WEBPACK_IMPORTED_MODULE_0__.default.admins.indexOf(chosenName)!=-1){
                logedUser = new _store_userClasses__WEBPACK_IMPORTED_MODULE_1__.Admin(chosenName);
                logedUser.createEvent();
            }else{
                logedUser = new _store_userClasses__WEBPACK_IMPORTED_MODULE_1__.User(chosenName);
                createBtn.style.opacity = '.5';
            }
            loginWindow.style.display = 'none';
        }
    });
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);


/***/ }),

/***/ "./js/modules/windows/calendarWindow/functions/moveVaults.js":
/*!*******************************************************************!*\
  !*** ./js/modules/windows/calendarWindow/functions/moveVaults.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/store */ "./js/modules/store/store.js");
/* harmony import */ var _renderTheCalendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTheCalendar */ "./js/modules/windows/calendarWindow/functions/renderTheCalendar.js");



function moveVaults(){
    let appearedValuts = document.querySelectorAll('.calendarWindow__wrapper-content-vaults-order-appeared');
    let vaultsForMoving = document.querySelectorAll('.calendarWindow__wrapper-content-vaults-order');
    
    appearedValuts.forEach((element, i)=>{
        if(element.getAttribute('data-ordered')=="true"){
            element.addEventListener('mousedown', (event)=>{
                element.style.cursor="grabbing";
                if(event.target!=element.querySelector('.calendarWindow__wrapper-content-vaults-order-appeared-image img')){
                    const elementHeight = window.getComputedStyle(element).height;
                    const elementWidth = window.getComputedStyle(element).width;
                    let shiftX = event.clientX - element.getBoundingClientRect().left;
                    let shiftY = event.clientY - element.getBoundingClientRect().top;
    
    
                    element.style.position = 'absolute';
                    element.style.zIndex = 1000;
                    element.style.height = elementHeight;
                    element.style.width = elementWidth;
                    document.body.append(element);
    
                    function moveElement(pageX, pageY){
                        element.style.left = pageX-shiftX+"px";
                        element.style.top = pageY-shiftY+"px";
                    }
    
                    moveElement(event.pageX, event.pageY);
    
                    function onMouseMove(event){
                        moveElement(event.pageX, event.pageY);
                    }
    
                    document.addEventListener('mousemove', onMouseMove);
    
                    element.addEventListener('mouseup', (event)=>{
                        element.style.cursor="grab";
                        document.removeEventListener('mousemove', onMouseMove);

                        vaultsForMoving.forEach((eachEvent, j)=>{
                            let topMeasure = eachEvent.getBoundingClientRect().top; 
                            let bottomMeasure = eachEvent.getBoundingClientRect().bottom;
                            let leftMeasure = eachEvent.getBoundingClientRect().left;
                            let rightMeasure = eachEvent.getBoundingClientRect().right;  

                            if(event.pageX>leftMeasure && event.pageX<rightMeasure && event.pageY>topMeasure && event.pageY<bottomMeasure){
                                store.state.forEach((chosenEvent)=>{
                                    if(chosenEvent.id==eachEvent.getAttribute('id')){
                                        store.state.forEach((deleteEvent)=>{
                                            if(deleteEvent.id==vaultsForMoving[i].getAttribute('id')){
                                                if(chosenEvent.isOrdered){
                                                    return;
                                                }else{
                                                    (0,_store_store__WEBPACK_IMPORTED_MODULE_0__.fillTheVault)(chosenEvent, deleteEvent.text, deleteEvent.members);
                                                    (0,_store_store__WEBPACK_IMPORTED_MODULE_0__.emptyTheVault)(deleteEvent);
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                        });
                        element.remove();
                        (0,_renderTheCalendar__WEBPACK_IMPORTED_MODULE_1__.default)();
                    }, {once: true});
                }

            });
            element.ondragstart=function(){
                return false;
            };
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moveVaults);

/***/ }),

/***/ "./js/modules/windows/calendarWindow/functions/renderTheCalendar.js":
/*!**************************************************************************!*\
  !*** ./js/modules/windows/calendarWindow/functions/renderTheCalendar.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/store */ "./js/modules/store/store.js");
/* harmony import */ var _filterMembers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterMembers */ "./js/modules/windows/calendarWindow/functions/filterMembers.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./js/modules/windows/calendarWindow/functions/login.js");
/* harmony import */ var _vaultsClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaultsClass */ "./js/modules/windows/calendarWindow/functions/vaultsClass.js");

//import deleteEvent from "./deleteEvent";


//import moveVaults from "./moveVaults";


function renderTheCalendar(){
    const vaultsWrapper = document.querySelector('.calendarWindow__wrapper-content-vaults');
    let vaultsHolders = document.querySelectorAll('.calendarWindow__wrapper-content-vaults-order'),
        display;

    vaultsHolders.forEach(item=>{
        item.remove();
    })

    _store_store__WEBPACK_IMPORTED_MODULE_0__.default.state.forEach((item, i)=>{
        if(item.isOrdered){
            display = "grid";
        } else {
            display = "none";
        }
        new _vaultsClass__WEBPACK_IMPORTED_MODULE_3__.default(vaultsWrapper, item.text, item.isOrdered, display, item.id).render();
    });
    //moveVaults();
    (0,_filterMembers__WEBPACK_IMPORTED_MODULE_1__.default)();
    //deleteEvent();
    if(_login__WEBPACK_IMPORTED_MODULE_2__.logedUser){
        _login__WEBPACK_IMPORTED_MODULE_2__.logedUser.moveTheEvent();
    }
    if(_login__WEBPACK_IMPORTED_MODULE_2__.logedUser){
        _login__WEBPACK_IMPORTED_MODULE_2__.logedUser.deleteTheEvent();
    }
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTheCalendar);

/***/ }),

/***/ "./js/modules/windows/calendarWindow/functions/vaultsClass.js":
/*!********************************************************************!*\
  !*** ./js/modules/windows/calendarWindow/functions/vaultsClass.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Vaults{
    constructor(parent, text, isOrdered, display, id){
        this.parent = parent;
        this.text = text;
        this.isOrdered = isOrdered;
        this.display = display;
        this.id = id;
    }
    render(){
        const vault = document.createElement('div');
        vault.classList.add('calendarWindow__wrapper-content-vaults-order');
        vault.setAttribute("id", `${this.id}`);
        vault.innerHTML = `
            <div class="calendarWindow__wrapper-content-vaults-order-appeared" data-ordered=${this.isOrdered} style="display:${this.display};">
                <div class="calendarWindow__wrapper-content-vaults-order-appeared-text"><span class="calendarWindow__wrapper-content-vaults-order-appeared-text-balancer">${this.text}</span></div>
                <div class="calendarWindow__wrapper-content-vaults-order-appeared-image">
                    <img src="icons/delete.png">
                </div>
            </div>
        `;

        this.parent.append(vault);
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vaults);

/***/ }),

/***/ "./js/modules/windows/calendarWindow/localCalendarStorage/localCalendarStorage.js":
/*!****************************************************************************************!*\
  !*** ./js/modules/windows/calendarWindow/localCalendarStorage/localCalendarStorage.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localCalendarStorage": () => (/* binding */ localCalendarStorage),
/* harmony export */   "fillMembersStorage": () => (/* binding */ fillMembersStorage),
/* harmony export */   "emptyMembersStorage": () => (/* binding */ emptyMembersStorage),
/* harmony export */   "pushMembersStorage": () => (/* binding */ pushMembersStorage)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/store */ "./js/modules/store/store.js");


const localCalendarStorage = {
    membersStorage: [..._store_store__WEBPACK_IMPORTED_MODULE_0__.default.members]
}

function fillMembersStorage(members){
    localCalendarStorage.membersStorage = [...members];
}

function emptyMembersStorage(){
    localCalendarStorage.membersStorage = [];
}

function pushMembersStorage(pushedElement){
    localCalendarStorage.membersStorage.push(pushedElement);
}




/***/ }),

/***/ "./js/modules/windows/createWindow/buttons/cancelButton.js":
/*!*****************************************************************!*\
  !*** ./js/modules/windows/createWindow/buttons/cancelButton.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_clearTheForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/clearTheForm */ "./js/modules/windows/createWindow/functions/clearTheForm.js");


function cancelButton(){
    const cancelBtn = document.querySelector('.creatorWindow__wrapper-approval-cancel');

    cancelBtn.addEventListener('click', ()=>{
        (0,_functions_clearTheForm__WEBPACK_IMPORTED_MODULE_0__.default)();
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cancelButton);

/***/ }),

/***/ "./js/modules/windows/createWindow/buttons/createButton.js":
/*!*****************************************************************!*\
  !*** ./js/modules/windows/createWindow/buttons/createButton.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/store */ "./js/modules/store/store.js");
/* harmony import */ var _calendarWindow_functions_renderTheCalendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calendarWindow/functions/renderTheCalendar */ "./js/modules/windows/calendarWindow/functions/renderTheCalendar.js");
/* harmony import */ var _functions_clearTheForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/clearTheForm */ "./js/modules/windows/createWindow/functions/clearTheForm.js");
/* harmony import */ var _functions_openErrorWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/openErrorWindow */ "./js/modules/windows/createWindow/functions/openErrorWindow.js");
/* harmony import */ var _localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localCreatorStorage/localCreatorStorage */ "./js/modules/windows/createWindow/localCreatorStorage/localCreatorStorage.js");






function createButton(){
    const createBtn = document.querySelector('.creatorWindow__wrapper-approval-create');
    let nameOfTheEvent = document.querySelector('.creatorWindow__wrapper-creation-button-inner-input'),
        chosenSlotId;

    createBtn.addEventListener('click', ()=>{
        if(nameOfTheEvent.value==""){
            (0,_functions_openErrorWindow__WEBPACK_IMPORTED_MODULE_3__.default)("name");
        }else if(_localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_4__.localCreatorStorage.membersStorage.length==0){
            (0,_functions_openErrorWindow__WEBPACK_IMPORTED_MODULE_3__.default)("members");
        }else if (!_localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_4__.localCreatorStorage.chosenSlotStorage[1]){
            (0,_functions_openErrorWindow__WEBPACK_IMPORTED_MODULE_3__.default)("day");
        }else if(!_localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_4__.localCreatorStorage.chosenSlotStorage[0]){
            (0,_functions_openErrorWindow__WEBPACK_IMPORTED_MODULE_3__.default)("time");
        }else{
            chosenSlotId = _localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_4__.localCreatorStorage.chosenSlotStorage[0]+_localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_4__.localCreatorStorage.chosenSlotStorage[1];
    
            _store_store__WEBPACK_IMPORTED_MODULE_0__.default.state.forEach((item, i)=>{
                if(item.id==chosenSlotId){
                    if(item.isOrdered==true){
                        (0,_functions_openErrorWindow__WEBPACK_IMPORTED_MODULE_3__.default)("slot");
                    }else{
                        (0,_store_store__WEBPACK_IMPORTED_MODULE_0__.fillTheVault)(item, nameOfTheEvent.value, _localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_4__.localCreatorStorage.membersStorage);
                        (0,_functions_clearTheForm__WEBPACK_IMPORTED_MODULE_2__.default)();
                        (0,_calendarWindow_functions_renderTheCalendar__WEBPACK_IMPORTED_MODULE_1__.default)();
                    }
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createButton);

/***/ }),

/***/ "./js/modules/windows/createWindow/buttons/inputButton.js":
/*!****************************************************************!*\
  !*** ./js/modules/windows/createWindow/buttons/inputButton.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function inputButton(){
    let nameOfTheEvent = document.querySelector('.creatorWindow__wrapper-creation-button-inner-input');
    
    nameOfTheEvent.addEventListener('input', ()=>{
        if(nameOfTheEvent.value.length>=17){
            nameOfTheEvent.value=nameOfTheEvent.value.slice(0, 17);
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputButton);

/***/ }),

/***/ "./js/modules/windows/createWindow/buttons/listButtons.js":
/*!****************************************************************!*\
  !*** ./js/modules/windows/createWindow/buttons/listButtons.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/store */ "./js/modules/store/store.js");
/* harmony import */ var _localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localCreatorStorage/localCreatorStorage */ "./js/modules/windows/createWindow/localCreatorStorage/localCreatorStorage.js");



function listButtons(){
    const listBlocks = document.querySelectorAll("[data-list]"),
        listItems = document.querySelectorAll("[data-list] div"),
        widthOfItem = window.getComputedStyle(listItems[0]).height,
        widthOfItemWithoutPX = widthOfItem.replace(/\D/g, ''),
        memberListWrapperInCreator = document.querySelectorAll('.creatorWindow__wrapper-creation-button-list')[0],
        listBtnsInCreator = document.querySelectorAll('[data-down]'),
        listBtnTextInCreator = document.querySelectorAll('.creatorWindow__wrapper-creation-button-inner-text'),
        listBtnTextSpanInCreator = document.querySelectorAll('.creatorWindow__wrapper-creation-button-inner-text span'),
        listBtnArrowInCreator = document.querySelectorAll('.creatorWindow__wrapper-creation-button-inner-arrow'),
        listItemsOfDays = document.querySelectorAll('#days div'),
        listItemsOfHours = document.querySelectorAll('#hours div'),
        creatorWindow = document.querySelector('.creatorWindow');
        let listItemsOfMembers;

    class MemberListInCreator{
        constructor(name, parent, value){
            this.name = name;
            this.parent = parent;
            this.value = value;
        }
        render() {
            const name = document.createElement('div');
            name.classList.add("creatorWindow__wrapper-creation-button-list-person");
            name.innerHTML = `
                    <span>${this.name}</span>
                    <div value=${this.value} type="checkbox" class="creatorWindow__wrapper-creation-button-list-person-input"></div>
            `;
            this.parent.append(name);
        }
    }

    _store_store__WEBPACK_IMPORTED_MODULE_0__.default.members.forEach((item, i)=>{
        new MemberListInCreator(item, memberListWrapperInCreator, item).render();
        listItemsOfMembers = document.querySelectorAll('#members .creatorWindow__wrapper-creation-button-list-person');
    });    

    listBlocks.forEach((item, i)=>{
        if(item.querySelectorAll("div").length > 3){
            item.style.height = widthOfItemWithoutPX*3 + "px";
            item.style.overflow = "auto";
        } 
    });

    listBtnsInCreator.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            listBlocks[i].classList.toggle('activeBlock');
        });
    });

    creatorWindow.addEventListener('click', (e)=>{
        listBtnsInCreator.forEach((item, i)=>{
            if(listBlocks[i].classList.contains('activeBlock')){
                if(e.target && e.target!=listBtnsInCreator[i] && e.target!=listBtnTextInCreator[i] && e.target!=listBtnTextSpanInCreator[i] && e.target!=listBtnArrowInCreator[i] && e.target!=listBlocks[i]){
                    listBlocks[i].classList.remove('activeBlock');
                }
            }
        });

        listBlocks[0].querySelectorAll('div').forEach((item, j)=>{
            if(e.target==item || e.target==item.querySelector('span')){
                listBlocks[0].classList.add('activeBlock');
           }
        });

        if(listBlocks[0].classList.contains('activeBlock')){
            let allInputs = listBlocks[0].querySelectorAll('.creatorWindow__wrapper-creation-button-list-person-input');
            let chosenInputs = listBlocks[0].querySelectorAll('[data-checked]');

            if(e.target==listItemsOfMembers[0] || e.target==listItemsOfMembers[0].firstElementChild){
                allInputs = listBlocks[0].querySelectorAll('.creatorWindow__wrapper-creation-button-list-person-input');
                chosenInputs = listBlocks[0].querySelectorAll('[data-checked]');

                if(chosenInputs.length!=allInputs.length){
                (0,_localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_1__.fillMembersStorage)(_store_store__WEBPACK_IMPORTED_MODULE_0__.default.members);
                    listBtnTextSpanInCreator[0].innerHTML="All members";
                    listItemsOfMembers.forEach((item)=>{
                        if(item.querySelector('div')){
                            item.querySelector('div').style.backgroundColor = '#ddd';
                            item.setAttribute('data-checked',"");
                        }
                    });
                }else if(chosenInputs.length==allInputs.length){
                    (0,_localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_1__.emptyMembersStorage)();
                    listBtnTextSpanInCreator[0].innerHTML="";
                    listItemsOfMembers.forEach((item)=>{
                        if(item.querySelector('div')){
                            item.querySelector('div').style.backgroundColor = "";
                            item.removeAttribute('data-checked');
                        }
                    });
                }
            }else{
                listItemsOfMembers.forEach((item, j)=>{
                    if(e.target==item || e.target==item.firstElementChild || e.target==item.lastElementChild){
                        if(item.getAttribute('data-checked')==null){
                            item.lastElementChild.style.backgroundColor = '#ddd';
                            item.setAttribute('data-checked',"");
                        }else {
                            item.lastElementChild.style.backgroundColor = "";
                            item.removeAttribute('data-checked');
                        }
                    }
                });

                (0,_localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_1__.emptyMembersStorage)();

                chosenInputs = listBlocks[0].querySelectorAll('[data-checked]');
                chosenInputs.forEach(item=>{
                    (0,_localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_1__.pushMembersStorage)(item.firstElementChild.innerHTML);
                });

                if(_localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_1__.localCreatorStorage.membersStorage.length==allInputs.length){
                    listBtnTextSpanInCreator[0].innerHTML="All members";
                }else{
                    listBtnTextSpanInCreator[0].innerHTML=_localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_1__.localCreatorStorage.membersStorage.join(', ');
                    if(listBtnTextSpanInCreator[0].innerHTML.length>20){
                        listBtnTextSpanInCreator[0].innerHTML=listBtnTextSpanInCreator[0].innerHTML.slice(0, 17)+"...";
                    }
                }

            }
        }
    });


    listItemsOfDays.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            listBtnTextInCreator[1].firstElementChild.innerHTML = item.firstElementChild.innerHTML;
            (0,_localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_1__.chosenSlotStorageSecondId)(item.getAttribute('data-dayId'));
        });
    });

    listItemsOfHours.forEach((item, i)=>{
        item.addEventListener('click', ()=>{
            listBtnTextInCreator[2].firstElementChild.innerHTML = item.firstElementChild.innerHTML;
            (0,_localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_1__.chosenSlotStorageFirstId)(item.getAttribute('data-hourId'));
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listButtons);

/***/ }),

/***/ "./js/modules/windows/createWindow/createWindow.js":
/*!*********************************************************!*\
  !*** ./js/modules/windows/createWindow/createWindow.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _buttons_cancelButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/cancelButton */ "./js/modules/windows/createWindow/buttons/cancelButton.js");
/* harmony import */ var _buttons_createButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/createButton */ "./js/modules/windows/createWindow/buttons/createButton.js");
/* harmony import */ var _buttons_inputButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/inputButton */ "./js/modules/windows/createWindow/buttons/inputButton.js");
/* harmony import */ var _buttons_listButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/listButtons */ "./js/modules/windows/createWindow/buttons/listButtons.js");
/* harmony import */ var _functions_errorRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/errorRender */ "./js/modules/windows/createWindow/functions/errorRender.js");







function creationComponent(){
    (0,_buttons_listButtons__WEBPACK_IMPORTED_MODULE_3__.default)();
    (0,_buttons_inputButton__WEBPACK_IMPORTED_MODULE_2__.default)();
    (0,_functions_errorRender__WEBPACK_IMPORTED_MODULE_4__.default)();
    (0,_buttons_cancelButton__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0,_buttons_createButton__WEBPACK_IMPORTED_MODULE_1__.default)();    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (creationComponent);

/***/ }),

/***/ "./js/modules/windows/createWindow/functions/clearTheForm.js":
/*!*******************************************************************!*\
  !*** ./js/modules/windows/createWindow/functions/clearTheForm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localCreatorStorage/localCreatorStorage */ "./js/modules/windows/createWindow/localCreatorStorage/localCreatorStorage.js");


function clearTheForm(){
    const listBtnTextSpanInCreator = document.querySelectorAll('.creatorWindow__wrapper-creation-button-inner-text span'),
        creatorWindow = document.querySelector('.creatorWindow'),
        calendarWindow = document.querySelector('.calendarWindow');
    let nameOfTheEvent = document.querySelector('.creatorWindow__wrapper-creation-button-inner-input'),
        errorWindows = document.querySelectorAll('.creatorWindow__notation'),
        listItemsOfMembers = document.querySelectorAll('#members .creatorWindow__wrapper-creation-button-list-person');
    

    listBtnTextSpanInCreator.forEach(item=>{
        item.innerHTML="";
    });
    (0,_localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_0__.emptyMembersStorage)();
    listItemsOfMembers.forEach((item, i)=>{
        item.lastElementChild.style.backgroundColor = "";
        item.removeAttribute('data-checked');
    });
    
    nameOfTheEvent.value="";
    creatorWindow.style.display="none";
    calendarWindow.style.display="block";
    errorWindows.forEach(item=>{
        item.style.display="none";
    });
    (0,_localCreatorStorage_localCreatorStorage__WEBPACK_IMPORTED_MODULE_0__.emptyChosenSlotStorage)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearTheForm);

/***/ }),

/***/ "./js/modules/windows/createWindow/functions/errorRender.js":
/*!******************************************************************!*\
  !*** ./js/modules/windows/createWindow/functions/errorRender.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function errorRender(){
    const creatorWindow = document.querySelector('.creatorWindow');

    class Error{
        constructor(data, text, parent){
            this.data = data;
            this.text = text;
            this.parent = parent;
        }
        render(){
            const error = document.createElement('div');
            error.classList.add('creatorWindow__notation');
            error.setAttribute('data-error', `${this.data}`);
            error.innerHTML = `
                <div class="creatorWindow__notation-firstCross">
                    <div class="creatorWindow__notation-firstCross-wrapper">
                        <img src="icons/first-notion-delete.png" alt="cross">
                    </div>
                </div>
                <div class="creatorWindow__notation-text"><span>${this.text}</span></div>
                <div class="creatorWindow__notation-lastCross">
                    <div class="creatorWindow__notation-lastCross-wrapper">
                        <img src="icons/last-notion-delete.png" alt="cross">
                    </div>
                </div>
            `;
            this.parent.append(error);
        }
    }
    new Error("slot", "Failed to create an event. Time slot is already booked.", creatorWindow).render();
    new Error("name", "Failed to create an event. Please, fill the event name.", creatorWindow).render();
    new Error("members", "Failed to create an event. Please, choose participant/s", creatorWindow).render();
    new Error("day", "Failed to create an event. Please, choose the day.", creatorWindow).render();
    new Error("time", "Failed to create an event. Please, choose the time.", creatorWindow).render();
    

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errorRender);

/***/ }),

/***/ "./js/modules/windows/createWindow/functions/openErrorWindow.js":
/*!**********************************************************************!*\
  !*** ./js/modules/windows/createWindow/functions/openErrorWindow.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function openErrorWindow(dataError){
    let errorWindows = document.querySelectorAll('.creatorWindow__notation');

    errorWindows.forEach(item=>{
        item.style.display="none";
        if(item.getAttribute('data-error')==dataError){
            item.style.display="grid";
            let close = item.querySelector('.creatorWindow__notation-lastCross-wrapper');
            close.addEventListener('click', ()=>{
                item.style.display="none";
            });
        }
    })
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openErrorWindow);

/***/ }),

/***/ "./js/modules/windows/createWindow/localCreatorStorage/localCreatorStorage.js":
/*!************************************************************************************!*\
  !*** ./js/modules/windows/createWindow/localCreatorStorage/localCreatorStorage.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localCreatorStorage": () => (/* binding */ localCreatorStorage),
/* harmony export */   "fillMembersStorage": () => (/* binding */ fillMembersStorage),
/* harmony export */   "emptyMembersStorage": () => (/* binding */ emptyMembersStorage),
/* harmony export */   "pushMembersStorage": () => (/* binding */ pushMembersStorage),
/* harmony export */   "chosenSlotStorageFirstId": () => (/* binding */ chosenSlotStorageFirstId),
/* harmony export */   "chosenSlotStorageSecondId": () => (/* binding */ chosenSlotStorageSecondId),
/* harmony export */   "emptyChosenSlotStorage": () => (/* binding */ emptyChosenSlotStorage)
/* harmony export */ });
const localCreatorStorage={
    membersStorage: [],
    chosenSlotStorage: []
};

function fillMembersStorage(members){
    localCreatorStorage.membersStorage = [...members];
}

function emptyMembersStorage(){
    localCreatorStorage.membersStorage = [];
}

function pushMembersStorage(pushedElement){
    localCreatorStorage.membersStorage.push(pushedElement);
}

function chosenSlotStorageFirstId(id){
    localCreatorStorage.chosenSlotStorage[0]=id;
}

function chosenSlotStorageSecondId(id){
    localCreatorStorage.chosenSlotStorage[1]=id;
}

function emptyChosenSlotStorage(){
    localCreatorStorage.chosenSlotStorage=[];
}



/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/store/store */ "./js/modules/store/store.js");
/* harmony import */ var _modules_windows_calendarWindow_calendarWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/windows/calendarWindow/calendarWindow */ "./js/modules/windows/calendarWindow/calendarWindow.js");
/* harmony import */ var _modules_windows_createWindow_createWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/windows/createWindow/createWindow */ "./js/modules/windows/createWindow/createWindow.js");




window.addEventListener("DOMContentLoaded",()=>{
    (0,_modules_windows_calendarWindow_calendarWindow__WEBPACK_IMPORTED_MODULE_1__.default)();
    (0,_modules_windows_createWindow_createWindow__WEBPACK_IMPORTED_MODULE_2__.default)();
    window.store = _modules_store_store__WEBPACK_IMPORTED_MODULE_0__.default; // it helps to explore the store in the browser console
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map