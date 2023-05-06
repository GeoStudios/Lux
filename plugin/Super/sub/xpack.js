function filepath(file2){
    return modules.path.join(modules.path.dirname(__filename), file2)
}

const config = loadFile(filepath("../../../config/Super/packs.json"))
if (config.packs != []){
    loop(config.packs.length, (i)=>{
        if (LoadPlugJson(config.packs[i]).apiVer == apiVer || CbaseSupported.includes(LoadPlugJson(config.packs[i]).apiVer)){
            LoadPlug(config.packs[i])
        }else if (LoadPlugJson(config.packs[i]).apiVer != "*"){
            ShowError("Plugin "+config.packs[i]+" is based on launcher apiVer "+LoadPlugJson(config.packs[i]).apiVer+" and current launcher apiVer is "+apiVer)
        }
    })
    
}
