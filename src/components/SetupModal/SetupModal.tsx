import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Group,
  Stepper,
  PinInput,
  TextInput,
  NativeSelect,
  Center
} from "@mantine/core";

import Preferences from "../Preferences";

import EditorPrefs from "../../App"

/**
 * TODO List:
 *
 * Account validation
 *  - Make sure PIN is filled out
 *  - Make sure username matches specs (?)
 *  - If server says account exists and pin isn't valid, show an error.
 * Get the list of languages available, and use that.
 *  - Manually listing every language is dumb.
 */

export default function SetupModal(props: any) {
  const [opened, { open, close }] = useDisclosure(true);

  const [step, setStep] = useState(0);

  const nextStep = () =>
    setStep((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setStep((current) => (current > 0 ? current - 1 : current));

  return (
    <Modal opened={opened} onClose={() => { }} title="Setup" withCloseButton={false} centered className="no-hscroll">
      <Stepper active={step} onStepClick={setStep} allowNextStepsSelect={false} orientation="vertical">
        <Stepper.Step
          label="Create Account"
          description="This will probably not be used again."
        >
          <b>Username</b>
          <br />
          <TextInput />
          <br />
          <b>Pin</b>
          <br />
          <PinInput placeholder="" type={/^[0-9]+/} />
        </Stepper.Step>
        <Stepper.Step
          label="Preferences"
          description="Select your preferences."
        >
          <Preferences editorPrefs={props.editorPrefs} setEditorPrefs={props.setEditorPrefs}/>
        </Stepper.Step>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button
          onClick={step == 2 ? close : nextStep}
          children={step == 2 ? "Close" : "Next"}
        />
      </Group>
    </Modal>
  );
}
