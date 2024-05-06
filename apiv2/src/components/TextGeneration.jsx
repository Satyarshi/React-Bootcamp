import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

async function fileToGenerativePart(file) {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
}

const TextGeneration = () => {
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  const generateText = async (promptGiven) => {
    setLoading(true);
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const prompt = promptGiven;
    const fileInputEl = document.querySelector("input[type=file]");
    const imageParts = await Promise.all(
      [...fileInputEl.files].map(fileToGenerativePart)
    );

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    setGeneratedText(text);
    setLoading(false);
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    generateText(value);
  };
  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-center text-4xl text-blue-900">
        MyAI : Text Generation
      </h1>
      <div className="my-10 mx-auto max-w-screen-lg">
        <label className="block my-4" htmlFor="promptInput">
          Enter your prompt
        </label>
        <input
          id="promptInput"
          type="text"
          className="border rounded border-black"
          onChange={handleOnChange}
        />
        <input type="file" className="my-4" accept="image/*" />
        <button
          className="block border rounded-r-lg border-black bg-blue-900 text-white px-2 my-4"
          onClick={handleSubmit}
        >
          Generate
        </button>
        {loading && <p>Loading...</p>}
        {!loading && generatedText && (
          <div className="my-4 whitespace-pre-line">
            <p>{generatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextGeneration;
