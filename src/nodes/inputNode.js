// inputNode.js

import { useState } from 'react';
import { handle, handleTypeChange, labelSet, titleSet } from '../helpers/handles';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <div className='container'>
      {titleSet("Input")}
      <div>
        {labelSet("Name", currName, setCurrName)}
        <label>
          Type:
          <select value={inputType} onChange={e => { handleTypeChange(e, setInputType) }}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      {handle(id,"value").right()}
    </div>
  );
}
