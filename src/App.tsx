import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Symbolon from "./Symbolon/pages/Symbolon";
import { ThemeProvider } from "styled-components";
import { symbolonTheme } from "./styledComponents/symbolon-theme";

function App() {
	return (
		<ThemeProvider theme={symbolonTheme}>
			<Symbolon />
		</ThemeProvider>
	);
}

export default App;
