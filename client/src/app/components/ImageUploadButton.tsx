import { useRef } from 'react';
import { useAppDispatch } from '../store/configureStore';
import { uploadImages } from '../features/roleHandyman/adSlice';
import { LoadingButton } from '@mui/lab';

const ImageUploadButton = () => {
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    // Trigger the file input click event
    fileInputRef?.current?.click();
  };

  const handleFileChange = (e: any) => {
    const selectedFiles = e.target.files;
    // Convert each selected file to base64 data
    const fileDataArray: string[] = [];
    for (const file of selectedFiles) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Read the file as data URL (base64)
        const base64Data = reader.result;
        fileDataArray.push(base64Data as string); // Cast to string
        if (fileDataArray.length === selectedFiles.length) {
          // Dispatch action to upload base64 data
          dispatch(uploadImages(fileDataArray));
          console.log(fileDataArray);
        }
      };
      reader.readAsDataURL(file); // Read file as data URL
    }
  };

  return (
    <div>
      <LoadingButton
        onClick={handleButtonClick}
        variant="contained"
        sx={{
          mt: 1,
          mb: 2,
          ml: "20%",
          width: "100%",
          height: "50px",
          bgcolor: "red",
          color: "white",
          "&:hover": { bgcolor: "rgb(129, 212, 28)" },
        }}
      >
        Upload Images
      </LoadingButton>
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUploadButton;