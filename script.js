const findCat = document.querySelector("button")
const input = document.querySelector('input')
const photo = document.getElementById('cat-pic')


const url = "https://api.thecatapi.com/v1/breeds"
fetch(url)
    .then(res =>{
        console.log("success")
    })
    .catch(err => {
        console.log ("error")
    })

findCat.addEventListener('click', (evt) => {
   evt.preventDefault()
    fetch(`https://api.thecatapi.com/v1/breeds/search?name=${input.value}`)
   .then((res) => res.json())
   .then((data) => {
    let breed = (data[0].id)
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`)
        .then((res2) => res2.json())
        .then((data2) => {
        photo.src = data2[0].url
     })
   
   })
   input.value = ''
})

