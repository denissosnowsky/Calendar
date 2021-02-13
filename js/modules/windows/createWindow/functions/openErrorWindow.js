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

export default openErrorWindow;