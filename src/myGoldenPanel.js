import React from "react";
import { AppContext } from "./appContext";
import './App.css';

const products= [
  { id:"1",name: 'prd1', type :'plastic', qty: '1' ,des:'Good',price:'	$2,713.72'},
  { id:'2', name: 'prd2', type: 'iron', qty:'3',des: 'better',price:'	$2,600.72'},
  { id:'3', name: 'prd3', type: 'plastic', qty :'4',des:'best', price:'	$2,600.72'},
  { id:'4', name: 'prd4', type: 'plastic', qty :'5',des:'ok',price:'	$2,000.72'},
  { id:'5', name: 'prd5', type: 'plastic', qty :'6',des:'good' ,price:'	$1,700.72'}
];

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

export class MyGoldenPanel extends React.Component {
 
  

 
  render() {
    return (
      <div>
      <input type="text" id="myInput" onkeyup={myFunction} placeholder="Search for names.." title="Type in a name"/>

        
    <table id="mTable">    
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Type</th>
    <th>Quantity</th>
    <th>Description</th>
    <th>Price</th>
  </tr>
  
  {products.map((p, id) => (
  <tr key={id}>
  
    <td>{p.id}</td>
    <td>{p.name}</td>
    <td>{p.type}</td>
    <td>{p.qty}</td> 
    <td>{p.des}</td>
    <td>{p.price}</td>
  </tr>
  ))}
  </table>
  

       
      </div>
    );
  }
}
