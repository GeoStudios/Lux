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
    require(filepath("../plugins/obscurus/pack.js"))
    // require(filepath("../plugins/obscurus/pack.js"))

    const HLJS = require('highlight.js');
    let CF = document.getElementById("CurrentFile")
    let HC = document.getElementById("Code")
    CF.addEventListener("input", ()=>{
        const code = CF.value
        html = HLJS.highlightAuto(code).value
        HC.innerHTML = html + `\n\n\n\n\n\n\n\n\n\n`
        // console.log(html)
    })

    CF.addEventListener("scroll", ()=>{
        HC.scrollTop = CF.scrollTop
        HC.scrollLeft = CF.scrollLeft
    })
    
})