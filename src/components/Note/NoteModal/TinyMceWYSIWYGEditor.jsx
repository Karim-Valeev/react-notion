import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { API_KEY } from '../../../constants/tinyMceWYSIWYGEditorConstants';

function TinyMceWYSIWYGEditor({ handleEditorChange }) {
    const editorRef = useRef(null); // Т.к. интеграция со сторонними DOM-библиотеками.
    return (
        <>
            <Editor
                apiKey={API_KEY}
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue=""
                init={{
                    placeholder: 'Enter text here',
                    branding: false,
                    min_height: 200,
                    toolbar:
                        'undo redo | formatselect | ' +
                        'bold italic | alignleft aligncenter ' +
                        'alignright alignjustify',
                }}
                onEditorChange={() => {
                    handleEditorChange(editorRef.current.getContent());
                }}
            />
        </>
    );
}

export default TinyMceWYSIWYGEditor;
