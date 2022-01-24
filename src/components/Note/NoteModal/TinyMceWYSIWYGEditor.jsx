import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {API_KEY} from "../../../constants/tinyMceWYSIWYGEditorConstants";

function TinyMceWYSIWYGEditor({handleEditorChange}) {
    const editorRef = useRef(null);  // Т.к. интеграция со сторонними DOM-библиотеками.
    return (
        <>
            <Editor
                apiKey={API_KEY}
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue=""
                init={{
                    placeholder: 'Enter text here',
                    branding: false,
                    //   height: 500,
                    //   menubar: false,
                    //   plugins: [
                    //     'advlist autolink lists link image charmap print preview anchor',
                    //     'searchreplace visualblocks code fullscreen',
                    //     'insertdatetime media table paste code help wordcount'
                    //   ],
                    //   toolbar: 'undo redo | formatselect | ' +
                    //   'bold italic backcolor | alignleft aligncenter ' +
                    //   'alignright alignjustify | bullist numlist outdent indent | ' +
                    //   'removeformat | help',
                    //   content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                onEditorChange={()=>{handleEditorChange(editorRef.current.getContent())}}
            />
        </>
    );
}

export default TinyMceWYSIWYGEditor;
