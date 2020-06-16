const attributes = ['name', 'age'];

const data1 = ['a', 20];
const data2 = ['b', 22];
const data3 = ['c', 23];
const data4 = ['d', 36];

const finalArray = [attributes, data1, data2, data3];

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
/* Generated format
    <table>
        <tbody>
            <tr>
                <td>name</td>
                <td>age</td>
            </tr>
             <tr>
                <td>a</td>
                <td>20</td>
            </tr>
             <tr>
                <td>b</td>
                <td>22</td>
            </tr>
             <tr>
                <td>c</td>
                <td>23</td>
            </tr>
            <tr>
                <td>d</tr>
                <td>36</td>
            </tr>
        </tbody>
    </table>
*/
console.log(actualTable);
