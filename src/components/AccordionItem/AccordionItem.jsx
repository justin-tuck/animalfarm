import React, { useState } from "react";

function AccordionItem({ title, content, active, onToggle }) {
  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={onToggle}>
        {title}
      </button>
      {active && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default AccordionItem;
