import { Handle, Position } from "reactflow";
import { useState } from "react";

export const handleChange = (e, fn) => {
  fn(e.target.value);
};

export const SpannedTextDisplay = (spannedText) => (
  <div className="__span-text __title">
    <span>{`${spannedText}`}</span>
  </div>
);

export const InitialPlaceholder = (data) => {
  return {
    replace: (id, oldValue, newValue) => {
      return data || id.replace(oldValue, newValue);
    },
    assign: (initialSelection) => {
      return data || initialSelection;
    },
  };
};

export const LabeledNode = (label, placeHolder) => {
  const [curr, setCurr] = useState(placeHolder);
  return {
    input: () => (
      <label>
        {`${label}:`}
        <input
          type="text"
          value={curr}
          onChange={(e) => handleChange(e, setCurr)}
          className="placeholder"
        />
      </label>
    ),

    selection: (options) => (
      <label>
        {`${label}:`}
        <select
          value={curr}
          onChange={(e) => {
            handleChange(e, setCurr);
          }}
          className="placeholder"
        >
          {options.map((option) => {
            return (
              <option value={`${option}`} key={option}>
                {option}
              </option>
            );
          })}
        </select>
      </label>
    ),
  };
};

export const NodeConnectorHandles = (id, ...suffixes) => {
  const getSeparation = (multiplier) =>
    `${(multiplier * 100) / (suffixes.length + 1)}%`;
  const generateId = (IdSuffix) => `${id}-${IdSuffix}`;

  const commonStyles = {
    background: "rgb(256,256,256)",
    width: "1em",
    height: "1em",
    border: "1px solid",
    margin: "-2px",
    top: "50%",
  };

  const HandleComponent = (type, position) =>
    suffixes.map((suffix, index) => {
      return (
        <Handle
          type={type}
          position={position}
          id={generateId(suffix)}
          style={{ ...commonStyles, top: getSeparation(index + 1) }}
          key={suffix}
        />
      );
    });

  return {
    left: () => HandleComponent("target", Position.Left),
    right: () => HandleComponent("source", Position.Right),
  };
};
