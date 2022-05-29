import { Card, NavItem } from "react-bootstrap";
import ListCard from "../Base/ListCard";

interface SharedFile {
  fileId: string | number;
  filename: string;
  dateShared: string;
  downloadUrl: string;
}

const SharedFiles: React.FC<{
  files: SharedFile[];
}> = ({files, ...props}) => {
  return (
    <ListCard
      title="Shared Files"
      data={files}
      emptyMessage="No files to display."
      keyExtractor={(item: SharedFile) => item.fileId.toString()}
      renderItem={(item: SharedFile) => {
        return (
          <>
            <div className="d-flex">
              <div className="me-3 fs-5"><i className="bi-file-earmark me-2"></i>Mozart K545</div>
              <div className="ms-auto text-muted fs-6">Today</div>
            </div>
            <div className="d-flex justify-content-end gap-4">
                <a href="#"><i className="bi-download me-2" />Download</a>
                <a href="#"><i className="bi-chat me-2" />Comment</a>
            </div>
          </>
        );
      }}
    />
  );
};

export {
  SharedFiles
};