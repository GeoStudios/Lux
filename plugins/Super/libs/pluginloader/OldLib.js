
// /**
//  * 
//  * @param {string} plugin
//  * @returns {NodeModule}
//  */
// function LoadPluginManifest(plugin){
//     return loadItem(getFilePath("../../../%s/pack.json".replace("%s", plugin), __filename))
// }

// /**
//  * 
//  * @returns {NodeModule}
//  */
// function LoadInternalManifest(){
//     return loadItem(getFilePath("../../pack.json".replace("%s", plugin), __filename))
// }

// /**
//  * 
//  * @param {string} plugin
//  * @param {string} lib 
//  * @returns {NodeModule}
//  */
// function LoadLibrary(plugin, lib){
//     return loadItem(getFilePath("../../../%s/libs/%q/lib.js".replace("%s", plugin).replace("%q", lib), __filename))
// }

// /**
//  * 
//  * @returns {NodeModule}
//  */
// function LoadInternalLibrary(){
//     return loadItem(getFilePath("../../../%s/libs/%q/lib.js".replace("%s", LoadInternalManifest().folderName).replace("%q", lib), __filename))
// }

// let libs = {
//     Strings: LoadInternalLibrary("Super", "strings"),
// }

// /**
//  * 
//  * @param {string} Plugin 
//  * @returns {NodeModule}
//  */
// function LoadPlugin(Plugin){
//     return loadItem(getFilePath(libs.Strings.FormatString("../../../%s/pack.js", Plugin), __filename))
// }

// /**
//  * 
//  * @param {string} Plugin 
//  * @param {string} subplugin
//  * @returns {NodeModule}
//  */
// function LoadSubPlugin(Plugin, subplugin){
//     return loadItem(getFilePath(libs.Strings.FormatString("../../../%s/sub/%s.js", Plugin, subplugin), __filename))
// }

// /**
//  * 
//  * @param {string} subplugin 
//  * @returns {NodeModule}
//  */
// function LoadInternalSubPlugin(subplugin){
//     return loadItem(getFilePath(libs.Strings.FormatString("../../../sub/%s.js", LoadInternalManifest().folderName, subplugin), __filename))
// }

// module.exports = { }