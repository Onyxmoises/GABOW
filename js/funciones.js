const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('containerini');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});


const validarBusqueda=(busqueda)=>{
  const options=document.getElementById("aulas").options;
  for(i of options){
      if(i.value==busqueda){
          return true;
      }
  }
  return false;
}
const redirigir=()=>{
  const busqueda=document.getElementById("search").value;
  if(!validarBusqueda(busqueda)){
      Swal.fire({
          title:'Error',
          text: 'Has introducido una busqueda invalida. Revisa la entrada'
      });
  }else{
      window.location.assign(`mapa.html?location=${busqueda}`);
  }
}
const mostrar=(id)=>{
  document.querySelector("#title").innerHTML=`<h2>${id}</h2>`;
  document.getElementById("button").style.visibility="visible"
}
const removerResaltado=()=>{
  try{
      document.getElementsByClassName("resaltado")[0].removeAttribute("class");
  }catch(error){}
}
window.onload=()=>{
  let opt="";
  const datalist=document.getElementById("aulas");
  document.getElementsByName("aula").forEach((element)=>{
      element.setAttribute("onclick","mostrar(id)");
      opt+=`<option value="${element.id}">`;
  });
  datalist.innerHTML=opt;
  const valores = window.location.search;
  if(!valores==""){
      const enlace=document.createElement("A");
      enlace.setAttribute("href","mapa.html");
      enlace.innerHTML="Regresar a Principal";
      document.body.appendChild(enlace)
      const urlParams = new URLSearchParams(valores);
      const location = urlParams.get('location');
      const element=document.getElementById(location);
      element.setAttribute("class","resaltado");
      element.onclick();
      document.getElementsByName("aula").forEach((element)=>{
          element.setAttribute("onclick","removerResaltado(),mostrar(id)");
      });
  }
}