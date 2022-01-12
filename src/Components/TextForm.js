import React,{Component} from 'react'

class TextForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            text:'vaibhav karnwal'
        }
    }

    handleUpClick=()=>{
        let up = this.state.text.toUpperCase();
        this.setState({
            text:up
        });
    }
    handleLoClick=()=>{
        let lo = this.state.text.toLowerCase();
        this.setState({
            text:lo
        });
    }

    changeInText=(event)=>{
        this.setState({
            text: event.target.value
        });
    }
   
    render(){
        return (
            <>
                <div className="container my-3">
                    <label htmlFor="formGroupExampleInput">{this.props.heading}</label>
                    <input type="text" className="form-control" onChange={this.changeInText.bind(this)} id="formGroupExampleInput"/>
                </div>
                <button className='btn btn-primary mx-3' onClick={this.handleUpClick}>change to uppercase</button>
                <button className='btn btn-primary mx-3' onClick={this.handleLoClick}>change to lowercase</button>
                <div className='container'>
                    <p>{this.state.text.split(" ").length} words and {this.state.text.length} characters</p>
                </div>
            </>
        )
    }
}

export default TextForm;