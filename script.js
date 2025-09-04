document.getElementById("changeTextBtn").addEventListener("click", () => {
  const header = document.querySelector("header p");
  header.textContent = "You just clicked the button";
});