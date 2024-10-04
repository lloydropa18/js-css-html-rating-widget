const mouth = document.querySelector('#mouth');
const emotionElements = document.querySelectorAll('.rating-container div');

function selectElemotion(e) {
    mouth.classList.remove("happy-mouth", "indifferent-mouth", "sad-mouth")
    const chosenEmotion = e.target.id; 
    if (chosenEmotion === "bad") {
        mouth.classList.add("sad-mouth");
    } else if (chosenEmotion === "okay") {
        mouth.classList.add("indifferent-mouth");
    } else if (chosenEmotion === "good") {
        mouth.classList.add("happy-mouth");
    }
}

emotionElements.forEach(emotionElement => 
    emotionElement.addEventListener('click', selectElemotion)
)