import ImageCompressor from "image-compressor.js";

export const compressImage = async (
  imageData: string,
  options: any
) => {
  try {
    // Convert the base64 string to a Blob object
    const blobData = await fetch(imageData).then((res) => res.blob());

    // Compress the image
    const compressedImage = await new ImageCompressor(blobData, options);
    return compressedImage;
  } catch (error) {
    console.error("Error compressing image:", error);
    throw error;
  }
};

export const imageComporessor = async (images: string[]) => {
  const compressedImages = [];

  if (!images || images.length === 0) return [];

  for (const imageData of images) {
    try {
      const compressedImage = await compressImage(imageData, {
        maxWidth: 800,
        maxHeight: 600,
        quality: 0.8,
      });
      compressedImages.push(compressedImage);
    } catch (error) {
      console.error("Error compressing image:", error);
      // If compression fails, use the original image
      compressedImages.push(imageData);
    }
  }
  return compressedImages;
};

export const serviceMaker = ({ services, prices }: any) => {
  if (!services) return null;
  const servicePrice = services
    .filter((service: string | undefined) => service !== undefined && service !== '') // Filter out null, empty, or undefined services
    .map((service: string, index: number) => ({
      [service]: prices[index]
    }));
  
  return servicePrice;
};

export function base64ArrayToBinaryArray(base64Strings : any) {
  return base64Strings.map((base64String : any)=> {
    const binaryString = atob(base64String); // Decode Base64 string to binary string
    const length = binaryString.length;
    const bytes = new Uint8Array(length); // Create a Uint8Array to store the binary data
    
    // Fill the Uint8Array with the binary data
    for (let i = 0; i < length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    
    return bytes.buffer; // Return the ArrayBuffer containing the binary data
  });
}

export function convertToBase64(files: File[]): Promise<string[]> {
  return Promise.all(
    files.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result as string);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    })
  );
}
