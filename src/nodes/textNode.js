// textNode.js

import { NodeConnectorHandles, LabeledNode, SpannedTextDisplay } from '../helpers/handles';

export const TextNode = ({ id, data }) => {

  const placeHolderValue = data?.text || '{{input}}';

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
