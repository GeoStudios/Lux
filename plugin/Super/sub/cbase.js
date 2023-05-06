// 1.0
try {
    window.loadItem = loadFile
    window.loadItem = loadLib
}catch{
    console.log("1.0 Support Error")
}
// 2.0
try {
    window.loadFile = loadItem
    window.loadLib = loadItem
}catch{
    console.log("2.0 Support Error")
}

window.LoadPlug = ExternalLoader.LoadPlugin
window.LoadPlugJson = ExternalLoader.LoadManifest
window.LoadNest = ExternalLoader.LoadSubPlugin
window.LoadLib = (libpak) => {return ExternalLoader.LoadLibrary(libpak.split("/")[0].trim(), libpak.split("/")[libpak.split("/").length-1].trim())}

function filepath(file2){
    return modules.path.join(modules.path.dirname(__filename), file2)
}

window.ShowError = (errormsg)=>{
    alert("Error: "+errormsg)
}

function loop(num, func){
    for(let i=0;i<num;i++){
        func(i)
    }
}

window.loop = loop

window.CbaseSupported = "1.0, 2.0"