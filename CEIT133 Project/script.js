const hamburger = document.querySelector(".hamburger");
const hamburgermenu = document.querySelector(".hamburgermenu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('change');
    hamburgermenu.classList.toggle('change');
})
function showAlert() {
    alert("Please take your time while we're analyzing to your message :)");
  }
function confirmLeave() {
    if (confirm("You are about to leave the site. Are you sure?")) {
      return true;
    } else {
      return false;
    }
  }
