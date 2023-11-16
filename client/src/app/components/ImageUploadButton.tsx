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

  const handleFileChange = (e : any) => {
    // Handle the selected files
    const selectedFiles = e.target.files;

    // Convert each selected file to a URL
    const fileUrls = [];
    for (const file of selectedFiles) {
      const fileUrl = URL.createObjectURL(file);
      fileUrls.push(fileUrl);
    }

    // You can now use the fileUrls array as needed
    console.log(fileUrls);
    dispatch(uploadImages(fileUrls))
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
              bgcolor: "rgb(181, 58, 27)",
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