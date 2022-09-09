// views/Settings/Settings.tsx

import React, { useEffect, useState } from "react";
import "./Settings.style.scss";

import Card from "../../components/Card/Card";
import Section from "../../components/Grid/Section";
import Row from "../../components/Grid/Row";
import Column from "../../components/Grid/Column";
import ClientService from "../../services/client.service";
import { skipWhile, take } from "rxjs";

const Settings = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    ClientService.getAll()
      .pipe(
        skipWhile(value => !value),
        take(1)
      )
      .subscribe((clients: any) => {
        setClients(clients);
        console.log(clients);
      })
  }, [])

  return (
    <div className={"Settings"} data-testid={"Settings"}>
      <Section>
        <Row>
          <Column>
            <h1>Settings</h1>
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

export default Settings;
