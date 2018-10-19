// var  elTrans = style.transition;
// var opac1 = "opacity 1s linear";
function myFunction() {
  var el = document.getElementById("topTitle");

  if(el.style.transform === "translateY(350px)" && el.style.color === "blue" && el.style.fontSize === "54px") {
    el.style.transform = "translateY(0px)";
    el.style.color = "black";
    el.style.fontSize = "32px";
    el.style.transition = "all 1s linear";
    } else {
    el.style.transform = "translateY(350px)"
    el.style.transition = "all 1s linear";
    el.style.color = "blue";
    el.style.fontSize = "54px";
   }
};

function myFunction1() {
  var el1 = document.getElementById("display1");

  if(el1.style.opacity === "1") {
    el1.style.transition = "opacity 1s linear";
    el1.style.opacity = "0";
  } else {
    el1.style.transition = "opacity 1s linear";
    el1.style.opacity = "1";
  }
};

function myFunction2() {
  var el2 = document.getElementById("display2");

  if(el2.style.opacity === "0") {
    el2.style.transition = "opacity 1s linear";
    el2.style.opacity = "1";
  } else {
    el2.style.transition = "opacity 1s linear";
    el2.style.opacity = "0";
  }
}

function myFunction3() {
  var el3 = document.getElementById("display3");

  if(el3.style.fontSize === "40px") {
    el3.style.transition = "font-size 1s linear";
    el3.style.fontSize = "16px";
  } else {
    el3.style.transition = "font-size 1s linear";
    el3.style.fontSize = "40px";
  }
}

function myFunction4() {
  var el4 = document.getElementById("display4");
  // el3.style.transition = "transform 1s linear";
  // el3.style.transform = "rotate(180deg)";

  if(el4.style.transform === "rotate(180deg)") {
    el4.style.transition = "transform 1s linear";
    el4.style.transform = "rotate(0deg)";
  } else {
    el4.style.transition = "transform 1s linear";
    el4.style.transform = "rotate(180deg)";
  }

}

function myFunction5() {
  var el5 = document.getElementById("display5");
  // el3.style.transition = "transform 1s linear";
  // el3.style.transform = "rotate(180deg)";

  if(el5.style.transform === "translate(500px)") {
    el5.style.transition = "transform 1s linear";
    el5.style.transform = "translate(0)";
  } else {
    el5.style.transition = "transform 1s linear";
    el5.style.transform = "translate(500px)";
  }

}

function myFunction5() {
  var el5 = document.getElementById("display5");

  if(el5.style.transform === "translateX(450px) rotate(360deg)" && el5.style.fontSize === "80px") {
    el5.style.transition = "all 1s linear";
    el5.style.transform = "translatex(0) rotate(0)";
    el5.style.fontSize = "16px";
    } else {
    el5.style.transition = "all 1s linear";
    el5.style.transform = "translateX(450px) rotate(360deg)";
    el5.style.fontSize = "80px";


  }

}

function myFunction6() {
  var el6 = document.getElementById("display6");

  if(el6.style.transform === "translate(250px) rotate(360deg)") {
    el6.style.transition = "transform 1s linear";
    el6.style.transform = "translate(0) rotate(0)"
    } else {
    el6.style.transition = "transform 1s linear";
    el6.style.transform = "translate(250px) rotate(360deg)";


  }

}
