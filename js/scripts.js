var triangleType = function(triangle){

  if((isValidInput(triangle)) && (isTriangle(triangle))){
    if((parseInt(triangle[0]) !== parseInt(triangle[1])) && (parseInt(triangle[2]) !== parseInt(triangle[1])) && (parseInt(triangle[0]) !== parseInt(triangle[2]))){
      return "scalene";
    } else if ((parseInt(triangle[0]) === parseInt(triangle[1])) && (parseInt(triangle[2]) === parseInt(triangle[1]))){
      return "equilateral";
    } else if ((parseInt(triangle[0]) === parseInt(triangle[1])) || (parseInt(triangle[2]) === parseInt(triangle[1])) || (parseInt(triangle[0]) === parseInt(triangle[2]))) {
      return "isosceles";
    } else {
      return false;
    }
  } else{
    return false;
  }
}

function isTriangle(triangle){
  if ((parseInt(triangle[0]) + parseInt(triangle[1]) <= parseInt(triangle[2])) || (parseInt(triangle[1]) + parseInt(triangle[2]) <= parseInt(triangle[0])) || (parseInt(triangle[0]) + parseInt(triangle[2]) <= parseInt(triangle[1]))){
    return false;
  } else {
    return true;
  }
}

function isValidInput(triangle){
  if((triangle[0].length === 0) || (triangle[1].length === 0) || (triangle[2].length === 0) || isNaN(triangle[0]) || isNaN(triangle[1]) || isNaN(triangle[2]) ){
    return false;
  } else{
    return true;
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    var triangle =[$("input#side1").val(), $("input#side2").val(), $("input#side3").val() ]
    var result = triangleType(triangle);
    if(result){
      $(".triangle").text(result);
      $("#result").show();
    }
    
    event.preventDefault();
  });
});

