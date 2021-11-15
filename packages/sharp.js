const sharp = require('sharp');

sharp('./packages/images/spidy.jpg')
	.png()
	.toFile('./packages/images/newImage.png');
