var isOpen = false;
var isBinary = false;
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
}

$(function(){


  $(document).keypress(function(event){
    if(event.which == 32){
      if(snakeShown){
        hideSnake();
      } else{
        snakeShown = true;
        $('#HHSLogo').hide();
        $('.homeMarquee').hide();
        $('<iframe src="projects/snake/index.html" frameborder="0" scrolling="no" width="100%" height="100%" id="snakeEasterEgg" class="fadein1"></iframe>').appendTo('.content').focus();
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
  $('#snakeEasterEgg').hide();
  $('#HHSLogo').show();
  $('.homeMarquee').show();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function binaryToggle(){
  if(isBinary){
    recursiveReplace(document.body);
    isBinary=false;
  }else{
    recursiveReplace(document.body);
    isBinary = true;
  }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  isOpen = false;
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
    var convertedText;
    if (text.replace(/\s/g, '') != "") {
      if(isBinary){
        eachByte = text.split(" ");
        convertedString = [];
        for(i=0;i<eachByte.length;i++){
          convertedString.push(String.fromCharCode(parseInt(eachByte[i], 2)));
        }
        convertedText = convertedString.join("");
      } else{
        for (x = 0; x < text.length; x++) {
            convertedText += text[x].charCodeAt(0).toString(2) + " ";
        }
      }

      convertedText = convertedText.replace("undefined", "");
      node.nodeValue = node.nodeValue.replace(text, convertedText);
    }


  } else if (node.nodeType == 1) { // element
    $(node).contents().each(function() {
      recursiveReplace(this);
    });
  }
}

}
