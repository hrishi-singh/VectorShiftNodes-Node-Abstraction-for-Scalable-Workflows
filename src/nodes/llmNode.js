// llmNode.js

import { titleSet,handle } from '../helpers/handles';

export const LLMNode = ({ id, data }) => {

  return (
    <div className='container'>
      
      {titleSet("LLM")}
      <div>
        <span>This is a LLM.</span>
      </div>
      {handle(id,"system",100/3).left()}
      {handle(id,"prompt",200/3).left()}
      {handle(id,"response").right()}
    </div>
  );
}
