// views/FAQ/FAQ.tsx

import React from "react";
import "./FAQ.style.scss";

import Card from "../../components/Card/Card";
import Section from "../../components/Grid/Section";
import Row from "../../components/Grid/Row";
import Column from "../../components/Grid/Column";

const FAQ = () => {

  return (
    <div className={"FAQ"} data-testid={"FAQ"}>
      <Section>
        <Row>
          <Column>
            <h1>FAQ</h1>
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

export default FAQ;
