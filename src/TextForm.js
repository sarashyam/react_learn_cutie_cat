import React,{useState} from 'react'
// import PropTypes from 'prop-types'



export default function TextForm(props) {
    const [text,setText] = useState("Enter ur comment here");
return(
    <>
    <div class="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label htmlForfor="floatingTextarea">{text}</label>
    </div>
    <br/>
    <button type="button" class="btn btn-info">Convert to upper case</button>
    </>
)

}