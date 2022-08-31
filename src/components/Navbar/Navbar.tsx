// components/Navbar/Navbar.tsx

import React, { FC, useState } from "react";
import "./Navbar.style.scss";
import ProfilePicture from "../ProfilePicture";
import { Link, Route, Router } from "react-router-dom";
import Icon from "../Icon";
import InputText from "../InputText/InputText";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

export interface NavbarProps {
  id?: string;
}

const defaultProps: NavbarProps = {};

const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
  props = { ...defaultProps, ...props };

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string | number>("");

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const isActiveLink = (state) => {
    return state.isActive ? "active" : "";
  };

  return (
    <div className={"navbar"} data-testid={"Navbar"}>
      <nav>
        <img className={"brand"} src={"/images/fpo/brand-mark.jpg"} alt={"Generational Group Logo"} />
        <ul className={"nav nav-main"}>
          <li className={"nav-item"}>
            <Link className={"nav-link"} to={"/"}>
              Home
            </Link>
          </li>
          <li className={"nav-item"}>
            <Link className={`nav-link ${(state) => isActiveLink(state)}`} to={"/my-workspaces"}>
              My Workspaces
            </Link>
          </li>
          <li className={"nav-item"}>
            <Link className={`nav-link ${(state) => isActiveLink(state)}`} to={"/apps"}>
              Apps
            </Link>
          </li>
          <li className={"nav-item"}>
            <Link className={`nav-link ${(state) => isActiveLink(state)}`} to={"/reports"}>
              Reports
            </Link>
          </li>
          <li className={"nav-item"}>
            <Link className={`nav-link ${(state) => isActiveLink(state)}`} to={"/settings"}>
              Settings
            </Link>
          </li>
          <li className={"nav-item"}>
            <Link className={`nav-link ${(state) => isActiveLink(state)}`} to={"/shortcuts"}>
              Shortcuts
            </Link>
          </li>
        </ul>

        <ul className={"nav nav-secondary"}>
          <li className={"nav-item"}>
            <a className={"nav-link"} onClick={() => toggleSearch()}>
              <Icon icon={"search"} />
            </a>
            <Link className={"nav-link"} to={"/faq"} title={"FAQ"}>
              <Icon icon={"help-circle"} />
            </Link>
          </li>
          <li className={"nav-item"}>
            <Link className={"nav-link"} to={"/profile"}>
              <ProfilePicture size={"sm"} image={"/images/fpo/steve-zissou.jpg"} />
            </Link>
          </li>
        </ul>
      </nav>

      {searchOpen && (
        <div className={"search-bar"}>
          <InputText
            id={"navbar-search-input"}
            label={"search"}
            srOnlyLabel={true}
            type={"search"}
            prefixIcon={"search"}
            clearButton={true}
            value={searchValue}
            onValueChange={setSearchValue}
          />

          <ButtonGroup>
            <Link className={"btn btn-primary"} to={"/search"}>
              Advanced Search
            </Link>
            <Button theme={"secondary"}>Shortcuts</Button>
          </ButtonGroup>
        </div>
      )}
    </div>
  );
};

export default Navbar;
