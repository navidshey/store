const general = {

 addClassToElement: (elementName, className)=>{
    document[elementName].classList.add(className);
},

 removeClassFromElement: (elementName, className)=>{
    document[elementName].classList.remove(className);
},

addClassToElementById: (id, className)=>{
    document.getElementById(id).classList.add(className);
},

remoteClassToElementById: (id, className)=>{
    document.getElementById(id).classList.remove(className);
},


}

export default general;


