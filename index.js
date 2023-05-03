import { yoongiData } from "./data.js"

const emotionRadios = document.getElementById('emotion-radios')

function getEmotionsArray(yoongiData){
    const emotionsArray = []
    for (let yoongi of yoongiData) {
        for (let emotion of yoongi.emotionTags) {
            emotionsArray.push(emotion)
        }
    }
    return emotionsArray
}

function renderRadioBtns(yoongiData) {
    let radioItems = ``
    const emotions = getEmotionsArray(yoongiData)
    for (let emotion of emotions) {
        radioItems += 
        `<div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderRadioBtns(yoongiData)

