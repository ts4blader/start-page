const time = document.getElementById("clock");
const searchInput = document.getElementById("search");
const allLink = document.querySelectorAll(".categories a");

document.body.addEventListener("keydown", (e) => {
  if (e.code === "Slash") {
    e.preventDefault();
    searchInput.focus();
  }
});

const updateClock = () => {
  const now = new Date();
  let hour = now.getHours().toString();
  const minutes = now.getMinutes().toString();
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour.toString() : "12";

  time.innerHTML = `${hour.padStart(2, "0")} : ${minutes.padStart(
    2,
    "0"
  )} ${ampm}`;

  setTimeout(updateClock, 1000);
};

const filterInput = () => {
  searchInput.addEventListener("keydown", () => {
    const searchTerm = searchInput.value.toLowerCase();
    allLink.forEach((item) => {
      if (item.innerHTML.toLowerCase().includes(searchTerm)) {
        item.removeAttribute("data-inactive");
        item.removeAttribute("tabindex");
      } else {
        item.setAttribute("data-inactive", "inactive");
        item.setAttribute("tabindex", "-1");
      }
    });
  });

  allLink.forEach((item) => {
    item.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        e.preventDefault();
        searchInput.focus();
      }
    });
  });
};

filterInput();
updateClock();
