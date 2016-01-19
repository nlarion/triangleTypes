var triangleType = function(triangle){
  //debugger;
  //return ((triangle % 4 === 0) && (triangle % 100 !== 0) || (triangle % 400 === 0));
  console.log(triangle);
  // if(triangle.length ===0 || isNaN(triangle)){
  //   return false;
  // } else {
  //   triangle = parseInt(triangle);
  //   return ((triangle % 4 === 0) && (triangle % 100 !== 0) || (triangle % 400 === 0));
  // }

};

$(document).ready(function() {
  $("form").submit(function(event) {
    var triangle =[$("input#side1").val(), $("input#side2").val(), $("input#side3").val() ]
    var result = triangleType(triangle);

    $(".triangle").text(triangle);

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
    event.preventDefault();
  });
});
