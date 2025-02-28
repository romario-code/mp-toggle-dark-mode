window.onload = () => {
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  let isDark = document.getElementById("theme-toggle");

  const clickAudio = new Audio("./click.mp3");

  isDark.addEventListener("change", (event) => {
    if (event.target.checked) {
      document.documentElement.classList.add("dark");
      clickAudio.play();
    } else {
      document.documentElement.classList.remove("dark");
      clickAudio.play();
    }
    localStorage.setItem("theme", event.target.checked ? "dark" : "light");
    console.log("Theme set to:", isDark ? "dark" : "light");
    console.log("Current classes on html:", document.documentElement.className);
  });
};
