function invoke() {

    //chatbox
    var div = document.createElement("div");
    div.setAttribute("class", "chatbox");
    div.setAttribute("id", "chatbox");
    div.setAttribute("style", "display:none");
    document.getElementById("body").appendChild(div);

    //notification
    var div100 = document.createElement("div");
    div100.setAttribute("class", "hide");
    div100.setAttribute("id", "hide");
    div.appendChild(div100);


    //label
    var t = document.createElement("h2");
    t.innerText = "COVID Buddy";
    t.setAttribute("id", "covid");
    t.setAttribute("style", "color:#f06C00")
    div100.appendChild(t);

    //close-icon
    var div400 = document.createElement("img");
    div400.setAttribute("src", "C:/Users/jai27/Desktop/colleague_wellbeing/images/close2.png");
    div400.setAttribute("id", "close");
    div400.setAttribute("onclick", "closeForm()");
    div100.appendChild(div400);


    //chatlogs
    var div1 = document.createElement("div");
    div1.setAttribute("class", "chatlogs");
    div1.setAttribute("id", "chatlogs");
    document.getElementById("chatbox").appendChild(div1);

    //chat-form
    var div0 = document.createElement("div");
    div0.setAttribute("class", "chat-form");
    div0.setAttribute("id", "chat-form");
    document.getElementById("chatbox").appendChild(div0);

    //textarea
    var div01 = document.createElement("textarea");
    div01.setAttribute("id", "input");
    document.getElementById("chat-form").appendChild(div01);

    //button
    var b2 = document.createElement("button");
    b2.setAttribute("id", "team1");
    b2.setAttribute("class", "b2");
    b2.setAttribute("onclick", "getinput()");
    b2.innerText = "Send";
    document.getElementById("chat-form").appendChild(b2);






}
var questions = ["hi",
    "how are you",
    "name",
    "how is life",
    "tcs helpline",
    "covid helpdesk number",
    "Isolation centers in tcs Campuses in India center centre",
    "Availability of tcs guest house available",
    "Medical Checkup",
    "insurance",
    "covid corona symptoms",
    "good",
    "health benefits benefit",
    "Thanks Thank you bye"
];
var answers = ["hi buddy",
    "good,<br/> how are you?",
    "CatalyST 2.0",
    "well,good",
    "1800-209-3111",
    "1800-270-1814",
    "Bangalore-(TCS Vydehi,whitefield) <br/>Address Link -<br/> https://goo.gl/maps/<br/>4zD23bHq9bQo32a77",
    "Yes,it is available for booking",
    "TCS provides free medical checkup",
    "Yes, you and your family members are covered under TCS HIS Scheme",
    "Most common symptoms:<br/>1.fever<br/>2.dry  cough<br/>3.tiredness",
    "how can I help you?",
    "Health benefits:<br/>1.TCS provides free full body check up<br/>2.Rs.6000 for medical bills",
    "Thanks, See you Soon"
];

function getinput() {

    var text = document.getElementById("input").value;
    var text1 = text.toLowerCase();
    console.log(text1);
    if (text1.includes("isolation") && text1.includes("center") || text1.includes("centers") || text1.includes("centre")) {
        text1 = "Isolation centers in tcs Campuses in India center centre";
    }
    if (text1.includes("thanks") || text1.includes("thank you") || text1.includes("bye")) {
        text1 = "Thanks Thank you bye";
    }
    if (text1.includes("health") && text1.includes("benefits")) {
        text1 = "health benefits benefit";
    }
    if (text1.includes("how") && text1.includes("are") && text1.includes("you")) {
        text1 = "how are you";
    }
    if (text1.includes("good")) {
        text1 = "good";
    }
    if (text1.includes("helpline")) {
        text1 = "tcs helpline";
    }
    if (text1.includes("guest house") && text1.includes("availability") || text1.includes("available")) {
        text1 = "Availability of tcs guest house";
    }
    if (text1.includes("medical") && text1.includes("checkup")) {
        text1 = "Medical Checkup";
    }
    if (text1.includes("insurance")) {
        text1 = "insurance";
    }
    if (text1.includes("helpdesk")) {
        text1 = "covid helpdesk number";
    }
    if (text1.includes("symptoms")) {
        text1 = "covid corona symptoms";
    }

    document.getElementById("input").value = "";
    var y = -1;
    for (var i = 0; i < questions.length; i++) {
        if (questions[i] == text1) {
            y = i;
        }
    }
    var output = "";
    if (y == -1) {
        output = "oh, I missed ";
    } else {
        output = answers[y];

    }
    //chatfriends
    var div2 = document.createElement("div");
    div2.setAttribute("class", "chat friend");
    div2.setAttribute("id", "chat friend");
    document.getElementById("chatlogs").appendChild(div2);
    //user-photo
    var div3 = document.createElement("div");
    div3.setAttribute("class", "user-photo");
    div3.setAttribute("id", "user-photo");
    div2.appendChild(div3);
    //img
    var div4 = document.createElement("img");
    div4.setAttribute("src", "C:/Users/jai27/Desktop/colleague_wellbeing/images/circle.png");
    div3.appendChild(div4);
    //chat-message
    var div5 = document.createElement("p");
    div5.setAttribute("class", "chat-message");
    div5.setAttribute("id", "chat-message");
    div5.innerHTML = text;
    div2.appendChild(div5);
    document.getElementById("input").scrollTop = document.getElementById("input").scrollHeight;
    //self
    setTimeout(function() {
        //chatfriends
        var div2 = document.createElement("div");
        div2.setAttribute("class", "chat self");
        div2.setAttribute("id", "chat self");
        document.getElementById("chatlogs").appendChild(div2);
        //user-photo
        var div3 = document.createElement("div");
        div3.setAttribute("class", "user-photo");
        div3.setAttribute("id", "user-photo");
        div2.appendChild(div3);
        //img
        var div4 = document.createElement("img");
        div4.setAttribute("src", "C:/Users/jai27/Desktop/colleague_wellbeing/images/bot.jpeg");
        div3.appendChild(div4);
        //chat-message
        var div5 = document.createElement("p");
        div5.setAttribute("class", "chat-message");
        div5.setAttribute("id", "chat-message");
        div5.innerHTML = output;
        div2.appendChild(div5);
    }, 1000);
    window.setInterval(function() {
        var elem = document.getElementById('chatlogs');
        elem.scrollTop = elem.scrollHeight;
    }, 5000);
    var msg = new SpeechSynthesisUtterance(output);
    window.speechSynthesis.speak(msg);

    document.getElementById("input").scrollTop = document.getElementById("input").scrollHeight;



}

function openForm() {
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("open_close").setAttribute("onclick", "closeForm()");
    document.getElementById("open_close").style.display = "none";

}

function closeForm() {
    document.getElementById("open_close").style.display = "block";
    document.getElementById("chatbox").style.display = "none";

    document.getElementById("open_close").setAttribute("onclick", "openForm()");
    document.getElementById("open_close").innerText = "chat";
}
