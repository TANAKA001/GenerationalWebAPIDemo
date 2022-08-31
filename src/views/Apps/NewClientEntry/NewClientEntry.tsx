// views/NewClientEntry/NewClientEntry.tsx

import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
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
import ButtonGroup from "../../../components/ButtonGroup";

const NewClientEntry = () => {
  const navigate = useNavigate();

  // New Client Data Grid
  const sampleData = SampleData.map((company ,index) => {
    return {
      companyName: company.companies.companyName || company.companies.dbaName,
      number: company.clients.number,
      stage: "Direct to Market",
      productType: "n/a",
      productSubType: "n/a",
      entryComplete: "n/a",
    };
  });
  const [newClients, setNewClients] = useState<any[]>(sampleData);
  const [selectedColumn, setSelectedColumn] = useState<string>("client");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const dataGridColumns = [
    { key: "companyName", name: "Company" },
    { key: "number", name: "Client Number" },
    { key: "stage", name: "Stage" },
    { key: "status", name: "Status" },
    { key: "productType", name: "Product Type" },
    { key: "productSubType", name: "Product Sub Type" },
    { key: "entryCompleted", name: "Entry Completed" },
  ];
  const onSelectedColumnChange = (c: string) => {
    setSelectedColumn(c);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setNewClients(sortByKey(newClients, c, sortOrder));
  };

  // Filer New Clients Form
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string | number>("");

  /** Navigate To Client */
  const editClient = (id) => {
    navigate(`${id}`);
  };

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
            <div className={"filter-form"}>
              <InputText value={searchValue} onValueChange={setSearchValue} prefixIcon={"search"} clearButton />
              <Button onClick={() => setFilterPanelOpen(!filterPanelOpen)}>
                <Icon icon={"filter"} /> More Filters
              </Button>
            </div>
            {filterPanelOpen && (
              <Panel>
                More Filters Here.
              </Panel>
            )}
            <Panel theme={"white"}>
              <DataGrid
                columns={dataGridColumns}
                rows={newClients}
                selectedColumn={selectedColumn}
                selectedColumnChange={onSelectedColumnChange}
                order={sortOrder}
                selectableRows={true}
                onRowSelect={editClient}
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
