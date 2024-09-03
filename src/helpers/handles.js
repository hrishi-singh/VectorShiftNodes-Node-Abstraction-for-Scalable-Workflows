import { Handle, Position } from 'reactflow';
import { useState } from 'react';
// const [id,setId] = useState('')
// const getPlaceHolderDetails =(id)=>{
//   setId(id);
// }

// export const handleNameChange = (e, func) => {
//   func(e.target.value);
// };
// export const handleTypeChange = (e, func) => {
//   func(e.target.value);
// };
export const handleChange = (e, func) => {
  func(e.target.value);
};

// const LabeledNodeInput = (label, placeHolderValue) =>{
//   const [currName, setCurrName] = useState(placeHolderValue);
//   return(
//     <label>
//     {`${label}:`}
//     <input
//       type="text"
//       value={currName}
//       onChange={e => handleNameChange(e, setCurrName)}
//     />
//   </label>
//   )
// }

const LabeledNode =(label,placeHolder)=>{
  const [curr, setCurr] = useState(placeHolder);
  return{
    input:()=>
      <label>
    {`${label}:`}
    <input
      type="text"
      value={curr}
      onChange={e => handleChange(e, setCurr)}
    />
  </label>,
  selection:(options)=>
    <label>
  {`${label}:`}
 <select value={curr} onChange={e => { handleChange(e, setCurr) }}>
   {
     options.map((option)=>{
       return <option value={`${option}`} key={option}>{option}</option>
       
     })
   }
 </select>
 </label>
  }

  
}
  

const titleSet = (title) =>
  <div>
    <span>{`${title}`}</span>
  </div>

// const typeSet=(label,initialPlaceHolderType,options)=>
// {
//   const [inputType, setInputType] = useState(data.inputType || 'Text');
//   return(
//     <label>
//     {`${label}:`}
//    <select value={val} onChange={e => { handleTypeChange(e, setval) }}>
//      {
//        options.map((option)=>{
//          return <option value={`${option}`} key={option}>{option}</option>
         
//        })
//      }
//    </select>
//    </label>
//   )
// }


const handle = (id, label, connectorPos=50) => {
  const handleId = `${id}-${label}`;
  return {
    left: () =>
      <Handle
        type="target"
        position={Position.Left}
        id={handleId}
        style={{top: `${connectorPos}%`}}
        
      />,
    right: () =>
      <Handle
        type="source"
        position={Position.Right}
        id={handleId}
        style={{top: `${connectorPos}%`}}
      />

  }
}
export {
  // handleLeft,
  // handleRight,
  LabeledNode,
  titleSet,
  handle
}