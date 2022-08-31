// views/Settings/Settings.tsx

import React from "react";
import "./Settings.style.scss";

import Card from "../../components/Card/Card";
import Section from "../../components/Grid/Section";
import Row from "../../components/Grid/Row";
import Column from "../../components/Grid/Column";

const Settings = () => {

  return (
    <div className={"Settings"} data-testid={"Settings"}>
      <Section>
        <Row>
          <Column>
            <h1>Settings</h1>
          </Column>
        </Row>
      </Section>

      <Section>
        <Row>
          <Column>
            <Card>
              {/* CONTENT GOES HERE */}
            </Card>
          </Column>
        </Row>
      </Section>
    </div>
  );
};

export default Settings;
