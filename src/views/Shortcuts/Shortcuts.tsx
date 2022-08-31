// views/Shortcuts/Shortcuts.tsx

import React from "react";
import "./Shortcuts.style.scss";

import Card from "../../components/Card/Card";
import Section from "../../components/Grid/Section";
import Row from "../../components/Grid/Row";
import Column from "../../components/Grid/Column";

const Shortcuts = () => {

  return (
    <div className={"Shortcuts"} data-testid={"Shortcuts"}>
      <Section>
        <Row>
          <Column>
            <h1>Shortcuts</h1>
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

export default Shortcuts;
