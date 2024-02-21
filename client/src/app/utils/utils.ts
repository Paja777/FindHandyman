import ImageCompressor from 'image-compressor.js';

export const compressImage = async (image: File | Blob | Uint8Array | ArrayBuffer, options: any) => {
    try {
      let blobData: Blob;
  
      // Convert Uint8Array or ArrayBuffer to Blob if needed
      if (image instanceof Uint8Array) {
        blobData = new Blob([image]);
      } else if (image instanceof ArrayBuffer) {
        blobData = new Blob([new Uint8Array(image)]);
      } else {
        // If image is already a File or Blob, use it directly
        blobData = image;
      }
  
      // Compress the image
      const compressedImage = await new ImageCompressor(blobData, options);
      return compressedImage;
    } catch (error) {
      console.error('Error compressing image:', error);
      throw error;
    }
  };