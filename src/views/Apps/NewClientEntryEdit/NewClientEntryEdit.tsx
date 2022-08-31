// views/Apps/NewClientEntryEdit/NewClientEntryEdit.tsx

import React, { useState } from "react";
import "./NewClientEntryEdit.style.scss";

import Card from "../../../components/Card/Card";
import Section from "../../../components/Grid/Section";
import Row from "../../../components/Grid/Row";
import Column from "../../../components/Grid/Column";
import { useParams } from "react-router-dom";
import Panel from "../../../components/Panel";
import Breadcrumbs from "../../../components/Breadcrumbs";
import BackButton from "../../../components/BackButton";
import Tabbar from "../../../components/Tabbar";
import InputText from "../../../components/InputText/InputText";
import InputTextarea from "../../../components/InputTextarea";
import InputSelect from "../../../components/InputSelect";
import CardBody from "../../../components/Card/CardBody";
import ButtonGroup from "../../../components/ButtonGroup";
import Button from "../../../components/Button";

const NewClientEntryEdit = () => {
  const params = useParams();

  const [selectedCompany, setSelectedCompany] = useState("company-a");

  return (
    <div className={"NewClientEntryEdit"} data-testid={"NewClientEntryEdit"}>
      <Section>
        <Row>
          <Column>
            <div className={"d-flex"}>
              <BackButton />
              <Breadcrumbs
                crumbs={[
                  { name: "Home", url: "/" },
                  { name: "Apps", url: "/apps" },
                  { name: "New Client Entry", url: "/apps/new-client-entry" },
                  { name: `client ${params.id}`, url: "" },
                ]}
              />
            </div>
          </Column>
        </Row>
      </Section>

      <Section>
        <Row>
          <Column>
            <Tabbar
              selected={selectedCompany}
              onTabChange={setSelectedCompany}
              tabs={[
                { label: "Company A", key: "company-a" },
                { label: "Company B", key: "company-b" },
                { label: "Company C", key: "company-c" },
              ]}
            />
            <Panel theme={"white"}>
              <h2>Account | Client Information</h2>
              <p>Basic account information</p>

              <Row>
                <Column sm={"4"}>
                  <InputText
                    label={"Company Name"}
                    placeholder={"Company Name"}
                    value={""}
                    onValueChange={() => null}
                  />
                </Column>
                <Column sm={"4"}>
                  <InputText label={"DBA Name"} placeholder={"DBA Name"} value={""} onValueChange={() => null} />
                </Column>
                <Column sm={"4"}>
                  <InputText
                    type={"url"}
                    label={"Client Website URL"}
                    placeholder={"https://"}
                    value={""}
                    onValueChange={() => null}
                  />
                </Column>
              </Row>

              <Row>
                <Column>
                  <InputTextarea label={"Client Business Description"} value={""} onValueChange={() => null} />
                </Column>
              </Row>

              <Row>
                <Column sm={"3"}>
                  <InputText
                    type={"number"}
                    label={"Number of Employees"}
                    placeholder={"#"}
                    value={""}
                    onValueChange={() => null}
                  />
                </Column>
                <Column sm={"3"}>
                  <InputText
                    type={"number"}
                    label={"Annual Revenue"}
                    placeholder={"#"}
                    value={""}
                    onValueChange={() => null}
                  />
                </Column>
                <Column sm={"3"}>
                  <InputText
                    type={"number"}
                    label={"Primary NAICS"}
                    placeholder={"#"}
                    value={""}
                    onValueChange={() => null}
                  />
                </Column>
                <Column sm={"3"}>
                  <InputText
                    type={"number"}
                    label={"Primary SIC"}
                    placeholder={"#"}
                    value={""}
                    onValueChange={() => null}
                  />
                </Column>
              </Row>

              <Row>
                <Column sm={"3"}>
                  <InputSelect
                    label={"SBA"}
                    allowNull={false}
                    options={[
                      { label: "Option A", value: "a" },
                      { label: "Option B", value: "b" },
                      { label: "Option C", value: "c" },
                    ]}
                    value={""}
                    onValueChange={() => null}
                  />
                </Column>
                <Column sm={"3"}>
                  <InputSelect
                    label={"Managing Director"}
                    allowNull={false}
                    options={[
                      { label: "Option A", value: "a" },
                      { label: "Option B", value: "b" },
                      { label: "Option C", value: "c" },
                    ]}
                    value={""}
                    onValueChange={() => null}
                  />
                </Column>
                <Column sm={"3"}>
                  <InputSelect
                    label={"Conference Leader"}
                    allowNull={false}
                    options={[
                      { label: "Option A", value: "a" },
                      { label: "Option B", value: "b" },
                      { label: "Option C", value: "c" },
                    ]}
                    value={""}
                    onValueChange={() => null}
                  />
                </Column>
                <Column sm={"3"}>
                  <InputText
                    type={"date"}
                    label={"Sales Report Date"}
                    value={""}
                    onValueChange={() => null}
                  />
                </Column>
              </Row>

              <Row>
                <ButtonGroup align={"right"}>
                  <Button theme={"primary"}>Save</Button>
                  <Button theme={"primary-outline"}>Cancel</Button>
                  <Button theme={"primary-outline"}>Reset</Button>
                </ButtonGroup>
              </Row>
            </Panel>
          </Column>
        </Row>
      </Section>
    </div>
  );
};

export default NewClientEntryEdit;
