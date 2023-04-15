namespace dataArchive {
    let taskArray1: String[] = [];
    
    function getData(): String[] {
        let form: HTMLFormElement = document.querySelector('#form1')!;
        let taskArray: String[];

        let formData = new FormData(form);
        console.log(formData);
        let text0 = formData.get('name') as String;
        let text1 = formData.get('task') as String;
        let text2 = formData.get('deadline') as String;
        let text3 = formData.get('comment') as String;
        let text4 = formData.get('done') as String;

        taskArray = [text0, text1, text2, text3, text4];
        console.log("getData: " + taskArray);
        taskArray1 = taskArray;
        return taskArray1;
    };

    document.querySelector(".addTask")!.addEventListener("click", function (e) {
        getData();
        let newdiv = document.createElement("div");
      newdiv.setAttribute("class", "onGoingTask");
      let newFieldset = document.createElement("fieldset"); 
      newFieldset.setAttribute("class", "onGoingTask")
      newdiv.setAttribute("id", "newp");
      document.querySelector(".currentTasks")!.appendChild(newdiv);
      document.querySelector(".currentTasks")!.appendChild(newFieldset);
      newFieldset.innerHTML = "Aufgabe: "+ taskArray1[1] + "  bis zum: "+ taskArray1[2]+ "  Kommentar: "+ taskArray1[3]+ "  Wird gemacht von: "+ taskArray1[0];
      e.preventDefault();

      let Trashbin = document.createElement("button");
      Trashbin.setAttribute("class", "deleteTask");
      newFieldset.appendChild(Trashbin);
      Trashbin.innerHTML = "Delete";

      Trashbin.addEventListener("click", function () {
        this!.parentNode!.parentNode!.removeChild(this!.parentNode!);
    });
    
//edit Button funktioniert noch nicht, habe keine Ahnung wie ich die innerhtml von newfieldset an die geänderten Daten vom array anpassen kann.//
    let edit= document.createElement("button");
edit.setAttribute("class", "editTask");
newFieldset.append(edit);
edit.innerHTML = "Edit";

})}