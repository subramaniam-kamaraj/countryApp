import React, {useState} from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  DropdownItem,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';

const Countrylist = props => {
  const [dropdownOpen, setDropdownOpen] = useState (false);
  const toggle = () => setDropdownOpen (prevState => !prevState);

  const [search, setsearch] = useState ();
  const setpress = () => {
    // console.log (props.datas);
    props.searchval (search);
  };

  const [input1, setinput1] = React.useState ('Not set');

  return (
    <Container>
      <Row>
        <h1 className="text">Country App</h1>
      </Row>
      <br />
      <Row>
        <Col>
          <Dropdown isOpen={dropdownOpen} toggle={toggle} className="col-md-4">
            <DropdownToggle caret>
              searchBy
            </DropdownToggle>

            <DropdownMenu>
              <DropdownItem
                onClick={e => {
                  setinput1 (e.target.value);
                }}
              >
                Country
              </DropdownItem>

              <DropdownItem
                onClick={e => {
                  setinput1 (e.target.value);
                }}
              >
                Region
              </DropdownItem>

              <DropdownItem
                onClick={e => {
                  setinput1 (e.target.value);
                }}
              >
                Capital
              </DropdownItem>
            </DropdownMenu>

          </Dropdown>
        </Col>
        <Col>
          <Input
            style={{float: 'right'}}
            className="col-md-4"
            onChange={e => {
              setsearch (e.target.value);
            }}
            block
          />
        </Col>
        <Col>
          <Button color="dark" className="col-md-4" onClick={setpress}>
            Search
          </Button>
        </Col>
      </Row>

    </Container>
  );
};
export default Countrylist;
