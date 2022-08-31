// views/DeveloperGuide/Components/Components.tsx

import React, { useState } from "react";
import "./Components.style.scss";

import Accordion from "../../../components/Accordion";
import AccordionBody from "../../../components/Accordion/AccordionBody";
import AccordionGroup from "../../../components/Accordion/AccordionGroup";
import AccordionHead from "../../../components/Accordion/AccordionHead";
import Alert from "../../../components/Alert";
import AlphaJump from "../../../components/AlphaJump";
import BackButton from "../../../components/BackButton";
import Badge from "../../../components/Badge";
import Blockquote from "../../../components/Blockquote";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Button from "../../../components/Button";
import ButtonGroup from "../../../components/ButtonGroup";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CardFoot from "../../../components/Card/CardFoot";
import CardHead from "../../../components/Card/CardHead";
import CardImage from "../../../components/Card/CardImage";
import Checklist from "../../../components/Checklist";
import Chip from "../../../components/Chip";
import Close from "../../../components/Close";
import Column from "../../../components/Grid/Column";
import DataGrid from "../../../components/DataGrid";
import DebugOutput from "../../../components/DebugOutput";
import DeveloperGuideLayout from "../../../layouts/DeveloperGuide";
import Icon from "../../../components/Icon";
import Paginator from "../../../components/Paginator";
import ProfilePicture from "../../../components/ProfilePicture";
import ProgressBar from "../../../components/ProgressBar";
import Row from "../../../components/Grid/Row";
import Section from "../../../components/Grid/Section";
import SparklinePie from "../../../components/SparklinePie";
import Spinner from "../../../components/Spinner";
import Tabbar from "../../../components/Tabbar";
import Thumbnail from "../../../components/Thumbnail";
import Toast from "../../../components/Toaster/Toast";
import Tooltip from "../../../components/Tooltip";
import { IconOptions, Icons } from "../../../components/Icon/Icons.d";
import { dialogueService } from "../../../components/Dialogue/Dialogue.service";
import { getKeys } from "../../../functions";
import { modalService } from "../../../components/Modal/Modal.service";
import { toasterService as toaster } from "../../../components/Toaster/Toaster.service";
import Timeline from "../../../components/Timeline";

