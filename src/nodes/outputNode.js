// outputNode.js

import { LabeledNode, SpannedTextDisplay,NodeConnectorHandles} from '../helpers/handles';

export const OutputNode = ({ id, data }) => {

  const initialValue=data?.outputName || id.replace('customOutput-', 'output_');
  const initialType=data.inputType || 'Text';

  return (
    <div className='container'>
     {NodeConnectorHandles(id,"value").left()}
      {SpannedTextDisplay("Output")}
      <div>
        {LabeledNode("Name",initialValue).input()}
        {LabeledNode("Name",initialType).selection(["Text","Image"])}
      </div>
    </div>
  );
}
