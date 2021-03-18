// function fetchData() {
	
// 	fetch('https://api.github.com/orgs/grupotesseract/public_members').then(response => {
// 		if(!response.ok ) {
// 			throw Error("ERROR");
// 		}
// 		return response.json();
// 	}).then(data => {
// 		console.log(data);
// 		const html = data.map(public_members => {
// 			return `<th scope="row"> ${public_members.login} </th>`;
// 		}).join('');
// 		console.log(html);
// 		document.querySelector("#pessoa").insertAdjacentHTML('afterbegin', html);

// 	}).catch(error => {
// 		console.log(error);
// 	});

// }

// fetchData();