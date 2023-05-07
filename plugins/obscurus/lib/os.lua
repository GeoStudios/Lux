os = {}

function os:getMainPath()
    return path:join(path:dirname(filename), "../../../")
end

function os:getPluginsFolder()
    return path:join(path:dirname(filename), "../../")
end

function os:getFile(file)
    return os:getMainPath()..file
end

function os:getFileWithinPlugin(plugin, file)
    return os:getPluginsFolder()..plugin.."/"..file
end

function os:ReadFile(f)
    return fs:readFileSync(os:getFile(f))
end