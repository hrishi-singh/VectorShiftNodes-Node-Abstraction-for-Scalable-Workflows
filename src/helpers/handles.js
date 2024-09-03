import { Handle, Position } from 'reactflow';
import { useState } from 'react';



export const handleChange = (e, fn) => {
  fn(e.target.value);
};



export const LabeledNode = (label, placeHolder) => {
  const [curr, setCurr] = useState(placeHolder);
  return {
    input: () =>
      <label>
        {`${label}:`}
        <input type="text" value={curr} onChange={e => handleChange(e, setCurr)}/>
      </label>,

    selection: (options) =>
      <label>
        {`${label}:`}
        <select value={curr} onChange={e => { handleChange(e, setCurr) }}>
          {
            options.map((option) => {
              return <option value={`${option}`} key={option}>{option}</option>
            })
          }
        </select>
      </label>
  }


}





export const SpannedTextDisplay = (spannedText) =>
  <div>
    <span>{`${spannedText}`}</span>
  </div>





export const NodeConnectorHandles = (id, label, connectorPos = 50) => {
  const handleId = `${id}-${label}`;
  return {
    left: () =>
      <Handle
        type="target"
        position={Position.Left}
        id={handleId}
        style={{ top: `${connectorPos}%` }}

      />,
    right: () =>
      <Handle
        type="source"
        position={Position.Right}
        id={handleId}
        style={{ top: `${connectorPos}%` }}
      />

  }
}
