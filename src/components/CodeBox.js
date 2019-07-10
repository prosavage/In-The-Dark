import React, {Component} from 'react';
import "./../styles/prism.css"
import {htmlSnippet, cssSnippet} from "./../Snippets"



class CodeBox extends Component {


    processTabs = (e) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === 9) {
            const textarea = this.textarearef;
            e.preventDefault();
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            // set textarea value to: text before caret + tab + text after caret
            textarea.value = (textarea.value.substring(0, start) + "\t" + textarea.value.substring(end));

            // put caret at right position again
            textarea.selectionStart = textarea.selectionEnd = start + 1;
        }
    };


    render() {
        return (
            <div className={"code-box-container"}>
                <h3>{this.props.language.toUpperCase()}</h3>
               <textarea ref={(ref) => {this.textarearef = ref}} id={this.props.language} onKeyDown={(e) => this.processTabs(e)} contentEditable={true}>{this.props.language === "html" ? htmlSnippet : cssSnippet}</textarea>
            </div>

        );
    }
}

export default CodeBox;