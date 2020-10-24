var json = '{"quiz":{ "q1":{"question":"Which one is correct team name in NBA?", "options": [ "New York Bulls","Los Angeles Kings", "Golden State Warriros","Huston Rocket"], "answer": "Huston Rocket"},"q2":{"question": "\'Namaste\' is a traditional greeting in which Asian language?", "options":["Hindi","Mandarin", "Nepalese", "Thai"],"answer": "Hindi"}, "q3": {"question": "The Spree river flows through which major European capital city?","options": ["Berlin","Paris", "Rome", "London"], "answer": "Berlin"},"q4":{ "question": "Which famous artist had both a \'Rose Period\' and a \'Blue Period\'?","options": ["Pablo Picasso", "Vincent van Gogh", "Salvador Dalí","Edgar Degas"],"answer": "Pablo Picasso"}}}';
var data = JSON.parse(json);
var myObj = data.quiz;

var object = [];

let clickBut = document.getElementById("button");
document.getElementById("doc").appendChild(clickBut);

function obj(x) {
    this.x = x;
    for (let property in x) {
        let obj = x[property];
        let question = property;
        object.push(question);
        show(obj, question);
    }

    clickBut.addEventListener("click", localSt);

}

obj(myObj);

function show(quest, index) {
    this.quest = quest;
    this.index = index;
    let divQuest = document.createElement("div");
    divQuest.style.width = "550px";
    let questTitle = document.createElement("h2");
    questTitle.innerHTML = "Question" + " " + index + " " + ":" + " " + quest.question;
    divQuest.appendChild(questTitle);
    document.getElementById("doc").appendChild(divQuest);
    let questOp = quest.options;
    for (var i = 0; i < questOp.length; i++) {
        var allOptions = questOp[i];
        let questOptions = document.createElement("p");
        questOptions.style.margin = "8px 0"
        let questOptions2 = document.createElement("input");
        questOptions2.setAttribute("type", "radio");
        questOptions2.setAttribute("name", "answer" + index);
        questOptions2.setAttribute("id", "answer_" + index + "_"+[i]);
        questOptions2.innerHTML += allOptions;
        questOptions.appendChild(questOptions2);
        questOptions.innerHTML += allOptions;
        divQuest.appendChild(questOptions);
        document.getElementById("doc").appendChild(divQuest);

    }
}

function localSt(answers) {
    var ls = [];
    var saveResult = document.getElementsByTagName('input');
    for (var i = 0; i < saveResult.length; i++) {
        if (saveResult[i].checked === true) {
            ls.push(saveResult[i].id + "");
            localStorage.setItem("answers", JSON.stringify(ls));
        }
    }
}

function read(loadStorage) {
    var readResult = JSON.parse(localStorage.getItem("answers"));
    if (readResult) {
        for (let i = 0; i < readResult.length; i++) {
            document.getElementById(readResult[i]).checked = true;
            console.log(readResult[i]);
        }
    }
}
read();var json = '{"quiz":{ "q1":{"question":"Which one is correct team name in NBA?", "options": [ "New York Bulls","Los Angeles Kings", "Golden State Warriros","Huston Rocket"], "answer": "Huston Rocket"},"q2":{"question": "\'Namaste\' is a traditional greeting in which Asian language?", "options":["Hindi","Mandarin", "Nepalese", "Thai"],"answer": "Hindi"}, "q3": {"question": "The Spree river flows through which major European capital city?","options": ["Berlin","Paris", "Rome", "London"], "answer": "Berlin"},"q4":{ "question": "Which famous artist had both a \'Rose Period\' and a \'Blue Period\'?","options": ["Pablo Picasso", "Vincent van Gogh", "Salvador Dalí","Edgar Degas"],"answer": "Pablo Picasso"}}}';
var data = JSON.parse(json);
var myObj = data.quiz;

var object = [];

let clickBut = document.getElementById("button");
document.getElementById("doc").appendChild(clickBut);

function obj(x) {
    this.x = x;
    for (let property in x) {
        let obj = x[property];
        let question = property;
        object.push(question);
        show(obj, question);
    }

    clickBut.addEventListener("click", localSt);

}

obj(myObj);

function show(quest, index) {
    this.quest = quest;
    this.index = index;
    let divQuest = document.createElement("div");
    divQuest.style.width = "550px";
    let questTitle = document.createElement("h2");
    questTitle.innerHTML = "Question" + " " + index + " " + ":" + " " + quest.question;
    divQuest.appendChild(questTitle);
    document.getElementById("doc").appendChild(divQuest);
    let questOp = quest.options;
    for (var i = 0; i < questOp.length; i++) {
        var allOptions = questOp[i];
        let questOptions = document.createElement("p");
        questOptions.style.margin = "8px 0"
        let questOptions2 = document.createElement("input");
        questOptions2.setAttribute("type", "radio");
        questOptions2.setAttribute("name", "answer" + index);
        questOptions2.setAttribute("id", "answer_" + index + "_"+[i]);
        questOptions2.innerHTML += allOptions;
        questOptions.appendChild(questOptions2);
        questOptions.innerHTML += allOptions;
        divQuest.appendChild(questOptions);
        document.getElementById("doc").appendChild(divQuest);

    }
}

function localSt(answers) {
    var ls = [];
    var saveResult = document.getElementsByTagName('input');
    for (var i = 0; i < saveResult.length; i++) {
        if (saveResult[i].checked === true) {
            ls.push(saveResult[i].id + "");
            localStorage.setItem("answers", JSON.stringify(ls));
        }
    }
}

function read(loadStorage) {
    var readResult = JSON.parse(localStorage.getItem("answers"));
    if (readResult) {
        for (let i = 0; i < readResult.length; i++) {
            document.getElementById(readResult[i]).checked = true;
            console.log(readResult[i]);
        }
    }
}
read();
