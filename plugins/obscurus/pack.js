// var LuaVM = modules.luavmjs;
// var l = new LuaVM.Lua.State();
// const os = modules.fs.readFileSync(getFilePath("lib/os.lua", __filename))
// const lux = modules.fs.readFileSync(getFilePath("lib/lux.lua", __filename))

// const file = modules.fs.readFileSync(getFilePath("pack.lua", __filename))
// const lib = `${os}
// ${lux}
// `
// const whole =`${lib}

// ${file}`
// console.log(whole);
// l.execute(whole)

function LoadNest(plug, nest){
    return loadItem(getFilePath("../"+plug+"/sub/"+nest+".js", __filename))  
}

LoadNest("Super", "MainLibs")
LoadNest("Super", "cbase")
LoadNest("obscurus", "xpack")