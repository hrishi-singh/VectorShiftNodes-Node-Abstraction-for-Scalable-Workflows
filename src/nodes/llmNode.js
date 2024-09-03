// llmNode.js

import { SpannedTextDisplay,NodeConnectorHandles } from '../helpers/handles';

export const LLMNode = ({ id, data }) => {

  return (
    <div className='container'>
      
      {SpannedTextDisplay("LLM")}
      <div>
        <span>This is a LLM.</span>
      </div>
      {NodeConnectorHandles(id,"system",100/3).left()}
      {NodeConnectorHandles(id,"prompt",200/3).left()}
      {NodeConnectorHandles(id,"response").right()}
    </div>
  );
}
