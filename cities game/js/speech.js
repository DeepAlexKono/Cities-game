
window.onload = function () {
  var textline = new ya.speechkit.Textline('my_id', {
        apikey: '9a8f7e1b-5445-4201-976e-5a59c9411603',
        onInputFinished: function(text) {
          // Финальный текст.
          var abc = document.getElementById("player").value;
          abc = text;

          document.getElementById("player").value = abc;
        }
      });
};