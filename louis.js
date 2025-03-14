document.getElementById("add_hero").addEventListener("click", function () {
    console.log("posting...");

    const myRequest = new Request (
        "https://phpvisa.maxwelltraining.net/router.php",
        {
            method: "POST",
            body: "key=012345abcdefghijklmnopqrstuvwxyz&route=add-temp-hero&first_name=Nji&last_name=Louis Nwufor&email=nlouisnwufor@gmail.com&tel=677449120&profession=Software Engineer&city=Douala",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );
    fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
        if ("success" in data) {
            alert("New Hero Added");
        }
    });
});
