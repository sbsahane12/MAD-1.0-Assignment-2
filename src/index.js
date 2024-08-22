import {createRoot} from "react-dom/client";
import MorningGreeting ,{AfternoonGreeting,EveningGreeting}from "./App";

const root = createRoot(document.getElementById("root"));


root.render(
    <>
        <MorningGreeting name="Sagar"/>
        <AfternoonGreeting name="Sagar1"/>
        <EveningGreeting name="Sagar2"/>
    </>
);
