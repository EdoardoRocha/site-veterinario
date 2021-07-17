function AbrirModal() {
    var modal = document.getElementById('modal-vs')
    modal.style.top = "22%"
    
}
var pxModal = document.getElementById('pxmodal')
pxModal.addEventListener('click', AbrirModal)

var fecharM = document.getElementById('fechar-modal')
fecharM.addEventListener('click' ,function() {
 document.getElementById('modal-vs').style.top = "-100%"
})