import React from "react";
import { DataEditor, GridCellKind } from "@glideapps/glide-data-grid";
import "@glideapps/glide-data-grid/dist/index.css";

const AnimalGrid = ({ animals }) => {
  const columns = [
    {
      title: "Type",
      id: "type",
    },
    {
      title: "Name",
      id: "name",
    },

    {
      title: "Age",
      id: "age",
    },
  ];
  const getContent = React.useCallback(
    (cell) => {
      const [col, row] = cell;
      const dataRow = animals[row];
      // dumb but simple way to do this
      const indexes = ["name", "type", "age"];
      const d = dataRow ? dataRow[indexes[col]] : [];
      return {
        kind: GridCellKind.Text,
        allowOverlay: false,
        displayData: d + "",
        data: d,
      };
    },
    [animals]
  );

  return (
    <div className="center-content">
      {animals.length > 0 ? (
        <DataEditor
          getCellContent={getContent}
          columns={columns}
          rows={animals.length}
        />
      ) : (
        "No animals found."
      )}
    </div>
  );
};

export default AnimalGrid;
