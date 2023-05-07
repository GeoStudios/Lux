os = {}

function os:getMainPath()
    return path:join(path:dirname(filename), "../../../")
end

function os:getFile(file)
    return path:join(path:dirname(filename), "../../../"..file)
end

function os:ReadFile(f)
    return fs:readFileSync(os:getFile(f))
end