function goToTop() {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
  };

window.onscroll = function() {
    if (document.documentElement.scrollTop > 0) {
        document.querySelector(".banner").classList.add("fixed");
    } else {
        document.querySelector(".banner").classList.remove("fixed");
    }
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("btn-top").style.display = "block";
    } else {
    document.getElementById("btn-top").style.display = "none";
    }
};