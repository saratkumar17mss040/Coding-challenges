const ATTRIBUTES = ['Date', 'Commodity', 'Price', 'Change', '%chg'];

const GOLD = [new Date('05 Aug 2020'), 'GOLD', '47,338.00', -229.0, -0.48];
const CRUDEOIL = [new Date('19 Jun 2020'), 'CRUDEOIL', '2907.00', -23.0, -0.78];
const SILVER = [new Date('03 Jul 2020'), 'SILVER', '48,436.00', 106.0, 0.22];
const NATURALGAS = [
  new Date('25 Jun 2020'),
  'NATURAL GAS',
  '123.30',
  -0.04,
  -0.32,
];

const finalArray = [ATTRIBUTES, GOLD, CRUDEOIL, NATURALGAS];

let table = document.createElement('table');

for (let row of finalArray) {
  table.insertRow();
  for (let cell of row) {
    let newCell = table.rows[table.rows.length - 1].insertCell();
    newCell.textContent = cell;
  }
}

// while interpreting in node it throws reference error as document is
// a part of web api - run the program in the console tab or the source tab in dev tools to see the actual output table

const actualTable = document.body.appendChild(table);
console.log(actualTable);

/* Generated format
<table>
  <tbody>
    <tr>
      <td>Date</td>
      <td>Commodity</td>
      <td>Price</td>
      <td>Change</td>
      <td>%chg</td>
    </tr>
    <tr>
      <td>Wed Aug 05 2020 00:00:00 GMT+0530 (India Standard Time)</td>
      <td>GOLD</td>
      <td>47,338.00</td>
      <td>-229</td>
      <td>-0.48</td>
    </tr>
    <tr>
      <td>Fri Jun 19 2020 00:00:00 GMT+0530 (India Standard Time)</td>
      <td>CRUDEOIL</td>
      <td>2907.00</td>
      <td>-23</td>
      <td>-0.78</td>
    </tr>
    <tr>
      <td>Thu Jun 25 2020 00:00:00 GMT+0530 (India Standard Time)</td>
      <td>NATURAL GAS</td>
      <td>123.30</td>
      <td>-0.04</td>
      <td>-0.32</td>
    </tr>
  </tbody>
</table>
*/
