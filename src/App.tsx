import { useCallback, useRef, useState } from "react";
import { DropzoneState, useDropzone } from "react-dropzone";
import styled from "styled-components";
import { Column } from "./components/common/Column";
import { Spacer } from "./components/common/Spacer";
import { Row } from "./components/common/Row";
import { DropzoneContent } from "./components/DropzoneContent";
import { MOCK_DATA, State } from "./consts";

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

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ onDrop: handleDrop });

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
            <StyledTable>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_DATA.info.map((entry) => (
                  <tr key={entry.category}>
                    <td>{entry.category}</td>
                    <td dangerouslySetInnerHTML={{ __html: entry.details }} />
                  </tr>
                ))}
              </tbody>
            </StyledTable>
            <Spacer size={3} />
            <StyledTable>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Area/Section</th>
                  <th>Issue</th>
                  <th>Recommendation</th>
                  <th>Estimated Cost</th>
                  <th>Report Type</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_DATA.issues.map((entry, index) => (
                  <tr key={entry.area}>
                    <td>{index + 1}</td>
                    <td>{entry.area}</td>
                    <td>{entry.issue}</td>
                    <td>{entry.recommendation}</td>
                    <td>{entry.estimatedCost}</td>
                    <td>{entry.reportType}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>

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

const Button = styled.button<{ disabled?: boolean }>`
  padding: 16px 32px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  transition: background-position 0.5s;
  background-size: 200% auto;
  color: white;
  font-size: 1.2rem;
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

export default App;
