document.addEventListener("DOMContentLoaded", function () {
  const hearts = document.querySelectorAll(".heart");

  hearts.forEach((heart, index) => {
    const key = `liked_${index}`; 

    
    if (localStorage.getItem(key) === "true") {
      heart.textContent = "❤️";
    }

    heart.addEventListener("click", function (event) {
      event.preventDefault();

      const isLiked = heart.textContent === "❤️";
      heart.textContent = isLiked ? "🤍" : "❤️";

      
      if (isLiked) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, "true");
      }
    });
  });
});

