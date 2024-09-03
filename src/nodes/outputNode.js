// outputNode.js

import { useState } from 'react';
import {handleTypeChange, labelSet, titleSet, handle } from '../helpers/handles';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');
  return (
    <div className='container'>
     {handle(id,"value").left()}
      {titleSet("Output")}
      <div>
        {labelSet("Name",currName,setCurrName)}
        <label>
          Type:
          <select value={outputType} onChange={(event)=>{handleTypeChange(event,setOutputType)}}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}
