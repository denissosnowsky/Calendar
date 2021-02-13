import { emptyTheVault, fillTheVault } from "../../../store/store";
import renderTheCalendar from "./renderTheCalendar";

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
                                                    fillTheVault(chosenEvent, deleteEvent.text, deleteEvent.members);
                                                    emptyTheVault(deleteEvent);
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                        });
                        element.remove();
                        renderTheCalendar();
                    }, {once: true});
                }

            });
            element.ondragstart=function(){
                return false;
            };
        }
    });
}

export default moveVaults;