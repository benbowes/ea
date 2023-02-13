import React from "react";
import useSWR from "swr";
import { Input, Output } from "./types";
import { transformData } from "./helpers/transformData";
import { ErrorHandler } from "./Components";
import "./App.css";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error(`Error: ${res.statusText} (${res.status})`);
    return res.json();
  });

export function App() {
  const { data, error, isLoading } = useSWR<Input[]>(
    "http://localhost:80",
    fetcher
  );

  const hasData = Array.isArray(data);
  const items: Output[] = transformData(hasData ? data : []);

  if (error)
    return (
      <ErrorHandler>
        <>{error.message}.</>
      </ErrorHandler>
    );
  if (isLoading) return <div>Loading...</div>;
  if (!hasData)
    return (
      <ErrorHandler>
        <>
          Error: There was a problem loading the data (Results of the request
          came up as "")
        </>
      </ErrorHandler>
    );

  return (
    <>
      <h1>Record Labels</h1>
      <ul>
        {items.map((item, itemIndex) => (
          <React.Fragment key={`${item}_${itemIndex}`}>
            <li className="record-label">
              {item.recordLabel !== "" ? item.recordLabel : "Unsigned"}
            </li>
            <li>
              <ul>
                {item.bands.map((band, bandIndex) => (
                  <React.Fragment key={`${band}_${bandIndex}`}>
                    <table>
                      <thead>
                        <tr>
                          <th>Band</th>
                          <th>Festivals</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{band.name}</td>
                          {band.festivals.length > 0 && (
                            <td>
                              {band.festivals.map((festival, festivalIndex) => (
                                <div key={`${festival}_${festivalIndex}`}>
                                  {festival}
                                </div>
                              ))}
                            </td>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </React.Fragment>
                ))}
              </ul>
            </li>
          </React.Fragment>
        ))}
      </ul>
      <ErrorHandler>
        <p>
          Unhappy with these results? I am not surprised. Refresh the page for a
          different result.
        </p>
      </ErrorHandler>
    </>
  );
}
