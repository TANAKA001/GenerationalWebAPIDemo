// views/Profile/Profile.tsx

import React, {useState} from "react";
import "./Profile.style.scss";

import Card from "../../components/Card/Card";
import Section from "../../components/Grid/Section";
import Row from "../../components/Grid/Row";
import Column from "../../components/Grid/Column";
import InputText from "../../components/InputText/InputText";
import ProfilePicture from "../../components/ProfilePicture";
import {SampleUser} from "../../constants/SampleData";

const Profile = () => {
  const [user, setUser] = useState(SampleUser);

  return (
    <div className={"Profile"} data-testid={"Profile"}>
      <Section>
        <Row>
          <Column>
            <h1>Profile Settings</h1>
          </Column>
        </Row>
      </Section>

      <Section justify={"center"}>
        <Row>
          <Column>
            <div>
              <ProfilePicture size={"xl"} image={"/images/fpo/steve-zissou.jpg"} />
            </div>
            <InputText label={"Display Name"} value={user.username || ""} onValueChange={() => null} />
            <InputText type={"password"} label={"Change Password"} value={"abcdefghijk"} onValueChange={() => null} />
          </Column>
        </Row>
      </Section>
    </div>
  );
};

export default Profile;
