namespace dataArchive {
   
    let taskArray1: String[] = [];

    let form: HTMLFormElement = document.querySelector('#form1')!;
    let allTasks: Tasks[] = [];

    interface Tasks {
        id?: string;
        task: string;
        deadline: string;
        comment: string;
        name: string;
        done: string;
    }

    interface Datainput {
        [key: string]: Tasks[];
    };
    
    function getData(): String[] {

        let taskArray: String[];

        let formData = new FormData(form);
        console.log(formData);
        let text0 = formData.get('name') as string;
        let text1 = formData.get('task') as string;
        let text2 = formData.get('deadline') as string;
        let text3 = formData.get('comment') as string;
        let text4 = formData.get('done') as string;

        let task: Tasks = {
            name: text0,
            task: text1,
            deadline: text2,
            comment : text3,
            done: text4,

        };

        taskArray = [text0, text1, text2, text3, text4];
        console.log("getData: " + taskArray);
        return task;
    };

    interface formDataJSON {
        [key: string]: FormDataEntryValue | FormDataEntryValue[];
    }

    let formData: FormData = new FormData(form);
    let json: formDataJSON = {};

    for (let key of formData.keys())
    if (!json[key]) {
        let values: FormDataEntryValue[] = formData.getAll(key);
        json[key] = values.length > 1 ? values : values[0];
    }

    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "onGoingTask");
    

    let newFieldset = document.createElement("fieldset");
    newFieldset.setAttribute("class", "onGoingTask");

    let deleteTask = document.createElement("button");
    deleteTask.setAttribute("class", "deleteTask");
    deleteTask.innerHTML = "Delete";

    let editTask = document.createElement("button");
    editTask.setAttribute("class", "editTask");
    editTask.innerHTML = "Edit"
    let wrap = <HTMLElement>document.querySelector("#wrapper");

    window.addEventListener('load', handleLoad);

    async function handleLoad(_event: Event) {
        let submit: HTMLButtonElement = <HTMLButtonElement>(
          document.querySelector("#add2")
        );
        submit.addEventListener("click", sendTask);
/*
    async function sendTask(_event:Event): Promise<void> {
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("main.html" + query.toString());
        alert("Task Submitted!");
    }

    async function communicate(_url:RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let offer: string= await response.text();
        let gotData: Datainput = JSON.parse(offer);
        console.log("this"+gotData);
      console.log("Response", response);
      console.log("before"+offer);
      document.querySelector("#div1")!.innerHTML = "Aufgabe: "+ offer;
      runJson(gotData);
        
    }

    communicate("Datainput.json");
    document.querySelector("#addTask")!.addEventListener("click", function (e){
        wrap.style.setProperty("visibility","visible");
    });

    document.querySelector("#add2")!.addEventListener("click", function (e){
        wrap.style.setProperty("visibility", "hidden");
        getData();
        document.querySelector(".currentTasks")!.appendChild(newDiv);
      document.querySelector(".currentTasks")!.appendChild(newFieldset);
      newFieldset.innerHTML = "Aufgabe: "+ taskArray1[1] + "  bis zum: "+ taskArray1[2]+ "  Kommentar: "+ taskArray1[3]+ "  Wird gemacht von: "+ taskArray1[0];
      e.preventDefault();
      newFieldset.appendChild(deleteTask);
      newFieldset.appendChild(editTask);
    });

    editTask.addEventListener("click", function(){
        wrap.style.setProperty("visibility", "visible");
    });

    deleteTask.addEventListener("click", function (){
        this!.parentNode!.parentNode!.removeChild(this!.parentNode);
    });
    
    async function runJson(_data: Datainput): Promise <void>{

   for(let i = 0; i < _data.input.length; i++ ){


    }


  };

}*/


document.getElementById("div1")!.appendChild(newDiv);
document.querySelector("#div1")!.appendChild(newFieldset);
const stringData = await getTasks();
const parsedData = JSON.parse(stringData);
Object.entries(parsedData.data).forEach((entry) => {
  let [key, value] = entry;
  let convertedValue = value as object;
  console.log(convertedValue);
  let htmlTask = document.createElement("fieldset");
  htmlTask.setAttribute("class", "onGoingTask");

  document.getElementById("div1")!.appendChild(newDiv);
  document.querySelector("#div1")!.appendChild(htmlTask);

  let task: Tasks = {
    id: key,
    task: convertedValue["task"],
    deadline: convertedValue["deadline"],
    comment: convertedValue["comment"],
    name: convertedValue["name"],
    done: convertedValue["inprogress"],
  };
  htmlTask.setAttribute("id", key);
  allTasks.push(task);

  htmlTask.innerHTML =
    "Aufgabe: " +
    task.task +
    "  bis zum: " +
    task.deadline +
    "  Kommentar: " +
    task.comment +
    "  Wird gemacht von: " +
    task.name;
  let trashbin = document.createElement("button");
  trashbin.setAttribute("class", "deleteTask");
  trashbin.innerHTML = "Delete";
  let edit = document.createElement("button");
  edit.setAttribute("class", "editTask");
  edit.innerHTML = "Edit";
  trashbin.addEventListener("click", async function() {
    let task: HTMLElement = this.parentNode as HTMLElement;
    let query: URLSearchParams = new URLSearchParams(<any>formData);

    query.set("command", "delete");
    query.set("collection", "TaskData");
    query.set("id", task.id);
    this!.parentNode!.parentNode!.removeChild(this!.parentNode!);
    let response = await fetch(
      "https://webuser.hs-furtwangen.de/~stolzman/Database/" +
      "?" +
      query.toString()
    ); //Delete data with id: ...
    console.log(response);
    if (response.ok) {
      alert("Task deleted!");
    }
  });
  edit.addEventListener("click", async function() {
    wrap.style.setProperty("visibility", "visible");
    activeID = task.id as string;
  });

  htmlTask.appendChild(trashbin);
  htmlTask.appendChild(edit);
});
console.log(allTasks);
}

