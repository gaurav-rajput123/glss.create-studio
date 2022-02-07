import React , {useState} from "react" ;
import '../App.css';
import TextEditor from './TextEditor';
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 const parse = require('html-react-parser')
const config = {
  buttons: ["bold" , "italic" , "underline" , "center", "left"]
}

function TextDescription() {
  const [value, setValue] = useState("")


  return (
    <div style={{ padding:'1%'}}>
      <div>
        <div style={{textAlign:"center"}}>
           <h3>Description</h3>
           
        </div>
         <TextEditor setValue={setValue} config={config} />
         {/* <br/> */}
      </div>
      
    </div>
  );
}

export default TextDescription;
