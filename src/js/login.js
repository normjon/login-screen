import '../css/login.css';
import {setLoginOptions} from './AuthSimple.js';
import {doLogin} from './AuthSimple.js';
import {testCORS} from './AuthSimple.js';
import {loginOptions} from './config.js';
var pImg = require('../images/pearson_logo.svg');
var overlayHeight = 390;
var env_location = env;


setLoginOptions(loginOptions[env_location]);

$(window, document, undefined).ready(function() {
  (function(){
    var pearsonImage = new Image();
    pearsonImage.src = pImg;
    overlayHeight = $('#login-form').height()+128;
    $('#img-header').append(pearsonImage);
    $('#reset-password-link').attr("href",loginOptions[env_location].resetPasswordLink);
    var fail = $_GET('fail');
    if(fail=='true'){
      $("#flagfail").html("Failed Login");
    }
    else{
      $("#flagfail").html("");
    }
  })();

  $('#login-button').click(function(){
    console.log('login-button');
    var loginUrl = window.location.href;
    var originalUrl = ($_GET('goto')?$_GET('goto'):'/');
    var data = {};
    data.username = $('#login-user').val();
    data.password = $('#login-password').val();
    doLogin(data, function(err,res){
      console.log('callback');
      if(err){
        if(loginUrl.includes("?")){
          window.location.href = loginUrl+'&fail=true';
        }
        else{
          window.location.href = loginUrl+'?fail=true';
        }

      }
      else{
        window.location.href = decodeURIComponent(originalUrl);
        console.log(decodeURIComponent(originalUrl));
      }
    });
  });

  $('#login-password').keyup(function(event){
    if(event.keyCode == 13){
      $('#overlay').css("height",overlayHeight);
      $('#login-button').click();
    }
  });

  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');
    $('#overlay').css("height",overlayHeight);
  });

  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
    $(this).removeClass('is-active');
  });

});

function $_GET(param) {
  var vars = {};
  window.location.href.replace( location.hash, '' ).replace(
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
    function( m, key, value ) { // callback
      vars[key] = value !== undefined ? value : '';
    }
  );

  if ( param ) {
    return vars[param] ? vars[param] : null;
  }
  return vars;
}
