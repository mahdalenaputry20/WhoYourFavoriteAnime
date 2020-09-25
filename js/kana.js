
    quest13 = [
        {
            question: 'Siapa nama asli kanna?',
            answer: 'Kanna Kamui'
        },
        {
            question: 'Siapa sebenarnya kanna?',
            answer: 'Dragon'
        },
        {
            question: 'Kanna berasal dari anime berjudul?',
            answer: 'Kobayashi san chi no maid dragon'
        },
        {
            question: 'Kanna adalah idola semua ..... disekolah.',
            answer: 'teman'
        },
        {
            question: 'Pacar kanna?',
            answer: 'saikawa'
        },
        {
            question: 'Kanna jago dalam?',
            answer: 'olahraga'
        },
        {
            question: 'Tujuan Kanna datang ke dunia manusia adalah untuk menjemput?',
            answer: 'Tohru'
        }
    ]

const randomIndex13 = Math.floor(Math.random() * 6) 
const selectedQuestion13 = quest13[randomIndex13]
console.log(selectedQuestion13)

const questionElement13 = document.getElementById('quest13') 

questionElement13.innerText = selectedQuestion13.question


const answerButton13 = document.getElementById('checkAns13')

answerButton13.addEventListener('click', function () {


const answerElement13 = document.getElementById('ans13')

console.log(answerElement13.value)

    if (answerElement13.value.toLowerCase() === selectedQuestion13.answer.toLowerCase()) {
        alert('Sugoi,Senpai! Kamu benar benar tahu tentang karakter favorite mu. Daebakk!!!')
    } else if(answerElement13.value.toLowerCase() === ''){
        alert('Bakka! Masukin dulu kakak jawabannya')
    } else{
        alert('Gomennasai, Onii-chan. Cari Karakter Lain aja deh! ')
    }
})

const newQuestionButton13 = document.getElementById('lanjut')

newQuestionButton13.addEventListener('click', function () {
    const randomIndex13 = Math.floor(Math.random() * 4) 
    const selectedQuestion13 = quest13[randomIndex13]
    console.log(selectedQuestion13)
    
    const questionElement13 = document.getElementById('quest13') 
    
    questionElement13.innerText = selectedQuestion13.question
    
})

   