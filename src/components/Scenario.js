import React, { useState } from 'react';
import './Scenario.css';
import JSZip from 'jszip';

const Scenario = ({ onSearch }) => {
  const [scenario, setScenario] = useState('');
  const [file, setFile] = useState(null);

  const handleSearch = () => {
    onSearch(scenario);
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      // Reading .docx file and setting the scenario with the file content
      const reader = new FileReader();
      reader.onload = async (event) => {
        const arrayBuffer = event.target.result;

        const zip = await JSZip.loadAsync(arrayBuffer);
        const doc = await zip.file("word/document.xml").async("text");

        // Extract text from document.xml
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(doc, "application/xml");
        const paragraphs = xmlDoc.getElementsByTagName("w:t");

        let textContent = "";
        for (let i = 0; i < paragraphs.length; i++) {
          textContent += paragraphs[i].textContent + " ";
        }

        setScenario(textContent);
      };
      reader.readAsArrayBuffer(selectedFile);
    }
  };

  const handleIconClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="searchBox">
      <input
        className="searchInput"
        type="text"
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
        placeholder="Enter your scenario here..."
      />
      <button className="searchButton" onClick={handleSearch}>
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
          <g clipPath="url(#clip0_2_17)">
            <g filter="url(#filter0_d_2_17)">
              <path
                d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                shapeRendering="crispEdges"
              ></path>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_2_17"
              x="-0.418549"
              y="3.70435"
              width="29.7139"
              height="29.7139"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
            </filter>
            <clipPath id="clip0_2_17">
              <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
            </clipPath>
          </defs>
        </svg>
      </button>

      <div className="input-div" onClick={handleIconClick}>
        <input
          id="fileInput"
          className="input"
          name="file"
          type="file"
          accept=".docx"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          strokeLinejoin="round"
          strokeLinecap="round"
          viewBox="0 0 24 24"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
          className="icon"
        >
          <polyline points="16 16 12 12 8 16"></polyline>
          <line y2="21" x2="12" y1="12" x1="12"></line>
          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
          <polyline points="16 16 12 12 8 16"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default Scenario;
