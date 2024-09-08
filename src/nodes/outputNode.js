// outputNode.js

import { LabeledNode, SpannedTextDisplay,NodeConnectorHandles, InitialPlaceholder} from '../helpers/handles';

export const OutputNode = ({ id, data }) => {

  const initialValue =  InitialPlaceholder(data?.outputName)
                        .replace(id,'customOutput-', 'output_');

  const initialType= InitialPlaceholder(data?.inputType)
                     .assign('Text');

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
