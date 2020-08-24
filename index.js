function submitData(name, email) {
  let nameAndEmail = [];
  let div = document.getElementById('stuff');
	return fetch('http://localhost:3000/users', {
    method: 'post',
		headers: {
      'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({
      name: `${name}`,
			email: `${email}`
		})
	})
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    document.body.innerHTML = object.id
  })
  .catch(function(error) {
    document.body.innerHTML = error.message;
  });
}
