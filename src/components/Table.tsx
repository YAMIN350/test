import React from "react";
import { Table } from "react-bootstrap";

interface Test {
  id: number;
  name: string;
}

export const TableComponent: React.FC<Test> = ({ id, name }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>{id}</th>
          <th>{name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>test</td>
        </tr>
      </tbody>
    </Table>
  );
};
