// outputNode.js

import { useState } from 'react';
import { LabeledNode, titleSet, handle} from '../helpers/handles';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');
  return (
    <div className='container'>
     {handle(id,"value").left()}
      {titleSet("Output")}
      <div>
        {/* {LabelSet("Name",currName,setCurrName)} */}

        {/* {typeSet("Type",outputType,setOutputType,["Text","Image"])} */}
      </div>
    </div>
  );
}
