// views/Profile/Profile.tsx

import React from "react";
import "./Profile.style.scss";

import Card from "../../components/Card/Card";
import Section from "../../components/Grid/Section";
import Row from "../../components/Grid/Row";
import Column from "../../components/Grid/Column";

const Profile = () => {

  return (
    <div className={"Profile"} data-testid={"Profile"}>
      <Section>
        <Row>
          <Column>
            <h1>Profile</h1>
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

export default Profile;
