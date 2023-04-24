var dataArchive;
(function (dataArchive) {
    let taskArray1 = [];
    let form = document.querySelector('#form1');
    ;
    function getData() {
        let taskArray;
        let formData = new FormData(form);
        console.log(formData);
        let text0 = formData.get('name');
        let text1 = formData.get('task');
        let text2 = formData.get('deadline');
        let text3 = formData.get('comment');
        let text4 = formData.get('done');
        taskArray = [text0, text1, text2, text3, text4];
        console.log("getData: " + taskArray);
        taskArray1 = taskArray;
        return taskArray1;
    }
    ;
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "onGoingTask");
    let newFieldset = document.createElement("fieldset");
    newFieldset.setAttribute("class", "onGoingTask");
    let deleteTask = document.createElement("button");
    deleteTask.setAttribute("id", "deleteTask");
    deleteTask.innerHTML = "Delete";
    let editTask = document.createElement("button");
    editTask.setAttribute("id", "editTask");
    editTask.innerHTML = "Edit";
    let wrap = document.querySelector("#wrapper");
    window.addEventListener('load', handleLoad);
    function handleLoad(_event) {
        let submit = document.querySelector("#add2");
        submit.addEventListener("click", sendTask);
    }
    async function sendTask(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        await fetch("main.html" + query.toString());
        alert("Task Submitted!");
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        let offer = await response.text();
        let gotData = JSON.parse(offer);
        console.log("this" + gotData);
        console.log("Response", response);
        console.log("before" + offer);
        document.querySelector("#div1").innerHTML = "Aufgabe: " + offer;
        runJson(gotData);
    }
    communicate("Datainput.json");
    document.querySelector("#addTask").addEventListener("click", function (e) {
        wrap.style.setProperty("visibility", "visible");
    });
    document.querySelector("#add2").addEventListener("click", function (e) {
        wrap.style.setProperty("visibility", "hidden");
        getData();
        document.querySelector(".currentTasks").appendChild(newDiv);
        document.querySelector(".currentTasks").appendChild(newFieldset);
        newFieldset.innerHTML = "Aufgabe: " + taskArray1[1] + "  bis zum: " + taskArray1[2] + "  Kommentar: " + taskArray1[3] + "  Wird gemacht von: " + taskArray1[0];
        e.preventDefault();
        newFieldset.appendChild(deleteTask);
        newFieldset.appendChild(editTask);
    });
    editTask.addEventListener("click", function () {
        wrap.style.setProperty("visibility", "visible");
    });
    deleteTask.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
    async function runJson(_data) {
        for (let i = 0; i < _data.input.length; i++) {
        }
    }
    ;
})(dataArchive || (dataArchive = {}));
//# sourceMappingURL=functions.js.map