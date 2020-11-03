var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


console.log(enterButton)
console.log(input)
console.log(ul)
console.log(item)

function inputLength(){
    return input.value.length;
}

function listLength()
{
    return item.length;
}

function createListElement()
{
    var li = document.createElement("li"); //creates an element li
    li.appendChild(document.createTextNode(input.value));
    //makes text from input field the li text
    ul.appendChild(li);//adds that li to ul
    input.value = "";//Reset text input field


    //Start strikethrough
    //because it's in the function it only adds it for new items
    
    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);
    //end strikethrough


    //start add delete button
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
    //end add delete button


    //add class delete (display none)
    function deleteListItem()
    {
        li.classList.add("delete");
    }
    //end add class delete
}

function addListAfterClick(){
    if(inputLength() > 0){
        //make sure that an empty input field doesn't create a li
        createListElement();
    }
}

    function addListAfterKeypress(event)
    {
        if(inputLength() > 0 && event.which === 13)
    {
        //this now looks to see if you hit enter / return
        //the 13 is the enter key's keycode, this could also be display by event.keyCode ===13

        createListElement();
    }

    }

    
    enterButton.addEventListener("click", addListAfterClick);
    input.addEventListener("keypress", addListAfterKeypress)