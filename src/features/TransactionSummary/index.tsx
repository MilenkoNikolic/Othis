import { Col, Row, Table } from "react-bootstrap";
import { ITransaction } from "../../interfaces";
import { maxBy, minBy, sumBy } from "lodash";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MouseEventHandler } from "react";
import { formatDatetime } from "../../utils/datetime.util";

interface Props {
  transactions: ITransaction[] | undefined;
  openTransactions: MouseEventHandler<SVGElement>;
}

const TransactionSummary = (props: Props) => {
  const { transactions, openTransactions } = props;

  if (!transactions || transactions.length === 0) {
    return <></>;
  }

  const summaryAmount = () => {
    return sumBy(transactions, "amount");
  };

  const summaryDate = () => {
    const firstTransaction = minBy(transactions, "datetime");
    const lastTransaction = maxBy(transactions, "datetime");

    if (!firstTransaction || !lastTransaction) {
      return "";
    }

    const fromDate = formatDatetime(firstTransaction!.datetime)
    const toDate = formatDatetime(lastTransaction!.datetime)
    return `From ${fromDate} to ${toDate}`;
  };

  const summarySubject = () => {
    return transactions
      .map((transaction: ITransaction) => transaction.subject)
      .join(", ");
  };

  return (
    <Row>
      <Col>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Subject</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{summaryDate()}</td>
              <td>{summaryAmount()}</td>
              <td>{summarySubject()}</td>
              <td>
                <BsFillInfoCircleFill
                  style={{ cursor: "pointer" }}
                  onClick={openTransactions}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default TransactionSummary;
