const button = document.querySelector(".btn")
console.log(button)

const questions = 
[
    "What is 2+2?",
    "How many digits are there?",
    "What is stone in latin?",
    "What does IT stand for?"

]

const answers = 
[
    ["1", "2", "3", "4"],
    ["1", "2", "3", "10"],
    ["dsadas", "calculus", "algebra", "math"],
    ["Information Technology", "I tried", "int t", "idasd tsdada"]

]

const correct_answers =
[
    "4",
    "10",
    "calculus",
    "Information Technology"
]

const question = document.querySelector(".question");
const answer_1 = document.querySelector(".answer_1");
const answer_2 = document.querySelector(".answer_2");
const answer_3 = document.querySelector(".answer_3");
const answer_4 = document.querySelector(".answer_4");
const answer_html = document.querySelectorAll(".answer");
const container = document.querySelector(".container")

let it = 0;
//var win;
const once =  {
    once:true
};

var lost_games = 0;

button.addEventListener('click', function(){

    button.classList.remove("display")
    button.classList.add("no_display")

    let current_question = generate_question(it)
    question.innerHTML = current_question
    answer_1.innerHTML = answers[it][0];
    answer_2.innerHTML = answers[it][1];
    answer_3.innerHTML = answers[it][2];
    answer_4.innerHTML = answers[it][3];

    // answer_1.addEventListener('click', function() {

    //     if(answers[it][0] == correct_answers[it])
    //         win = true;
    //     else
    //     win = false;

    //     console.log(win)
    // }, once)
    // answer_2.addEventListener('click', function() {

    //     if(answers[it][1] == correct_answers[it])
    //         win = true;
    //     else
    //     win = false;

    //     console.log(win)
    // }, once)
    // answer_3.addEventListener('click', function() {

    //     if(answers[it][2] == correct_answers[it])
    //         win = true;
    //     else
    //     win = false;

    //     console.log(win)
    // }, once)
    // answer_4.addEventListener('click', function() {

    //     if(answers[it][3] == correct_answers[it])
    //         win = true;
    //     else
    //     win = false;

    //     console.log(win)
    // }, once)


    answer_html.forEach((element) => {
        element.addEventListener('click', function(){
            // console.log(element)
            // console.log(element.innerHTML)
            // console.log(correct_answers[it-1])

            css_to_answers(it)
            

            if(element.innerHTML == correct_answers[it-1])
            {
                css_to_container(1)
            }
            else 
           {
                 css_to_container(0)
                 lost_games++;
           }
            
           css_to_button_after_finish(lost_games)

           console.log("dot")
            
        }, once)
    })

    
    //console.log("dot")

    it = (it+1)%4
    init();
})

function generate_question(i)
{
    return questions[i];
}

//We need a functon for when we win to change the css and when we lose
function css_to_answers(iterator)
{
    if(answer_1.innerHTML == correct_answers[iterator - 1])
        answer_1.classList.add("win");
    else
        answer_1.classList.add("lose");

        if(answer_2.innerHTML == correct_answers[iterator - 1])
        answer_2.classList.add("win");
    else
        answer_2.classList.add("lose");

        if(answer_3.innerHTML == correct_answers[iterator - 1])
        answer_3.classList.add("win");
    else
        answer_3.classList.add("lose");

        if(answer_4.innerHTML == correct_answers[iterator - 1])
        answer_4.classList.add("win");
    else
        answer_4.classList.add("lose");
}

function css_to_container(win)
{
    if(win == 1)
        container.classList.add("win")
        else
        container.classList.add("lose")  
}

function css_to_button_after_finish(lostgames)
{
    if(lostgames>=3 && lostgames%3 == 0)
    {
        button.classList.remove("no_display")
        button.innerHTML = ""
        button.innerHTML += "RESTART"
        button.classList.add("display")
        lost_games-=3;
    }
    else
    {
        button.innerHTML = ""
        button.innerHTML += "NEXT"
    }
    button.classList.remove("no_display")
    button.classList.add("display")
}


function init()
{
    container.classList.remove("win")
    container.classList.remove("lose")
    answer_html.forEach((element) => {

        element.classList.remove("win")
        element.classList.remove("lose")
    })


}