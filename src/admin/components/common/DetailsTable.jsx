function DetailsTable() {
  return (
    <table className="w-full  text-sm md:text-base ">
      <thead className="text-black font-bold bg-[#cccccc]">
        <tr className="border border-black">
          <th className="py-3 px-2 md:px-4 text-left">Product</th>
          <th className="py-3 px-2 md:px-4 text-left">Quantity</th>
          <th className="py-3 px-2 md:px-4 text-left">Price</th>
          <th className="py-3 px-2 md:px-4 text-left">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border border-black bg-white">
          <td className="py-3 px-2 md:px-4 ">Tilers</td>
          <td className="py-3 px-2 md:px-4 ">2</td>
          <td className="py-3 px-2 md:px-4 ">Ksh. 15000</td>
          <td className="py-3 px-2 md:px-4 ">Ksh. 30000</td>
        </tr>

        <tr className="border bg-zinc-200 border-black">
          <td className="py-3 px-2 md:px-4 ">Cow Milker</td>
          <td className="py-3 px-2 md:px-4 ">1</td>
          <td className="py-3 px-2 md:px-4 ">Ksh. 20000</td>
          <td className="py-3 px-2 md:px-4">Ksh. 20000</td>
        </tr>

        <tr className="border border-black  bg-white">
          <td className="py-3 px-2 md:px-4 ">Altrazine</td>
          <td className="py-3 px-2 md:px-4 ">2</td>
          <td className="py-3 px-2 md:px-4 ">Ksh. 450</td>
          <td className="py-3 px-2 md:px-4 ">Ksh. 900</td>
        </tr>
      </tbody>
    </table>
  );
}

export default DetailsTable;
