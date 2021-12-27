import { useState } from "react-dom";
const Todaycode = () => {
  return (
    <>
      <table>
        <thread>
          <tr>
            <th>Name</th>
            <th>UserName </th>
            <th>Dailyplan</th>
          </tr>
        </thread>
        <tbody>
          <tr>
            <td>Name data</td>
            <td>Username data</td>
            <td>
              <button className="ButtonEdit">Edit</button>
              <button className="ButtonDelete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Todaycode;
