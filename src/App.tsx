import React from "react";
import logo from "./logo.svg";
import "./App.css";
import OneCardDraw from "./Symbolon/pages/OneCardDraw";
import { ThemeProvider } from "styled-components";
import { symbolonTheme } from "./styledComponents/symbolon-theme";

function App() {
	return (
		<ThemeProvider theme={symbolonTheme}>
			<OneCardDraw />
		</ThemeProvider>
	);
}

export default App;
