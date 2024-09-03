// inputNode.js

import { NodeConnectorHandles, LabeledNode, SpannedTextDisplay, InitialPlaceholder } from '../helpers/handles';



export const InputNode = ({ id, data }) => {

  const initialValue= InitialPlaceholder(data?.inputName)
                      .replace(id,'customInput-', 'input_');

  const initialType= InitialPlaceholder(data?.inputType)
                     .assign('Text');

  
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


