import { yoongiData } from "./data.js"

// Target Elements
const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')

// Event Listeners
emotionRadios.addEventListener('change', highlightCheckedRadioButton)

getImageBtn.addEventListener('click', renderYoongiGif)

memeModalCloseBtn.addEventListener('click', closeModal)


// Functions
function highlightCheckedRadioButton(e) {
    const radios = document.getElementsByClassName('radio')
    for(let radio of radios) {
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight');
}

function closeModal() {
    memeModal.style.display = 'none'
}

function renderYoongiGif() {
    const yoongiObject = getSingleYoongiGifObject()
    memeModalInner.innerHTML =        
    `<img 
        class="yoongi-img" 
        src="./suga-gifs/${yoongiObject.image}"
        alt="${yoongiObject.alt}"
    >
    <a
        class="download-btn"
        href="./suga-gifs/${yoongiObject.image}"
        download
    >
    Download
    </a>`
    memeModal.style.display = 'flex'
}

function getSingleYoongiGifObject() {
    const yoongiArray = getMatchingYoongiGifArray()

    if(yoongiArray.length === 1) {
        return yoongiArray[0];
    } else {
        let randomNumber = Math.floor(Math.random() * yoongiArray.length)
        return yoongiArray[randomNumber]
    }
}

function getMatchingYoongiGifArray() {
    if(document.querySelector('input[type="radio"]:checked')) {
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value

        const matchingYoongiGifArray = yoongiData.filter(function(yoongi) {
            return yoongi.emotionTags.includes(selectedEmotion)
        })
        return matchingYoongiGifArray
    }
}

function getEmotionsArray(yoongiData){
    const emotionsArray = []
    for (let yoongi of yoongiData) {
        for (let emotion of yoongi.emotionTags) {
            if(!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)
            }
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

