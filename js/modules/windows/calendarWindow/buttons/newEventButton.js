function newEventButton(){
    const newEventBtn = document.querySelector('.calendarWindow__wrapper-header-addButton-button'),
        calendarWindow = document.querySelector('.calendarWindow'),
        creatorWindow = document.querySelector('.creatorWindow');

    newEventBtn.addEventListener('click', ()=>{
        calendarWindow.style.display = "none";
        creatorWindow.style.display = "block";
    });
}

export default newEventButton;