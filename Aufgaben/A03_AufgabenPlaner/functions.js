var planer;
(function (planer) {
    let name = document.querySelector('select');
    name.addEventListener('change', function () {
        let selectedName = name.options[name.selectedIndex].textContent;
        console.log("you have chosen: " + selectedName);
    });
    let taskName;
    let comment;
    let inputField = document.querySelector("input[type='text']");
    inputField.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            let inputText = event.target.value;
            taskName = inputText;
            event.target.value = "";
            console.log(`taskdefinition: ${inputText}`);
        }
    });
    let date = document.querySelector("input[type='date']");
    date.addEventListener('change', (event) => {
        let chooseDate = event.target.value;
        console.log(`you set the deadline to: ${chooseDate}`);
    });
    let commentField = document.getElementById('inputComment');
    commentField.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            let addComment = event.target.value;
            inputComment = addComment;
            event.target.value = "";
            console.log(`comment:${addComment}`);
        }
    });
    let button = document.querySelector('.addTask');
    button.addEventListener('click', function () {
        let nameSelect = document.getElementById("names");
        let selectedName = nameSelect.options[nameSelect.selectedIndex].textContent;
        let date = document.querySelector("input[type='date']").value;
        console.log(selectedName, taskName, date, inputComment);
    });
    let clear = document.getElementById('clearConsole');
    clear.addEventListener('click', function () {
        console.clear();
    });
    let removeTask = document.querySelector(".deleteTask1");
    removeTask.addEventListener('click', function () {
        let taskRemoval = document.querySelector(".onGoingTask1");
        taskRemoval.remove();
        console.log('you deleted this task');
    });
    let removeTask2 = document.querySelector(".deleteTask2");
    removeTask2.addEventListener('click', function () {
        let taskRemoval2 = document.querySelector(".onGoingTask2");
        taskRemoval2.remove();
        console.log('you deleted this task');
    });
    let checked = document.querySelector(".checkbox");
    checked.addEventListener('click', function () {
        console.log('you completed this task');
    });
    let checked1 = document.querySelector(".checkbox1");
    checked1.addEventListener('click', function () {
        console.log('you completed this task');
    });
})(planer || (planer = {}));
//# sourceMappingURL=functions.js.map