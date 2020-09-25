// SHINA


    quest11 = [
        {
            question: 'Nama lengkap mashiro?',
            answer: 'Mashiro Shiina'
        },
        {
            question: 'lahir tanggal .. Juni.',
            answer: '13'
        },
        {
            question: 'Tinggi badan mashiro adalah ... cm.',
            answer: '162'
        },
        {
            question: 'Berat badan mashiro adalah .. kg',
            answer: '45'
        },
        {
            question: 'Mashiro sangat berbakat dan mashiro  adalah seorang ?',
            answer: 'seniman'
        },
        {
            question: 'Siapa karakter yang disukai mashiro ?',
            answer: 'Sorata'
        },
        {
            question: 'beberapa waktu mashiro sangat memprioritaskan hal lain selain menyelesaikan manga nya. pekerjaan apakah hal lain itu  ?',
            answer: 'memasak'
        }
    ]



  
// SHINA

const randomIndex11 = Math.floor(Math.random() * 6) 
const selectedQuestion11 = quest11[randomIndex11]
console.log(selectedQuestion11)

const questionElement11 = document.getElementById('quest11') 

questionElement11.innerText = selectedQuestion11.question


const answerButton11 = document.getElementById('checkAns11')

answerButton11.addEventListener('click', function () {
console.log('menekan periksa jawaban')

const answerElement11 = document.getElementById('ans11')

console.log(answerElement11.value)

    if (answerElement11.value.toLowerCase() === selectedQuestion11.answer.toLowerCase()) {
        alert('Sugoi,Senpai! Kamu benar benar tahu tentang karakter favorite mu. Daebakk!!!')
    } else if(answerElement11.value.toLowerCase() === ''){
        alert('Bakka! Masukin dulu kakak jawabannya')
    } else{
        alert('Gomennasai, Onii-chan.Onii-chan salah! Cari Karakter Lain aja deh! ')
    }
})

const newQuestionButton11 = document.getElementById('lanjut')

newQuestionButton11.addEventListener('click', function () {
    const randomIndex11 = Math.floor(Math.random() * 4) 
    const selectedQuestion11 = quest11[randomIndex11]
    console.log(selectedQuestion11)
    
    const questionElement11 = document.getElementById('quest11') 
    
    questionElement11.innerText = selectedQuestion11.question
    
})



// KANA
// SAITAMA
// DORAEMON
// HINATA



