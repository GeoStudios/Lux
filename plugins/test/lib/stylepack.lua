stylepack={}
function stylepack:SetStyle(plugin, pathToStyle)
    style=os:getFileWithinPlugin(plugin, pathToStyle)
    link=js.global.document:getElementsByTagName("link")[0]
    link:setAttribute("href", style)
end