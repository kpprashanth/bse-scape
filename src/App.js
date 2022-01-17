import { useEffect } from "react";
import "./styles.css";
import { JSDOM } from "jsdom";
import axios from "axios";

export default function App() {
  useEffect(() => {
    axios
      .get("https://www.bseindia.com/corporates/Forth_Results.html")
      .then((response) => {
        // console.log(response);
        const dom = new JSDOM(response.data);
        const tables = dom.window.document.getElementsByTagName("table");

        const resultTable = tables[1];
        const rows = resultTable.getElementsByTagName("tr");

        const header = rows[0];
        const headerElements = header.children;

        for (let i = 0; i < headerElements.length; i++) {
          console.log(headerElements[i].innerHTML);
        }

        console.log(response.data);
        for (let k = 1; k < rows.length; k++) {
          const row = rows[k];
          for (let j = 0; j < row.length; j++) {
            console.log(row[j]);
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
    (async () => {
      // const response = await axios.get("https://google.com");
      // const text = await response.text();
      // const dom = await new JSDOM(text);
      // console.log(dom.window.document.querySelector("h1").textContent);
    })();
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