const Components = () => {
  const [tabA, setTabA] = useState("overview");
  const [tabB, setTabB] = useState("open");
  const [page, setPage] = useState(1);
  const [alpha, setAlpha] = useState("A");

  const iconNames: IconOptions[] = (getKeys<IconOptions>(Icons) || []) as IconOptions[];

  // MODAL
  const sampleModal = (
    <>
      <h2>Modal Test</h2>
      <p>This is a sample paragraph</p>
      <Button theme={"danger"} onClick={() => modalService.destroy()}>
        Close Modal
      </Button>
    </>
  );
  const showModal = () => {
    modalService.show({
      id: "test-modal",
      modalHeading: "Example Modal",
      modalBody: sampleModal,
    });
  };

  // DIALOGUES
  const showConfirmDialogue = () => {
    dialogueService.show({
      type: "confirm",
      heading: "Elsa",
      body: "Do want to build a snowman?",
    });
  };
  const showAlertDialogue = () => {
    dialogueService.show({
      type: "alert",
      heading: "Alert",
      body: "You are about to enter the highway to the danger zone.",
    });
  };

  // DATAGRID
  const [selectedColumn, setSelectedColumn] = useState("title");
  const dataGridColumns = [
    { key: "id", name: "ID" },
    { key: "name", name: "Name" },
    { key: "access", name: "Access", sortable: false },
    { key: "role", name: "Role" },
  ];
  const dataGridRows = [
    {
      id: 0,
      name: "Austin Wehner",
      access: (
        <Badge theme={"success"} size={"sm"}>
          Permanent
        </Badge>
      ),
      role: "Property Manager",
    },
    {
      id: 1,
      name: "Shannon Beahan",
      access: (
        <Badge theme={"success"} size={"sm"}>
          Permanent
        </Badge>
      ),
      role: "Asst. Manager",
    },
    {
      id: 2,
      name: "Betty Trantow",
      access: (
        <Badge theme={"success"} size={"sm"}>
          Permanent
        </Badge>
      ),
      role: "Tech - Lead",
    },
    {
      id: 3,
      name: "Ryan Larson",
      access: (
        <Badge theme={"default"} size={"sm"}>
          Temporary
        </Badge>
      ),
      role: "Leasing Specialist",
    },
    {
      id: 4,
      name: "Katrina Bernhard",
      access: (
        <Badge theme={"success"} size={"sm"}>
          Permanent
        </Badge>
      ),
      role: "Property Manager",
    },
  ];

  return (
    <DeveloperGuideLayout>
      <div className={"Components"} data-testid={"Components"}>
        <Section>
          <Row>
            <Column>
              <h1>Components</h1>
              <div className={"d-flex"}>
                <BackButton />
                <Breadcrumbs
                  crumbs={[
                    { name: "home", url: "/" },
                    { name: "Developer Guide", url: "/" },
                    { name: "Components", url: "/dev-guide/form-inputs" },
                  ]}
                />
              </div>
            </Column>
          </Row>
        </Section>

        <Section spacing={"xs"}>
          {/* SLIDEOUT MENU */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Slide-out Menu</h2>
                  <ButtonGroup>
                    <Button>See Filters</Button>
                  </ButtonGroup>
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* DATAGRID */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Datagrid</h2>
                  <DataGrid
                    selectedColumn={selectedColumn}
                    selectedColumnChange={setSelectedColumn}
                    columns={dataGridColumns}
                    rows={dataGridRows}
                  />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* DIALOGUE */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Dialogues</h2>
                  <ButtonGroup>
                    <Button onClick={() => showConfirmDialogue()}>Confirm</Button>
                    <Button onClick={() => showAlertDialogue()}>Alert</Button>
                  </ButtonGroup>
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* MODAL */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Modals</h2>
                  <Button onClick={() => showModal()}>Open Modal</Button>
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* ALPHA JUMP */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <DebugOutput>{alpha}</DebugOutput>
                  <AlphaJump location={alpha} locationChange={setAlpha} />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* BUTTONS */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Buttons</h2>
                  <h4>Theme</h4>
                  <ButtonGroup>
                    <Button>Default</Button>
                    <Button theme={"primary"}>Primary</Button>
                    <Button theme={"primary-outline"}>Primary-Outline</Button>
                    <Button theme={"secondary"}>Secondary</Button>
                    <Button theme={"info"}>Info</Button>
                    <Button theme={"success"}>Success</Button>
                    <Button theme={"success-outline"}>Success-Outline</Button>
                    <Button theme={"warning"}>Warning</Button>
                    <Button theme={"danger"}>Danger</Button>
                    <Button theme={"danger-outline"}>Danger-outline</Button>
                    <Button theme={"link"}>Link</Button>
                  </ButtonGroup>
                  <h4>Size</h4>
                  <ButtonGroup>
                    <Button size={"xs"}>X-Small</Button>
                    <Button size={"sm"}>Small</Button>
                    <Button size={"md"}>Medium</Button>
                    <Button size={"lg"}>Large</Button>
                  </ButtonGroup>
                  <h4>Width</h4>
                  <ButtonGroup>
                    <Button width={"narrow"}>narrow</Button>
                    <Button width={"standard"}>standard</Button>
                    <Button width={"wide"}>wide</Button>
                    <Button width={"block"}>block</Button>
                  </ButtonGroup>
                  <h4>ButtonGroup Align Right</h4>
                  <ButtonGroup align={"right"}>
                    <Button theme={"info"}>Confirm</Button>
                    <Button theme={"danger"}>Cancel</Button>
                  </ButtonGroup>
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* CLOSE BUTTON */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Close Button</h2>
                  <div>
                    <Close size={"sm"} />
                    <Close size={"md"} />
                    <Close size={"lg"} />
                  </div>
                  <div>
                    <Close theme={"default"} />
                    <Close theme={"primary"} />
                    <Close theme={"info"} />
                    <Close theme={"success"} />
                    <Close theme={"warning"} />
                    <Close theme={"danger"} />
                  </div>
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* THUMBNAIL */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Thumbnail</h2>
                  <Thumbnail image={"/images/fpo/steve-zissou.jpg"} size={"sm"} />
                  <Thumbnail image={"/images/fpo/steve-zissou.jpg"} size={"md"} />
                  <Thumbnail image={"/images/fpo/steve-zissou.jpg"} size={"lg"} />
                  <Thumbnail image={"/images/fpo/steve-zissou.jpg"} size={"xl"} />
                  <Thumbnail image={"/images/fpo/steve-zissou.jpg"} height={100} width={400} />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* ACCORDION */}
          <Row>
            <Column>
              <h2>Accordion</h2>
              <AccordionGroup>
                <Accordion>
                  <AccordionHead>Accordion A Head</AccordionHead>
                  <AccordionBody>
                    Body A
                    <Thumbnail image={"/images/fpo/steve-zissou.jpg"} size={"xl"} />
                  </AccordionBody>
                </Accordion>
                <Accordion>
                  <AccordionHead>Accordion B Head</AccordionHead>
                  <AccordionBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ratio enim nostra consentit, pugnat
                      oratio. Quid enim est a Chrysippo praetermissum in Stoicis? Praeclare hoc quidem. Nihilo magis.
                      Duo Reges: constructio interrete. Ab his oratores, ab his imperatores ac rerum publicarum
                      principes extiterunt.
                    </p>
                    <p>
                      Re mihi non aeque satisfacit, et quidem locis pluribus. Negabat igitur ullam esse artem, quae ipsa
                      a se proficisceretur; Legimus tamen Diogenem, Antipatrum, Mnesarchum, Panaetium, multos alios in
                      primisque familiarem nostrum Posidonium. Scaevola tribunus plebis ferret ad plebem vellentne de ea
                      re quaeri. Primum quid tu dicis breve? Nam Pyrrho, Aristo, Erillus iam diu abiecti.
                    </p>
                    <p>
                      Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Quid ergo hoc loco intellegit
                      honestum? Fortasse id optimum, sed ubi illud: Plus semper voluptatis? An vero displicuit ea, quae
                      tributa est animi virtutibus tanta praestantia? Quod cum dixissent, ille contra.
                    </p>
                  </AccordionBody>
                </Accordion>
              </AccordionGroup>
            </Column>
          </Row>

          {/* PROGRESS BAR */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Progress Bar</h2>
                  <ProgressBar progress={0} showPercent={true} />
                  <ProgressBar progress={25} showPercent={true} />
                  <ProgressBar progress={50} showPercent={true} />
                  <ProgressBar progress={75} showPercent={true} />
                  <ProgressBar progress={2} showPercent={true} />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* SPINNER */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Spinner</h2>
                  <Spinner />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* TOOLTIP */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Tooltip</h2>
                  <Tooltip tip={"This is an example of a tool tip."} />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* TOASTER */}
          <Row>
            <Column>
              <Card>
                <CardHead heading={"Toaster"} />
                <CardBody>
                  <Button
                    onClick={() =>
                      toaster.show({
                        type: "warning",
                        message: "Nullam id dolor id nibh ultricies vehicula ut id elit.",
                        duration: 10000,
                      })
                    }
                  >
                    Trigger Toast
                  </Button>
                  <Toast type={"warning"} message={"Nullam id dolor id nibh ultricies vehicula ut id elit."} />
                  <Toast type={"success"} message={"Nullam id dolor id nibh ultricies vehicula ut id elit."} />
                  <Toast type={"error"} message={"Nullam id dolor id nibh ultricies vehicula ut id elit."} />
                  <Toast type={"info"} message={"Nullam id dolor id nibh ultricies vehicula ut id elit."} />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* CARDS */}
          <Row>
            <Column xs={"12"}>
              <h3>Card Examples</h3>
            </Column>
            <Column sm={"4"}>
              <Card>
                <CardBody>Sample card with Body Only</CardBody>
              </Card>
            </Column>

            <Column sm={"4"}>
              <Card>
                <CardHead>Card Head</CardHead>
                <CardBody>Sample card with Body Only</CardBody>
                <CardFoot>Card Foot</CardFoot>
              </Card>
            </Column>

            <Column sm={"4"}>
              <Card>
                <CardBody>Sample card with Button in the footer</CardBody>
                <CardFoot>
                  <ButtonGroup>
                    <Button theme={"primary"}>Confirm</Button>
                    <Button theme={"secondary"}>Cancel</Button>
                  </ButtonGroup>
                </CardFoot>
              </Card>
            </Column>

            <Column sm={"4"}>
              <Card>
                <CardImage image={"/images/fpo/steve-zissou.jpg"} size={300} />
                <CardBody>Sample card with Image</CardBody>
              </Card>
            </Column>
          </Row>

          {/* PROFILE PICTURE */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Profile Pictures</h2>
                  <ProfilePicture image={"/images/fpo/steve-zissou.jpg"} />
                  <ProfilePicture />
                  <ProfilePicture image={"/images/fpo/steve-zissou.jpg"} size={"thumb"} />
                  <ProfilePicture image={"/images/fpo/steve-zissou.jpg"} size={"sm"} />
                  <ProfilePicture image={"/images/fpo/steve-zissou.jpg"} size={"md"} />
                  <ProfilePicture image={"/images/fpo/steve-zissou.jpg"} size={"lg"} />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* ICONS */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Icons</h2>
                  {iconNames.map((item, index) => {
                    return <Icon key={index} icon={item} />;
                  })}

                  <div>
                    <Icon icon={"search"} theme={"info"} />
                    <Icon icon={"search"} theme={"primary"} />
                    <Icon icon={"search"} theme={"success"} />
                    <Icon icon={"search"} theme={"warning"} />
                    <Icon icon={"search"} theme={"danger"} />
                  </div>

                  <div>
                    <Icon icon={"search"} size={"xs"} theme={"primary"} />
                    <Icon icon={"search"} size={"sm"} theme={"primary"} />
                    <Icon icon={"search"} size={"md"} theme={"primary"} />
                    <Icon icon={"search"} size={"lg"} theme={"primary"} />
                  </div>
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* CHECKLIST */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Checklist</h2>
                  <Checklist
                    title={"Checklist Title"}
                    items={[
                      { label: "item 1", checked: true },
                      { label: "item 2", checked: true },
                      { label: "item 3", checked: false },
                    ]}
                  />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* PAGINATOR */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Paginator</h2>
                  <p>page: {page}</p>
                  <Paginator itemCount={155} perPage={50} currentPage={page} onPageChange={setPage} />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* TABBAR */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Tabbar</h2>
                  <Tabbar
                    selected={tabA}
                    onTabChange={setTabA}
                    tabs={[
                      { label: "Overview", key: "overview" },
                      { label: "App Metrics", key: "Metrics" },
                      { label: "Payment Information", key: "payment" },
                      { label: "Guest", key: "guest" },
                    ]}
                  />
                  <Tabbar
                    selected={tabB}
                    onTabChange={setTabB}
                    tabs={[
                      { label: "Open", key: "open", badge: 179, theme: "danger" },
                      { label: "Closed", key: "close", badge: 401 },
                    ]}
                  />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* ALERTS */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Alert</h2>
                  <Alert theme={"info"}>
                    <h4>Sample Alert</h4>
                    <p>Here is a sample alert!</p>
                  </Alert>
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* BREADCRUMBS */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Breadcrumbs</h2>
                  <Breadcrumbs
                    crumbs={[
                      { name: "home", url: "/" },
                      { name: "Developer Guide", url: "/" },
                      { name: "Components", url: "/dev-guide/form-inputs" },
                    ]}
                  />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* SPARKLINE PIE */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Sparkline Pie</h2>
                  <SparklinePie />
                  <SparklinePie percent={25} />
                  <SparklinePie percent={50} />
                  <SparklinePie percent={75} />
                  <SparklinePie percent={100} />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* BADGES */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Badges</h2>
                  <div>
                    <Badge size={"xs"}>unit 132</Badge>
                    <Badge size={"sm"}>unit 132</Badge>
                    <Badge size={"md"}>unit 123</Badge>
                    <Badge size={"lg"}>unit 123</Badge>
                    <Badge size={"xl"}>unit 123</Badge>
                  </div>
                  <div>
                    <Badge theme={"default"}>unit 132</Badge>
                    <Badge theme={"primary"}>unit 123</Badge>
                    <Badge theme={"info"}>unit 123</Badge>
                    <Badge theme={"success"}>unit 132</Badge>
                    <Badge theme={"warning"}>unit 123</Badge>
                    <Badge theme={"danger"}>unit 123</Badge>
                  </div>
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* CHIPS */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Chips</h2>
                  <Chip label={"Chip A"} />
                  <Chip label={"Chip B"} dismissible={true} />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* TIMELINE */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Timeline</h2>
                  <Timeline
                    timeline={[
                      { label: "First", status: "complete" },
                      { label: "Second", status: "in-progress" },
                      { label: "Third", status: "incomplete" },
                    ]}
                  />
                </CardBody>
              </Card>
            </Column>
          </Row>

          {/* BLOCKQUOTE */}
          <Row>
            <Column>
              <Card>
                <CardBody>
                  <h2>Blockquotes</h2>
                  <Blockquote cite={"Dennis the Peasant, Monty Python and the Holy Grail"}>
                    Strange women lying in ponds distributing swords is no basis for a system of government. Supreme
                    executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.
                  </Blockquote>
                  <Blockquote cite={"Winston, Ghostbusters"}>
                    Ray, if someone asks you if you&apos;re a god, you say YES!
                  </Blockquote>
                  <Blockquote cite={"HAL, 2001: A Space Odyssey"}>
                    I&apos;m sorry, Dave. I&apos;m afraid I can&apos;t do that.
                  </Blockquote>
                </CardBody>
              </Card>
            </Column>
          </Row>
        </Section>
      </div>
    </DeveloperGuideLayout>
  );
};

export default Components;
