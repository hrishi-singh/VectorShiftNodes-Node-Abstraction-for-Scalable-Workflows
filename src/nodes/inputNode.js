// inputNode.js

import { NodeConnectorHandles, LabeledNode, SpannedTextDisplay } from '../helpers/handles';



export const InputNode = ({ id, data }) => {

  const initialValue=data?.inputName || id.replace('customInput-', 'input_');
  const initialType=data.inputType || 'Text';

  
  return (
    <div className='container'>
      {SpannedTextDisplay("Input")}
      <div>
        {LabeledNode("Name", initialValue).input()}
        {LabeledNode("Type",initialType).selection(["Text","File"])}
      </div>
      {NodeConnectorHandles(id,"value").right()}
    </div>
  );
}


