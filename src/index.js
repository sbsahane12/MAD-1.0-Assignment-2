import {createRoot} from "react-dom/client";
import GreetingHours from "./App";

const root = createRoot(document.getElementById("root"));


root.render(
    <GreetingHours name="Sagar"/>
);
