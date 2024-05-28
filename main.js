const formEl = document.querySelector(".form")
const convertInputEl = document.querySelector(".conversion-input")
const convertBtnEl = document.querySelector(".convert-button")

const mobileMetersToFeetEl = document.querySelector(".m-meters-feet")
const mobileFeetToMetersEl = document.querySelector(".m-feet-meters")
const desktopMetersToFeetEl = document.querySelector(".d-meters-feet")

const mobileLitersToGallons = document.querySelector(".m-liters-gallons")
const mobileGallonsToLiters = document.querySelector(".m-gallons-liters")
const desktopLitersToGallons = document.querySelector(".d-liters-gallons")

const mobileKilosToPounds = document.querySelector(".m-kilos-pounds")
const mobilePoundsToKilos = document.querySelector(".m-pounds-kilos")
const desktopKilosToPounds = document.querySelector(".d-kilos-pounds")

formEl.addEventListener("submit", (event) => {
  event.preventDefault()

  const inputValue = convertInputEl.value

  const metersToFeet = (inputValue * 3.28084).toFixed(3)
  const feetToMeters = (inputValue / 3.28084).toFixed(3)

  const litersToGallons = (inputValue * 0.264172).toFixed(3)
  const gallonsToLiters = (inputValue / 0.264172).toFixed(3)

  const kilosToPounds = (inputValue * 2.20462).toFixed(3)
  const poundsToKillos = (inputValue / 2.20462).toFixed(3)

  mobileMetersToFeetEl.innerHTML = `${inputValue} meters = ${metersToFeet} feet`
  mobileFeetToMetersEl.innerHTML = `${inputValue} feet = ${feetToMeters} meters`
  desktopMetersToFeetEl.innerHTML = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`

  mobileLitersToGallons.innerHTML = `${inputValue} liters = ${litersToGallons} gallons`
  mobileGallonsToLiters.innerHTML = `${inputValue} gallons = ${gallonsToLiters} liters`
  desktopLitersToGallons.innerHTML = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`

  mobileKilosToPounds.innerHTML = `${inputValue} kilos = ${kilosToPounds} pounds`
  mobilePoundsToKilos.innerHTML = `${inputValue} pounds = ${poundsToKillos} kilos`
  desktopKilosToPounds.innerHTML = `${inputValue} kilos = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKillos} kilos`
})
