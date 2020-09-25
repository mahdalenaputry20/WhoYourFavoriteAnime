// / SAGIRI

quest12 = [
    {
        question: 'Nama asli Sagiri adalah?',
        answer: 'Izumi sagiri'
    },
    {
        question: 'Siapa nama onii-chan sagiri?',
        answer: 'Izumi Masamune'
    },
    {
        question: 'Apa nama pena/istilah sagiri di dunia ilustrator?',
        answer: 'Ero Manga-Sensei'
    },
    {
        question: 'Siapa adik tiri Masamune?',
        answer: 'Sagiri'
    },
    {
        question: 'Sagiri suka menggambar hal berbau?',
        answer: 'erotis'
    },
    {
        question: 'Sagiri jago dalam?',
        answer: 'menggambar'
    },
    {
        question: 'Alasan sagiri disebut sebagai monster lont mantis...',
        answer: 'banyak hahaha'
    }
    
]

const randomIndex12 = Math.floor(Math.random() * 6) 
const selectedQuestion12 = quest12[randomIndex12]
console.log(selectedQuestion12)

const questionElement12 = document.getElementById('quest12') 

questionElement12.innerText = selectedQuestion12.question


const answerButton12 = document.getElementById('checkAns12')

answerButton12.addEventListener('click', function () {
console.log('menekan periksa jawaban')

const answerElement12 = document.getElementById('ans12')

console.log(answerElement12.value)

    if (answerElement12.value.toLowerCase() === selectedQuestion12.answer.toLowerCase()) {
        alert('Sugoi,Senpai! Kamu benar benar tahu tentang karakter favorite mu. Daebakk!!!')
    } else if(answerElement12.value.toLowerCase() === ''){
        alert('Bakka! Masukin dulu kakak jawabannya')
    } else{
        alert('Gomennasai, Onii-chan. Cari Karakter Lain aja deh! ')
    }
})

const newQuestionButton12 = document.getElementById('lanjut')

newQuestionButton12.addEventListener('click', function () {
    const randomIndex12 = Math.floor(Math.random() * 4) 
    const selectedQuestion12 = quest12[randomIndex12]
    console.log(selectedQuestion12)
    
    const questionElement12 = document.getElementById('quest12') 
    
    questionElement12.innerText = selectedQuestion12.question
    
})