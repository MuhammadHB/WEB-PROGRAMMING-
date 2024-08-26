let selectedImage = null;
let imagePreview = null;
let imageSize = null;
let resizedImageSize = null;

// Function to handle image selection from file input
const handleImageChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview = reader.result;
      document.getElementById('imagePreview').innerHTML = `<img src="${imagePreview}" alt="Selected" class="image-preview" />`;
    };
    reader.readAsDataURL(file);

    selectedImage = file;
    imageSize = file.size;
    document.getElementById('imageSizes').innerHTML = `<p>Original Image Size: ${(imageSize / 1024).toFixed(2)} KB</p>`;
  }
};

// Function to resize the selected image
const resizeImage = (image, maxWidth, maxHeight) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      let width = img.width;
      let height = img.height;

      const aspectRatio = width / height;

      if (width > maxWidth) {
        width = maxWidth;
        height = width / aspectRatio;
      }
      if (height > maxHeight) {
        height = maxHeight;
        width = height * aspectRatio;
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob((blob) => {
        resolve({ blob, size: blob.size });
      }, 'image/jpeg', 0.7);
    };
    img.src = URL.createObjectURL(image);
  });
};

// Function to handle image upload and saving
const handleImageUpload = async () => {
  if (!selectedImage) {
    alert('Please select an image');
    return;
  }

  try {
    const result = await resizeImage(selectedImage, 1080, 720);
    const resizedImage = result.blob;
    resizedImageSize = result.size;

    if (resizedImageSize >= imageSize) {
      alert('Resized image size is not smaller than the original image. Please select a smaller image.');
      return;
    }

    saveAs(resizedImage, 'resized_image.jpg');

    document.getElementById('imageSizes').innerHTML += `<p>Resized Image Size: ${(resizedImageSize / 1024).toFixed(2)} KB</p>`;

  } catch (error) {
    console.error('Error resizing or saving image:', error);
  }
};

// Event listeners
document.getElementById('fileInput').addEventListener('change', handleImageChange);
document.getElementById('uploadButton').addEventListener('click', handleImageUpload);
