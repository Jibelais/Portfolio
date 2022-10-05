const findCat = document.querySelector("button")
const input = document.querySelector('input')
const photo = document.getElementById('cat-pic')

//Fetches data from cat API.  
findCat.addEventListener('click', (evt) => {
   evt.preventDefault()
    fetch(`https://api.thecatapi.com/v1/breeds/search?name=${input.value}`)
   .then((res) => res.json())
   .then((data) => {
    let breed = (data[0].id)
        /*
        Image search can be done only with cad's unique ID, not cat's breed. 
        First, fetch cat's ID with the user's input, then get image from the image data with matching ID. 
        */ 
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`)
        .then((res2) => res2.json())
        .then((data2) => {
        photo.src = data2[0].url
     })
   
   })
   input.value = ''
})
