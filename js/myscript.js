(function () {
  var button = document.getElementById('start-demo'),
      background = document.getElementById('wrapp');

      setInterval(function () {
        button.onclick = background.style.visibility = 'hidden';
      } , 5000);


})();
