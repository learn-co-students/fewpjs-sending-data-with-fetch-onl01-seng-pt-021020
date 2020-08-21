function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        let p = document.createElement('p');
        p.innerHTML = object.id;
        document.body.appendChild(p);
        console.log(object)
    })
    .catch(function(error){
        let p = document.createElement('p');
        p.innerHTML = error.message;
        document.body.appendChild(p);
        console.log(error.message);
    })
}
  