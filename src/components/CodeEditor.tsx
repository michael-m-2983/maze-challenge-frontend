import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

export default function CodeEditor(props: any) {
    return <Editor
        height="100%"
        options={{
            fontSize: props.editorPrefs.fontSize,

            minimap: {
                enabled: false
            },

            theme: props.editorPrefs.editorTheme,
            language: props.editorPrefs.language
        }}
        defaultLanguage='c'
        defaultValue='#include <stdio.h>\n\nint main(int argc, char **argv) {\n\t\n}'
    />;
}