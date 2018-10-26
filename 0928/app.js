console.log('app.js');

fetch('./data.json')
  .then(function (response) {
  	response.json().then(function (data) {
  		console.log('json data:', data);
  	});
  })
	.catch(function(err) {
    console.log('Fetch Error :-S', err);
  });