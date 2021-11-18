const puppeteer = require('puppeteer');

(async () => {
	let browser = await puppeteer.launch();
	console.log('Searching in web... 🔎');

	let page = await browser.newPage();
	await page.goto('https://github.com/josegabjimenez');

	let name = await page.evaluate(() => {
		let h1 = document.querySelector('h1');
		return h1.innerText;
	});
	console.log('Search done 🙋🏽‍♂️');
	console.log('result: ', name);

	browser.close();
	console.log('Process finished. See you next time! :D');
})();

// EXAMPLE OF AN ANONYMOUS ASYNCHRONOUS FUNCTION

// const textFunc = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve('HOLA PAPUHHHHH');
// 		}, 2000);
// 	});
// };

// (async () => {
// 	console.log('Initializing my async function...');
// 	let text = await textFunc();
// 	console.log(text);
// 	console.log('Process finished.');
// })();
