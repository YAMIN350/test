import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Container } from "../components/Container";

const axios = require("axios");

export const User = () => {
  const [nbrTodoAndAlbum, setNbrTodoAndAlbum] = useState({
    nbr_todo: Number,
    nbr_album: Number,
  });
  const [data, setData] = useState([
    {
      id: Number,
      name: String,
      username: String,
      email: String,
      company: {
        name: String,
      },
    },
  ]);

  useEffect(() => {
    const fetchDataAllUsers = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      result.data.map(async (user: any) => {
        const nbr_todos = await axios(
          `https://jsonplaceholder.typicode.com/todos?userId=${user.id}&completed=true`
        );
        console.log(nbr_todos.data.length);
      });
      setData(result.data);
    };

    fetchDataAllUsers();
  }, []);

  return (
    <Container>
      <h2 style={{ textAlign: "center", margin: "20px 0 20px 0" }}>
        Tous les utilisateurs
      </h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>email</th>
            <th>website</th>
            <th>company name</th>
            <th>Nombre ToDo</th>
            <th>Nombre Album</th>
          </tr>
        </thead>
        {data.map((user: any, index: number) => {
          return (
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>
                  <Link to={`/user/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </Container>
  );
};
