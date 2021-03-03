import { fromStringToObject, getData, putData } from "../../../api";
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
                                getData('events')
                                .then(events=>{
                                    events.forEach(obj=>{
                                        let newObj = fromStringToObject(obj.data);
                                        if(newObj.id==eachEvent.getAttribute('id')){
                                            events.forEach(obj2=>{
                                                let newObjDel = fromStringToObject(obj2.data);
                                                if(newObjDel.id==vaultsForMoving[i].getAttribute('id')){
                                                    if(newObj.isOrdered){
                                                        return;
                                                    }else{
                                                        let eId = obj2.id;
                                                        let emptyObj = JSON.stringify({data:`{id:${newObjDel.id},isOrdered:false,text:'',members:[]}`,id:"string"});
                                                        putData(`events/${eId}`, emptyObj)
                                                        .then(()=>{
                                                            let eIdN = obj.id;
                                                            let newPh = newObjDel.members.join("','");
                                                            let filledObj = JSON.stringify({data:`{id:${newObj.id},isOrdered:true,text:'${newObjDel.text}',members:['${newPh}']}`,id:"string"});
                                                            putData(`events/${eIdN}`, filledObj)
                                                            .then(()=>{
                                                                element.remove();
                                                                renderTheCalendar();
                                                                moveVaults();
                                                            });
                                                        });
                                                    }
                                                }
                                            });   
                                        }    
                                    });
                                });
                            }
                        });
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