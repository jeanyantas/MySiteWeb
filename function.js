const formulario = document.querySelector('#formulario');
formulario.addEventListener( "submit", validarFormulario )
function validarFormulario(e){
    e.preventDefault();
    const dni = document.querySelector("#txtDni").value
    const nombres = document.querySelector("#txtNombres").value
    const apellidos = document.querySelector('#txtApellidos').value
    const correo = document.querySelector('#txtCorreo').value
    const telefono = document.querySelector('#txtTelefono').value
    const celular = document.querySelector('#txtCelular').value
    const mensaje = document.querySelector('#txtMensaje').value
    const distrito = document.querySelector('#cboDistrito').value
    const sexo = document.querySelector('#rSexo').value
    const fechaNac = document.querySelector('#txtFecha').value
    // const imagen = document.querySelector('#imagen').files
    // const objectURL = URL.createObjectURL(imagen)
    const respuesta = document.getElementById("respuesta")
    respuesta.innerHTML = `
    <hr>
    <h3>DATOS CARGADOS</h3>
    Hola ${nombres} ${apellidos}<br/>
    Los datos que enviarás son los siguientes:<br/>
    <b>DNI:</b> ${dni}<br/>
    <b>Correo:</b> ${correo}<br/>
    <b>Teléfono:</b> ${telefono}<br/>
    <b>Celular:</b> ${celular}<br/>
    <b>Mensaje:</b> ${mensaje}<br/>
    <b>Distrito:</b> ${distrito}<br/>
    <b>Sexo:</b> ${sexo}<br/>
    <b>Fecha de Nacimiento:</b> ${fechaNac}
    <hr>`
    // <br/><b>Foto:</b><br/><img src='${imagen}' class="border-dark rounded-2" style="width:400px;height:400px;"></img>
}

const sendMail = document.getElementById('emailA')
function handleSendEmail(event){
    event.preventDefault()
    const fd = new FormData(this)
    sendMail.setAttribute(
        'href',
        `mailTo:jean.yantas1@gmail.com?subject=${fd.get('correo')}&body=${fd.get('mensaje')}`
    )
    sendMail.click()
}
formulario.addEventListener('submit', handleSendEmail)

