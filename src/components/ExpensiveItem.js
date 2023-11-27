import "./ExpensiveItem.css";

function ExpensiveItem(props) {
  const expenseName = "zamalk";
  const expenseDes = "this is the best club in world";
  const expensePrice = 1.89;

  return (
    <div className="expense-item">
      <div> {props.des}</div>

      <div className="expense-item__description"> 
        <h2> {props.name}</h2>
        <div className="expense-item__price">{props.price} millon</div>
      </div>
    </div>
  );
}
export default ExpensiveItem; 
