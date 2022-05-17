<footer class="site-footer">
  <div class="contenedor clearfix">
    <div class="footer-informacion">
      <h3>Sobre <span>WebCamp</span></h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
    </div>
    <div class="ultimos-tweets">
      <h3>ultimos <span>tweets</span></h3>
      <ul>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
      </ul>
    </div>
    <div class="menu">
      <h3>redes <span>sociales</span></h3>
      <nav class="redes-sociales">
        <a href="#"><i class="fab fa-facebook-f"></i></i></a>
        <a href="#"><i class="fab fa-twitter"</i></i></a>
        <a href="#"><i class="fab fa-pinterest"</i></i></a>
        <a href="#"><i class="fab fa-youtube"</i></i></a>
        <a href="#"><i class="fab fa-instagram"</i></i></a>
      </nav>
    </div>
  </div>
  <p class="copyright">
    Todos los derechos reservados WebCamp 2021.
  </p>
</footer>
jquery.countdown.min

  <script src="js/jquery.js"></script>
  <script src="js/vendor/modernizr-3.11.2.min.js"></script>
  <script src="js/plugins.js"></script>
  <script src="js/jquery.animateNumber.min.js"></script>
  <script src="js/jquery.countdown.min.js"></script>
  <script src="js/jquery.lettering.js"></script>

  <?php
  $archivo = basename($_SERVER['PHP_SELF']);
  $pagina = str_replace(".php", "", $archivo);
  if ($pagina == 'invitados') {
  echo   '<script src="js/jquery.colorbox-min.js"></script>';
  }elseif ($pagina == 'conferencia') {
  echo  '<script src="js/jquery.lightbox.js"></script>';
  }
  ?>
 


  <script src="js/main.js"></script>

  <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
  <script>
    window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
    ga('create', 'UA-XXXXX-Y', 'auto'); ga('set', 'anonymizeIp', true); ga('set', 'transport', 'beacon'); ga('send', 'pageview')
  </script>
  <script src="https://www.google-analytics.com/analytics.js" async></script>
</body>

</html>
