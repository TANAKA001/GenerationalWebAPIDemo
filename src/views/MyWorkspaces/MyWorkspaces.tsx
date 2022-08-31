// views/MyWorkspaces/MyWorkspaces.tsx

import React from "react";
import "./MyWorkspaces.style.scss";

import Card from "../../components/Card/Card";
import Section from "../../components/Grid/Section";
import Row from "../../components/Grid/Row";
import Column from "../../components/Grid/Column";

const MyWorkspaces = () => {

  return (
    <div className={"MyWorkspaces"} data-testid={"MyWorkspaces"}>
      <Section>
        <Row>
          <Column>
            <h1>MyWorkspaces</h1>
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

export default MyWorkspaces;
