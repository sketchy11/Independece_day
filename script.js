const questions = [
    { question: "भारत ने आज़ादी कब पाई?", options: ["1945", "1947", "1950", "1952"], answer: "1947" },
    { question: "भारत का राष्ट्रीय ध्वज किसने डिज़ाइन किया?", options: ["पिंगली वेंकैया", "महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस"], answer: "पिंगली वेंकैया" },
    { question: "भारत का राष्ट्रीय गान किसने लिखा?", options: ["बंकिमचंद्र चटर्जी", "रवीन्द्रनाथ ठाकुर", "सरोजिनी नायडू", "महात्मा गांधी"], answer: "रवीन्द्रनाथ ठाकुर" },
    { question: "भारत का राष्ट्रीय फल कौन सा है?", options: ["केला", "आम", "सेब", "अंगूर"], answer: "आम" },
    { question: "भारत का राष्ट्रीय पक्षी कौन सा है?", options: ["मोर", "तोता", "कौवा", "कबूतर"], answer: "मोर" },
    { question: "भारत का राष्ट्रीय खेल क्या है?", options: ["क्रिकेट", "हॉकी", "फुटबॉल", "कबड्डी"], answer: "हॉकी" },
    { question: "भारत की पहली महिला प्रधानमंत्री कौन थी?", options: ["सरोजिनी नायडू", "इंदिरा गांधी", "सुषमा स्वराज", "प्रतिभा पाटिल"], answer: "इंदिरा गांधी" },
    { question: "ताजमहल कहाँ स्थित है?", options: ["दिल्ली", "आगरा", "जयपुर", "लखनऊ"], answer: "आगरा" },
    { question: "भारतीय संसद भवन कहाँ है?", options: ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"], answer: "दिल्ली" },
    { question: "भारत का पहला राष्ट्रपति कौन था?", options: ["डॉ. राजेन्द्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"], answer: "डॉ. राजेन्द्र प्रसाद" },
    { question: "गांधी जी का जन्म कब हुआ?", options: ["1869", "1872", "1885", "1890"], answer: "1869" },
    { question: "भारतीय स्वतंत्रता संग्राम का नारा 'जय हिंद' किसने दिया?", options: ["सुभाष चंद्र बोस", "भगत सिंह", "महात्मा गांधी", "बाल गंगाधर तिलक"], answer: "सुभाष चंद्र बोस" },
    { question: "'सत्यमेव जयते' कहां से लिया गया है?", options: ["ऋग्वेद", "महाभारत", "रामायण", "उपनिषद"], answer: "उपनिषद" }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => selectOption(button, currentQuestion.answer);
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedButton, correctAnswer) {
    const buttons = document.querySelectorAll(".option");
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("wrong");
        }
    });

    if (selectedButton.textContent === correctAnswer) {
        score++;
    }
}

nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        optionsElement.innerHTML = "";
        nextButton.style.display = "none";

        if (score > 5) {
            questionElement.innerHTML = `🎉 You Won!<br>आप एक सच्चे देशभक्त हैं ❤️🇮🇳<br><br>आपके सही जवाब: ${score}/${questions.length}`;
        } else {
            questionElement.innerHTML = `😔 Try Again!<br>और मेहनत करो, देश को आपकी ज़रूरत है 🇮🇳<br><br>आपके सही जवाब: ${score}/${questions.length}`;
        }
    }
};

// पहला सवाल लोड करना
loadQuestion();
