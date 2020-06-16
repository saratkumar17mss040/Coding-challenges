// desired array 
/* emp_id    emp_name   salary    start_date
 1           Rick       623.3     2012 - 01 - 01
 2           Dan        515.2     2013 - 09 - 23 */

 // dataFields object
const dataFields = {
    0: 'emp_id',
    1: 'emp_name',
    2: 'salary',
    3: 'start_date'
};

// actual data object
const data = {
    'id1':1,'name1': 'Rick','salary1': 623.3,'date1': new Date(2012, 01, 01),
    'id2':2,
    'name2': 'Dan',
    'salary2': 515.2,
    'date2': '2013-09-23'
};

let finalArray = [];
let dataFieldsArray = Object.values(dataFields);
finalArray.push(dataFieldsArray);
let dataArray = Object.values(data);
finalArray.push(dataArray);
console.log(finalArray);








