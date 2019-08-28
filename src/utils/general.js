const general = {

 addClassToElement: (elementName, className)=>{
    document[elementName].classList.add(className);
},

 removeClassFromElement: (elementName, className)=>{
    document[elementName].classList.remove(className);
},


}

export default general;


