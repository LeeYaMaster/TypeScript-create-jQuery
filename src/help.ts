export function eachNode(obj,attribute,arg){
    obj.forEach((item)=>{
        item[attribute] = arg
    })
}
export function eachEvent(obj,attribute,arg){
    obj.forEach((item)=>{
        item[attribute] = arg
    })
}
export function isDOM(obj) {
    if(typeof HTMLElement === 'object') {
        return obj instanceof HTMLElement;
    } else {
        return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    }
}
export function convertData(data) {
    if(typeof data === 'object') {
        var convertResult = "";
        for(var c in data) {
            convertResult += c + "=" + data[c] + "&";
        }
        convertResult = convertResult.substring(0, convertResult.length - 1)
        return convertResult;
    } else {
        return data;
    }
}
