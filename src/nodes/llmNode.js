// llmNode.js

import { Handle, Position } from 'reactflow';
import { titleSet,handle } from '../helpers/handles';

export const LLMNode = ({ id, data }) => {

  return (
    <div className='container'>
      {handle(id,"system",100/3).left()}
      {handle(id,"prompt",200/3).left()}
      {titleSet("LLM")}
      <div>
        <span>This is a LLM.</span>
      </div>
      {handle(id,"response").right()}
    </div>
  );
}
