function formsubmit() {
  let blur = document.getElementById("my_blur");
  blur.classList.toggle("active");

  document.getElementById("cod_online").style.display = "flex";
}

function cod_fcn() {
  document.getElementById("cod_submit").style.display = "flex";
  document.getElementById("cod_cancel").style.display = "flex";
  document.getElementById("cod_btn").style.backgroundColor = "#fa8a53";
  document.getElementById("cod_btn").style.color = "#ffff";
  //   let codbtnactive = document.getElementById("cod_btn");
  //   codbtnactive.classList.toggle("active");
}

function payon_fcn() {
  document.getElementById("section4").style.display = "flex";
  document.getElementById("cod_online").style.display = "none";
}
