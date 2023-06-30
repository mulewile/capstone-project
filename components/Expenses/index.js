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

  const {
    currency,
    foodCosts,
    accomodationCosts,
    transportCosts,
    giftCosts,
    otherEventExpenses,
    eventBudget,
  } = event;
  const eventFunds = eventBudget;

  const initialExpenses = [
    foodCosts,
    accomodationCosts,
    transportCosts,
    giftCosts,
    otherEventExpenses,
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
          <dl>
            <dt>Food & Drink</dt>
            <dd>
              {currency}
              {foodCosts}
            </dd>
            <dt>Accomodation</dt>
            <dd>
              {currency}
              {accomodationCosts}
            </dd>
            <dt>Transport</dt>
            <dd>
              {currency}
              {transportCosts}
            </dd>
            <dt>Gifts</dt>
            <dd>
              {currency}
              {giftCosts}
            </dd>
            <dt>Other Expenses</dt>
            <dd>
              {currency}
              {otherEventExpenses}
            </dd>
          </dl>
          <h4>
            AVAILABLE FUNDS {currency}
            {eventBudget}
          </h4>
          {totalExpenses > 1 ? (
            <h4>
              TOTAL EXPENSES {currency}
              {totalExpenses}
            </h4>
          ) : null}
          {totalExpenses > eventFunds ? (
            <h4>
              BUDGET DEFICIT {currency}
              {totalExpenses - eventFunds}
            </h4>
          ) : (
            totalExpenses > 1 && (
              <h4>
                REMAINING FUNDS {currency}
                {eventFunds - totalExpenses}
              </h4>
            )
          )}
        </>
      ) : (
        <h4>EVENT HAS NO EXPENSES</h4>
      )}
    </>
  );
}
