import { Group, Tabs, Textarea } from "@mantine/core";

import "./style.css";

import { SetupModal } from "./components/SetupModal";
import React from "react";
import CodeEditor from "./components/CodeEditor";

function Test(props: any) {
  return <Textarea label={props.text}></Textarea>;
}

class EditorPrefs {
  language: string = "C";
  lineNumbers: string = "on"; // on, off, relative
  editorTheme: string = "vs-dark"; // TODO: get more themes
  fontSize: number = 12;
  showInvisibleChars: boolean = false;
  tabSize: number = 4;
}

export default function App() {

  const [editorContent, setEditorContent] = React.useState("");

  const [editorPrefs, setEditorPrefs] = React.useState(new EditorPrefs());

  return (
    <div className="App">
      <SetupModal editorPrefs={editorPrefs} setEditorPrefs={setEditorPrefs}/>

      <Group justify="center" grow className="full-height" gap="xs">
        <CodeEditor editorPrefs={editorPrefs} />
        <Tabs defaultValue="Preview" className="full-height">
          <Tabs.List>
            <Tabs.Tab value="Preview">
              Preview
            </Tabs.Tab>
            <Tabs.Tab value="Documentation">
              Documentation
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Preview">
            Preview
          </Tabs.Panel>
          <Tabs.Panel value="Documentation">
            Docs
          </Tabs.Panel>
        </Tabs>
      </Group>

    </div>
  );
}
