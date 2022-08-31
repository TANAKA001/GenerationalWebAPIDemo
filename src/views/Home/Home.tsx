import React from "react";

import Card from "../../components/Card/Card";
import Section from "../../components/Grid/Section";
import SidebarMenuItem from "../../components/Sidebar/SidebarMenuItem";
import Row from "../../components/Grid/Row";
import Column from "../../components/Grid/Column";
import CardBody from "../../components/Card/CardBody";

const Home = () => {
  return (
    <div className='home'>
      <Section>
        <h1>Home</h1>
      </Section>

      <Section>
        <Row>
          <Column md={"4"}>
            <Card>
              <CardBody>
                <SidebarMenuItem link={"/overview"} label={"App"} icon={"layout"} />
                <SidebarMenuItem link={"/dev-guide/typography"} label={"Developer Guide"} icon={"circle-empty"} />
              </CardBody>
            </Card>
          </Column>
        </Row>
      </Section>
    </div>
  );
};

export default Home;
