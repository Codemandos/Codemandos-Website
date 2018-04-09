var isOpen = false;
var isBin = false;
var clicked = [];
var videoBlurred = true;
var snakeShown = false;

function openNavAction() {
  if ((window.innerWidth / window.innerHeight) < 1) {
    document.getElementById("mySidenav").style.width = "100%";
  } else if ((window.innerWidth / window.innerHeight) < 1.2) {
    document.getElementById("mySidenav").style.width = "50%";
  } else if ((window.innerWidth / window.innerHeight) < 1.7) {
    document.getElementById("mySidenav").style.width = "35%";
  } else {
    document.getElementById("mySidenav").style.width = "25%";
  }
}

function openNav() {
  $("#menuFallBackLink").attr("href", "#");
  openNavAction();
  isOpen = true;
  console.log("Opened nav");
}

$(".form").focusout(function(){
  $(this).focus();
  console.log("Form out of focus. Focusing back on form");
});

$(function(){

  $(document).keypress(function(event){
    if(event.which == 32){
      if(snakeShown){
        hideSnake();
      } else{
        snakeShown = true;
        $('#HHSLogo').hide();
        $('.homeMarquee').hide();
        $('<iframe src="https://andreig992.github.io/Noodle/" frameborder="0" scrolling="no" width="100%" height="100%" id="secret" class="fadein1"></iframe>').appendTo('.content').focus();
        console.log("01000101 01100001 01110011 01110100 01100101 01110010 01000101 01100111 01100111 00111010 00100000 01010011 01101000 01101111 01110111 01101001 01101110 01100111 00100000 01010011 01101110 01100001 01101011 01100101");
      }
    }
  })

  $(".top").dblclick(function(){
      binaryToggle();
  });
  $("h1").dblclick(function(){
    $('.content').css("color",getRandomColor);
    $('.content').css("outline-color",getRandomColor);
    $('font').css("color",getRandomColor);
  });
  $(".content").dblclick(function(){
    if(videoBlurred){
      $('#vid').css({
        "filter" :"blur(0px) brightness(100%) grayscale(0%)",
    })
      $('#HHSLogo').hide();
      $('.homeMarquee').hide();
      videoBlurred = false;
    }else{
      $('#vid').css({
        "filter" :"blur(15px) brightness(70%) grayscale(20%)",
    })
      $('#HHSLogo').show();
      $('.homeMarquee').show();
      videoBlurred = true;
    }
  });
  $(".content").click(function(){
    if(snakeShown){
      hideSnake();
    }
    if(videoBlurred){
      $("#HHSLogo").css("transform", "scale(1.1, 1.1)");
      setTimeout(function(){
            $("#HHSLogo").css("transform", "scale(1.0, 1.0)");
      }, 450);
    }
  })
})

function hideSnake(){
  snakeShown = false;
  $('#secret').hide();
  $('#HHSLogo').show();
  $('.homeMarquee').show();
  console.log("01000101 01100001 01110011 01110100 01100101 01110010 01000101 01100111 01100111 00111010 00100000 01001000 01101001 01100100 00100000 01010011 01101110 01100001 01101011 01100101");
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log("01000101 01100001 01110011 01110100 01100101 01110010 01000101 01100111 01100111 00111010 00100000 01000011 01101000 01100001 01101110 01100111 01100101 01100100 00100000 01110100 01101111 00100000 01110010 01100001 01101110 01100100 01101111 01101101 00100000 01100011 01101111 01101100 01101111 01110010 01110011");
  return color;
}


function binaryToggle(){
  if(isBin){
    recursiveReplace(document.body);
    isBin=false;
    console.log("01000101 01100001 01110011 01110100 01100101 01110010 01000101 01100111 01100111 00111010 00100000 01000010 01100001 01100011 01101011 00100000 01110100 01101111 00100000 01110100 01100101 01111000 01110100");
  }else{
    recursiveReplace(document.body);
    isBin = true;
    console.log("01000101 01100001 01110011 01110100 01100101 01110010 01000101 01100111 01100111 00111010 00100000 01000010 01100001 01100011 01101011 00100000 01110100 01101111 00100000 01100010 01101001 01101110 01100001 01110010 01111001");
  }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  isOpen = false;
  console.log("Closed Nav");
}

window.addEventListener('resize', function(event) {
  if (isOpen === true) {
    openNavAction();
  }
});


function recursiveReplace(node) {
if(node.className != "sidenav"){
  if (node.nodeType == 3) { // text node
    var text = node.nodeValue.trim();
    var convTxt;
    if (text.replace(/\s/g, '') != "") {
      if(isBin){
        eachByte = text.split(" ");
        convStr = [];
        for(i=0;i<eachByte.length;i++){
          convStr.push(String.fromCharCode(parseInt(eachByte[i], 2)));
        }
        convTxt = convStr.join("");
      } else{
        for (x = 0; x < text.length; x++) {
            convTxt += text[x].charCodeAt(0).toString(2) + " ";
        }
      }

      convTxt = convTxt.replace("undefined", "");
      node.nodeValue = node.nodeValue.replace(text, convTxt);
    }


  } else if (node.nodeType == 1) { // element
    $(node).contents().each(function() {
      recursiveReplace(this);
    });
  }
}

}