async function sendTask(_event: Event): Promise<void> {
let task: Tasks = getData();
let params: string =
  "?command=insert&collection=TaskData&data=" + JSON.stringify(task);
//
_event.preventDefault();
let response = await fetch(
  "https://webuser.hs-furtwangen.de/~stolzman/Database/" + params
); //Send data to Databank
if (response.ok) {
  console.log(response);
  let text = await response.json();
  task.id = text.data.id;
  console.log(task.id);
  alert("Task Submited!");
  let htmlTask = document.createElement("fieldset");
  htmlTask.setAttribute("id", task.id as string);
  htmlTask.setAttribute("class","onGoingTask")
  document.querySelector("#div1")!.appendChild(htmlTask);

  allTasks.push(task);

  htmlTask.innerHTML =
    "Aufgabe: " +
    task.task +
    "  bis zum: " +
    task.deadline +
    "  Kommentar: " +
    task.comment +
    "  Wird gemacht von: " +
    task.name;

  let trashbin = document.createElement("button");
  trashbin.setAttribute("class", "deleteTask");
  trashbin.innerHTML = "Delete";
  let edit = document.createElement("button");
  edit.setAttribute("class", "editTask");
  edit.innerHTML = "Edit";
  trashbin.addEventListener("click", async function() {
    let task: HTMLElement = this.parentNode as HTMLElement;
    let query: URLSearchParams = new URLSearchParams(<any>formData);

    query.set("command", "delete");
    query.set("collection", "TaskData");
    query.set("id", task.id);
    this!.parentNode!.parentNode!.removeChild(this!.parentNode!);
    let response = await fetch(
      "https://webuser.hs-furtwangen.de/~stolzman/Database/" +
      "?" +
      query.toString()
    ); //Delete data with id: ...
    if (response.ok) {
      alert("Task deleted!");
    }
  });
  edit.addEventListener("click", async function() {
    wrap.style.setProperty("visibility", "visible");
    activeID = task.id as string;
  });

  htmlTask.appendChild(trashbin);
  htmlTask.appendChild(edit);
  console.log(allTasks);
}
}
async function getTasks(): Promise<string> {
const params = "command=find&collection=TaskData";
let request = await fetch(
  "https://webuser.hs-furtwangen.de/~stolzman/Database/?" + params
);
let text = await request.text();
return text;
}
document.querySelector("#addTask")!.addEventListener("click", function() {
wrap.style.setProperty("visibility", "visible");
});

document.querySelector("#add2")!.addEventListener("click", function() {
wrap.style.setProperty("visibility", "hidden");
});

document
.querySelector("#update")!
.addEventListener("click", async function(e) {
  wrap.style.setProperty("visibility", "hidden");
  let task = getData();
  e.preventDefault();
  let params: string =
    "?command=update&collection=TaskData&id=" +
    activeID +
    "&data=" +
    JSON.stringify(task);
  let response = await fetch(
    "https://webuser.hs-furtwangen.de/~stolzman/Database/" + params
  );
  if (response.ok) {
    location.reload();
  }
});

// await
}