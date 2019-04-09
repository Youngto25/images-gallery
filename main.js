function showPic(whichPic){
    var source = whichPic.getAttribute('href')
    var text = whichPic.getAttribute('title')
    var placeholder = document.getElementById('placeholder')
    placeholder.setAttribute('src',source)
    var description = document.getElementById('description')
    description.childNodes[0].nodeValue = text
}

//显示body元素的子元素的总个数
function countBodyChildren(){
    var body_element = document.getElementsByTagName('body')
    console.log(body_element[0])
    console.log(body_element[0].childNodes)
}

//在页面加载时调用countBodyChildren函数
window.onload = countBodyChildren()