const LoadLib = (plug)=>{
    return loadItem(getFilePath("../../"+plug+"/lib.js", __filename))
}

const SetStyle = LoadLib("Super/libs/stylepack/").setStyle
const DownloadFile = LoadLib("Super/libs/cmd/").DownloadFile
const RunExecutable = LoadLib("Super/libs/cmd/").RunExecutable
const InternalPluginLoader = LoadLib("Super/libs/pluginloader/").Intern
const ExternalPluginLoader = LoadLib("Super/libs/pluginloader/").Extern

window.SetStyle = SetStyle
window.DownloadFile = DownloadFile
window.RunExecutable = RunExecutable
window.InteralLoader = InternalPluginLoader
window.ExternalLoader = ExternalPluginLoader