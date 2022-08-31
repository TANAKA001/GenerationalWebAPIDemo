import Activity from "./Icons/Activity";
import Check from "./Icons/Check";
import ChevronDown from "./Icons/ChevronDown";
import ChevronLeft from "./Icons/ChevronLeft";
import ChevronRight from "./Icons/ChevronRight";
import ChevronUp from "./Icons/ChevronUp";
import CircleCheck from "./Icons/CircleCheck";
import CircleEmpty from "./Icons/CircleEmpty";
import Close from "./Icons/Close";
import Error from "./Icons/Error";
import FileText from "./Icons/FileText";
import Info from "./Icons/Info";
import Layout from "./Icons/Layout";
import Loader from "./Icons/Loader";
import MapPin from "./Icons/MapPin";
import Search from "./Icons/Search";
import Sliders from "./Icons/Sliders";
import User from "./Icons/User";
import Users from "./Icons/Users";
import Warning from "./Icons/Warning";
import ChevronsLeft from "./Icons/ChevronsLeft";
import ChevronsRight from "./Icons/ChevronsRight";
import Filter from "./Icons/Filter";
import HelpCircle from "./Icons/HelpCircle";

export const Icons = {
  "activity": <Activity />,
  "check": <Check />,
  "chevron-down": <ChevronDown />,
  "chevron-left": <ChevronLeft />,
  "chevron-right": <ChevronRight />,
  "chevron-up": <ChevronUp />,
  "chevrons-left": <ChevronsLeft />,
  "chevrons-right": <ChevronsRight />,
  "circle-check": <CircleCheck />,
  "circle-empty": <CircleEmpty />,
  "close": <Close />,
  "error": <Error />,
  "file-text": <FileText />,
  "filter": <Filter />,
  "help-circle": <HelpCircle />,
  "info": <Info />,
  "layout": <Layout />,
  "loader": <Loader />,
  "map-pin": <MapPin />,
  "search": <Search />,
  "sliders": <Sliders />,
  "user": <User />,
  "users": <Users />,
  "warning": <Warning />,
};

export type IconOptions = keyof typeof Icons;
