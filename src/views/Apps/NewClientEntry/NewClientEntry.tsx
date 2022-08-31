// views/NewClientEntry/NewClientEntry.tsx

import React, { useState } from "react";
import "./NewClientEntry.style.scss";

import Section from "../../../components/Grid/Section";
import Row from "../../../components/Grid/Row";
import Column from "../../../components/Grid/Column";
import InputText from "../../../components/InputText/InputText";
import Icon from "../../../components/Icon";
import Button from "../../../components/Button";
import Panel from "../../../components/Panel";
import DataGrid from "../../../components/DataGrid";
import Paginator from "../../../components/Paginator";
import { SampleData } from "../../../constants/SampleData";
import { sortByKey } from "../../../functions";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Link } from "react-router-dom";

const NewClientEntry = () => {
  // New Client Data Grid
  const sampleData = SampleData.map((company ,index) => {
    return {
      client: company.clients.name,
      number: company.clients.number,
      company: company.companies.companyName,
      dba: company.companies.dbaName,
      nav: <Link to={`${company.clients.number}`}>Edit</Link>,
    };
  });
  const [newClients, setNewClients] = useState<any[]>(sampleData);
  const [selectedColumn, setSelectedColumn] = useState<string>("client");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const dataGridColumns = [
    { key: "client", name: "Client" },
    { key: "number", name: "Client Number" },
    { key: "company", name: "Company" },
    { key: "dba", name: "DBA" },
    { key: "nav", name: "" },
  ];
  const onSelectedColumnChange = (c: string) => {
    setSelectedColumn(c);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setNewClients(sortByKey(newClients, c, sortOrder));
  };

  // Filer New Clients Form
  const [searchValue, setSearchValue] = useState<string | number>("");

  return (
    <div className={"NewClientEntry"} data-testid={"NewClientEntry"}>
      <Section>
        <Row>
          <Column>
            <div className={"page-header"}>
              <h1 className={"flex-grow-1"}>New Client Entry</h1>
              <Button theme={"primary"}>Add New Client</Button>
            </div>
            <Breadcrumbs
              crumbs={[
                { name: "Home", url: "/" },
                { name: "Apps", url: "/apps" },
                { name: "New Client Entry", url: "/apps/new-client-entry" },
              ]}
            />
          </Column>
        </Row>
      </Section>

      <Section>
        <Row>
          <Column>
            <div>
              <InputText value={searchValue} onValueChange={setSearchValue} prefixIcon={"search"} clearButton />
              <Button>
                <Icon icon={"filter"} /> More Filters
              </Button>
            </div>
            <Panel theme={"white"}>
              <DataGrid
                columns={dataGridColumns}
                rows={newClients}
                selectedColumn={selectedColumn}
                selectedColumnChange={onSelectedColumnChange}
                order={sortOrder}
              />
            </Panel>
            <Paginator itemCount={250} perPage={20} currentPage={1} onPageChange={() => null} />
          </Column>
        </Row>
      </Section>
    </div>
  );
};

export default NewClientEntry;
