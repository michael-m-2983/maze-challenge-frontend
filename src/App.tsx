import { Grid, Textarea } from "@mantine/core";

import "./style.css";

import SetupModal from "./components/SetupModal";

function Test(props: any) {
  return <Textarea label={props.text}></Textarea>;
}

export default function App() {
  return (
    <div className="App">
      <SetupModal />

      <Grid bg="red">
        <Grid.Col span={6}>
          <Test text="Editor" />
        </Grid.Col>
        <Grid.Col span={6}>
          <Test text="Maze" />
        </Grid.Col>
      </Grid>
    </div>
  );
}
