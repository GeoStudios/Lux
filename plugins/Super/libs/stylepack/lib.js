function setStyle(filepath, stylePath){
    const style = document.getElementsByTagName("link")[0]
    style.setAttribute("href", filepath(stylePath))
    document.head.append(style)
}

module.exports = { setStyle }