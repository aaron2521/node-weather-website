console.log('client side aaron')

// fetch(
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/boston.json?access_token=pk.eyJ1IjoiYWFyb24yNTIxIiwiYSI6ImNsMWRsODhybDBpa3EzYnA0b2U0enQyNmIifQ.fabA-xjJ0boNVA0SjVsygQ&limit=1'
// ).then((response) => {
//   response.json().then((data) => {
//     console.log({
//       latitude: data.features[0].center[1],
//       longitude: data.features[0].center[0],
//       location: data.features[0].place_name,
//     })
//     fetch(
//       'http://api.weatherstack.com/current?access_key=5cb9da35184d39a7992bef0622891ca5&query=42.3605,-71.0596,&units=m'
//     ).then((response) => {
//       response.json().then((data) => {
//         console.log(
//           data.current.weather_descriptions[0] +
//             '. It is currently ' +
//             data.current.temperature +
//             ' degrees out. It feels like ' +
//             data.current.feelslike +
//             ' degrees out'
//         )
//       })
//     })
//   })
// })




const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e) => {
    e.preventDefault()

    const location = search.value
    console.log(location)

    messageOne.textContent = 'loading..'
    messageTwo.textContent = ''
    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
            messageOne.textContent = data.error
        }
        else{
            console.log(data.location)
            messageOne.textContent = data.location
            console.log(data.forecastData)
            messageTwo.textContent = data.forecastData
        }
    })
})
})