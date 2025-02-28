var $ = jQuery.noConflict();

function getAnswer(question) {
  return "База знаний пока не работает";
}

var dialogOn = false;

function openDialog() {
  const overlay = document.getElementById("dialog-overlay");
  const dialog = $("#dialog");
  const screenWidth = $(window).width();
  const dialogwidth = dialog.width();

  let slideOutPx, slideInPx;

      slideOutPx = -screenWidth/2 - dialogwidth/2; 
      slideInPx = "-45px"; 


  if (dialogOn) {
      // Закрытие
      dialog.animate({ "margin-left": slideInPx }, 800, function () {
          overlay.style.display = "none";
      });
      dialogOn = false;
  } else {
      // Открытие
      dialog.animate({ "margin-left": slideOutPx }, 800, function () {
          overlay.style.display = "block";
      });
      dialogOn = true;
  }
}

function closeDialog() {
  if (dialogOn) {
      openDialog();
  }
}

function ask() {
  var question = document.getElementById("Qdialog").value;
  dialogOn = true;
  var newDiv = document.createElement("div");
  newDiv.className = "question";
  newDiv.innerHTML = question;
  document.getElementById("history").appendChild(newDiv);
  +"</div>";
  newDiv = document.createElement("div");
  newDiv.className = "answer";
  newDiv.innerHTML = getAnswer(question);
  document.getElementById("history").appendChild(newDiv);
  document.getElementById("history").scrollTop =
  document.getElementById("history").scrollHeight;
  document.getElementById("Qdialog").value = "";
}


document.addEventListener("click", function (event) {
  const img = event.target.closest(".dialog .answer img");
  if (img) {
      if (img.classList.contains("fullscreen")) {
          img.classList.remove("fullscreen");
      } else {
          document.querySelectorAll(".dialog .answer img.fullscreen").forEach(image => {
              image.classList.remove("fullscreen");
          });
          img.classList.add("fullscreen");
      }
  } else {
      document.querySelectorAll(".dialog .answer img.fullscreen").forEach(image => {
          image.classList.remove("fullscreen");
      });
  }
});
