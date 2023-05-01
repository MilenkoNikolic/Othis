import { Col, Form, Row } from "react-bootstrap";
import { ICustomer } from "../../interfaces";
import { ChangeEventHandler } from "react";

interface Props {
  customers: ICustomer[] | undefined;
  selectedCustomer: ICustomer | undefined;
  onChangeCustomer: ChangeEventHandler<HTMLSelectElement>;
}

const CustomerSelector = (pros: Props) => {
  const { customers, onChangeCustomer, selectedCustomer } = pros;

  if (!customers || customers.length === 0) {
    return <></>;
  }

  return (
    <Row className="mb-4">
      <Col>
        <Form.Select onChange={onChangeCustomer} value={selectedCustomer?.id}>
          <option>Select a Customer</option>
          {customers.map((customer: any) => (
            <option key={`customer-option-${customer.id}`} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </Form.Select>
        <hr />
      </Col>
    </Row>
  );
};

export default CustomerSelector;
