// views/Reports/Reports.tsx

import React from "react";
import "./Reports.style.scss";

import Card from "../../components/Card/Card";
import Section from "../../components/Grid/Section";
import Row from "../../components/Grid/Row";
import Column from "../../components/Grid/Column";
import DashboardLayout from "../../layouts/Dashboard";
import {Link} from "react-router-dom";
import CardBody from "../../components/Card/CardBody";

const Reports = () => {
  return (
    <div className={"Reports"} data-testid={"Reports"}>
      <Section spacing={"xs"}>
        <Row>
          <Column>
            <h1>Reports</h1>
          </Column>
        </Row>
      </Section>

      <Section>
        <Row>
          <Column>
            <Card>
              <CardBody>
                <Link to={"/reports/buyers-by-milestone"}>Buyers by Milestone</Link>
              </CardBody>
            </Card>
          </Column>
        </Row>
      </Section>
    </div>
  );
};

export default Reports;
