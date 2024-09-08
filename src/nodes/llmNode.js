// llmNode.js

import { SpannedTextDisplay,NodeConnectorHandles } from '../helpers/handles';

export const LLMNode = ({ id, data }) => {
  return (
    <div className='container'>
      {SpannedTextDisplay("LLM")}
      {SpannedTextDisplay("This is a LLM.")}
      {NodeConnectorHandles(id,'system','prompt').left()}
      {NodeConnectorHandles(id,'response').right()}
    </div>
  );
}
