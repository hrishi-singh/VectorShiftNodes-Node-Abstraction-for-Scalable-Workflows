// textNode.js

import { handle, LabeledNode, titleSet } from '../helpers/handles';

export const TextNode = ({ id, data }) => {

  const placeHolderValue = data?.text || '{{input}}';

  return (
    <div className='container'>
      {titleSet("Text")}
      <div>
        {LabeledNode("Text", placeHolderValue).input()}
      </div>
      {handle(id,"output").right()}
    </div>
  );
}
