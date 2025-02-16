import React, { useRef } from "react";
import { Button, Typography } from "@mui/material";

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  language: string;
}

const FileInput: React.FC<Props> = ({ onChange, name, language }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const activateInput = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <>
      <input
        type="file"
        name={name}
        // accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={onFileChange}
      />
      <Button
        variant="text"
        color="inherit"
        onClick={activateInput}
        sx={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          height: "fit-content",
          "&:hover": {
            background: "inherit",
          },
        }}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          version="1.1"
          viewBox="0 0 16 16"
          className="ContactFormstyles__AttachmentIcon-sc-18i7pts-0 cVgPey"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.404 5.11l-1.015-1.014-5.075 5.074c-0.841 0.841-0.841 2.204 0 3.044s2.204 0.841 3.045 0l6.090-6.089c1.402-1.401 1.402-3.673 0-5.074s-3.674-1.402-5.075 0l-6.394 6.393c-0.005 0.005-0.010 0.009-0.014 0.013-1.955 1.955-1.955 5.123 0 7.077s5.123 1.954 7.078 0c0.004-0.004 0.008-0.009 0.013-0.014l0.001 0.001 4.365-4.364-1.015-1.014-4.365 4.363c-0.005 0.004-0.009 0.009-0.013 0.013-1.392 1.392-3.656 1.392-5.048 0s-1.392-3.655 0-5.047c0.005-0.005 0.009-0.009 0.014-0.013l-0.001-0.001 6.395-6.393c0.839-0.84 2.205-0.84 3.045 0s0.839 2.205 0 3.044l-6.090 6.089c-0.28 0.28-0.735 0.28-1.015 0s-0.28-0.735 0-1.014l5.075-5.075z"></path>
        </svg>
        <Typography
          component="span"
          sx={{
            color: "#333",
            fontSize: "14px",
            fontFamily: "Inter",
            textTransform: "none",
          }}
        >
          {language === "eng" && "Add attachment"}
          {language === "pl" && "Dodaj załącznik"}
          {language === "esp" && "Agregar archivo adjunto"}
          {language === "pt" && "Adicionar anexo"}
        </Typography>
      </Button>
    </>
  );
};

export default FileInput;
