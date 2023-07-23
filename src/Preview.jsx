import React, { useState } from "react";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  console.log("我是b的改动啊");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };

      if (file.type.startsWith("image/")) {
        // 图片文件
        reader.readAsDataURL(file);
      } else if (file.type === "application/pdf") {
        // PDF文件
        reader.readAsArrayBuffer(file);
      } else {
        // 其他文本文件
        reader.readAsText(file);
      }
    }
  };

  const renderPreview = () => {
    if (selectedFile) {
      if (selectedFile.type.startsWith("image/")) {
        return <img src={previewUrl} alt="Preview" />;
      } else if (selectedFile.type === "application/pdf") {
        return (
          <embed
            src={URL.createObjectURL(selectedFile)}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        );
      } else {
        return <pre>{previewUrl}</pre>;
      }
    }
    return null;
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {renderPreview()}
    </div>
  );
};

export default FileUploader;
