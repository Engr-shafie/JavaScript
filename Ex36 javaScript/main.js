

const colorPicker = document.querySelector("#colorPicker");
const colorPreview = document.querySelector("#colorPreview");
const colorHistory = document.querySelector("#colorHistory");
const clearHistoryButton = document.querySelector("#clearHistoryButton");

// Store selected colors
const selectedColors = [];

// Update preview and add color to history
colorPicker.addEventListener("input", function () {
    const selectedColor = colorPicker.value;

    // Update preview background
    colorPreview.style.backgroundColor = selectedColor;
    

    // Add color to history
    selectedColors.push(selectedColor);

    // Display the color history
    displayColorHistory();
});

// Display all selected colors
function displayColorHistory() {
    colorHistory.innerHTML = "";

    selectedColors.forEach(function (color) {
        const listItem = document.createElement("li");

        // Show color code
        listItem.textContent = color.toUpperCase();

        // Create a small color preview
        const colorBox = document.createElement("span");
        colorBox.style.display = "inline-block";
        colorBox.style.width = "20px";
        colorBox.style.height = "20px";
        colorBox.style.backgroundColor = color;
        colorBox.style.border = "1px solid black";
        colorBox.style.marginRight = "10px";
        colorBox.style.verticalAlign = "middle";

        listItem.prepend(colorBox);
        colorHistory.appendChild(listItem);
    });
}

// Clear color history
clearHistoryButton.addEventListener("click", function () {
    selectedColors.length = 0;
    colorHistory.innerHTML = "";
});
