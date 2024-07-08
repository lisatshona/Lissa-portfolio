window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "10px 10px";
    } else {
        document.getElementById("navbar").style.padding = "30px 10px";
    }
}

document.getElementById("downloadButton").addEventListener("click", function() {
    // function to download cv
    var cvPath = 'Lissa Tshona CV.pdf';
    var link = document.createElement("a");
    link.href = cvPath;
    link.download = "Lissa Tshona CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


function zoomIn(element) {
    element.style.transform = "scale(1.1)";
}

function zoomOut(element) {
    element.style.transform = "scale(1)";
}
// Add this to your index.js file

document.addEventListener("DOMContentLoaded", () => {
    const portfolioItems = document.querySelectorAll(".row");

    portfolioItems.forEach(item => {
        const layer = item.querySelector(".layer");

        item.addEventListener("mouseenter", () => {
            layer.style.opacity = "1";
        });

        item.addEventListener("mouseleave", () => {
            layer.style.opacity = "0";
        });
    });
});
