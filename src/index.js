
const text = document.querySelector(`.text`)
const btn = document.querySelector(`.button`)
const buttons = document.querySelectorAll(`.button2`)
const removeBtn = document.querySelector(`.removeBtn`)
removeBtn.addEventListener(`click`, function (){
    if (image1.style.display === `block`){
        image1.style.display = `none`
        image2.style.display = `none`
        returnImage.style.display = `block`
        removeImage.style.display = `none`

    }
    else {
        if (image2.style.display === `block`
        ){image1.style.display = `none`
          image2.style.display = `none`
            returnImage.style.display = `block`
            removeImage.style.display = `none`
        }
        else {
            if (image1.style.display === `none`) {
                image1.style.display = `block`
                returnImage.style.display = `none`
                removeImage.style.display = `block`
            }
            else {
             if ( image1.style.display === `block`){
                 image2.style.display = `block`
             image1.style.display = `none`
                 returnImage.style.display = `none`
                 removeImage.style.display = `block`

             }
            }
        }
    }
})
const returnImage = document.querySelector(`.retImage`)
const removeImage = document.querySelector(`.remoImage`)





const images = document.getElementsByClassName(`image`)
let active
for(let img of images){
    if(img.style.display === `block`){
        active= img.id
        break
    }
}
let disabled
for(let img of images){
    if(img.style.display === `none`){
        disabled= img.src
        break
    }
}
console.log(disabled)

const image2= document.getElementById(`image2`)
const image1= document.getElementById(`image`)


image2.addEventListener(`click`, function (){
    image2.classList.active = true
})
const icon = document.querySelector(`.iconLeft`)

 // if (document.getElementById(`image`).style.display === `none`){
 //    icon.addEventListener(`click`, function (){
 //        document.getElementById(`image`).style.display = `block`
 //        image2.style.display = `none`
 //    })
 // }
// if (document.getElementById(`image2`).style.display === `block`){
//     icon.addEventListener(`click`, function (){
//         document.getElementById(`image2`).style.display = `block`
//         image1.style.display = `none`
//     })
// }
icon.addEventListener(`click`, function (){
    if (document.getElementById(`image2`).style.display === `block`) {
        image2.style.display = `none`
        image1.style.display = `block`
    } else {
        if (document.getElementById(`image`).style.display === `block`) {
            image2.style.display = `block`
            image1.style.display = `none`}
    }
})



console.log(image2)


// console.log(image1)
// image1.addEventListener(`click`, function (){
//     image1.style.display = `none`
//     image2.style.display = `block`
//     // text.style.display = `block`
//     // text2.style.display = `none`
// })







// image1.addEventListener(`click`, function (){
//     active.style.display = ``
// })





//
// image1.addEventListener(`click`, function (){
//     image1.style.display = `none`
//     image2.style.display = `block`
//     // text.style.display = `block`
//     // text2.style.display = `none`
// })
// image2.addEventListener(`click`, function (){
//     image1.style.display = `block`
//     image2.style.display = `none`
//     // text.style.display = `block`
//     // text2.style.display = `none`
// })










buttons.forEach(button => {
    button.addEventListener(`click`, function(event) {
        let textcol = document.querySelector(`h2`)
        const body = document.querySelector(`body`)
        const currentButton =parseInt(event.target.dataset.num)
    })})
btn.addEventListener(`click`, function (e){
    let input1 = document.getElementById(`input1`)
    document.body.append(input1)

    text.textContent = input1.value
        e.preventDefault()
    }
)
let col = document.querySelector(`.col`)
let h2= col.closest(`h2`)



const cols = document.querySelectorAll(`.col`)
//    function changeBG (event){
//     cols.forEach((col)=>{
//         let textcol= col.querySelector(`h2`)
//         const body = document.querySelector(`body`)
//
//         const currentButton =parseInt(event.target.dataset.num)
//         currentButton.addEventListener(`click`, function (){
//             body.style.background = `textcol`
//         })
//     })
// }


// document.addEventListener(`click`, event => {
//     const type = event.target.dataset.type
//     if (type=== `lock`){
//         const node =
//             event.target.tagName.toLowerCase()===`i`
//         ? event.target
//                 : event.target.children[0]
//         node.body.style.background()
//     }
// })

// document.addEventListener('keydown', (event) => {
//     event.preventDefault()
//     if (event.code.toLowerCase() === 'space') {
//         random()
//     }
// })
const button3 = document.querySelector(`.button3`)
button3.addEventListener(`click`, function (){
    location.reload()
})


 function random(){
    cols.forEach((col) =>{
        console.log(col)
        const textcol= col.querySelector(`h2`)
        const color = chroma.random()
        const body = document.querySelector(`body`)
        const button2 = document.querySelector(`.button2`)
        textcol.textContent = color
        col.style.background = color
        col.addEventListener(`click`, function (){
            body.style.background = color
            console.log(color)
        })
    })
}
random()

function randomColor() {
    const hex = `123456789ABCDEF`
    let color = ``
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * hex.length)]
    }
    return `#` + color
}

// (document).ready( function (){
//     var name = 0
//
// })

// btn.addEventListener(`click`, change)
// function change (e){
//     input1.textContent = text3
//     e.preventDefault()
// }

// btn.addEventListener(`click`, function (e) {
//     var input1 = document.getElementById(`input1`).value
//        text3 = "" +input1
//     e.preventDefault()
// })

//
// console.log(input1)
// function change(){
//  if (text.innerText === `text.innerText`){
//      text.innerText = `input.value`
//  }
// }




