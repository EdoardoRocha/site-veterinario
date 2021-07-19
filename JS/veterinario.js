
var pxModal = document.getElementById('pxmodal')
pxModal.addEventListener('click', function () {
    var modal = document.getElementById('modal-vs')
    modal.style.top = "22%"
    
})




var fecharM = document.getElementById('fechar-modal')
fecharM.addEventListener('click' ,function() {
 document.getElementById('modal-vs').style.top = "-100%"
})

var menu = document.getElementById('menu-modal')
menu.addEventListener('click', function () {
    document.getElementById('menu').style.top = "29%"
})
var fecharmenu = document.getElementById('fecharmenu')
fecharmenu.addEventListener('click', function () {
    document.getElementById('menu').style.top = "-100%"
})