// views/Search/Search.tsx

import React from "react";
import "./Search.style.scss";

import Card from "../../components/Card/Card";
import Section from "../../components/Grid/Section";
import Row from "../../components/Grid/Row";
import Column from "../../components/Grid/Column";

const Search = () => {

  return (
    <div className={"Search"} data-testid={"Search"}>
      <Section>
        <Row>
          <Column>
            <h1>Search</h1>
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

export default Search;
