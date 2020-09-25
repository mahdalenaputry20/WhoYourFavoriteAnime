
    quest15 = [
        {
            question: 'Doraemon punya adik namanya siapa?',
            answer: 'Dorami'
        },
        {
            question: 'Sahabat Doraemon?',
            answer: 'Nobita'
        },
        {
            question: 'Siapa Nobita?',
            answer: 'Sahabat Doraemon'
        },
        {
            question: 'Nobita suka sama?',
            answer: 'Shizuka'
        },
        {
            question: 'Berapa sahabat doraemon di jepang ?',
            answer: '4'
        },
        {
            question: 'Siapa yang suka membuly nobita ?',
            answer: 'Giant'
        },
        {
            question: 'Siapa pesuruh Giant ?',
            answer: 'Suneo'
        },
        {
            question: 'Apa nama kepanjangan Nobita ?',
            answer: 'Nobita Nobi'
        },
        {
            question: 'Apa nama asli Giant ?',
            answer: 'Takeshi Goda'
        },
        {
            question: 'Apa nama kepanjangan Suneo?',
            answer: 'Suneo Honekawa'
        },
        {
            question: 'Nama kepanjangan Shizuka?',
            answer: 'Shizuka Minamoto'
        },

    ]


const randomIndex15 = Math.floor(Math.random() * 10) 
const selectedQuestion15 = quest15[randomIndex15]
console.log(selectedQuestion15)

const questionElement15 = document.getElementById('quest15') 

questionElement15.innerText = selectedQuestion15.question


const answerButton15 = document.getElementById('checkAns15')

answerButton15.addEventListener('click', function () {
console.log('menekan periksa jawaban')

const answerElement15 = document.getElementById('ans15')

console.log(answerElement15.value)

    if (answerElement15.value.toLowerCase() === selectedQuestion15.answer.toLowerCase()) {
        alert('Sugoi,Senpai! Kamu benar benar tahu tentang karakter favorite mu. Daebakk!!!')
    } else if(answerElement15.value.toLowerCase() === ''){
        alert('Bakka! Masukin dulu kakak jawabannya')
    } else{
        alert('Gomennasai, Onii-chan. Cari Karakter Lain aja deh! ')
    }
})

const newQuestionButton15 = document.getElementById('lanjut')

newQuestionButton15.addEventListener('click', function () {
    const randomIndex15 = Math.floor(Math.random() * 4) 
    const selectedQuestion15 = quest15[randomIndex15]
    console.log(selectedQuestion15)
    
    const questionElement15 = document.getElementById('quest15') 
    
    questionElement15.innerText = selectedQuestion15.question
    
})