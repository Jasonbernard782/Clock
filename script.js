function setWallpaper() {
    const date = new Date();
    const hours = date.getHours();

    let backgroundColor;

    if (hours >= 6 && hours < 12) {
        backgroundColor = "FFFAE5"; // Morning - light yellow
        document.body.style.color = "black";
    } else if (hours >= 12 && hours < 18) {
        backgroundColor = "87CEFA"; // Afternoon - sky blue
        document.body.style.color = "black"; 
            } else if (hours >= 18 && hours < 21) {
                backgroundColor = "#FFA07A"; // Evening - orange
            } else {
                backgroundColor = "#2C3E50"; // Night - dark blue
            }

            document.body.style.backgroundColor = backgroundColor;
            document.getElementById('clock').innerText = date.toLocaleTimeString();
        }

        setWallpaper(); // Set it initially
        setInterval(setWallpaper, 1000); // Update every second
    