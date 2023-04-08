namespace planer {

    let name: HTMLSelectElement = document.querySelector('select') as HTMLSelectElement;
    name.addEventListener('change', function () {
      let selectedName:string|null= name.options[name.selectedIndex].textContent;
        console.log("you have chosen: " + selectedName)
    }
    ) 

    let taskName:string;
    let comment:string

        let inputField:HTMLInputElement= document.querySelector("input[type='text']") as HTMLInputElement;

        inputField.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                let inputText:string = (event.target as HTMLInputElement).value;
                taskName=inputText;

                (event.target as HTMLInputElement).value = "";

                console.log(`taskdefinition: ${inputText}`);
            }
            
        })

        let date:HTMLInputElement= document.querySelector("input[type='date']") as HTMLInputElement;
        date.addEventListener('change', (event) =>{
                let chooseDate:string=(event.target as HTMLInputElement).value;
                console.log(`you set the deadline to: ${chooseDate}`);
        })

        let commentField:HTMLInputElement = document.getElementById('inputComment') as HTMLInputElement;

        commentField.addEventListener("keyup", (event) => {
            if (event.key === "Enter"){
                let addComment:string = (event.target as HTMLInputElement).value;
                inputComment=addComment;
                (event.target as HTMLInputElement).value = "";

                    console.log(`comment:${addComment}`)
            }
        })

        let button: HTMLButtonElement = document.querySelector('.addTask') as HTMLButtonElement;

        button.addEventListener('click', function() {
            let nameSelect: HTMLSelectElement = document.getElementById("names") as HTMLSelectElement;
            let selectedName: string|null = nameSelect.options[nameSelect.selectedIndex].textContent;
            let date: string = (<HTMLInputElement>document.querySelector("input[type='date']")).value;

                console.log(selectedName, taskName, date, inputComment);
        })

        let clear:HTMLButtonElement= document.getElementById('clearConsole') as HTMLButtonElement;
        clear.addEventListener('click', function(){
            console.clear();
        })

        let removeTask:HTMLButtonElement = document.querySelector(".deleteTask1") as HTMLButtonElement;
        removeTask.addEventListener('click', function(){
            let taskRemoval = document.querySelector(".onGoingTask1");
            taskRemoval.remove();
            console.log('you deleted this task');
        })
        let removeTask2:HTMLButtonElement = document.querySelector(".deleteTask2") as HTMLButtonElement;
        removeTask2.addEventListener('click', function(){
            let taskRemoval2 = document.querySelector(".onGoingTask2");
            taskRemoval2.remove();
            console.log('you deleted this task');
        })

        let checked:HTMLElement = document.querySelector(".checkbox");
        checked.addEventListener('click', function(){
            console.log('you completed this task');
        })
        let checked1:HTMLElement = document.querySelector(".checkbox1");
        checked1.addEventListener('click', function(){
            console.log('you completed this task');
        })

}