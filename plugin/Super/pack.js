// function LoadPlug(plug){
//     return loadItem(getFilePath("../"+plug+"/pack.js", __filename))  
// }

// function LoadPlugJson(plug){
//     return loadItem(getFilePath("../"+plug+"/pack.json", __filename))  
// }

function LoadNest(plug, nest){
    return loadItem(getFilePath("../"+plug+"/sub/"+nest+".js", __filename))  
}

// function LoadLib(plug){
//     return loadItem(getFilePath("../"+plug+"/lib.js", __filename))  
// }
// modules.path.join(modules.path.dirname(__filename), "../Super/")

// window.LoadPlug = LoadPlug
// window.LoadPlugJson = LoadPlugJson
// window.LoadNest = LoadNest
// window.LoadLib = LoadLib

LoadNest("Super", "MainLibs")
LoadNest("Super", "cbase")
// LoadNest("Super", "styles")
LoadNest("Super", "xpack")