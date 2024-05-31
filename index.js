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

function validateForm() {
    const form = document.getElementById('contactForm');
    const fullName = form['fullName'].value.trim();
    const email = form['email'].value.trim();
    const message = form['message'].value.trim();

    if (fullName === '' || email === '' || message === '') {
      alert('All fields are required.');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true;
  }

function zoomIn(element) {
    element.style.transform = "scale(1.1)";
}

function zoomOut(element) {
    element.style.transform = "scale(1)";
}
