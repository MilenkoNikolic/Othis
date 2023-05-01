import React, { ChangeEvent, useState } from "react";
import "./App.css";
import useFetch from "react-fetch-hook";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import createTrigger from "react-use-trigger";
import useTrigger from "react-use-trigger/useTrigger";
import { ICustomer, ITransaction } from "./interfaces";
import CustomerDetails from "./features/CustomerDetails";
import TransactionSummary from "./features/TransactionSummary";
import CustomerSelector from "./features/CustomerSelector";
import TransactionsDetailsModal from "./features/TransactionsDetailsModal";
import { environment } from "./environments/environment";

const requestTrigger = createTrigger();

function App() {
  const { isLoading, data: customerData } = useFetch<ICustomer[]>(
    `${environment.API_URL}/customers`
  );

  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer>();

  const requestTriggerValue = useTrigger(requestTrigger);
  const { data: transactionData } = useFetch<ITransaction[]>(
    `${environment.API_URL}/transactions?customer_id=${selectedCustomer?.id}`,
    {
      depends: [requestTriggerValue],
    }
  );

  const [showTransactionsDetails, setShowTransactionsDetails] = useState(false);
  const handleCloseTransactionsDetails = () =>
    setShowTransactionsDetails(false);
  const handleShowTransactionsDetails = () => setShowTransactionsDetails(true);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const customers: ICustomer[] = customerData || [];

  const onChangeCustomer = (event: ChangeEvent<HTMLSelectElement>) => {
    const selected = customers.find(
      (customer: ICustomer) => customer.id === event.target.value
    );
    setSelectedCustomer(selected);
    requestTrigger();
  };

  return (
    <div className="App">
      <Container className="py-5">
        <Card className="p-5">
          <Card.Body>
            <CustomerSelector
              customers={customerData}
              selectedCustomer={selectedCustomer}
              onChangeCustomer={onChangeCustomer}
            />
            <CustomerDetails customer={selectedCustomer} />
            <TransactionSummary
              transactions={transactionData}
              openTransactions={handleShowTransactionsDetails}
            />
          </Card.Body>
        </Card>

        <TransactionsDetailsModal
          show={showTransactionsDetails}
          handleClose={handleCloseTransactionsDetails}
          transactions={transactionData}
        />
      </Container>
    </div>
  );
}

export default App;
