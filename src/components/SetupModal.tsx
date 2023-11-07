import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Group,
  Stepper,
  PinInput,
  TextInput,
  NativeSelect
} from "@mantine/core";

interface SetupModalProps {}

/**
 * TODO List:
 *
 * Account validation
 *  - Make sure PIN is filled out
 *  - Make sure username matches specs (?)
 *  - If server says account exists and pin isn't valid, show an error.
 * Actually Store Preferences
 *  - Local storage?
 * Get the list of languages available, and use that.
 *  - Manually listing every language is dumb.
 * Use ComboBox instead of NativeSelect
 *  - Add language icons
 */

export default function SetupModal(props: SetupModalProps) {
  const [opened, { open, close }] = useDisclosure(true);

  const [step, setStep] = useState(0);

  const nextStep = () =>
    setStep((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setStep((current) => (current > 0 ? current - 1 : current));

  return (
    <Modal opened={opened} onClose={close} title="Setup">
      <Stepper active={step} onStepClick={setStep}>
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
          <b>Select Language</b>
          <br />
          <NativeSelect
            data={[
              "Python 3",
              "JavaScript",
              "Java",
              "C",
              "C#",
              "C++",
              "Ruby",
              "Haskell",
              "etc, etc, etc"
            ]}
          />
        </Stepper.Step>
      </Stepper>

      <Group justify="center" mt="xl">
        {/* <Button variant="default" onClick={prevStep}>
          Back
        </Button> */}
        <Button
          onClick={step == 2 ? close : nextStep}
          children={step == 2 ? "Close" : "Next"}
        />
      </Group>
    </Modal>
  );
}
