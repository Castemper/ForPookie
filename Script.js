function func(event) {
    event.preventDefault(); // Corrected this line

    var loveform = document.getElementById("loveform").value; // Assuming loveform is an input field

    // Corrected the if condition using || (OR operator)
    if (loveform === 'Jadesola' || loveform === 'Debby' || loveform === 'Fawwaz' || loveform === 'Gbemisola' || loveform === 'Tamilore' || loveform === 'Ammie') {
        alert("Validation Complete. Click OK");
        window.location.assign("index2.html");
    } else {
        alert("This is not for you");
        window.location.assign("index3.html");
    }
}

let btnClick = document.querySelector("button");

btnClick.addEventListener("click", () => {
    window.location.href = "index4.html"; 
})