// Add your code here
// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };

//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };

//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     });

    function submitData(name, email) {

        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        };

       return fetch('http://localhost:3000/users', configObj)
            .then(function(response) {
                return response.json();
            })
            .then(function(obj) {
                document.body.innerHTML = `
                <ul>
                    <li>${obj.id}</li>
                </ul>`
            })
            .catch(function(error) {

                document.body.innerHTML = `
                <ul>
                    <li>${error.message}</li>
                </ul>`
            })

    }

    submitData('Terry', 'terry.threatt@gmail.com')