console.log("hello");

// taking elements and assigning them to a variable-
const mainContainer = document.querySelector("#mainContainer");
const addIcon = document.querySelector(".addIcon");    
const showPop = document.querySelector("#showPop");
const noItemText = document.querySelector("#noItemText");   
const store = document.querySelector("#store");
const top2 = document.querySelector("#top2");

//-----------------------------------------------------

// Making the function tree-

addIcon.addEventListener("click", function(){

    mainContainer.classList.add("mainContainerBlur");
    separatePage.classList.add("pageBlur");

    const pop = document.createElement('div');
    pop.classList = "pop";

    const popTitle = document.createElement("p");
    popTitle.classList = "popTitle"; 
    popTitle.innerText = "Add New List"; 

    const inputBoxOne = document.createElement("input");
    inputBoxOne.classList = "inputBoxOne"; 
    inputBoxOne.type = "text";
    inputBoxOne.placeholder = "Add New List";

    const br = document.createElement("br");
    br.classList = "br";

    const add = document.createElement("button");    
    add.className = "add";
    add.innerText = "Add";

    const close = document.createElement("button");    
    close.className = "close";
    close.innerText = "Close";

    showPop.appendChild(pop);       
    pop.appendChild(popTitle);
    pop.appendChild(inputBoxOne);
    pop.appendChild(br);
    pop.appendChild(add);
    pop.appendChild(close);
    console.log(showPop);

    //-------------------------------

    add.addEventListener("click", function(){

        noItemText.style.display = "none";
        separatePage.classList.remove("pageBlur");

        const tripBox = document.createElement('div');
        tripBox.classList = "tripBox";

        const tripHeading = document.createElement("h2");
        tripHeading.classList = "tripHeading";

        const hr = document.createElement("hr");
        hr.classList = "hr";

        // const listBox = document.createElement('div');
        // listBox.classList = "listBox";

        const holder = document.createElement('div');
        holder.classList = "holder";

        const plusIcon = document.createElement('div');
        plusIcon.classList = "plusIcon";
        plusIcon.innerHTML = '<i class="fas fa-plus-circle"></i>';

        const trashIcon = document.createElement('div');
        trashIcon.classList = "trashIcon";
        trashIcon.innerHTML = '<i class="fas fa-trash-alt"></i>';

        
        store.appendChild(tripBox); 
        tripBox.appendChild(tripHeading);
        tripBox.appendChild(hr);
        // tripBox.appendChild(listBox);
        tripBox.appendChild(holder);
        holder.appendChild(plusIcon);
        holder.appendChild(trashIcon);
        tripHeading.innerText = inputBoxOne.value;
        // console.log(store);
        
        //-----------------------------------

        tripHeading.addEventListener("click",function(){

            tripBox.querySelector("#tripBox");
            tripBox.style.width = "280px";
            tripBox.style.height = "400px";

            addIcon.style.visibility = "visible";

            const bigTripText = document.querySelector("#bigTripText");
            bigTripText.innerText = inputBoxOne.value;

            const back = document.querySelector('#back');
            const mainContainer = document.querySelector("#mainContainer");
            const separatePage = document.querySelector("#separatePage");
            
            mainContainer.style.visibility="hidden";
            separatePage.style.visibility="visible";

            separatePage.appendChild(bigTripText);
            separatePage.appendChild(tripBox);

            trashIcon.addEventListener("click", function() {                  
                store.removeChild(tripBox);
                mainContainer.style.visibility="visible";
                separatePage.style.visibility="hidden";
            });
            
            back.addEventListener('click',function(){

                tripBox.style.width = "250px";
                tripBox.style.height = "340px";
                tripBox.remove();
                mainContainer.style.visibility="visible"; 
                separatePage.style.visibility="hidden";
            });

            //-----------------------------------------------

        });

        
        showPop.removeChild(pop); 
        mainContainer.classList.remove("mainContainerBlur");

        //-----------------------------------------------
      
        trashIcon.addEventListener("click", function() {                 
            tripBox.remove();
        });

        //--------------------------------------------
        
        plusIcon.addEventListener("click",function(){

            mainContainer.classList.add("mainContainerBlur");
            separatePage.classList.add("pageBlur");

            const popTwo = document.createElement('div');
            popTwo.classList = "pop";

            const popTitleTwo = document.createElement("p");
            popTitleTwo.classList = "popTitle";  
            popTitleTwo.innerText = "Add New Task"; 

            const inputBoxTwo = document.createElement("input");
            inputBoxTwo.classList = "inputBoxOne"; 
            inputBoxTwo.type = "text";
            inputBoxTwo.placeholder = "Add New Task";

            const brTwo = document.createElement("br");
            brTwo.classList = "br";

            const addTwo = document.createElement("button");
            addTwo.className = "add";
            addTwo.innerText = "Add";

            const closeTwo = document.createElement("button");   
            closeTwo.className = "close";
            closeTwo.innerText = "Close";

            showPop.appendChild(popTwo);       
            popTwo.appendChild(popTitleTwo);
            popTwo.appendChild(inputBoxTwo);
            popTwo.appendChild(brTwo);
            popTwo.appendChild(addTwo);
            popTwo.appendChild(closeTwo);
            console.log(showPop);

            //------------------------------------------------

            addTwo.addEventListener("click",function(){

                mainContainer.classList.remove("mainContainerBlur");
                
                const newTask = document.createElement('div');
                newTask.classList = "newTask";

                const taskFont = document.createElement('span');
                taskFont.classList = "taskFont";
                taskFont.innerText = inputBoxTwo.value;

                const mark = document.createElement('button');
                mark.classList = "mark";
                mark.innerText = "Mark Done";

                tripBox.appendChild(newTask);
                newTask.appendChild(taskFont);
                newTask.appendChild(mark);
                console.log(tripBox);
                
                showPop.removeChild(popTwo);
                separatePage.classList.remove("pageBlur");

                //-------------------------------------------------

                mark.addEventListener("click", function(){
                    taskFont.style.textDecoration = "line-through";
                    taskFont.style.color = "red";
                    newTask.removeChild(mark);
                });
            });

            //-------------------------------------------------------

            closeTwo.addEventListener("click", function() {
                mainContainer.classList.remove("mainContainerBlur");
                popTwo.remove();
            });
        });
    });
    //--------------------------------------------------------------

    close.addEventListener("click", function() {
        mainContainer.classList.remove("mainContainerBlur");
        pop.remove();
    });
});