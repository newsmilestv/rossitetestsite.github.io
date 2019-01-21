(function () {
  var button = document.getElementById('start-demo'),
      background = document.getElementById('wrapp');

      // setTimeout(function () {
      //   button.onclick = background.style.visibility = 'hidden';
      // } , 5000);

      button.onclick =function () {
        setTimeout(function () {
          // background.style.visibility = 'hidden';
          alert('HI!!!');
        } , 5000);
      };
})();
