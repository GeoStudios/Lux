const Intern = {

    LoadManifest: ()=>{
        return loadItem(getFilePath("../../pack.json", __filename))
    },
    
    LoadLibrary: (lib)=>{
        return loadItem(getFilePath("../../../%s/libs/%q/lib.js".replace("%s", Intern.LoadManifest().folderName).replace("%q", lib), __filename))
    },

    LoadSubPlugin: (subplugin)=>{
        return loadItem(getFilePath("../../../%s/sub/%q.js".replace("%s", Intern.LoadManifest().folderName).replace("%q", subplugin), __filename))
    }

    
}

const Extern = {
    
    LoadManifest: (plugin) => {
        return loadItem(getFilePath("../../../%s/pack.json".replace("%s", plugin), __filename))
    },

    LoadLibrary: (plugin, lib) => {
        return loadItem(getFilePath("../../../%s/libs/%q/lib.js".replace("%s", plugin).replace("%q", lib), __filename))
    },

    LoadPlugin: (Plugin)=>{
        return loadItem(getFilePath("../../../%s/pack.js".replace("%s", Plugin), __filename))
    },

    LoadSubPlugin: (Plugin, subplugin)=>{
        return loadItem(getFilePath("../../../%s/sub/%q.js".replace("%s", Plugin).replace("%q", subplugin), __filename))
    }
}

module.exports = { Intern, Extern }