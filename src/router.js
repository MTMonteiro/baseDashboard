import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashView from "./components/DashView";
import Dashboard from "./views/Dashboard";
import Dispositiovs from "./views/Dispositivos";
import Logs from "./views/Logs";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/logs"
          render={() => (
            <DashView>
              <Logs />
            </DashView>
          )}
        />

        <Route
          path="/dispositivos"
          render={() => (
            <DashView>
              <Dispositiovs />
            </DashView>
          )}
        />

        <Route
          path="/"
          render={() => (
            <DashView>
              <Dashboard />
            </DashView>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
