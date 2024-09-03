// textNode.js

import { useState } from 'react';
import { handle, labelSet, titleSet } from '../helpers/handles';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  return (
    <div className='container'>
      {titleSet("Text")}
      <div>
        {labelSet("Text", currText, setCurrText)}
      </div>
      {handle(id,"output").right()}
      
    </div>
  );
}
