const questions = [{
    'que': "Which of the following is a markup language?",
    'a': 'Html',
    'b': 'CSS',
    'c': 'Javascript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': "What year was Js developed",
    'a': '1996',
    'b': '1995',
    'c': 'None',
    'd': 'PHP',
    'correct': 'b'
},
{
    'que': "full form of css",
    'a': 'Cascading sheet style',
    'b': 'Cascading style sheet',
    'c': 'Cascading stylistt sheet',
    'd': 'PHP',
    'correct': 'b'
    
    
},
]
let index = 0;//this will defined the question
let total = questions.length;
let right = 0, wrong = 0;
const quesbox = document.getElementById("questionbox")
// -
const optionInput = document.querySelectorAll('.option');

const loadquestion = () => {
    if (index === total) {
        return end();
    }

    reset();
    const data = questions[index];
    console.log(data);
    quesbox.innerText = `${index + 1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;

}

const submitquiz = () => {
    const data = questions[index];

    const ans = getAnswer()
    if (ans === data.correct) {
        right++; //for right choice
    }
    else {
        wrong++;//for wrong choice
        
    }
    index++;//for next question
    loadquestion();//for loading questiom
    return;
}
const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if (input.checked) {
                // console.log("yes")
                answer = input.value;

            }
            else{
                 console.log("no");
            }
            // else {
            //     // console.log("no");
            // }
        }
    )
    return answer;
}
//for eseeting the question 
const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const end = () => {
    document.getElementById("body").innerHTML = `
    <h1>Thanks for playing the quuiz</h1>
    <h2>marks=${right}/${total} </h2>
    `
}
loadquestion();