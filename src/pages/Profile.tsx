import React, { useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Container } from "../components/Container";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const axios = require("axios");

type ProfileParams = {
  id: string;
};
type ProfileProps = RouteComponentProps<ProfileParams>;

const Profile: React.FC<ProfileProps> = ({ match }) => {
  const [dataProfile, setDataProfile] = useState({
    id: Number,
    name: String,
    username: String,
    email: String,
  });

  useEffect(() => {
    const fetchDataProfile = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/users/${match.params.id}`
      );
      setDataProfile(result.data);
    };
    fetchDataProfile();
  }, []);

  return (
    <div>
      <Container>
        <h2 style={{ textAlign: "center", margin: "20px 0 20px 0" }}>
          Fiche utilisateur
        </h2>
        <Link to="/users">Retour à la liste d'utilisateur</Link>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>name</td>
              <td>{dataProfile.name}</td>
            </tr>
            <tr>
              <td>username</td>
              <td>{dataProfile.username}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{dataProfile.email}</td>
            </tr>
            <tr>
              <td>Album</td>
              <td>...</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default withRouter(Profile);
