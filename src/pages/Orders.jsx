import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  Inject,
  Page,
  PdfExport,
  Resize,
  Sort,
} from "@syncfusion/ej2-react-grids";

import React from "react";
import { Header } from "../components";
import {
  contextMenuItems,
  ordersData,
  ordersGrid,
} from "../data/dummy";

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting>
        <ColumnsDirective>
          {ordersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            ContextMenu,
            Edit,
            ExcelExport,
            Filter,
            Page,
            PdfExport,
            Resize,
            Sort,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
