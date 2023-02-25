import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Inject,
  Search,
  Page,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import React from "react";
import { Header } from "../components";
import {
  contextMenuItems,
  employeesData,
  employeesGrid,
} from "../data/dummy";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        width="auto"
        toolbar={["Search"]}>
        <ColumnsDirective>
          {employeesGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Search, Toolbar]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
