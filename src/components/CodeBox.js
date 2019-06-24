import React, {Component} from 'react';
import Prism from 'prismjs'
import "./../styles/prism.css"
import {htmlSnippet, cssSnippet} from "./../Snippets"

class CodeBox extends Component {

    componentDidMount() {
        Prism.highlightAll();
    }

    processInput(e) {
        console.log(e);
        var el = document.getElementById(this.props.language);
        var range = document.createRange();
        var sel = window.getSelection();
        Prism.highlightAll();
        window.document.s
    }

    render() {
        return (
            <div className={"code-box-container"}>
                <h3>{this.props.language.toUpperCase()}</h3>
               <pre id={this.props.language} onInput={(e) => this.processInput(e)} contentEditable={true}>{this.props.language === "html" ? htmlSnippet : cssSnippet}</pre>
            </div>

        );
    }
}

export default CodeBox;