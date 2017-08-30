/* Set the width of the side navigation to 250px */

(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-83856517-1', 'auto');
ga('send', 'pageview');


var isOpen = false;

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
  openNavAction();
  isOpen = true;
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
