const grayscale = document.querySelector('#grayscale')
const contrast = document.querySelector('#contrast')
const brightness = document.querySelector('#brightness')
const sepia = document.querySelector('#sepia')
const saturate = document.querySelector('#saturate')
const reset = document.querySelector('#reset')
// const imgUrl = document.querySelector('#img-url')
const img = document.getElementById(`image`)
const img2 = document.getElementById(`image2`)

// console.log(img)
// img.addEventListener(`click`, (e) =>{
//     if (e.target.display === `block`){
//
//     }
// })






const defaults = {
    grayscale: 0,
    contrast: 100,
    brightness: 100,
    sepia: 0,
    saturate: 100
}
//Image2
const defaults2 = {
    grayscale: 0,
    contrast: 100,
    brightness: 100,
    sepia: 0,
    saturate: 100
}



grayscale.addEventListener('input', updateFilterValue)
contrast.addEventListener('input', updateFilterValue)
brightness.addEventListener('input', updateFilterValue)
sepia.addEventListener('input', updateFilterValue)
saturate.addEventListener('input', updateFilterValue)

reset.addEventListener('click', resetFilterValue)
//Image 2
grayscale.addEventListener('input', updateFilterValue2)
contrast.addEventListener('input', updateFilterValue2)
brightness.addEventListener('input', updateFilterValue2)
sepia.addEventListener('input', updateFilterValue2)
saturate.addEventListener('input', updateFilterValue2)
reset.addEventListener('click', resetFilterValue2)

function updateFilterValue() {
    reset.disabled = false
    img.style.filter = `
    grayscale(${grayscale.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    saturate(${saturate.value}%)
  `
}
function updateFilterValue2() {
    reset.disabled = false
    img2.style.filter = `
    grayscale(${grayscale.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    saturate(${saturate.value}%)
  `
}

function resetFilterValue() {
    console.log('click')

    img.style.filter = `
    grayscale(${defaults.grayscale}%)
    contrast(${defaults.contrast}%)
    brightness(${defaults.brightness}%)
    sepia(${defaults.sepia}%)
    saturate(${defaults.saturate}%)
  `

    grayscale.value = defaults.grayscale
    contrast.value = defaults.contrast
    brightness.value = defaults.brightness
    sepia.value = defaults.sepia
    saturate.value = defaults.saturate

    reset.disabled = true
}

function resetFilterValue2() {
    console.log('click')

    img2.style.filter = `
    grayscale(${defaults2.grayscale}%)
    contrast(${defaults2.contrast}%)
    brightness(${defaults2.brightness}%)
    sepia(${defaults2.sepia}%)
    saturate(${defaults2.saturate}%)
  `

    grayscale.value = defaults2.grayscale
    contrast.value = defaults2.contrast
    brightness.value = defaults2.brightness
    sepia.value = defaults2.sepia
    saturate.value = defaults2.saturate

    reset.disabled = true
}

// function updateImageUrl() {
//     const imageUrl = imgUrl.value
//     img.setAttribute('src', imageUrl)
// }