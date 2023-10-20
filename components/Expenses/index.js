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

  const { currency, foodCosts, accomodationCosts, transportCosts, giftCosts, otherEventExpenses, eventBudget } = event;

  const initialExpenses = [foodCosts, accomodationCosts, transportCosts, giftCosts, otherEventExpenses];

  const totalExpenses = initialExpenses.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const availableFunds = eventBudget;
  const budgetDeficit = totalExpenses > availableFunds ? totalExpenses - availableFunds : null;
  const remainingFunds = totalExpenses <= availableFunds ? availableFunds - totalExpenses : null;

  return (
    <>
      {totalExpenses > 0.1 ? (
        <>
          <h3>EXPENSES</h3>
          <dl>
            <ExpenseItem title="Food & Drink" cost={foodCosts} currency={currency} />
            <ExpenseItem title="Accomodation" cost={accomodationCosts} currency={currency} />
            <ExpenseItem title="Transport" cost={transportCosts} currency={currency} />
            <ExpenseItem title="Gifts" cost={giftCosts} currency={currency} />
            <ExpenseItem title="Other Expenses" cost={otherEventExpenses} currency={currency} />
          </dl>
          <FundsItem title="AVAILABLE FUNDS" cost={availableFunds} currency={currency} />
          {totalExpenses > 1 && <FundsItem title="TOTAL EXPENSES" cost={totalExpenses} currency={currency} />}
          {budgetDeficit && <FundsItem title="BUDGET DEFICIT" cost={budgetDeficit} currency={currency} />}
          {remainingFunds && <FundsItem title="REMAINING FUNDS" cost={remainingFunds} currency={currency} />}
        </>
      ) : (
        <h4>EVENT HAS NO EXPENSES</h4>
      )}
    </>
  );
}

function ExpenseItem({ title, cost, currency }) {
  return (
    <>
      <dt>{title}</dt>
      <dd>
        {currency}
        {cost}
      </dd>
    </>
  );
}

function FundsItem({ title, cost, currency }) {
  return (
    <h4>
      {title} {currency}
      {cost}
    </h4>
  );
}
