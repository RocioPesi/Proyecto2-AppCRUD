
const nombre = document.getElementById ("nombre");
const titulo = document.getElementById ("titulo");
const estatus = document.getElementById ("estatus");
const puesto = document.getElementById ("puesto");
var usuarios = JSON.parse (localStorage.getItem ("usuarios")) || [];
const cuerpoTabla = document.getElementById ("cuerpoTabla");

const agregarUsuario = () => {
   const usuario = {
    id:crypto.randomUUID(),
    nombre: nombre.value,
    titulo: titulo.value,
    estatus: estatus.value,
    puesto: puesto.value,

   };

   usuarios.push(usuario);

   localStorage.setItem("usuarios", JSON.stringify(usuarios));
   mostrarUsuarios();
}

const mostrarUsuarios = () => {
    cuerpoTabla.innerHTML = "";
    usuarios.forEach(usuario =>{
    cuerpoTabla.innerHTML +=`<tr>
        <th>${usuario.id}</th>
        <td>${usuario.nombre}</td>
        <td>${usuario.titulo}</td>
        <td>${usuario.estatus}</td>
        <td>${usuario.puesto}</td>
        <td>
        <button
            type="button"
            class="btn btn-warning"
            onclick="editarUsuario ('${usuario.id}')"
        >
            Editar
        </button></td>
        <td>
        <button
            type="button"
            class="btn btn-danger"
            onclick="eliminarUsuario ('${usuario.id}')"
        >
            Eliminar
        </button></td>
    </tr>`;
    });
};

const eliminarUsuario = (id) => {
    usuarios=usuarios.filter((usuario)=>{return usuario.id!=id})
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    mostrarUsuarios();
}

const editarUsuario = (id) => {
    const usuario= usuarios.find(usuario=>usuario.id==id);
    console.log (usuario);
    console.log (id);
    console.log (usuarios);

    nombre.value=usuario.nombre
    titulo.value=usuario.titulo
    estatus.value=usuario.estatus
    puesto.value=usuario.puesto
    

    eliminarUsuario(id); 
    agregarUsuario() 
}

window.addEventListener("load",mostrarUsuarios)

