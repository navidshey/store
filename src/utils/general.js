const general = {

    addClassToElement: (elementName, className) => {
        document[elementName].classList.add(className);
    },

    removeClassFromElement: (elementName, className) => {
        document[elementName].classList.remove(className);
    },

    addClassToElementById: (id, className) => {
        document.getElementById(id).classList.add(className);
    },

    remoteClassToElementById: (id, className) => {
        document.getElementById(id).classList.remove(className);
    },

    changeIdByElement: (element, newId) => {
        document[element].id = newId;
    },

    getColumnsStyle: (columnNumbers) => {
        let colStyle = "";
        switch (columnNumbers) {
            case "1":
                colStyle = "col-xs-12"; break;;
            case 2:
                colStyle = "col-md-6"; break;
            case 3:
                colStyle = "col-md-4"; break;
            case 4:
                colStyle = "col-md-3"; break;
            case 6:
                colStyle = "col-md-2"; break;
            default:
                colStyle = "col-md-3"; break;
        }
        return colStyle;
    },

    chunk: (arr, len) => {
        var chunks = [],
            i = 0,
            n = arr.length;

        while (i < n) {
            chunks.push(arr.slice(i, i += len));
        }

        return chunks;
    },

    generateKey: (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    }

}

export default general;


