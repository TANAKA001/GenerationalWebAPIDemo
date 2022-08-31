// views/TemplateName/TemplateName.tsx

import React from "react";
import "./TemplateName.style.scss";

import Card from "../../components/Card/Card";
import Section from "../../components/Grid/Section";
import Row from "../../components/Grid/Row";
import Column from "../../components/Grid/Column";

const TemplateName = () => {

  return (
    <div className={"TemplateName"} data-testid={"TemplateName"}>
      <Section>
        <Row>
          <Column>
            <h1>TemplateName</h1>
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

export default TemplateName;
