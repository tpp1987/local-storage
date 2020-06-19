let user = {
    name: '',
    age: undefined,
    colour: ''
}

const userJSON = localStorage.getItem('user')

if (userJSON !== null) {
    user = JSON.parse(userJSON)
}

const questions = document.querySelector("#questions-form")
const answers = document.querySelector('#answers')

if (user.name.length > 0) {
    const welcomeMessage = document.createElement("p")
    welcomeMessage.innerHTML = `Hi <strong>${user.name}</strong>, welcome back.`
    document.querySelector("#welcome-message").appendChild(welcomeMessage)

    questions.setAttribute("style", "display: none")

    answers.setAttribute("style", "display: block")

    const answersAge = document.querySelector('#answers-age')
    answersAge.textContent = `${user.age}`

    const answersColour = document.querySelector('#answers-colour')
    answersColour.textContent = `${user.colour}`

} else {
    questions.setAttribute("style", "display: grid")

    answers.setAttribute("style", "display: none")

    const welcomeMessage = document.createElement("p")
    welcomeMessage.innerHTML = `Looks like you're new here. Please answer a few questions to get&nbsp;started&hellip;`
    document.querySelector("#welcome-message").appendChild(welcomeMessage)
}

document.querySelector("#questions-form").addEventListener("submit", function (e) {
    e.preventDefault()

    user.name = e.target.elements.firstName.value
    user.age = e.target.elements.age.value
    user.colour = e.target.elements.favColour.value

    localStorage.setItem('user', JSON.stringify(user))

    document.location.reload()
})

document.querySelector('#clear-data').addEventListener('click', function (e) {
    localStorage.clear()
    document.location.reload()
})