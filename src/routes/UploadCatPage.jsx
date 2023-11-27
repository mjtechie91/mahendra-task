import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import styled from "styled-components";
import { uploadCatApi } from "../hooks/useCatApi";
import Error from "../components/Error";

const FileInput = styled.input`
  margin-bottom: 20px;
`;

const UploadButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function UploadCat() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setError("");
    if (!file) {
      setError("Please select a cat image");
      console.error("No file selected for upload.");
      return;
    }
    setLoading(true);

    const uploadedCat = await uploadCatApi(file);

    if (uploadedCat !== true) {
      setError(uploadedCat);
      console.error("Error uploading cat image.", uploadedCat);
      setLoading(false);
      return;
    }
    console.log("Image uploaded successfully:", uploadedCat);
    // Redirect or perform other actions after successful upload
    navigate("/");
  };

  return (
    <Layout>
      <div className="upload-section">
        <h2>Upload Cat Image</h2>
        <FileInput type="file" onChange={handleFileChange} />
        <UploadButton onClick={handleUpload}>Upload</UploadButton>
        {loading && <p>Uploading...</p>}
        {error && <Error error={error}></Error>}
      </div>
    </Layout>
  );
}

export default UploadCat;
