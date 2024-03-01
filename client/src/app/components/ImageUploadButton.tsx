import { useRef } from 'react';
import { useAppDispatch } from '../store/configureStore';
import { uploadImages } from '../features/ads/adSlice';
import { LoadingButton } from '@mui/lab';
import { convertToBase64 } from '../utils/utils';

const ImageUploadButton = () => {
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    // Trigger the file input click event
    fileInputRef?.current?.click();
  };

  const handleFileChange = async (e: any) => {
    const selectedFiles : File[] = Array.from(e.target.files);
    console.log(selectedFiles)
    const base64 = await convertToBase64(selectedFiles);
    dispatch(uploadImages(base64));
    }
  

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