function validate() {
    var x = document.getElementById("username").value;
    var y = document.getElementById("password").value;
    //var a = document.getElementById("option1").value;
    //var b = document.getElementById("option2").value;
    var a;
    if (document.getElementById('option1').checked) {
        a = "0";
    } else { a = "1"; }

    if (x.includes("john.doe@sainsburys.co.uk") && y == "12345678") {
        if (a == "0") {
            window.location = 'C:/Users/jai27/Desktop/colleague_wellbeing/html/home_page.html'
        } else {
            window.location = 'C:/Users/jai27/Desktop/colleague_wellbeing/html/Responses.html'
        }

    } else {
        alert("incorrect email or password");
    }
}