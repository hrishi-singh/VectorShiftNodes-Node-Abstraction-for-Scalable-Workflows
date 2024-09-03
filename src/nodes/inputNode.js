// inputNode.js
import { useState } from 'react';
import { handle, LabeledNode, titleSet } from '../helpers/handles';

export const InputNode = ({ id, data }) => {
  // const [inputType, setInputType] = useState(data.inputType || 'Text');
  const initialPlaceHolderValue=data?.inputName || id.replace('customInput-', 'input_');
  const initialPlaceHolderType=data.inputType || 'Text';
  return (
    <div className='container'>
      {titleSet("Input")}
      <div>
        {LabeledNode("Name", initialPlaceHolderValue).input()}
        {LabeledNode("Type",initialPlaceHolderType).selection(["Text","File"])}
      </div>
      {handle(id,"value").right()}
    </div>
  );
}


