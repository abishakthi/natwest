import React, { useState } from "react";
import WhatsAppImageAt from "./WhatsAppImageAt";
import CodeOptions from "./CodeOptions";

const DiagramManager = () => {
  const [diagramType, setDiagramType] = useState("");
  const [scenario, setScenario] = useState("");

  const handleDiagramChange = (type) => {
    setDiagramType(type);
  };

  const handleScenarioChange = (text) => {
    setScenario(text);
  };

  return (
    <div className="diagram-manager">
      <WhatsAppImageAt
        onDiagramChange={handleDiagramChange}
        onScenarioChange={handleScenarioChange}
      />
      <CodeOptions diagramType={diagramType} scenario={scenario} />
    </div>
  );
};

export default DiagramManager;
