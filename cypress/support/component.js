import "./commands";
import { mount } from "cypress/react18";
import "../../src/App.css";
import "../../src/normalize.css";

Cypress.Commands.add("mount", mount);
