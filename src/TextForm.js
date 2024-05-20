import React,{useState} from 'react'
// import PropTypes from 'prop-types'


// This is the area where we define the function for the buttons
export default function TextForm(props) {
    
    const hadleUpClick =(event)=>{
        console.log("handleUp  been clicked");
        // setText("I've been changed by settext");
        let t = text.toUpperCase();
        setText(t);
    }
    const handleOnChange =(event)=>{
        console.log("handleOnChange  been clicked");
        setText(event.target.value);
    }
    const hadlDownClick =(event)=>{
        console.log("handleDown been clicked");
        let t = text.toLowerCase();
        setText(t);
    }
    const handle_rm_space =(event)=>{
        console.log("handle_rm_space  been clicked");
        let t = text.replace(/(?!\\n) +/g, ' ');
        setText(t);
    }
    const handle_replace_billa =(event)=>{
        console.log("handle_replace_billa  been clicked");
        let t = text.replace("Billi","Billa");
        setText(t);
    }

    const [text,setText] = useState("");
    // 'text' cannot be assigned a value directly , instead we have to use 'setText' for it
    // text = " This is the new text"; //This is the wrong way
    // setText("This is the new Text"); // This is the correct way of assigning a value


return(
    <>
    <div className="container">
        <h2>Enter your text here </h2>
        <div className="form-floating">
            <textarea className="form-control" onChange={handleOnChange}  id="floatingTextarea" value={text} placeholder='Enter Your Comment here'></textarea>
            {/* <label htmlFor="floatingTextarea">Enter text here</label> */}
        </div>
        <br/>
        <button type="button" className="btn btn-info" onClick={hadleUpClick}>Convert to upper case</button>
        <button type="button" className="btn btn-success" onClick={hadlDownClick}>Convert to lower case</button>
        <button type="button" className="btn btn-success" onClick={handle_rm_space}>Remove extra white spaces</button>
        <button type="button" className="btn btn-success" onClick={handle_replace_billa}>Make billi to billa</button>
    </div>
    
    <div className="container my-5">
        
        <h4> Words and Character typed</h4>
        <p> No of words : - {text.split(" ").length}</p>
        <p>No of Characters: - {text.length}</p>
        <p>Time to read a single character = 0.0008</p>
        <p>Time taken to read this portion = {text.length * 0.0008}</p>
        <h5>The text you typed</h5>
        <p>{text}</p>


    </div>
    </>
)

}
