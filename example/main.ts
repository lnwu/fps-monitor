import "./style.css";
import { fps } from "../src/index";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>FPS<br/>${fps}</h1>
`;
