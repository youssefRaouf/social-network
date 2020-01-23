import request from './promiseRequest';

// export async function allianceRequest(body) {
// 	const options = {
// 		method: 'POST',
// 		url: 'https://webservice.tecalliance.services/pegasus-3-0/services/TecdocToCatDLB.jsonEndpoint',
// 		headers: {
// 			'Postman-Token': '4751fd28-3d5c-49d1-b6f9-a896cf07b27d',
// 			'cache-control': 'no-cache',
// 			'Content-Type': 'application/json',
// 			'X-Api-Key': '2BeBXg6CYxRZqqxXK6vzqJaVAXC6mxWeLZNa1u4tHYZSqxQ4GJEE',
// 		},
// 		body,
// 		json: true,
// 	};

// 	const res = await request(options);
// 	return res;
// }

// async function delay(time) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(1), time);
//   });
// }

// const baseCsCartUrl = 'http://192.168.1.3/cscart/api';
// export async function cscartRequest({url, method = 'GET', body}) {
// 	const options = {
// 		method: method,
// 		url: `${baseCsCartUrl}/${url}`,
// 		headers: {
// 			'cache-control': 'no-cache',
// 			'Content-Type': 'application/json',
// 			'Authorization': 'Basic ZGFuaWVsLnJhb3VmQHlvbWljZXBhLmNvbTo0eDA1ZTBpNzIxSXA2YmhOOXRnOUI1MmdKUEhHYUg3bwo=',
// 		},
// 		body,
// 		json: true,
// 	};

// 	const res = await request(options);
// 	// await delay(500);
// 	return res;
// }
