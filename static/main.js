$("#linkedIn").click(function () {
  window.open("https://www.linkedin.com/in/johnexterkamp/", "_blank");
});
$(".tooltip").click(function () {
  tool = $(this);
  val = tool.find(".tooltiptext").text();
  navigator.clipboard.writeText(val);
  tool.find(".tooltiptext").text("Copied !");
  setTimeout(() => {
    tool.find(".tooltiptext").text(val);
  }, 1000);
});
