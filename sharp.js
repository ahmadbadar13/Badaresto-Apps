const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const target = path.resolve(__dirname, 'src', 'public', 'images', 'heros', 'hero-image_4.jpg');
const destination = path.resolve(__dirname, 'dist', 'images', 'heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

if (!fs.existsSync(target)) {
  console.error('File target not found:', target);
  process.exit(1);
}

sharp(target)
  .resize(800)
  .toFile(path.resolve(destination, 'hero-image_4.jpg'), (err) => {
    if (err) {
      console.error('Error resizing image:', err);
    } else {
      console.log('Image resized and saved successfully');
    }
  });

sharp(target)
  .resize(480)
  .toFile(path.resolve(destination, 'hero-image-small.jpg'), (err) => {
    if (err) {
      console.error('Error resizing image:', err);
    } else {
      console.log('Image resized and saved successfully');
    }
  });