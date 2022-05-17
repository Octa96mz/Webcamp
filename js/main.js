(function(){
  "use strict";

var regalo = document.getElementById('regalo');

  document.addEventListener('DOMContentLoaded', function(){


    //campos datos usuario
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    // campos pases
    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');
    // BOTONES DIVS
    var calcular= document.getElementById('calcular');
    var errorDiv= document.getElementById('error');
    var botonRegistro = document.getElementById('btnRegistro');
    var lista_productos= document.getElementById('lista-productos');
    var suma= document.getElementById('suma-total');

    // EXTRAS

    var camisas = document.getElementById ('camisa_evento');
    var etiquetas = document.getElementById ('etiquetas');

    botonRegistro.disabled = true ;


if(document.getElementById('calcular')){
    calcular.addEventListener('click', calcularMontos);

    pase_dia.addEventListener('blur', mostrarDias);
    pase_dosdias.addEventListener('blur', mostrarDias);
    pase_completo.addEventListener('blur', mostrarDias);

    nombre.addEventListener('blur',validarCampos);
    apellido.addEventListener('blur',validarCampos);
    email.addEventListener('blur',validarCampos);
    email.addEventListener('blur',validarMail);

    function validarCampos(){
      if (this.value == '') {
        errorDiv.style.display= 'block';
        errorDiv.innerHTML = "este campo es obligatorio";
        errorDiv.style.border = '1px solid red';
        this.style.border = '1px solid red';
      }else{
        errorDiv.style.display= 'none';
        this.style.border = '1px solid #cccccc';
      }
    }

    function validarMail(){
      if(this.value.indexOf("@")>-1){
        errorDiv.style.display= 'none';
        this.style.border = '1px solid #cccccc';
      }else{
        errorDiv.style.display= 'block';
        errorDiv.innerHTML = "Debe ser un e-mail valido";
        errorDiv.style.border = '1px solid red';
        this.style.border = '1px solid red';

      }

    }





    function calcularMontos (event){
      event.preventDefault();
      if(regalo.value === ''){
        alert("Debes elegir un regalo");
        regalo.focus();
      }else {
        var boletosDia = pase_dia.value,
            boletos2dias = pase_dosdias.value,
            boletosCompletos = pase_completo.value,
            cantCamisas = camisas.value,
            cantEtiquetas = etiquetas.value;

        var totalPagar = (boletosDia*30)+(boletos2dias*45)+(boletosCompletos*50)+((cantCamisas*10)*.93)+(cantEtiquetas*2);

        var listadoProductos = [];
        if(boletosDia >=1 ){
          listadoProductos.push(boletosDia + ' Pases por dia');
        }
        if(boletos2dias>=1 ){
          listadoProductos.push(boletos2dias + ' Pases por 2 dias');
        }
        if(boletosCompletos >=1 ){
        listadoProductos.push(boletosCompletos + ' Pases Completos');
        }
        if(cantCamisas >=1 ){
        listadoProductos.push(cantCamisas + ' Camisas');
        }
        if(cantEtiquetas >=1 ){
        listadoProductos.push(cantEtiquetas + ' Etiquetas');
        }
        lista_productos.style.display = "block";
        lista_productos.innerHTML = '';
        for (var i = 0; i < listadoProductos.length; i++) {
          lista_productos.innerHTML += listadoProductos[i] + '<br/>';
        }

        suma.innerHTML = "$ " + totalPagar.toFixed(2);

        botonRegistro.disabled = false;
        document.getElementById('total_pedido').value = totalPagar;
      }
    }

    function mostrarDias(){
      var boletosDia = pase_dia.value,
          boletos2dias = pase_dosdias.value,
          boletosCompletos = pase_completo.value;

          var diasElegidos = [];

          if(boletosDia> 0){
            diasElegidos.push('viernes');
          }
          if(boletos2dias> 0){
            diasElegidos.push('viernes', 'sabado');
          }
          if(boletosCompletos> 0){
            diasElegidos.push('viernes', 'sabado', 'domingo');
          }
          for(var i = 0; i < diasElegidos.length; i++){
            document.getElementById(diasElegidos[i]).style.display='block';
          }



    }

  }
  }); //DOM CONTENT LOADED
})();


$(function(){
//lettering
  $('.nombre-sitio').lettering ();

// MENU FIJO
var windowHeight = $(window).height();
var barraAltura = $('.barra').innerHeight();

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if(scroll>windowHeight){
    $('.barra').addClass('fixed');
    $('body').css({'margin-top': barraAltura+'px'});
    } else{
      $('.barra').removeClass('fixed');
      $('body').css({'margin-top':'0px'});
  }
});
 // MENU Responsive

 $('.menu-movil').on('click', function(){
  $('.navegacion-principal').slideToggle();

});




// PROGRAMA DE CONFERENCIAS
  $('div.ocultar').hide();
  $('.programa-evento .info-curso:first').show();
  $('.menu-programa a:first').addClass('activo');

  $('.menu-programa a').on('click', function(){
    $('.menu-programa a').removeClass('activo');
    $(this).addClass('activo');
    $('.ocultar').hide();
    var enlace = $(this).attr('href');
    $(enlace).fadeIn(1000 )
    return false;
  });

// ANIMACION PARA LOS NUMEROS
  $('.resumen-evento li:nth-child(1) p').animateNumber({number:6} , 4000);
  $('.resumen-evento li:nth-child(2) p').animateNumber({number:15} , 4000);
  $('.resumen-evento li:nth-child(3) p').animateNumber({number:3} , 4000);
  $('.resumen-evento li:nth-child(4) p').animateNumber({number:9} , 4000);

// CUENTA Regresiva
$('.cuenta-regresiva').countdown('2021/10/25 09:00:00', function(event){
  $('#dias').html(event.strftime('%D'));
  $('#horas').html(event.strftime('%H'));
  $('#minutos').html(event.strftime('%M'));
  $('#segundos').html(event.strftime('%S'));

})

//colorbox
$('.invitado-info').colorbox({iframe:true, width:"80%" , height:"80%"}) ;

});
