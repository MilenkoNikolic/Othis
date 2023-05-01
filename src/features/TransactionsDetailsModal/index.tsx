import { Button, Modal, Table } from "react-bootstrap";
import { ITransaction } from "../../interfaces";
import { formatDatetime } from "../../utils/datetime.util";

interface Props {
  transactions: ITransaction[] | undefined;
  show: boolean;
  handleClose: () => void
}

const TransactionsDetailsModal = (pros: Props) => {
  const { transactions, show, handleClose } = pros;

  if (!transactions || transactions.length === 0) {
    return <></>;
  }

  return (
    <Modal size="lg" centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Transactions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Subject</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction: ITransaction) => (
              <tr key={`transaction-${transaction.id}`}>
                <td>{formatDatetime(transaction.datetime)}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.subject}</td>
                <td>{transaction.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TransactionsDetailsModal;
