const popupLinks = document.querySelectorAll(`.popup-link`)

const body = document.querySelector(`body`)

let unlock = true

const timeout = 800
if (popupLinks.length > 0) {
    for ( let index = 0 ; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e){
            const popupName = popupLink.getAttribute(`href`).replace(`#`, ``);
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}
// POPUP 222

// POPUP1


const popupCloseIcon = document.querySelectorAll(`.close-popup`)
if (popupCloseIcon.length > 0){
    for (let index =0 ; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener(`click`, function (e){
            popupClose(el.closest(`.popup`))
            e.preventDefault()
        })
    }
}
// POPUP2

//POPUP1


function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector(`.popup.open`)
        if (popupActive) {
            popupClose(popupActive, false)
        } else {
        }
        currentPopup.classList.add(`open`)
        currentPopup.addEventListener("click", function (e){
            if (!e.target.closest(`.popup_content`)){
                popupClose(e.target.closest(`.popup`))
            }
        })
    }
}

// POPUP2



//POPUP

function popupClose (popupActive, doUnlock = true ){
    if (unlock) {
        popupActive.classList.remove(`open`);
    }
}
//POPUP2

