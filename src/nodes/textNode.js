// textNode.js

import { NodeConnectorHandles, LabeledNode, SpannedTextDisplay, InitialPlaceholder } from '../helpers/handles';

export const TextNode = ({ id, data }) => {

  const placeHolderValue = InitialPlaceholder(data?.text)
                           .assign('{{input}}');

  return (
    <div className='container'>
      {SpannedTextDisplay("Text")}
      <div>
        {LabeledNode("Text", placeHolderValue).input()}
      </div>
      {NodeConnectorHandles(id,"output").right()}
    </div>
  );
}
