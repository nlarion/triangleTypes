var triangleType = function(triangle){

  var side1 = parseInt(triangle[0]);
  var side2 = parseInt(triangle[1]);
  var side3 = parseInt(triangle[2]);

  if ((side1 !== side2) && (side3 !== side2) && (side1 !== side3)){
    if((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)){
      console.log((side1 + side2 <= side3) )
      //not a triangle return blank string
      return "";
    }else {
      return "scalene";
    }
  } else if ((side1 === side2) && (side3 === side2)){
    return "equilateral";
  } else if ((side1 === side2) || (side3 === side2) || (side1 === side3)) {
    return "isosceles";
  } else {
    console.log("last false");
    return false;
  }
};

$(document).ready(function() {
  $("form").submit(function(event) {
    var triangle =[$("input#side1").val(), $("input#side2").val(), $("input#side3").val() ]
    var result = triangleType(triangle);

    $(".triangle").text(result);

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
    event.preventDefault();
  });
});
