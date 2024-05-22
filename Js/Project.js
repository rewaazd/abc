var hiddenElement = document.getElementById("heading-aboutid");
var btn = document.querySelector(".about-link");

function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: "start", behavior: "smooth" });
}

btn.addEventListener("click", handleButtonClick);


var hiddenElement2 = document.getElementById("heading-productid");
var btn2 = document.querySelector(".product-link");

function handleButtonClick2() {
  hiddenElement2.scrollIntoView({ block: "start", behavior: "smooth" });
}

btn2.addEventListener("click", handleButtonClick2);




var hiddenElement3 = document.getElementById("heading-cooperationid");
var btn3 = document.querySelector(".coop-link");

function handleButtonClick3() {
  hiddenElement3.scrollIntoView({ block: "start", behavior: "smooth" });
}

btn3.addEventListener("click", handleButtonClick3);



// 1st button
document.getElementById("open-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.  add("open")
  document.body.classList.add('body-hidden');
  
})
document.getElementById("open-modal-btn-1").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
  document.body.classList.add('body-hidden');
  
})

document.getElementById("open-modal-btn-1-h3").addEventListener("click", function() {
  document.getElementById("my-modal").classList.add("open")
  document.body.classList.add('body-hidden');
  
})

document.getElementById("btn-close").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
  document.body.classList.remove('body-hidden');
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal").classList.remove("open")
    document.body.classList.remove('body-hidden');
  }
})


document.querySelector("#my-modal .modal-window").addEventListener("click", event => {
  event._isClickWithInModal = true;
});

document.getElementById("my-modal").addEventListener("click", event => {
  if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
    document.body.classList.remove('body-hidden');
});


// 2nd button
document.getElementById("open-modal-btn-2").addEventListener("click", function() {
  document.getElementById("my-modal-2").classList.add("open")
  document.body.classList.add('body-hidden');
  
})
document.getElementById("open-modal-btn-2-2").addEventListener("click", function() {
  document.getElementById("my-modal-2").classList.add("open")
  document.body.classList.add('body-hidden');
  
})

document.getElementById("open-modal-btn-2-2-h3").addEventListener("click", function() {
  document.getElementById("my-modal-2").classList.add("open")
  document.body.classList.add('body-hidden');
  
})


document.getElementById("btn-close-2").addEventListener("click", function() {
  document.getElementById("my-modal-2").classList.remove("open")
  document.body.classList.remove('body-hidden');
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal-2").classList.remove("open")
    document.body.classList.remove('body-hidden');
  }
})


document.querySelector("#my-modal-2 .modal-window-2").addEventListener("click", event => {
  event._isClickWithInModal = true;
});

document.getElementById("my-modal-2").addEventListener("click", event => {
  if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
    document.body.classList.remove('body-hidden');
});

// 3rd button
document.getElementById("open-modal-btn-3").addEventListener("click", function() {
  document.getElementById("my-modal-3").classList.add("open")
  document.body.classList.add('body-hidden');
  
})
document.getElementById("open-modal-btn-3-3").addEventListener("click", function() {
  document.getElementById("my-modal-3").classList.add("open")
  document.body.classList.add('body-hidden');
  
})

document.getElementById("open-modal-btn-3-3-h3").addEventListener("click", function() {
  document.getElementById("my-modal-3").classList.add("open")
  document.body.classList.add('body-hidden');
  
})

document.getElementById("btn-close-3").addEventListener("click", function() {
  document.getElementById("my-modal-3").classList.remove("open")
  document.body.classList.remove('body-hidden');
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal-3").classList.remove("open")
    document.body.classList.remove('body-hidden');
  }
})


document.querySelector("#my-modal-3 .modal-window-3").addEventListener("click", event => {
  event._isClickWithInModal = true;
});

document.getElementById("my-modal-3").addEventListener("click", event => {
  if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
    document.body.classList.remove('body-hidden');
});

// 4 button
document.getElementById("open-modal-btn-4").addEventListener("click", function() {
  document.getElementById("my-modal-4").classList.add("open")
  document.body.classList.add('body-hidden');
  
})
document.getElementById("open-modal-btn-4-4").addEventListener("click", function() {
  document.getElementById("my-modal-4").classList.add("open")
  document.body.classList.add('body-hidden');
  
})

document.getElementById("open-modal-btn-4-4-h3").addEventListener("click", function() {
  document.getElementById("my-modal-4").classList.add("open")
  document.body.classList.add('body-hidden');
  
})

document.getElementById("btn-close-4").addEventListener("click", function() {
  document.getElementById("my-modal-4").classList.remove("open")
  document.body.classList.remove('body-hidden');
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal-4").classList.remove("open")
    document.body.classList.remove('body-hidden');
  }
})


document.querySelector("#my-modal-4 .modal-window-4").addEventListener("click", event => {
  event._isClickWithInModal = true;
});

document.getElementById("my-modal-4").addEventListener("click", event => {
  if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
    document.body.classList.remove('body-hidden');
});


// 5 button
document.getElementById("open-modal-btn-5").addEventListener("click", function() {
  document.getElementById("my-modal-5").classList.add("open")
  document.body.classList.add('body-hidden');
  
})
document.getElementById("open-modal-btn-5-5").addEventListener("click", function() {
  document.getElementById("my-modal-5").classList.add("open")
  document.body.classList.add('body-hidden');
  
})
document.getElementById("open-modal-btn-5-5-h3").addEventListener("click", function() {
  document.getElementById("my-modal-5").classList.add("open")
  document.body.classList.add('body-hidden');
  
})

document.getElementById("btn-close-5").addEventListener("click", function() {
  document.getElementById("my-modal-5").classList.remove("open")
  document.body.classList.remove('body-hidden');
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal-5").classList.remove("open")
    document.body.classList.remove('body-hidden');
  }
})


document.querySelector("#my-modal-5 .modal-window-5").addEventListener("click", event => {
  event._isClickWithInModal = true;
});

document.getElementById("my-modal-5").addEventListener("click", event => {
  if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
    document.body.classList.remove('body-hidden');
});


// 7 button
document.getElementById("open-modal-btn-7").addEventListener("click", function() {
  document.getElementById("my-modal-7").classList.add("open")
  document.body.classList.add('body-hidden');
  
})

document.getElementById("open-modal-btn-7-7").addEventListener("click", function() {
  document.getElementById("my-modal-7").classList.add("open")
  document.body.classList.add('body-hidden');
  
})
document.getElementById("open-modal-btn-7-7-h3").addEventListener("click", function() {
  document.getElementById("my-modal-7").classList.add("open")
  document.body.classList.add('body-hidden');
  
})

document.getElementById("btn-close-7").addEventListener("click", function() {
  document.getElementById("my-modal-7").classList.remove("open")
  document.body.classList.remove('body-hidden');
})


window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal-7").classList.remove("open")
    document.body.classList.remove('body-hidden');
  }
})


document.querySelector("#my-modal-7 .modal-window-7").addEventListener("click", event => {
  event._isClickWithInModal = true;
});

document.getElementById("my-modal-7").addEventListener("click", event => {
  if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
    document.body.classList.remove('body-hidden');
});


