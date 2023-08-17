import React, { useState, cloneElement } from "react";

function Accordion({ children }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) => {
        if (child.type.name !== "Item") {
          return child; // If it's not an Accordion.Item, just render it.
        }

        return cloneElement(child, {
          active: index === activeIndex,
          onToggle: () => {
            setActiveIndex(index === activeIndex ? -1 : index);
          },
        });
      })}
    </div>
  );
}

Accordion.Item = function Item({ title, active, onToggle, children }) {
  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={onToggle}>
        {title}
      </button>
      {active && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
