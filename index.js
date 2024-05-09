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

function validate() { 
    let name = 
        document.getElementById("name").value; 
    let subject = 
        document.getElementById("subject").value; 
    let phone = 
        document.getElementById("phone").value; 
    let email = 
        document.getElementById("email").value; 
    let message = 
        document.getElementById("message").value; 
    let error_message = 
        document.getElementById("error_message"); 
  
    error_message.style.padding = "10px"; 
  
    let errors = []; 
  
    if (name.length < 5) { 
        errors.push("Please Enter a valid Name");} 
    if (subject.length < 10) { 
        errors.push("Please Enter a Correct Subject");} 
    if (isNaN(phone) || phone.length != 10) { 
        errors.push("Please Enter a valid Phone Number");} 
    if (email.indexOf("@") == -1 || email.length < 6) { 
        errors.push( 
            "Please Enter a valid Email");} 
    if (message.length <= 40) { 
        errors.push( 
            "Please Enter More Than 40 Characters");} 
  
    if (errors.length > 0) { 
        error_message.innerHTML = 
            errors.join("<br>"); 
        return false;} 
    else { 
        alert( 
            "Form Submitted Successfully!"); 
        return true;}}
  
