import { useCallback, useRef, useState } from "react";
import { DropzoneState, useDropzone } from "react-dropzone";
import styled from "styled-components";
import { Column } from "./components/common/Column";
import { Spacer } from "./components/common/Spacer";
import { Row } from "./components/common/Row";
import { DropzoneContent } from "./components/DropzoneContent";
import { MOCK_DATA, State } from "./consts";
import { CSVLink } from "react-csv";

function App() {
  const [state, setState] = useState<State>("IDLE");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const dropzoneRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      setSelectedFiles([...selectedFiles, ...acceptedFiles]);
      setState("READY_TO_UPLOAD");

      // Do something with the files
      console.log(acceptedFiles);
    },
    [selectedFiles]
  );
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ onDrop: handleDrop });

  const handleSubmit = useCallback(() => {
    setState("UPLOADING");

    setTimeout(() => {
      setState("UPLOADED");
      setSelectedFiles([]);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }, 4000);
  }, []);

  const scrollToDropzone = useCallback(() => {
    dropzoneRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const detailsDataHeaders = ["Category", "Details"];
  const detailsData = [
    {
      category: "House address",
      details: MOCK_DATA.details["house_address"],
    },
    {
      category: "Property tax",
      details: MOCK_DATA.details["property_tax"],
    },
    {
      category: "House size",
      details: MOCK_DATA.details["house_size"],
    },
    {
      category: "Lot size",
      details: MOCK_DATA.details["lot_size"],
    },
    {
      category: "Bedrooms",
      details: MOCK_DATA.details["bedroom_numbers"],
    },
    {
      category: "Bathroom",
      details: MOCK_DATA.details["bathroom_numbers"],
    },
    {
      category: "Upgrades",
      details: MOCK_DATA.details["upgrades"].reduce((acc, curr) => {
        return (
          acc +
          `- ${curr.year_of_upgrade}: ${curr.what_was_done} [permit: ${
            curr.does_it_has_permit ? "yes" : "no"
          }]<br />`
        );
      }, ""),
    },
  ];

  const majorConcernsHeaders = [
    "Number",
    "Area/Section",
    "Issue",
    "Recommendation",
    "Estimated Cost",
    "Report Type",
  ];

  const detailsCsvData = [
    [...detailsDataHeaders],
    ...detailsData.map((entry) => [entry.category, entry.details]),
  ];
  const concernsCsvData = [
    [...majorConcernsHeaders],
    ...MOCK_DATA.majorConcerns.map((entry, index) => [
      index + 1,
      entry.area_section,
      entry.issue,
      entry.recommendation,
      entry.estimated_cost,
      entry.report_type_and_page,
    ]),
  ];

  console.log(detailsCsvData);

  return (
    <Main>
      <Column>
        <div ref={dropzoneRef} />
        <Spacer size={3} />
        <Dropzone {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
          <input {...getInputProps()} />
          <DropzoneContent state={state} selectedFiles={selectedFiles} />
        </Dropzone>
        <Spacer size={3} />

        <Row>
          <Button onClick={handleSubmit} disabled={!selectedFiles.length}>
            Submit
          </Button>
        </Row>

        <Spacer size={10} />

        {state === "UPLOADED" && (
          <Column ref={resultRef}>
            <Row>
              <h2 style={{ width: "100%" }}>Property Details</h2>
              <CSVLink data={detailsCsvData} filename="property-details.csv">
                <Button size="small">Download CSV</Button>
              </CSVLink>
            </Row>
            <HScroll>
              <Spacer size={1} />
              <StyledTable>
                <thead>
                  <tr>
                    {detailsDataHeaders.map((header) => (
                      <th key={header}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {detailsData.map((entry) => (
                    <tr key={entry.category}>
                      <td>{entry.category}</td>
                      <td
                        dangerouslySetInnerHTML={{
                          __html: entry.details.toString(),
                        }}
                      />
                    </tr>
                  ))}
                </tbody>
              </StyledTable>
            </HScroll>
            <Spacer size={5} />

            <Row>
              <h2 style={{ width: "100%" }}>Major Concerns</h2>
              <CSVLink data={concernsCsvData} filename="major-concerns.csv">
                <Button size="small">Download CSV</Button>
              </CSVLink>
            </Row>
            <HScroll>
              <Spacer size={1} />
              <StyledTable>
                <thead>
                  <tr>
                    {majorConcernsHeaders.map((header) => (
                      <th key={header}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MOCK_DATA.majorConcerns.map((entry, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{entry.area_section}</td>
                      <td>{entry.issue}</td>
                      <td>{entry.recommendation}</td>
                      <td>{entry.estimated_cost}</td>
                      <td>{entry.report_type_and_page}</td>
                    </tr>
                  ))}
                </tbody>
              </StyledTable>
            </HScroll>
            <Spacer size={3} />
            <Row>
              <Button onClick={scrollToDropzone}>Upload again</Button>
            </Row>
          </Column>
        )}

        <Spacer size={8} />
      </Column>
    </Main>
  );
}

const Main = styled.div`
  width: 98%;
  margin: 0 auto;
  max-width: 1200px;
`;

const Dropzone = styled(Column)<
  Pick<DropzoneState, "isDragAccept" | "isDragReject" | "isFocused">
>`
  width: 100%;
  min-height: 320px;
  padding: 32px;
  border-width: 2px;
  border-radius: 2px;
  font-size: 1.2rem;
  cursor: pointer;
  border-color: ${(props) => {
    if (props.isDragAccept) {
      return "#00e676";
    }
    if (props.isDragReject) {
      return "#ff1744";
    }
    if (props.isFocused) {
      return "#2196f3";
    }
    return "#e1e1e1";
  }};
  border-style: dashed;
  background-color: #ffffff;
  color: #999999;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const Button = styled.button<{ disabled?: boolean; size?: "small" | "big" }>`
  white-space: nowrap;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  transition: background-position 0.5s;
  background-size: 200% auto;
  color: white;
  font-weight: 600;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-image: linear-gradient(
    to right,
    #fbc2eb 0%,
    #a6c1ee 51%,
    #fbc2eb 100%
  );

  &:hover {
    background-position: right center;
  }

  ${(props) => {
    switch (props.size) {
      case "small":
        return `
          font-size: 0.8rem;
          padding: 12px 16px;;
        `;
      case "big":
        return `
          font-size: 1.2rem;
          padding: 16px 32px;
        `;
      default:
        return `
          font-size: 1.2rem;
          padding: 16px 32px;
        `;
    }
  }}

  ${(props) =>
    props.disabled
      ? `
    background-image: none;
    background-color: #ffffff;
    color: #aaaaaa;
    cursor: not-allowed;
  `
      : ""}
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #cccccc;
    padding: 8px;

    // TODO: allow dynamic width based on content
    @media (max-width: 768px) {
      min-width: 200px;
      &:first-child {
        min-width: unset;
      }
    }
  }

  tr:nth-child(odd) {
    background-color: #f9f9f9;
  }

  tr:nth-child(even) {
    background-color: #ffffff;
  }

  tr:hover {
    background-color: #cccccc;
    background-color: #f2f2f2;
  }

  th {
    background-color: #dddddd;
    font-weight: 600;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
  }
`;

const HScroll = styled.div`
  width: 100%;
  overflow-x: auto;
`;
export default App;
