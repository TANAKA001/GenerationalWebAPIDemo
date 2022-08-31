// views/NewClientEntryEdit/NewClientEntryEdit.tsx

import React from "react";
import "./NewClientEntryEdit.style.scss";

import Card from "../../../components/Card/Card";
import Section from "../../../components/Grid/Section";
import Row from "../../../components/Grid/Row";
import Column from "../../../components/Grid/Column";
import {useParams} from "react-router-dom";
import Panel from "../../../components/Panel";

const NewClientEntryEdit = () => {
  const params = useParams();

  return (
    <div className={"NewClientEntryEdit"} data-testid={"NewClientEntryEdit"}>
      <Section>
        <Row>
          <Column>
            <h1>Edit New Client Entry - Client Number: {params.id}</h1>
          </Column>
        </Row>
      </Section>

      <Section>
        <Row>
          <Column>
            <Panel>
              Form Here
            </Panel>
          </Column>
        </Row>
      </Section>
    </div>
  );
};

export default NewClientEntryEdit;
