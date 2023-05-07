window.loadItem = require
const modules = {
    
    path:require("path"),
    fs:require("fs"),
    child_process:require("child_process"),
    request:require("request"),
    luavmjs:require('lua.vm.js')
    
}

window.modules = modules

function filepath(file2){
    return modules.path.join(modules.path.dirname(__filename), file2)
}
function getFilePath(file2, currentFile){
    return modules.path.join(modules.path.dirname(currentFile), file2)
}
window.getFilePath = getFilePath
window.apiVer = "1.0"
window.addEventListener("DOMContentLoaded", ()=>{
    require(filepath("../plugins/Super/pack.js"))
    // require(filepath("../plugins/obscurus/pack.js"))
    
})