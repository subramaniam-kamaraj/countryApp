import React from 'react';
import {Container, Table} from 'reactstrap';

const List = props => {
  return (
    <Container>

      <Table className="scrollTable" bodered striped hover responsie>
        <thead className="dark">
          <th>ID</th>
          <th>Country</th>
          <th>Region</th>
          <th>Capital</th>
          <th>Flag</th>
          <th>Population</th>
        </thead>
        {props.list.map ((i, id) => {
          return (
            <tbody key={i.id}>
              <tr>
                <td>{id + 1}</td>
                <td>{i.name}</td>
                <td>{i.region}</td>
                <td>{i.capital}</td>
                <td>
                  <img src={i.flag} alt="flag" width="50px" height="50px" />
                </td>
                <td>{i.population}</td>

              </tr>
            </tbody>
          );
        })}

      </Table>
    </Container>
  );
};
export default List;
