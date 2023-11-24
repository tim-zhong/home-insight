import { State } from "../consts";
import { LoadingIcon } from "../icons/LoadingIcon";
import { Column } from "./common/Column";
import { Row } from "./common/Row";
import { Spacer } from "./common/Spacer";

export function DropzoneContent(props: {
  state: State;
  selectedFiles: File[];
}) {
  switch (props.state) {
    case "IDLE":
      return <p>Upload files to get started.</p>;
    case "READY_TO_UPLOAD":
      return (
        <Column alignItems="flex-start">
          {props.selectedFiles.map((file, index) => (
            <Row alignItems="flex-start">
              {index + 1}. {file.name}
            </Row>
          ))}
        </Column>
      );
    case "UPLOADING":
      return (
        <Row>
          <LoadingIcon />
          <Spacer size={1} />
          <p>Processing... This can take up to 20 seconds.</p>
        </Row>
      );
    case "UPLOADED":
      return <p>Upload new files to start over.</p>;
    case "ERROR":
      return null;
  }
}
