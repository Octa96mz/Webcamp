console.log("1");
(function(){
  'use strict';

  document.addEventListener('DOMContentLoaded', function(){
    //getElementById
    /*
    var logo =  document.getElementById("logo");
    var navegacion = document.getElementById("navegacion")
    navegacion.style.display = "none";
    */
    /* getElementsByClassName
    var navegacion = document.getElementsByClassName('navegacion')
    console.log(navegacion);
    var contenido = document.getElementsByClassName('contenido');
    console.log(contenido[0]);
    contenido[0].style.display = 'none';
    */
    /* GET ELEMENTS BY TARGET
    var enlaces = document.getElementsByTagName('a');
    console.log(enlaces.length);
    for(var i =0; i < enlaces.length; i++){
      enlaces[i].setAttribute('target','_blank');
    }
    var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
    console.log(enlacesSidebar);
    for(var i =0; i < enlacesSidebar.length; i++){
      enlacesSidebar[i].setAttribute('href','http://www.google.com');}
      */
      /*QUERY SELECTOR
      var logo = document.querySelector('.logo');
      console.log(logo);

      var encabezado= document.querySelector('aside h2');
      console.log(encabezado);
      */
      /* QUERY SELECTOR ALL
      var encabezado= document.querySelectorAll('h2, footer p');
      console.log(encabezado);

      var enlace= document.querySelectorAll('a');
      console.log(enlace);

      for (var i = 0; i < enlace.length; i++) {
        console.log(enlace[i].innerText);
      }
      */
      /*
      // AGREGAR ENTRADA 6
      var enlacesSidebar = document.querySelectorAll('#sidebar ul');
      //creando el enlace
      var nuevoEnlace = document.createElement('A');
      nuevoEnlace.setAttribute('href', 'http://www.google.com');
      var textoEnlace = document.createTextNode('Entrada 6');
      nuevoEnlace.appendChild(textoEnlace);
      //CREANDO LA LISTA
      var nuevaLista = document.createElement('LI');
      nuevaLista.appendChild(nuevoEnlace);
      //AGREGO AL MENU
      enlacesSidebar[0].appendChild(nuevaLista);
      */

      // CLONAR NODO
      /*
      var contenido = document.querySelectorAll('main');
      var nuevoContenido = contenido[0].cloneNode(true);

      var sidebar =document.querySelector('aside');
      sidebar.insertBefore(nuevoContenido , sidebar.childNodes[5]);
      */
      /*LISTA MAS VISITADOS
      var sidebar = document.querySelector('aside');

      var masVisitados = document.createElement('H2');
      var textoVisitados = document.createTextNode('Post Mas Visitados');
      masVisitados.appendChild(textoVisitados);
      sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);

      var contenido = document.querySelectorAll('main h2');

      for (var i = 0; i < contenido.length; i++) {
        var nuevoElemento = document.createElement('LI');
        var nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
        nuevoElemento.appendChild(nuevoTexto);
        sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
      }
      */
      //ELIMINAR NODOS
      /*
      var primerPost = document.querySelector('main article');
      console.log(primerPost);

      primerPost.parentNode.removeChild(primerPost);

      var enlaces = document.querySelectorAll('#navegacion nav ul li a')[10];
      console.log(enlaces);
      enlaces.parentNode.removeChild(enlaces);
      */
      






  });
})();
console.log("3");
