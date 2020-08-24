function submitData(userName, userEmail){

    let formData = {
        name: userName,
        email: userEmail
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify(formData)
    };
    let request = fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        document.body.innerHTML = object[ "id" ];
    })
    .catch(function(error) {
        alert("Unauthorized Access")
        document.body.innerHTML = error.message
    });
    return request
}