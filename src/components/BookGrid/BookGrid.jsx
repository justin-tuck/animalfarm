import React from "react";
import { DataEditor, GridCellKind } from "@glideapps/glide-data-grid";
import "@glideapps/glide-data-grid/dist/index.css";

const BookGrid = ({ books }) => {
  const columns = [
    {
      title: "Title",
      id: "title",
    },
    {
      title: "Author",
      id: "author",
    },

    {
      title: "Price",
      id: "price",
    },
  ];
  const getContent = React.useCallback(
    (cell) => {
      const [col, row] = cell;
      const dataRow = books[row];
      // dumb but simple way to do this
      const indexes = ["title", "author", "price"];
      const d = dataRow ? dataRow[indexes[col]] : [];
      return {
        kind: GridCellKind.Text,
        allowOverlay: false,
        displayData: d + "",
        data: d,
      };
    },
    [books]
  );

  return (
    <div className="center-content">
      {books.length > 0 ? (
        <DataEditor
          getCellContent={getContent}
          columns={columns}
          rows={books.length}
        />
      ) : (
        "No books found."
      )}
    </div>
  );
};

export default BookGrid;
