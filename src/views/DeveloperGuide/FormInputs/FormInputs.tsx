import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import Section from "../../../components/Grid/Section";
import InputCheckbox from "../../../components/InputCheckbox/InputCheckbox";
import InputText from "../../../components/InputText/InputText";
import InputTextarea from "../../../components/InputTextarea";
import InputToggle from "../../../components/InputToggle";
import InputRadioGroup from "../../../components/InputRadioGroup";
import Breadcrumbs from "../../../components/Breadcrumbs";
import BackButton from "../../../components/BackButton";
import DeveloperGuideLayout from "../../../layouts/DeveloperGuide";
import Row from "../../../components/Grid/Row";
import Column from "../../../components/Grid/Column";
import InputSelect from "../../../components/InputSelect";
import CardBody from "../../../components/Card/CardBody";
import CardHead from "../../../components/Card/CardHead";
import DebugOutput from "../../../components/DebugOutput";
import InputAutocomplete from "../../../components/InputAutocomplete";
import InputRange from "../../../components/InputRange";
import InputFile from "../../../components/InputFile";

const FormInputs = () => {
  const [isCheckedA, setIsCheckedA] = useState(false);
  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedA(e.target.checked);
  };

  const [isCheckedB, setIsCheckedB] = useState(false);
  const handleChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedB(e.target.checked);
  };

  const [toggleA, setToggleA] = useState(true);
  const [radioValueA, setRadioValueA] = useState("#ED1459");
  const [inputTextValue, setInputTextValue] = useState<string | number>("");
  const [inputTextarea, setInputTextarea] = useState("");
  const [inputAutocompleteValue, setInputAutocompleteValue] = useState<string | number>("#FFC014");
  const [selectA, setSelectA] = useState("#ED1459");
  const [inputRangeValue, setInputRangeValue] = useState(50);
  const [inputFileValue, setInputFileValue] = useState("");

  const SampleOptions = [
    { label: "Red", value: "#ED1459" },
    { label: "Orange", value: "#FF9519" },
    { label: "Yellow", value: "#FFC014" },
    { label: "Green", value: "#00AC4E" },
    { label: "Blue", value: "#0083CA" },
    { label: "Indigo", value: "#885AF8" },
    { label: "Violet", value: "#C7158D" },
  ];

  return (
    <DeveloperGuideLayout>
      <div className='form-inputs-page'>
        <Section>
          <Row>
            <Column>
              <h1>Form Inputs</h1>
              <BackButton />
              <Breadcrumbs
                crumbs={[
                  { name: "home", url: "/" },
                  { name: "Developer Guide", url: "/" },
                  { name: "Components", url: "/dev-guide/form-inputs" },
                ]}
              />
            </Column>
          </Row>
        </Section>

        <Section>
          {/* FILE UPLOAD */}
          <Card>
            <CardHead heading={`<InputFile />`} />
            <CardBody>
              <DebugOutput>Input File: </DebugOutput>
              <InputFile
                id={"input-file-a"}
                label={"Input File A"}
                value={inputFileValue}
                onValueChange={setInputFileValue}
              />
            </CardBody>
          </Card>

          {/* AUTOCOMPLETE */}
          <Card>
            <CardHead heading={`<InputAutocomplete />`} />
            <CardBody>
              <DebugOutput>Input Autocomplete: {inputAutocompleteValue}</DebugOutput>
              <InputAutocomplete
                id={"input-text-a"}
                label={"Input Autocomplete"}
                moreInfo={"Here is some more info about this input"}
                placeholder={"Input Placeholder"}
                footnote={"this is a footnote"}
                theme={"default"}
                invalid={false}
                invalidMessage={"This input is required"}
                options={SampleOptions}
                value={inputAutocompleteValue}
                onValueChange={setInputAutocompleteValue}
              />
            </CardBody>
          </Card>

          {/* RANGE */}
          <Card>
            <CardHead heading={`<InputRange />`} />
            <CardBody>
              <DebugOutput>Input Range: </DebugOutput>
              <InputRange
                min={0}
                max={100}
                value={inputRangeValue}
                // onValueChange={setInputRangeValue}
              />
            </CardBody>
          </Card>

          {/* TEXT */}
          <Card>
            <CardHead heading={`<InputText />`} />
            <CardBody>
              <DebugOutput>Input Text Value: {inputTextValue}</DebugOutput>
              <InputText
                id={"input-text-a"}
                type={"text"}
                label={"Input Text A"}
                moreInfo={"Here is some more info about this input"}
                placeholder={"Input Placeholder"}
                footnote={"this is a footnote"}
                theme={"gray"}
                prefixIcon={"search"}
                invalid={true}
                invalidMessage={"This input is required"}
                value={inputTextValue}
                onValueChange={setInputTextValue}
              />
            </CardBody>
          </Card>

          {/* SELECT */}
          <Card>
            <CardHead heading={`<InputSelect />`} />
            <CardBody>
              <DebugOutput>Selected: {selectA}</DebugOutput>
              <InputSelect label={"Pick a Color"} value={selectA} onValueChange={setSelectA} options={SampleOptions} />
            </CardBody>
          </Card>

          {/* RADIO GROUP */}
          <Card>
            <CardHead heading={`<InputRadioGroup />`} />
            <CardBody>
              <DebugOutput>Selected Radio: {radioValueA}</DebugOutput>
              <InputRadioGroup
                label={"Example Radio Group"}
                options={SampleOptions}
                groupName={"example-radio-group"}
                value={radioValueA}
                onRadioChange={setRadioValueA}
              />
            </CardBody>
          </Card>

          {/* TOGGLE */}
          <Card>
            <CardHead heading={`<InputToggle />`} />
            <CardBody>
              <DebugOutput>Toggle Checked: {`${toggleA}`}</DebugOutput>
              <InputToggle id={"input-toggle-a"} label={"Toggle A"} isChecked={toggleA} onValueChange={setToggleA} />
            </CardBody>
          </Card>

          {/* TEXTAREA */}
          <Card>
            <CardHead heading={`<InputTextarea />`} />
            <CardBody>
              <DebugOutput>Textarea Value: {inputTextarea}</DebugOutput>
              <InputTextarea
                id={"input-textarea-a"}
                label={"Input Textarea A"}
                placeholder={"Input Placeholder"}
                footnote={"this is a footnote"}
                invalid={true}
                invalidMessage={"This input is required"}
                value={inputTextarea}
                onValueChange={setInputTextarea}
              />
            </CardBody>
          </Card>

          {/* CHECKBOX */}
          <Card>
            <CardHead heading={`<InputCheckbox />`} />
            <CardBody>
              <DebugOutput>Checkbox A Value: {`${isCheckedA}`}</DebugOutput>

              <InputCheckbox
                id={"checkbox-a"}
                label={"Checkbox A"}
                isChecked={isCheckedA}
                handleChange={handleChangeA}
              />
              <InputCheckbox
                id={"checkbox-b"}
                label={"Checkbox B"}
                isChecked={isCheckedB}
                handleChange={handleChangeB}
              />
            </CardBody>
          </Card>
        </Section>
      </div>
    </DeveloperGuideLayout>
  );
};

export default FormInputs;
