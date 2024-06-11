import React, { useState } from "react";
import PropTypes from "prop-types";
import "./WhatsAppImageAt.css";

const WhatsAppImageAt = ({ className = "" }) => {
  const [scenario, setScenario] = useState("");
  const [convertedCode, setConvertedCode] = useState("");
  const [diagramType, setDiagramType] = useState("");

  const handleMermaidClick = () => {
    // Simulate conversion to Mermaid code
    const mermaidCode = `graph TD;\n    A[${scenario}] --> B[Example Mermaid Code];`;
    setConvertedCode(mermaidCode);
  };

  const handleBPMNClick = () => {
    // Simulate conversion to BPMN code
    const bpmnCode = `<bpmn:process id="Process_1" isExecutable="true">\n    <bpmn:startEvent id="StartEvent_1" name="${scenario}" />\n</bpmn:process>`;
    setConvertedCode(bpmnCode);
  };

  const handleDiagramChange = (event) => {
    setDiagramType(event.target.value);
  };

  return (
    <div className={`whatsapp-image-at ${className}`}>
      <div className="diagram-options">
        <button className="mermaid-button" onClick={handleMermaidClick}>
          Mermaid Code
        </button>
        <button className="bpmn-button" onClick={handleBPMNClick}>
          BPMN Code
        </button>
      </div>
      <textarea
        className="mermaid-input"
        placeholder="Enter Mermaid code here..."
        rows={13}
        cols={29}
        value={convertedCode}
        
      />
      <select
        className="sample-diagram-options"
        value={diagramType}
        onChange={handleDiagramChange}
      >
        <option value="" disabled>
          Select Diagram Type
        </option>
        <option value="flowchart">Flow Chart</option>
        <option value="sequence">Sequence Diagram</option>
        <option value="piechart">Pie Chart</option>
        {/* Add more diagram types as needed */}
      </select>
    </div>
  );
};

WhatsAppImageAt.propTypes = {
  className: PropTypes.string,
};

export default WhatsAppImageAt;



