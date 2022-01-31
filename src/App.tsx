import React from 'react';
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
// import {pivotData} from './data';
import {csvdata} from './csvdata';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';
import './App.css';

function App() {
  const convertCSV=()=>{
    let dataSource: string[][] = [];
    let jsonObject: string[] = csvdata.split(/\r?\n|\r/);
    for (let i: number = 0; i < jsonObject.length; i++) {
        if (!(jsonObject[i] == null || undefined) && jsonObject[i] !== '') {
            dataSource.push(jsonObject[i].split(','));
        }
    }
    return dataSource;
  }
  const remoteData: DataManager = new DataManager({
    url: "https://bi.syncfusion.com/northwindservice/api/orders",
    adaptor: new WebApiAdaptor,
    crossDomain: true
  })
 return (
  <div className="App">
      <PivotViewComponent 
        dataSourceSettings={{
          dataSource: remoteData,
          // type: 'CSV',
          rows: [
            {name:"ShipCountry"}, 
            {name: "ShipCity", showNoDataItems: true}
          ],
          columns:[
            {name: "ProductName", caption: 'Product Name'}
          ],
          values: [
            {name: "Quantity", type:"Avg"}, 
            {name: "UnitPrice"}
          ],
          valueAxis: "column"
        }} 
        height='400' width='100%'>
      </PivotViewComponent>
    </div>
  );
}

export default App;
