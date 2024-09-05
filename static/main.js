$("#linkedIn").click(function () {
  window.open("https://www.linkedin.com/in/johnexterkamp/", "_blank");
});
function reset(tool, val) {
  setTimeout(() => {
    tool.find(".tooltiptext").text(val);
  }, 1000);
}
$(".tooltip").click(function () {
  tool = $(this);
  val = tool.find(".tooltiptext").text();
  navigator.clipboard.writeText(val);
  tool.find(".tooltiptext").text("Copied !");
  reset(tool, val);
});
