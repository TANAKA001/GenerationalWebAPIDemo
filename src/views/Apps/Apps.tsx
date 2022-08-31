// views/Apps/Apps.tsx

import React from "react";
import "./Apps.style.scss";

import Card from "../../components/Card/Card";
import Section from "../../components/Grid/Section";
import Row from "../../components/Grid/Row";
import Column from "../../components/Grid/Column";
import CardBody from "../../components/Card/CardBody";
import CardImage from "../../components/Card/CardImage";
import {Link} from "react-router-dom";

const Apps = () => {
  return (
    <div className={"Apps"} data-testid={"Apps"}>
      <Section>
        <Row>
          <Column>
            <h1>Apps</h1>
          </Column>
        </Row>
      </Section>

      <Section>
        <Row>
          <Column md={"6"} lg={"4"} xl={"3"}>
            <Card>
              <CardImage image={"/images/fpo/steve-zissou.jpg"} />
              <CardBody>
                <h3>New Client Entry</h3>
                <p>Enter new clients into the system.</p>
                <Link to={"/apps/new-client-entry"}>New Client Entry</Link>
              </CardBody>
            </Card>
          </Column>

          <Column md={"6"} lg={"4"} xl={"3"}>
            <Card>
              <CardImage image={"/images/fpo/steve-zissou.jpg"} />
              <CardBody>
                <h3>Client Management</h3>
                <p>Manage existing clients.</p>
              </CardBody>
            </Card>
          </Column>

          <Column md={"6"} lg={"4"} xl={"3"}>
            <Card>
              <CardImage image={"/images/fpo/steve-zissou.jpg"} />
              <CardBody>
                <h3>Client Approval</h3>
                <p>Manage clients approvals.</p>
              </CardBody>
            </Card>
          </Column>

          <Column md={"6"} lg={"4"} xl={"3"}>
            <Card>
              <CardImage image={"/images/fpo/steve-zissou.jpg"} />
              <CardBody>
                <h3>Module Management</h3>
                <p>Modules</p>
              </CardBody>
            </Card>
          </Column>
        </Row>
      </Section>
    </div>
  );
};

export default Apps;
