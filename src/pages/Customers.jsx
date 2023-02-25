import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Inject,
  Selection,
  Edit,
  Filter,
  Page,
  Toolbar,
  Sort,
} from "@syncfusion/ej2-react-grids";

import React from "react";
import { Header } from "../components";
import {
  customersData,
  customersGrid,
} from "../data/dummy";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        width="auto"
        toolbar={["Delete"]}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
        }}>
        <ColumnsDirective>
          {customersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Selection,
            Edit,
            Filter,
            Toolbar,
            Sort,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
