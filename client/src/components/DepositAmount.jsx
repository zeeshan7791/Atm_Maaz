import { useState } from "react";

const DepositAmount = () => {
  let [currentAmount, setCurrentAmount] = useState();
  let [addAmount, setaddAmount] = useState();
  let [removeAmount, setRemoveAmount] = useState();
  const handleChange = (e) => {
    if (e.target.value < 1) {
      alert("please enter amount greater than 0");
      setCurrentAmount("");
      return;
    }
    setCurrentAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("amount deposited");
  };
  const addhandleChange = (e) => {
    if (!currentAmount) {
      alert("please deposit first");
      return;
    }
    setRemoveAmount();
    setaddAmount(e.target.value);
    currentAmount = Number(currentAmount) + Number(e.target.value);
    setCurrentAmount(currentAmount);
  };
  const removehandleChange = (e) => {
    setRemoveAmount(e.target.value);
    setaddAmount();
    if (currentAmount < e.target.value) {
      alert("you cant withdraw more than available ");
      setRemoveAmount();

      return;
    }
    currentAmount = Number(currentAmount) - Number(e.target.value);
    setCurrentAmount(currentAmount);
  };
  return (
    <>
      <div className="p-3 w-3/4 h-screen mx-auto ">
        <h3 className=" flex text-xl text-center font-semibold my-7">
          Deposit:
          {currentAmount ? currentAmount : 0}
        </h3>
        <form className="flex " onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="enter your amount"
            className="border p-3 rounded-lg  "
            id="currentAmount"
            value={currentAmount ? currentAmount : 0}
            min={0}
            onChange={handleChange}
          />
          {/* <button className="bg-slate-700 m-2 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Add Amount
          </button> */}
        </form>
        <p className="mt-4"></p>
        <table className="  w-full font-serif border-collapse">
          <tr>
            <th>Name</th>
            <th>Deposit</th>
            <th>Add</th>
            <th>Remove</th>
            <th>Transfer</th>
            <th>WithDraw</th>
          </tr>
          <tr>
            <td>Zeeshan</td>
            <td>{currentAmount ? currentAmount : 0}</td>
            <td>
              <form className="flex " onSubmit={handleSubmit}>
                <input
                  type="number"
                  placeholder="add amount"
                  className="border p-3 rounded-lg  "
                  id="addAmount"
                  min={0}
                  value={addAmount ? addAmount : ""}
                  onChange={addhandleChange}
                />
                {/* <button className="bg-slate-700 m-2 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Add Amount
          </button> */}
              </form>
            </td>
            <td>
              <form className="flex " onSubmit={handleSubmit}>
                <input
                  type="number"
                  placeholder="enter your amount"
                  className="border p-3 rounded-lg  "
                  id="currentAmount"
                  min={0}
                  value={removeAmount ? removeAmount : ""}
                  onChange={removehandleChange}
                />
                {/* <button className="bg-slate-700 m-2 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Add Amount
          </button> */}
              </form>
            </td>
            <td>400</td>
            <td>500</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default DepositAmount;
