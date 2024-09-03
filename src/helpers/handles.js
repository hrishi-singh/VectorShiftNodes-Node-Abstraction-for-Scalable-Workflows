import { Handle, Position } from 'reactflow';
export const handleNameChange = (e, func) => {
  func(e.target.value);
};
export const handleTypeChange = (e, func) => {
  func(e.target.value);
};

const labelSet = (label, val, setval) =>
  <label>
    {`${label}:`}
    <input
      type="text"
      value={val}
      onChange={e => handleNameChange(e, setval)}
    />
  </label>

const titleSet = (title) =>
  <div>
    <span>{`${title}`}</span>
  </div>

// const handleLeft = (id, label, classes = '') =>
//   <Handle
//     type="target"
//     position={Position.Left}
//     id={`${id}-${label}`}
//     className={classes}
//   />
// const handleRight = (id, label) =>
//   <Handle
//     type="source"
//     position={Position.Right}
//     id={`${id}-${label}`}
//   />

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
  labelSet,
  titleSet,
  handle
}