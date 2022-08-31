// views/Reports/BuyersByMilestone.tsx

import React, { useState } from "react";
import "./BuyersByMilestone.style.scss";

import Card from "../../../components/Card/Card";
import Section from "../../../components/Grid/Section";
import Row from "../../../components/Grid/Row";
import Column from "../../../components/Grid/Column";
import CardBody from "../../../components/Card/CardBody";
import CardHead from "../../../components/Card/CardHead";
import ProgressBar from "../../../components/ProgressBar";
import Paginator from "../../../components/Paginator";
import InputText from "../../../components/InputText/InputText";
import Button from "../../../components/Button";
import Panel from "../../../components/Panel";
import Icon from "../../../components/Icon";
import Breadcrumbs from "../../../components/Breadcrumbs";

const BuyersByMilestone = () => {
  const [buyerFilters, setBuyerFilters] = useState(true);
  const [searchBuyers, setSearchBuyers] = useState<string | number>("");

  return (
    <div className={"BuyersByMilestone"} data-testid={"BuyersByMilestone"}>
      <Section spacing={"xs"}>
        <Row>
          <Column>
            <h1>Buyers by Milestone</h1>
            <Breadcrumbs
              crumbs={[
                { name: "Home", url: "/" },
                { name: "Reports", url: "/reports" },
                { name: "Buyers by Milestone", url: "/reports/buyers-by-milestone" },
              ]}
            />
          </Column>
        </Row>
      </Section>

      <Section spacing={"xs"} justify={"fluid"}>
        <Row>
          <Column>
            <Card>
              <CardHead heading={"Buyers By Milestone"}>
                Visual Representation of Byers by Important Milestones
              </CardHead>
              <CardBody>
                <div className={"key"}>
                  <div className={"key-item"}>
                    <div className={"symbol"}></div>
                    <div className={"label"}>Total</div>
                  </div>
                </div>
                <ProgressBar progress={20} label={"Dual Signed LOI"} color={"red"} />
                <ProgressBar progress={30} label={"Data Room Opened"} color={"orange"} />
                <ProgressBar progress={40} label={"Submitted LOI"} color={"yellow"} />
                <ProgressBar progress={50} label={"Buyer Visit"} color={"green"} />
                <ProgressBar progress={60} label={"Submitted IOI"} color={"cyan"} />
                <ProgressBar progress={70} label={"MGMT Call"} color={"purple"} />
                <ProgressBar progress={80} label={"CIM No Interest"} color={"gray"} />
                <ProgressBar progress={90} label={"CIM Sent"} color={"red"} />
                <ProgressBar progress={100} label={"NDA Signed"} color={"orange"} />
              </CardBody>
            </Card>
          </Column>
        </Row>
      </Section>

      <Section spacing={"xs"} justify={"fluid"}>
        <Row>
          <Column>
            <Card>
              <CardHead heading={"Byers List"}>List of Byers Organized by Stage</CardHead>
              <CardBody>
                <div>
                  <InputText
                    type={"search"}
                    prefixIcon={"search"}
                    clearButton={true}
                    value={searchBuyers}
                    onValueChange={setSearchBuyers}
                  />

                  <Button width={"narrow"} theme={"primary"} onClick={() => setBuyerFilters(!buyerFilters)}>
                    <Icon icon={"filter"} />
                  </Button>
                </div>

                {buyerFilters && <Panel>Buyer Filters here.</Panel>}

                <table>
                  <thead>
                    <tr>
                      <th>Buyer Name</th>
                      <th>Primary Contact</th>
                      <th>Tier</th>
                      <th>Buyer Type</th>
                      <th>Exp.Close</th>
                      <th>Last Interaction</th>
                      <th>Contact Status</th>
                      <th>Days in Stage</th>
                      <th>Assigned Tp</th>
                      <th># of Bids</th>
                      <th>last Bid Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>firstname lastname</td>
                      <td>firstname lastname</td>
                      <td>1</td>
                      <td>Type</td>
                      <td>Tomorrow</td>
                      <td>12/31/1999</td>
                      <td>Status</td>
                      <td>1856</td>
                      <td>firstname lastname</td>
                      <td>99</td>
                      <td>12/31/1999</td>
                    </tr>
                  </tbody>
                </table>

                <Paginator itemCount={500} perPage={50} currentPage={1} onPageChange={(e) => console.log(e)} />
              </CardBody>
            </Card>
          </Column>
        </Row>
      </Section>
    </div>
  );
};

export default BuyersByMilestone;
