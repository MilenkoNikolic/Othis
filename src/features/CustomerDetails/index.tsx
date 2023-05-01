import { Col, Row } from "react-bootstrap";
import { ICustomer } from "../../interfaces";

interface Props {
  customer: ICustomer | undefined;
}

const CustomerDetails = (pros: Props) => {
  const { customer } = pros;

  if (!customer) {
    return <></>;
  }

  return (
    <Row className="px-5 mb-3">
      <Col>
        <h5>Info</h5>
        <Row className="mb-1">
          <Col xs={12} sm={3} className="fw-bold">
            Name:
          </Col>
          <Col xs={12} sm={9}>
            {customer.name}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col xs={12} sm={3} className="fw-bold">
            Email:
          </Col>
          <Col xs={12} sm={9}>
            {customer.email}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col xs={12} sm={3} className="fw-bold">
            Phone:
          </Col>
          <Col xs={12} sm={9}>
            {customer.phone}
          </Col>
        </Row>
      </Col>
      <Col>
        <h5>Address</h5>
        <Row className="mb-1">
          <Col xs={12} sm={3} className="fw-bold">
            Street:
          </Col>
          <Col xs={12} sm={9}>
            {customer.address.street}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col xs={12} sm={3} className="fw-bold">
            City:
          </Col>
          <Col xs={12} sm={9}>
            {customer.address.city}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col xs={12} sm={3} className="fw-bold">
            State:
          </Col>
          <Col xs={12} sm={9}>
            {customer.address.state}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col xs={12} sm={3} className="fw-bold">
            Zip:
          </Col>
          <Col xs={12} sm={9}>
            {customer.address.zip}
          </Col>
        </Row>
      </Col>
      <hr className="mt-3" />
    </Row>
  );
};

export default CustomerDetails;
