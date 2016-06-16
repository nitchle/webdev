var ans = "";
var clear = false;
var calc = "";

$(document).ready(function() {

    $("#calc_button").click(function() {
      alert('test');
      var text = $(this).attr("value");
      if(parseInt(text, 10) == text || text === "." || text === "/" || text === "*" || text === "-" || text === "+" || text === "%") {
        if(clear === false) {
          calc += text;
          $("#calc_textbox").val(calc);
        } else {
          calc = text;
          $("#calc_textbox").val(calc);
          clear = false;
        }
      } else if(text === "AC") {
        calc = "";
        $("#calc_textbox").val("");
      } else if(text === "CE") {
        calc = calc.slice(0, -1);
        $("#calc_textbox").val(calc);
      } else if(text === "=") {
        ans = eval(calc);
        $("#calc_textbox").val(ans);
        clear = true;
      }
    });
});
