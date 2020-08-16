const fetch = require('node-fetch')

function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
    }

    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }

    let resp = fetch('http://localhost:3000/users', configObj)
        .then(response => {return response.json()})
        .then(response => {return addIdToDOM(response)})
        .catch(error => {addErrorToDOM(error)})

    return resp
}

function addIdToDOM(response) {
    const body = document.querySelector('body')
    const p = document.createElement('p')
    p.textContent = JSON.stringify(response.id)
    body.appendChild(p)

    return response
}

function addErrorToDOM(error) {
    const body = document.querySelector('body')
    const p = document.createElement('p')
    p.textContent = error.message
    body.appendChild(p)

    return error
}
