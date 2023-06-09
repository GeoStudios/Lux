function filepath(file2){
    return modules.path.join(modules.path.dirname(__filename), file2)
}
const config = loadFile(filepath("../../../config/packs.json"))
if (config.packs != []){
    loop(config.packs.length, (i)=>{
        if (LoadPlugJson(config.packs[i].folder).apiVer == apiVer || CbaseSupported.includes(LoadPlugJson(config.packs[i].folder).apiVer)){
            if (config.packs[i].type == "lua"){
                const imports = loadFile(filepath("../../"+config.packs[i].folder+"/imports.json")).imports

                let Imports = new Array(imports.length)
                loop(imports.length, (q)=>{
                    const module = modules.fs.readFileSync(getFilePath("../../"+imports[q], __filename))
                    Imports.push(module)
                })

                // const os = modules.fs.readFileSync(getFilePath("../lib/os.lua", __filename))
                // const lux = modules.fs.readFileSync(getFilePath("../lib/lux.lua", __filename))
                var LuaVM = modules.luavmjs;
                var l = new LuaVM.Lua.State();
                var file = modules.fs.readFileSync(getFilePath("../../"+config.packs[i].folder+"/pack.lua", __filename))
                var lib = `
                filename = [[${__filename}]]
                path = js.global:require("path")
                fs = js.global:require("fs")
                request = js.global:require("request")
                child_process = js.global:require("child_process")
                
                ${Imports.join("\n")}
                `
                var whole =`${lib}

                ${file}`
                console.log(whole);
                l.execute(whole)
            }else{
                LoadPlug(config.packs[i].folder)
            }
        }else if (LoadPlugJson(config.packs[i].folder).apiVer != "*"){
            ShowError("Plugin "+config.packs[i].folder+" is based on launcher apiVer "+LoadPlugJson(config.packs[i].folder).apiVer+" and current launcher apiVer is "+apiVer)
        }
    })
    
}
