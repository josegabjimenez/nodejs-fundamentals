const { app, BrowserWindow } = require('electron');

let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({
		height: 800,
		width: 800,
	});

	mainWindow.loadFile('./index.js');
};

app.on('ready', createWindow);
