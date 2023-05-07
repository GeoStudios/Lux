lux = {}

function EvaluateJS(code)
    js.global:eval(code)
end

function lux:CreateNavBtn(Name, Id)
    btn = js.global.document:createElement("button")
    js.global.document:getElementById('nav'):append(btn)
    btn.innerText = Name
    btn:setAttribute("class", "navBtn")
    btn:setAttribute("id", id)
    return id
end

function lux:CreateMenuBtn(Name, Id)
    btn = js.global.document:createElement("button")
    js.global.document:getElementById('menuBar'):append(btn)
    btn.innerText = Name
    btn:setAttribute("class", "text_label")
    btn:setAttribute("id", id)
    return id
end