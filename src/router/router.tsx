import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../views/Home/Home";
import Loading from "../views/Loading";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import Typography from "../views/DeveloperGuide/Typography/Typography";
import FormInputs from "../views/DeveloperGuide/FormInputs/FormInputs";
import Components from "../views/DeveloperGuide/Components/Components";
import Reports from "../views/Reports";
import MyWorkspaces from "../views/MyWorkspaces";
import Apps from "../views/Apps";
import Settings from "../views/Settings";
import Shortcuts from "../views/Shortcuts";
import FAQ from "../views/FAQ";
import Search from "../views/Search";
import Profile from "../views/Profile";
import BuyersByMilestone from "../views/Reports/BuyersByMilestone";
import NewClientEntry from "../views/Apps/NewClientEntry";
import DashboardLayout from "../layouts/Dashboard";
import NewClientEntryEdit from "../views/Apps/NewClientEntryEdit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME*/}
        <Route
          path='/'
          element={
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          }
        />
        {/* LOGIN */}
        <Route path='/login' element={<Login />} />

        {/* MY WORKSPACES */}
        <Route path='my-workspaces' element={<DashboardLayout />}>
          <Route path='' element={<MyWorkspaces />} />
        </Route>
        {/* APPS*/}
        <Route path='apps' element={<DashboardLayout />}>
          <Route path='' element={<Apps />} />
          <Route path='new-client-entry' element={<NewClientEntry />} />
          <Route path='new-client-entry/:id' element={<NewClientEntryEdit />} />
        </Route>
        {/* REPORTS */}
        <Route path='reports' element={<DashboardLayout />}>
          <Route path='' element={<Reports />} />
          <Route path='buyers-by-milestone' element={<BuyersByMilestone />} />
        </Route>
        {/* SETTINGS */}
        <Route path='settings' element={<DashboardLayout />}>
          <Route path='' element={<Settings />} />
        </Route>
        {/* SHORTCUTS */}
        <Route path='shortcuts' element={<DashboardLayout />}>
          <Route path='' element={<Shortcuts />} />
        </Route>
        {/* SEARCH */}
        <Route path='search' element={<DashboardLayout />}>
          <Route path='' element={<Search />} />
        </Route>
        {/* FAQ */}
        <Route path='faq' element={<DashboardLayout />}>
          <Route path='' element={<FAQ />} />
        </Route>
        {/* PROFILE */}
        <Route path='profile' element={<DashboardLayout />}>
          <Route path='' element={<Profile />} />
        </Route>

        {/* DEVELOPER GUIDE */}
        <Route path='dev-guide/typography' element={<Typography />} />
        <Route path='dev-guide/form-inputs' element={<FormInputs />} />
        <Route path='dev-guide/components' element={<Components />} />
        <Route path='*' element={<NotFound />} />


      </Routes>
    </BrowserRouter>
  );
};

export default Router;
