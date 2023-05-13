import useSWR from "swr";
import { useRouter } from "next/router";

export default function Expenses() {
  const router = useRouter();
  const { id } = router.query;
  const { data: event, error } = useSWR(id ? `/api/events/${id}` : null);

  if (!event) {
    return <h1>Loading events...</h1>;
  }
  if (error) {
    return <h1>Error fetching events</h1>;
  }
  const eventFunds = event.eventBudget;

  const initialExpenses = [
    event.foodCosts,
    event.accomodationCosts,
    event.transportCosts,
    event.giftCosts,
    event.otherEventExpenses,
  ];

  const totalExpenses = initialExpenses.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <>
      {totalExpenses > 0.1 ? (
        <>
          <h3>EXPENSES</h3>
          <h4>AVAILABLE FUNDS ${event.eventBudget}</h4>
          <dl>
            <dt>Food & Drink</dt>
            <dd>${event.foodCosts}</dd>
            <dt>Accomodation</dt>
            <dd>${event.accomodationCosts}</dd>
            <dt>Transport</dt>
            <dd>${event.transportCosts}</dd>
            <dt>Gifts</dt>
            <dd>${event.giftCosts}</dd>
            <dt>Other Expenses</dt>
            <dd>${event.otherEventExpenses}</dd>
          </dl>
          {totalExpenses > 1 ? <h4>TOTAL EXPENSES ${totalExpenses}</h4> : null}
          {totalExpenses > eventFunds ? (
            <h4>BUDGET DEFICIT ${totalExpenses - eventFunds}</h4>
          ) : (
            totalExpenses > 1 && (
              <h4>REMAINING FUNDS ${eventFunds - totalExpenses}</h4>
            )
          )}
        </>
      ) : (
        <h4>EVENT HAS NO EXPENSES</h4>
      )}
    </>
  );
}
