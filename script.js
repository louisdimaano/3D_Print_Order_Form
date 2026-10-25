const form = document.getElementById("orderForm");
const successScreen = document.getElementById("successScreen");
const summaryText = document.getElementById("summaryText");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");
const materialSelect = document.getElementById("material");
const textStyleSelect = document.getElementById("textStyle");
const sketchInput = document.getElementById("sketch");
const sendBtn = document.getElementById("sendBtn");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(form));

    for (const key in data) {
        if (typeof data[key] === "string") {
            data[key] = data[key].trim();
        }
    }

    const lines = [];

    lines.push(`Quantity: ${data.quantity}`);
    lines.push(`Primary color: ${data.primaryColor}`);
    lines.push(`Material: ${materialSelect.selectedOptions[0].text}`);

    if (data.description) {
        lines.push(`Description: ${data.description}`);
    }
    if (sketchInput.files.length > 0) {
        lines.push(`Sketch/photo: ${sketchInput.files.length} attached`)
    }
    if (data.modelLink) {
        lines.push(`Model Link: ${data.modelLink}`);
    }
    if (data.secondaryColor) {
        lines.push(`Secondary color: ${data.secondaryColor}`);
    }
    if (data.Placement) {
        lines.push(`Placement: ${data.Placement}`);
    }
    if (data.textStyle !== "none") {
        lines.push(`Style: ${textStyleSelect.selectedOptions[0].text}`);
    }
    if (data.embossText) {
        lines.push(`Emboss/Deboss: ${data.embossText}`);
    }
    if (data.deadline) {
        lines.push(`Deadline: ${data.deadline}`);
    }
    if (data.otherNotes) {
        lines.push(`Additional Notes: ${data.otherNotes}`);
    }

    const summary = lines.join("\r\n");

    summaryText.textContent = summary;
    form.hidden = true;
    successScreen.hidden = false;

});

copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(summaryText.textContent).then(function () {
        copyBtn.textContent = "Copied!";
        setTimeout(function () {
            copyBtn.textContent = "Copy Summary";
        }, 2000);
    });
});

resetBtn.addEventListener("click", function () {
    form.reset();
    form.hidden = false;
    successScreen.hidden = true;
    document.getElementById("modelLink").focus();

});

sendBtn.addEventListener("click", function () {
    const shareData = {
        title: "3D Print Order",
        text: summaryText.textContent,
    };

    const files = Array.from(sketchInput.files);
    if (files.length > 0) {
        shareData.files = files;
    }

    if (navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData).catch(function () { });
    } else {
        sendBtn.textContent = "Sharing isn't supported here. Use Copy Summary instead."
    }
});
