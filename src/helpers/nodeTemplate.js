import { useState } from 'react';
const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
const [inputType, setInputType] = useState(data.inputType || 'Text');
