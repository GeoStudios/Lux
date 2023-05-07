function setStyle(filepath, stylePath){
    const style = document.getElementsByTagName("link")[0]
    style.setAttribute("href", filepath(stylePath))
}

module.exports = { setStyle }