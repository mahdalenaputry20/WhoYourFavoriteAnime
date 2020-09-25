quest14 = [
    {
        question: 'Kenapa Saitama Botak karena?',
        answer: 'dicukur'
    },
    {
        question: 'Alasan saitama meninggalkan pekerjaan nya sebagai karyawan adalah?',
        answer: 'Hero'
    },
    {
        question: 'Apakah Saitama pengangguran?',
        answer: 'Ya'
    },
    {
        question: 'Siapa pertama kali yang menjadi murid Saitama?',
        answer: 'Genos'
    },
    {
        question: 'Kenapa saitama punya sifat konyol dan polos karena?',
        answer: 'gemesin'
    },
    {
        question: 'Apa penampilan khusu saitama?',
        answer: 'Botak'
    },
    {
        question: 'One Punch Man menggambarkan Saitama sebagai?',
        answer: 'Pahlawan Botak'
    },
    {
        question: 'Asal usul nama Saitama One Punch Man diambil dari nama?',
        answer: 'Kota'
    }
]



const randomIndex14 = Math.floor(Math.random() * 7) 
const selectedQuestion14 = quest14[randomIndex14]
console.log(selectedQuestion14)

const questionElement14 = document.getElementById('quest14') 

questionElement14.innerText = selectedQuestion14.question


const answerButton14 = document.getElementById('checkAns14')

answerButton14.addEventListener('click', function () {
console.log('menekan periksa jawaban')

const answerElement14 = document.getElementById('ans14')

console.log(answerElement14.value)

    if (answerElement14.value.toLowerCase() === selectedQuestion14.answer.toLowerCase()) {
        alert('Sugoi,Senpai! Kamu benar benar tahu tentang karakter favorite mu. Daebakk!!!')
    } else if(answerElement14.value.toLowerCase() === ''){
        alert('Bakka! Masukin dulu kakak jawabannya')
    } else{
        alert('Gomennasai, Onii-chan. Cari Karakter Lain aja deh! ')
    }
})

const newQuestionButton14 = document.getElementById('lanjut')

newQuestionButton14.addEventListener('click', function () {
    const randomIndex14 = Math.floor(Math.random() * 4) 
    const selectedQuestion14 = quest14[randomIndex14]
    console.log(selectedQuestion14)
    
    const questionElement14 = document.getElementById('quest14') 
    
    questionElement14.innerText = selectedQuestion14.question
    
})