quest16 = [
    {
        question: 'Nama kepanjangan Hinata adalah?',
        answer: 'Hinata Hyuuga'
    },
    {
        question: 'Hinata adalah pemain voli. Maka, Berapa tinggi Hinata?',
        answer: '162,8 '
    },
    {
        question: 'Siapa inspirasi Hinata untuk bermain Voli?',
        answer: 'Little Giant'
    },
    {
        question: 'Siapa Partner terbaik Hinata?',
        answer: 'Kageyama Tobio'
    },
    {
        question: 'Siapa seiyuu (pengisi suara) Hinata?',
        answer: 'Murase Ayumu'
    },
    {
        question: 'Pelajaran apa yang paling tidak disukai Hinata?',
        answer: 'Bahasa Inggris'
    },
    {
        question: 'Penggemar raksasa kecil karasuno "tenma udai" yang menginspirasi pemain voli adalah?',
        answer: 'Hinata shoyo'
    },
    {
        question: 'Guru yang membuat Hinata semakin jago dalam bermain voli?',
        answer: 'Bokute'
    },
    {
        question: 'Pertandingan yang membuat Hinata merasakan kekalahan yang sangat sakti saat berjumpa tim adalah?',
        answer: 'Aoba Johsai'
    },
    {
        question: 'Teman satu tim yang paling tidak suka Hinata?',
        answer: 'Tsukisima'
    }


]



const randomIndex16 = Math.floor(Math.random() * 9) 
const selectedQuestion16 = quest16[randomIndex16]
console.log(selectedQuestion16)

const questionElement16 = document.getElementById('quest16') 

questionElement16.innerText = selectedQuestion16.question


const answerButton16 = document.getElementById('checkAns16')

answerButton16.addEventListener('click', function () {
console.log('menekan periksa jawaban')

const answerElement16 = document.getElementById('ans16')

console.log(answerElement16.value)

    if (answerElement16.value.toLowerCase() === selectedQuestion16.answer.toLowerCase()) {
        alert('Sugoi,Senpai! Kamu benar benar tahu tentang karakter favorite mu. Daebakk!!!')
    } else if(answerElement16.value.toLowerCase() === ''){
        alert('Bakka! Masukin dulu kakak jawabannya')
    } else{
        alert('Gomennasai, Onii-chan. Cari Karakter Lain aja deh! ')
    }
})

const newQuestionButton16 = document.getElementById('lanjut')

newQuestionButton16.addEventListener('click', function () {
    const randomIndex16 = Math.floor(Math.random() * 4) 
    const selectedQuestion16 = quest16[randomIndex16]
    console.log(selectedQuestion16)
    
    const questionElement16 = document.getElementById('quest16') 
    
    questionElement16.innerText = selectedQuestion16.question
    
})