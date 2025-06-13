import React, { useState, useEffect } from "react";

// Main ERP Application Component
const App = () => {
  // State to manage the active module displayed in the content area
  const [activeModule, setActiveModule] = useState("items"); // Default to 'items' module

  // Render the appropriate module component based on activeModule state
  const renderModule = () => {
    switch (activeModule) {
      case "items":
        return <ItemsMaster />;
      case "stockcard":
        return <Stockcard />;
      case "batches":
        return <Batches />;
      case "costing":
        return <CostingMethod />;
      case "pr":
        return <PurchaseRequisition />;
      case "po":
        return <PurchaseOrder />;
      case "grpo":
        return <GoodsReceiptPO />;
      case "goodsReturn":
        return <GoodsReturn />;
      case "arinvoice":
        return <ARInvoice />;
      case "stockcardSummary":
        return <StockcardSummary />;
      default:
        return (
          <h2 className="text-2xl font-bold text-gray-700">
            Welcome to the ERP System!
          </h2>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-gray-800 text-white shadow-lg flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-3xl font-extrabold text-blue-300">ERP Lite</h1>
          <p className="text-sm text-gray-400 mt-1">Prototype System</p>
        </div>

        <nav className="flex-grow p-4 space-y-2">
          {/* Navigation Item: Items Master */}
          <button
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
                                    ${
                                      activeModule === "items"
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "hover:bg-gray-700 hover:text-white"
                                    }`}
            onClick={() => setActiveModule("items")}
          >
            Items Master
          </button>
          {/* Navigation Item: Stockcard */}
          <button
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
                                    ${
                                      activeModule === "stockcard"
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "hover:bg-gray-700 hover:text-white"
                                    }`}
            onClick={() => setActiveModule("stockcard")}
          >
            Stockcard
          </button>
          {/* Navigation Item: Stockcard Summary */}
          <button
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
                                    ${
                                      activeModule === "stockcardSummary"
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "hover:bg-gray-700 hover:text-white"
                                    }`}
            onClick={() => setActiveModule("stockcardSummary")}
          >
            Stockcard Summary
          </button>
          {/* Navigation Item: Batches */}
          <button
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
                                    ${
                                      activeModule === "batches"
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "hover:bg-gray-700 hover:text-white"
                                    }`}
            onClick={() => setActiveModule("batches")}
          >
            Batches
          </button>
          {/* Navigation Item: Costing Method */}
          <button
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
                                    ${
                                      activeModule === "costing"
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "hover:bg-gray-700 hover:text-white"
                                    }`}
            onClick={() => setActiveModule("costing")}
          >
            Costing Method
          </button>
          {/* Navigation Item: Purchase Requisition (PR) */}
          <button
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
                                    ${
                                      activeModule === "pr"
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "hover:bg-gray-700 hover:text-white"
                                    }`}
            onClick={() => setActiveModule("pr")}
          >
            Purchase Requisition (PR)
          </button>
          {/* Navigation Item: Purchase Order (PO) */}
          <button
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
                                    ${
                                      activeModule === "po"
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "hover:bg-gray-700 hover:text-white"
                                    }`}
            onClick={() => setActiveModule("po")}
          >
            Purchase Order (PO)
          </button>
          {/* Navigation Item: Goods Receipt PO (GRPO) */}
          <button
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
                                    ${
                                      activeModule === "grpo"
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "hover:bg-gray-700 hover:text-white"
                                    }`}
            onClick={() => setActiveModule("grpo")}
          >
            Goods Receipt PO (GRPO)
          </button>
          {/* Navigation Item: Goods Return */}
          <button
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
                                    ${
                                      activeModule === "goodsReturn"
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "hover:bg-gray-700 hover:text-white"
                                    }`}
            onClick={() => setActiveModule("goodsReturn")}
          >
            Goods Return
          </button>
          {/* Navigation Item: AR Invoice */}
          <button
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
                                    ${
                                      activeModule === "arinvoice"
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "hover:bg-gray-700 hover:text-white"
                                    }`}
            onClick={() => setActiveModule("arinvoice")}
          >
            AR Invoice
          </button>
        </nav>

        {/* Footer for Sidebar (Optional) */}
        <div className="p-4 text-center text-gray-500 text-xs border-t border-gray-700">
          &copy; 2025 ERP Prototype. All rights reserved.
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 bg-gray-50 overflow-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {renderModule()}
        </div>
      </main>
    </div>
  );
};

// Dummy Data for Items Master
// In a real application, this would come from a backend API.
const initialItems = [
  {
    id: "item-1",
    name: "Laptop Pro",
    sku: "LAP-PRO-001",
    unit: "Pcs",
    price: 1200,
  },
  {
    id: "item-2",
    name: "Wireless Mouse",
    sku: "MSE-WL-005",
    unit: "Pcs",
    price: 25,
  },
  {
    id: "item-3",
    name: "Mechanical Keyboard",
    sku: "KB-MECH-010",
    unit: "Pcs",
    price: 80,
  },
  {
    id: "item-4",
    name: "External SSD 1TB",
    sku: "SSD-EXT-001",
    unit: "Pcs",
    price: 150,
  },
  {
    id: "item-5",
    name: "USB-C Hub",
    sku: "HUB-USBC-001",
    unit: "Pcs",
    price: 45,
  },
];

// Items Master Module Component
const ItemsMaster = () => {
  // State to store items, initialized with dummy data
  const [items, setItems] = useState(initialItems);
  // State for new item input
  const [newItem, setNewItem] = useState({
    name: "",
    sku: "",
    unit: "Pcs",
    price: "",
  });
  // State for item currently being edited
  const [editingItem, setEditingItem] = useState(null); // Stores the ID of the item being edited

  // Handle input changes for the new item/edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingItem) {
      // If editing, update the newItem state which temporarily holds the edited data
      setNewItem((prev) => ({ ...prev, [name]: value }));
    } else {
      // If adding new, update the newItem state for new item form
      setNewItem((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle adding a new item
  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.sku && newItem.price) {
      // In a real Node.js backend:
      // 1. Send POST request to /api/items with newItem data.
      // 2. Backend generates unique ID, saves to database, and returns the new item.
      // 3. Frontend updates state with the item returned from the backend.
      const newId = `item-${
        items.length
          ? Math.max(...items.map((item) => parseInt(item.id.split("-")[1]))) +
            1
          : 1
      }`;
      setItems((prev) => [
        ...prev,
        { ...newItem, id: newId, price: parseFloat(newItem.price) },
      ]);
      setNewItem({ name: "", sku: "", unit: "Pcs", price: "" }); // Clear form
    } else {
      console.warn("Please fill in all fields to add an item.");
    }
  };

  // Handle starting the edit process for an item
  const handleEditClick = (item) => {
    setEditingItem(item.id);
    setNewItem({ ...item, price: item.price.toString() }); // Load item data into form for editing
  };

  // Handle saving changes to an item
  const handleUpdateItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.sku && newItem.price && editingItem) {
      // In a real Node.js backend:
      // 1. Send PUT request to /api/items/:id with updated newItem data.
      // 2. Backend updates database and returns the updated item.
      // 3. Frontend updates state with the item returned from the backend.
      setItems((prev) =>
        prev.map((item) =>
          item.id === editingItem
            ? { ...newItem, id: editingItem, price: parseFloat(newItem.price) }
            : item
        )
      );
      setEditingItem(null); // Exit edit mode
      setNewItem({ name: "", sku: "", unit: "Pcs", price: "" }); // Clear form
    } else {
      console.warn("Please fill in all fields to update the item.");
    }
  };

  // Handle deleting an item
  const handleDeleteItem = (id) => {
    // In a real Node.js backend:
    // 1. Send DELETE request to /api/items/:id.
    // 2. Backend deletes from database and confirms.
    // 3. Frontend updates state.
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // Reset form when cancelling edit
  const handleCancelEdit = () => {
    setEditingItem(null);
    setNewItem({ name: "", sku: "", unit: "Pcs", price: "" });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-800 border-b pb-4 mb-4">
        Items Master
      </h2>

      {/* Add/Edit New Item Form */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          {editingItem ? "Edit Item" : "Add New Item"}
        </h3>
        <form
          onSubmit={editingItem ? handleUpdateItem : handleAddItem}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div>
            <label
              htmlFor="itemName"
              className="block text-sm font-medium text-gray-700"
            >
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              name="name"
              value={newItem.name}
              onChange={handleInputChange}
              placeholder="e.g., Laptop Pro"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="itemSku"
              className="block text-sm font-medium text-gray-700"
            >
              SKU
            </label>
            <input
              type="text"
              id="itemSku"
              name="sku"
              value={newItem.sku}
              onChange={handleInputChange}
              placeholder="e.g., LAP-PRO-001"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="itemUnit"
              className="block text-sm font-medium text-gray-700"
            >
              Unit
            </label>
            <input
              type="text"
              id="itemUnit"
              name="unit"
              value={newItem.unit}
              onChange={handleInputChange}
              placeholder="e.g., Pcs"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="itemPrice"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="itemPrice"
              name="price"
              value={newItem.price}
              onChange={handleInputChange}
              placeholder="e.g., 1200"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              step="0.01"
              required
            />
          </div>
          <div className="md:col-span-2 lg:col-span-4 flex justify-end space-x-2">
            {editingItem && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="inline-flex items-center px-6 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              {editingItem ? "Update Item" : "Add Item"}
            </button>
          </div>
        </form>
      </div>

      {/* Items List Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Current Items
        </h3>
        {items.length === 0 ? (
          <p className="text-gray-500">No items added yet.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SKU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.sku}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.unit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEditClick(item)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/*
                Node.js Backend Considerations for Items Master:
                - API Endpoints:
                    - GET /api/items: To fetch all items.
                    - POST /api/items: To create a new item.
                    - PUT /api/items/:id: To update an existing item.
                    - DELETE /api/items/:id: To delete an item.
                - Database Schema: A collection/table named 'items' with fields like `_id` (or `id`), `name`, `sku`, `unit`, `price`, `createdAt`, `updatedAt`.
                - Business Logic:
                    - Ensure SKU uniqueness.
                    - Validate input data (e.g., price is a positive number).
            */}
    </div>
  );
};

// Dummy Data for Stockcard
const initialStockcardEntries = [
  {
    id: "sc-1",
    date: "2025-06-01",
    itemId: "item-1",
    itemName: "Laptop Pro",
    transactionType: "GRPO",
    quantityIn: 10,
    quantityOut: 0,
    balance: 10,
  },
  {
    id: "sc-2",
    date: "2025-06-02",
    itemId: "item-2",
    itemName: "Wireless Mouse",
    transactionType: "GRPO",
    quantityIn: 50,
    quantityOut: 0,
    balance: 50,
  },
  {
    id: "sc-3",
    date: "2025-06-03",
    itemId: "item-3",
    itemName: "Mechanical Keyboard",
    transactionType: "GRPO",
    quantityIn: 30,
    quantityOut: 0,
    balance: 30,
  },
  {
    id: "sc-4",
    date: "2025-06-05",
    itemId: "item-1",
    itemName: "Laptop Pro",
    transactionType: "AR Invoice",
    quantityIn: 0,
    quantityOut: 2,
    balance: 8,
  },
  {
    id: "sc-5",
    date: "2025-06-06",
    itemId: "item-2",
    itemName: "Wireless Mouse",
    transactionType: "AR Invoice",
    quantityIn: 0,
    quantityOut: 5,
    balance: 45,
  },
  {
    id: "sc-6",
    date: "2025-06-07",
    itemId: "item-1",
    itemName: "Laptop Pro",
    transactionType: "Goods Return (Customer)",
    quantityIn: 1,
    quantityOut: 0,
    balance: 9,
  },
  {
    id: "sc-7",
    date: "2025-06-08",
    itemId: "item-3",
    itemName: "Mechanical Keyboard",
    transactionType: "Adjustment (Minus)",
    quantityIn: 0,
    quantityOut: 1,
    balance: 29,
  },
  {
    id: "sc-8",
    date: "2025-06-09",
    itemId: "item-4",
    itemName: "External SSD 1TB",
    transactionType: "GRPO",
    quantityIn: 20,
    quantityOut: 0,
    balance: 20,
  },
  {
    id: "sc-9",
    date: "2025-06-10",
    itemId: "item-4",
    itemName: "External SSD 1TB",
    transactionType: "AR Invoice",
    quantityIn: 0,
    quantityOut: 3,
    balance: 17,
  },
];

const Stockcard = () => {
  const [stockcardEntries, setStockcardEntries] = useState(
    initialStockcardEntries
  );
  const [selectedItem, setSelectedItem] = useState(""); // State for item filter

  // Get unique items from the dummy data for the filter dropdown
  const uniqueItems = [
    ...new Set(
      initialStockcardEntries.map((entry) => ({
        id: entry.itemId,
        name: entry.itemName,
      }))
    ),
  ];

  // Filter stockcard entries based on selected item
  const filteredEntries = selectedItem
    ? stockcardEntries.filter((entry) => entry.itemId === selectedItem)
    : stockcardEntries;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-800 border-b pb-4 mb-4">
        Stockcard
      </h2>
      <p className="text-gray-700">
        This module displays detailed transaction history for each item, showing
        inflows, outflows, and current balances.
      </p>

      {/* Filter by Item */}
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
        <label
          htmlFor="itemFilter"
          className="block text-sm font-medium text-gray-700"
        >
          Filter by Item:
        </label>
        <select
          id="itemFilter"
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value)}
          className="mt-1 block w-64 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
        >
          <option value="">All Items</option>
          {uniqueItems.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {/* Stockcard Data Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Stock Transactions
        </h3>
        {filteredEntries.length === 0 ? (
          <p className="text-gray-500">
            No transactions found for the selected item.
          </p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Qty In
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Qty Out
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEntries.map((entry) => (
                <tr key={entry.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {entry.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {entry.itemName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {entry.transactionType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                    {entry.quantityIn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                    {entry.quantityOut}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                    {entry.balance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/*
                Node.js Backend Considerations for Stockcard:
                - API Endpoints:
                    - GET /api/stockcard: To fetch all stockcard entries (possibly with filters for item, date range).
                    - (No direct POST/PUT/DELETE for stockcard entries; they are generated by other transactions like GRPO, AR Invoice, etc.)
                - Database Schema: A collection/table named 'stock_transactions' with fields like `_id`, `date`, `item_id`, `transaction_type`, `quantity_change`, `current_balance`, `source_document_id`.
                - Business Logic:
                    - Stockcard entries are automatically created when GRPO, AR Invoice, Goods Return, or inventory adjustments are processed.
                    - Backend computes the running balance for each item.
            */}
    </div>
  );
};

const StockcardSummary = () => {
  // In a real application, this data would be dynamically calculated from stock movements
  // or fetched from a pre-calculated summary table in the backend.
  const [stockSummary, setStockSummary] = useState([
    {
      itemId: "item-1",
      itemName: "Laptop Pro",
      quantityOnHand: 9,
      value: 10800,
    },
    {
      itemId: "item-2",
      itemName: "Wireless Mouse",
      quantityOnHand: 45,
      value: 1125,
    },
    {
      itemId: "item-3",
      itemName: "Mechanical Keyboard",
      quantityOnHand: 29,
      value: 2320,
    },
    {
      itemId: "item-4",
      itemName: "External SSD 1TB",
      quantityOnHand: 17,
      value: 2550,
    },
    { itemId: "item-5", itemName: "USB-C Hub", quantityOnHand: 0, value: 0 }, // Example of item with 0 stock
  ]);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-800 border-b pb-4 mb-4">
        Stockcard Summary
      </h2>
      <p className="text-gray-700">
        This module provides a high-level summary of inventory levels,
        quantities on hand, and current stock values.
      </p>

      {/* Stockcard Summary Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Current Stock Summary
        </h3>
        {stockSummary.length === 0 ? (
          <p className="text-gray-500">No stock summary available.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity On Hand
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Value
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stockSummary.map((item) => (
                <tr key={item.itemId}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.itemName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.quantityOnHand}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${item.value.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/*
                Node.js Backend Considerations for Stockcard Summary:
                - API Endpoints:
                    - GET /api/stock/summary: To fetch the current stock summary.
                - Database Schema: Could be a view or a pre-aggregated collection/table that gets updated by inventory transactions.
                - Business Logic:
                    - Backend aggregates quantities from stock transactions for each item.
                    - Calculates total value based on the chosen costing method (e.g., last purchase price, average cost).
            */}
    </div>
  );
};

// Dummy Data for Batches
const initialBatches = [
  {
    id: "batch-1",
    itemId: "item-6",
    itemName: "Pharma Drug X",
    batchNo: "BATCH-P-202501",
    expiryDate: "2026-12-31",
    quantity: 1000,
  },
  {
    id: "batch-2",
    itemId: "item-7",
    itemName: "Food Product Y",
    batchNo: "BATCH-F-202503",
    expiryDate: "2025-09-15",
    quantity: 500,
  },
];

const Batches = () => {
  const [batches, setBatches] = useState(initialBatches);
  const [newBatch, setNewBatch] = useState({
    itemId: "",
    itemName: "",
    batchNo: "",
    expiryDate: "",
    quantity: "",
  });

  // Dummy items for batch creation dropdown
  const dummyBatchItems = [
    { id: "item-6", name: "Pharma Drug X" },
    { id: "item-7", name: "Food Product Y" },
    { id: "item-8", name: "Cosmetic Z" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "itemId") {
      const selectedItem = dummyBatchItems.find((item) => item.id === value);
      setNewBatch((prev) => ({
        ...prev,
        itemId: value,
        itemName: selectedItem ? selectedItem.name : "",
      }));
    } else {
      setNewBatch((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddBatch = (e) => {
    e.preventDefault();
    if (
      newBatch.itemId &&
      newBatch.batchNo &&
      newBatch.expiryDate &&
      newBatch.quantity
    ) {
      // In a real Node.js backend:
      // 1. Send POST request to /api/batches.
      // 2. Backend saves batch, potentially updates item stock if this represents an initial receipt.
      const newId = `batch-${
        batches.length
          ? Math.max(
              ...batches.map((batch) => parseInt(batch.id.split("-")[1]))
            ) + 1
          : 1
      }`;
      setBatches((prev) => [
        ...prev,
        { ...newBatch, id: newId, quantity: parseInt(newBatch.quantity) },
      ]);
      setNewBatch({
        itemId: "",
        itemName: "",
        batchNo: "",
        expiryDate: "",
        quantity: "",
      }); // Clear form
    } else {
      console.warn("Please fill in all fields to add a batch.");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-800 border-b pb-4 mb-4">
        Batches
      </h2>
      <p className="text-gray-700">
        This module manages inventory items that are tracked by batches, useful
        for expiry dates or specific production runs.
      </p>

      {/* Add New Batch Form */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Add New Batch
        </h3>
        <form
          onSubmit={handleAddBatch}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <div>
            <label
              htmlFor="batchItem"
              className="block text-sm font-medium text-gray-700"
            >
              Item
            </label>
            <select
              id="batchItem"
              name="itemId"
              value={newBatch.itemId}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            >
              <option value="">Select an Item</option>
              {dummyBatchItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="batchNo"
              className="block text-sm font-medium text-gray-700"
            >
              Batch Number
            </label>
            <input
              type="text"
              id="batchNo"
              name="batchNo"
              value={newBatch.batchNo}
              onChange={handleInputChange}
              placeholder="e.g., BATCH-XYZ-001"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-700"
            >
              Expiry Date
            </label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={newBatch.expiryDate}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="batchQuantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="batchQuantity"
              name="quantity"
              value={newBatch.quantity}
              onChange={handleInputChange}
              placeholder="e.g., 100"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              min="1"
              required
            />
          </div>
          <div className="md:col-span-2 lg:col-span-3 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Add Batch
            </button>
          </div>
        </form>
      </div>

      {/* Batches List Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Current Batches
        </h3>
        {batches.length === 0 ? (
          <p className="text-gray-500">No batches added yet.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Batch No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expiry Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {batches.map((batch) => (
                <tr key={batch.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {batch.itemName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {batch.batchNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {batch.expiryDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {batch.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/*
                Node.js Backend Considerations for Batches:
                - API Endpoints:
                    - GET /api/batches: To fetch all batches.
                    - POST /api/batches: To create a new batch.
                    - PUT /api/batches/:id: To update batch details (e.g., quantity if consumed/received).
                    - DELETE /api/batches/:id: To delete a batch (with caution, usually not allowed if transactions exist).
                - Database Schema: A collection/table named 'batches' with fields like `_id`, `item_id`, `batch_number`, `expiry_date`, `quantity`, `location`.
                - Business Logic:
                    - When a GRPO is processed for a batch-managed item, new batch entries are created or existing ones updated.
                    - When items are sold/consumed, specific batches are allocated (e.g., FIFO based on expiry).
                    - Expiry date tracking and alerts.
            */}
    </div>
  );
};

const CostingMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("weighted-average");

  // Simulate different costing methodologies
  const costingDescriptions = {
    "weighted-average":
      "Calculates the average cost of all available inventory for an item.",
    fifo: "Assumes that the first goods purchased are the first ones sold, matching older costs with older sales.",
    lifo: "Assumes that the last goods purchased are the first ones sold, matching newer costs with older sales (less common due to IFRS/GAAP restrictions).",
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-800 border-b pb-4 mb-4">
        Costing Method
      </h2>
      <p className="text-gray-700">
        This module defines and manages the costing methods used for inventory
        valuation.
      </p>

      {/* Costing Method Selection */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <label
          htmlFor="costingMethod"
          className="block text-sm font-medium text-gray-700 min-w-[120px]"
        >
          Select Method:
        </label>
        <select
          id="costingMethod"
          value={selectedMethod}
          onChange={(e) => setSelectedMethod(e.target.value)}
          className="mt-1 block w-full md:w-auto border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
        >
          <option value="weighted-average">Weighted Average Cost</option>
          <option value="fifo">FIFO (First-In, First-Out)</option>
          <option value="lifo">LIFO (Last-In, First-Out)</option>
        </select>
      </div>

      {/* Description of Selected Method */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700 mb-3">
          Details for {selectedMethod.toUpperCase().replace("-", " ")}
        </h3>
        <p className="text-gray-600">{costingDescriptions[selectedMethod]}</p>
        <p className="text-gray-500 text-sm mt-3">
          *In a full ERP, this selection would impact how item costs are
          calculated during goods receipt and when goods are issued (e.g., via
          AR Invoice).*
        </p>
      </div>
      {/*
                Node.js Backend Considerations for Costing Method:
                - API Endpoints:
                    - GET /api/costing-methods: To fetch available methods.
                    - PUT /api/settings/costing-method: To set the default costing method for the organization or per item/category.
                - Database Schema: A 'settings' collection/table storing global ERP settings, or a 'costing_methods' table defining available methods. Item master data might have a field `costing_method_id`.
                - Business Logic:
                    - When a GRPO occurs, the backend updates the cost of the item based on the costing method.
                    - When an AR Invoice (or other outflow) occurs, the backend determines the cost of goods sold based on the costing method.
            */}
    </div>
  );
};

// Dummy Data for Purchase Requisitions
const initialPRs = [
  {
    id: "pr-1",
    date: "2025-05-28",
    requester: "John Doe",
    item: "Laptop Pro",
    quantity: 15,
    status: "Pending Approval",
  },
  {
    id: "pr-2",
    date: "2025-05-30",
    requester: "Jane Smith",
    item: "Office Chairs",
    quantity: 10,
    status: "Approved",
  },
];

const PurchaseRequisition = () => {
  const [purchaseRequisitions, setPurchaseRequisitions] = useState(initialPRs);
  const [newPR, setNewPR] = useState({
    requester: "",
    item: "",
    quantity: "",
    desiredDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPR((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPR = (e) => {
    e.preventDefault();
    if (newPR.requester && newPR.item && newPR.quantity && newPR.desiredDate) {
      // In a real Node.js backend:
      // 1. Send POST request to /api/purchase-requisitions.
      // 2. Backend saves PR and initiates approval workflow.
      const newId = `pr-${
        purchaseRequisitions.length
          ? Math.max(
              ...purchaseRequisitions.map((pr) => parseInt(pr.id.split("-")[1]))
            ) + 1
          : 1
      }`;
      setPurchaseRequisitions((prev) => [
        ...prev,
        {
          ...newPR,
          id: newId,
          quantity: parseInt(newPR.quantity),
          date: new Date().toISOString().slice(0, 10),
          status: "Pending Approval",
        },
      ]);
      setNewPR({ requester: "", item: "", quantity: "", desiredDate: "" });
    } else {
      console.warn("Please fill in all fields to add a Purchase Requisition.");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-800 border-b pb-4 mb-4">
        Purchase Requisition (PR)
      </h2>
      <p className="text-gray-700">
        This module handles internal requests for goods or services, initiating
        the procurement process.
      </p>

      {/* Add New PR Form */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Create New PR
        </h3>
        <form
          onSubmit={handleAddPR}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label
              htmlFor="prRequester"
              className="block text-sm font-medium text-gray-700"
            >
              Requester
            </label>
            <input
              type="text"
              id="prRequester"
              name="requester"
              value={newPR.requester}
              onChange={handleInputChange}
              placeholder="e.g., John Doe"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="prItem"
              className="block text-sm font-medium text-gray-700"
            >
              Item Name
            </label>
            <input
              type="text"
              id="prItem"
              name="item"
              value={newPR.item}
              onChange={handleInputChange}
              placeholder="e.g., External SSD 1TB"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="prQuantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="prQuantity"
              name="quantity"
              value={newPR.quantity}
              onChange={handleInputChange}
              placeholder="e.g., 5"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              min="1"
              required
            />
          </div>
          <div>
            <label
              htmlFor="desiredDate"
              className="block text-sm font-medium text-gray-700"
            >
              Desired Delivery Date
            </label>
            <input
              type="date"
              id="desiredDate"
              name="desiredDate"
              value={newPR.desiredDate}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Submit PR
            </button>
          </div>
        </form>
      </div>

      {/* PR List Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Recent Purchase Requisitions
        </h3>
        {purchaseRequisitions.length === 0 ? (
          <p className="text-gray-500">No purchase requisitions created yet.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PR No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Requester
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {purchaseRequisitions.map((pr) => (
                <tr key={pr.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {pr.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pr.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pr.requester}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pr.item}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pr.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                            ${
                                              pr.status === "Approved"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-yellow-100 text-yellow-800"
                                            }`}
                    >
                      {pr.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/*
                Node.js Backend Considerations for Purchase Requisition:
                - API Endpoints:
                    - GET /api/prs: Fetch all PRs.
                    - POST /api/prs: Create a new PR.
                    - PUT /api/prs/:id/status: Update PR status (e.g., for approval).
                - Database Schema: A 'purchase_requisitions' collection/table with fields like `_id`, `date`, `requester_id`, `item_details` (array of objects), `status`, `desired_delivery_date`.
                - Business Logic:
                    - Link to user/employee master data.
                    - Implement approval workflows.
                    - Can automatically generate PO suggestions based on approved PRs.
            */}
    </div>
  );
};

// Dummy Data for Purchase Orders
const initialPOs = [
  {
    id: "po-1",
    date: "2025-06-01",
    vendor: "Supplier A",
    item: "Laptop Pro",
    quantity: 10,
    status: "Open",
  },
  {
    id: "po-2",
    date: "2025-06-02",
    vendor: "Supplier B",
    item: "Wireless Mouse",
    quantity: 50,
    status: "Partially Received",
  },
];

const PurchaseOrder = () => {
  const [purchaseOrders, setPurchaseOrders] = useState(initialPOs);
  const [newPO, setNewPO] = useState({
    vendor: "",
    item: "",
    quantity: "",
    orderDate: "",
    expectedDelivery: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPO((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPO = (e) => {
    e.preventDefault();
    if (
      newPO.vendor &&
      newPO.item &&
      newPO.quantity &&
      newPO.orderDate &&
      newPO.expectedDelivery
    ) {
      // In a real Node.js backend:
      // 1. Send POST request to /api/pos.
      // 2. Backend saves PO, updates relevant stock on order quantities.
      const newId = `po-${
        purchaseOrders.length
          ? Math.max(
              ...purchaseOrders.map((po) => parseInt(po.id.split("-")[1]))
            ) + 1
          : 1
      }`;
      setPurchaseOrders((prev) => [
        ...prev,
        {
          ...newPO,
          id: newId,
          quantity: parseInt(newPO.quantity),
          status: "Open",
        },
      ]);
      setNewPO({
        vendor: "",
        item: "",
        quantity: "",
        orderDate: "",
        expectedDelivery: "",
      });
    } else {
      console.warn("Please fill in all fields to add a Purchase Order.");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-800 border-b pb-4 mb-4">
        Purchase Order (PO)
      </h2>
      <p className="text-gray-700">
        This module generates official documents sent to suppliers, committing
        to purchase specific goods or services.
      </p>

      {/* Add New PO Form */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Create New PO
        </h3>
        <form
          onSubmit={handleAddPO}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label
              htmlFor="poVendor"
              className="block text-sm font-medium text-gray-700"
            >
              Vendor
            </label>
            <input
              type="text"
              id="poVendor"
              name="vendor"
              value={newPO.vendor}
              onChange={handleInputChange}
              placeholder="e.g., Tech Supplies Inc."
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="poItem"
              className="block text-sm font-medium text-gray-700"
            >
              Item Name
            </label>
            <input
              type="text"
              id="poItem"
              name="item"
              value={newPO.item}
              onChange={handleInputChange}
              placeholder="e.g., Mechanical Keyboard"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="poQuantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="poQuantity"
              name="quantity"
              value={newPO.quantity}
              onChange={handleInputChange}
              placeholder="e.g., 20"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              min="1"
              required
            />
          </div>
          <div>
            <label
              htmlFor="poOrderDate"
              className="block text-sm font-medium text-gray-700"
            >
              Order Date
            </label>
            <input
              type="date"
              id="poOrderDate"
              name="orderDate"
              value={newPO.orderDate}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="poExpectedDelivery"
              className="block text-sm font-medium text-gray-700"
            >
              Expected Delivery
            </label>
            <input
              type="date"
              id="poExpectedDelivery"
              name="expectedDelivery"
              value={newPO.expectedDelivery}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Create PO
            </button>
          </div>
        </form>
      </div>

      {/* PO List Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Recent Purchase Orders
        </h3>
        {purchaseOrders.length === 0 ? (
          <p className="text-gray-500">No purchase orders created yet.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PO No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vendor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {purchaseOrders.map((po) => (
                <tr key={po.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {po.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {po.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {po.vendor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {po.item}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {po.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                            ${
                                              po.status === "Open"
                                                ? "bg-blue-100 text-blue-800"
                                                : po.status ===
                                                  "Partially Received"
                                                ? "bg-orange-100 text-orange-800"
                                                : "bg-green-100 text-green-800"
                                            }`}
                    >
                      {po.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/*
                Node.js Backend Considerations for Purchase Order:
                - API Endpoints:
                    - GET /api/pos: Fetch all POs.
                    - POST /api/pos: Create a new PO.
                    - PUT /api/pos/:id/status: Update PO status (e.g., when partially or fully received).
                - Database Schema: A 'purchase_orders' collection/table with fields like `_id`, `po_number`, `order_date`, `vendor_id`, `items` (array of objects with `item_id`, `quantity`, `unit_price`), `total_amount`, `status`, `expected_delivery_date`.
                - Business Logic:
                    - Link to vendor master data.
                    - Update `quantity_on_order` for items when PO is created.
                    - Update `status` when GRPO or Goods Return against PO occurs.
            */}
    </div>
  );
};

// Dummy Data for Goods Receipt PO
const initialGRPOs = [
  {
    id: "grpo-1",
    date: "2025-06-05",
    poNo: "po-1",
    item: "Laptop Pro",
    quantityReceived: 10,
  },
  {
    id: "grpo-2",
    date: "2025-06-06",
    poNo: "po-2",
    item: "Wireless Mouse",
    quantityReceived: 50,
  },
];

const GoodsReceiptPO = () => {
  const [grpos, setGrpos] = useState(initialGRPOs);
  const [newGRPO, setNewGRPO] = useState({
    poNo: "",
    item: "",
    quantityReceived: "",
    receiptDate: "",
  });

  // Dummy POs for dropdown (should come from backend)
  const dummyPOs = [
    { id: "po-1", item: "Laptop Pro", quantity: 10, status: "Open" },
    { id: "po-2", item: "Wireless Mouse", quantity: 50, status: "Open" },
    { id: "po-3", item: "Mechanical Keyboard", quantity: 20, status: "Open" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGRPO((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddGRPO = (e) => {
    e.preventDefault();
    if (
      newGRPO.poNo &&
      newGRPO.item &&
      newGRPO.quantityReceived &&
      newGRPO.receiptDate
    ) {
      // In a real Node.js backend:
      // 1. Send POST request to /api/grpos.
      // 2. Backend validates against PO.
      // 3. Backend updates item stock (`quantity_on_hand`).
      // 4. Backend creates stockcard entry.
      // 5. Backend updates PO status (e.g., 'Partially Received' or 'Closed').
      const newId = `grpo-${
        grpos.length
          ? Math.max(...grpos.map((g) => parseInt(g.id.split("-")[1]))) + 1
          : 1
      }`;
      setGrpos((prev) => [
        ...prev,
        {
          ...newGRPO,
          id: newId,
          quantityReceived: parseInt(newGRPO.quantityReceived),
        },
      ]);
      setNewGRPO({ poNo: "", item: "", quantityReceived: "", receiptDate: "" });
    } else {
      console.warn("Please fill in all fields to add a Goods Receipt PO.");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-800 border-b pb-4 mb-4">
        Goods Receipt PO (GRPO)
      </h2>
      <p className="text-gray-700">
        This module records the receipt of goods against a Purchase Order,
        updating inventory levels.
      </p>

      {/* Add New GRPO Form */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Record Goods Receipt
        </h3>
        <form
          onSubmit={handleAddGRPO}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label
              htmlFor="grpoPoNo"
              className="block text-sm font-medium text-gray-700"
            >
              Purchase Order No.
            </label>
            <select
              id="grpoPoNo"
              name="poNo"
              value={newGRPO.poNo}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            >
              <option value="">Select a PO</option>
              {dummyPOs.map((po) => (
                <option key={po.id} value={po.id}>
                  {po.id} ({po.item})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="grpoItem"
              className="block text-sm font-medium text-gray-700"
            >
              Item Name (from PO)
            </label>
            <input
              type="text"
              id="grpoItem"
              name="item"
              value={newGRPO.item}
              onChange={handleInputChange}
              placeholder="e.g., Laptop Pro"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="grpoQuantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity Received
            </label>
            <input
              type="number"
              id="grpoQuantity"
              name="quantityReceived"
              value={newGRPO.quantityReceived}
              onChange={handleInputChange}
              placeholder="e.g., 10"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              min="1"
              required
            />
          </div>
          <div>
            <label
              htmlFor="grpoReceiptDate"
              className="block text-sm font-medium text-gray-700"
            >
              Receipt Date
            </label>
            <input
              type="date"
              id="grpoReceiptDate"
              name="receiptDate"
              value={newGRPO.receiptDate}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Record GRPO
            </button>
          </div>
        </form>
      </div>

      {/* GRPO List Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Recent Goods Receipts
        </h3>
        {grpos.length === 0 ? (
          <p className="text-gray-500">No goods receipts recorded yet.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  GRPO No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PO No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity Received
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {grpos.map((grpo) => (
                <tr key={grpo.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {grpo.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {grpo.receiptDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {grpo.poNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {grpo.item}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {grpo.quantityReceived}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/*
                Node.js Backend Considerations for Goods Receipt PO:
                - API Endpoints:
                    - GET /api/grpos: Fetch all GRPOs.
                    - POST /api/grpos: Create a new GRPO.
                - Database Schema: A 'goods_receipt_pos' collection/table with fields like `_id`, `grpo_number`, `receipt_date`, `po_id`, `items_received` (array of objects with `item_id`, `quantity`, `unit_cost`).
                - Business Logic:
                    - Crucial for inventory management.
                    - Upon GRPO creation:
                        - Increment `quantity_on_hand` for affected items in `items` collection.
                        - Decrement `quantity_on_order` for affected items in `items` collection.
                        - Update `received_quantity` on the related PO.
                        - Update PO `status` (e.g., 'Partially Received', 'Closed').
                        - Create a new entry in `stock_transactions` for the inflow.
                        - Apply costing method to determine the cost of received goods.
            */}
    </div>
  );
};

// Dummy Data for Goods Return
const initialGoodsReturns = [
  {
    id: "gr-1",
    date: "2025-06-07",
    item: "Defective Monitor",
    quantity: 1,
    reason: "Defective",
    supplier: "Supplier C",
  },
  {
    id: "gr-2",
    date: "2025-06-10",
    item: "Wrong Item Delivered",
    quantity: 5,
    reason: "Incorrect Item",
    supplier: "Supplier A",
  },
];

const GoodsReturn = () => {
  const [goodsReturns, setGoodsReturns] = useState(initialGoodsReturns);
  const [newGoodsReturn, setNewGoodsReturn] = useState({
    item: "",
    quantity: "",
    reason: "",
    supplier: "",
    returnDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGoodsReturn((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddGoodsReturn = (e) => {
    e.preventDefault();
    if (
      newGoodsReturn.item &&
      newGoodsReturn.quantity &&
      newGoodsReturn.reason &&
      newGoodsReturn.supplier &&
      newGoodsReturn.returnDate
    ) {
      // In a real Node.js backend:
      // 1. Send POST request to /api/goods-returns.
      // 2. Backend records return, decrements item stock.
      // 3. Backend creates negative stockcard entry.
      const newId = `grtn-${
        goodsReturns.length
          ? Math.max(...goodsReturns.map((g) => parseInt(g.id.split("-")[1]))) +
            1
          : 1
      }`;
      setGoodsReturns((prev) => [
        ...prev,
        {
          ...newGoodsReturn,
          id: newId,
          quantity: parseInt(newGoodsReturn.quantity),
        },
      ]);
      setNewGoodsReturn({
        item: "",
        quantity: "",
        reason: "",
        supplier: "",
        returnDate: "",
      });
    } else {
      console.warn("Please fill in all fields to record a Goods Return.");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-800 border-b pb-4 mb-4">
        Goods Return (to Supplier)
      </h2>
      <p className="text-gray-700">
        This module manages the process of returning goods to suppliers, often
        linked to previous GRPOs.
      </p>

      {/* Add New Goods Return Form */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Record Goods Return
        </h3>
        <form
          onSubmit={handleAddGoodsReturn}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label
              htmlFor="grItem"
              className="block text-sm font-medium text-gray-700"
            >
              Item Name
            </label>
            <input
              type="text"
              id="grItem"
              name="item"
              value={newGoodsReturn.item}
              onChange={handleInputChange}
              placeholder="e.g., Defective Monitor"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="grQuantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity to Return
            </label>
            <input
              type="number"
              id="grQuantity"
              name="quantity"
              value={newGoodsReturn.quantity}
              onChange={handleInputChange}
              placeholder="e.g., 1"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              min="1"
              required
            />
          </div>
          <div>
            <label
              htmlFor="grReason"
              className="block text-sm font-medium text-gray-700"
            >
              Reason for Return
            </label>
            <input
              type="text"
              id="grReason"
              name="reason"
              value={newGoodsReturn.reason}
              onChange={handleInputChange}
              placeholder="e.g., Defective product"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="grSupplier"
              className="block text-sm font-medium text-gray-700"
            >
              Supplier
            </label>
            <input
              type="text"
              id="grSupplier"
              name="supplier"
              value={newGoodsReturn.supplier}
              onChange={handleInputChange}
              placeholder="e.g., Supplier C"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="grReturnDate"
              className="block text-sm font-medium text-gray-700"
            >
              Return Date
            </label>
            <input
              type="date"
              id="grReturnDate"
              name="returnDate"
              value={newGoodsReturn.returnDate}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Record Goods Return
            </button>
          </div>
        </form>
      </div>

      {/* Goods Return List Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Recent Goods Returns
        </h3>
        {goodsReturns.length === 0 ? (
          <p className="text-gray-500">No goods returns recorded yet.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Return No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reason
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Supplier
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {goodsReturns.map((gr) => (
                <tr key={gr.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {gr.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {gr.returnDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {gr.item}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {gr.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {gr.reason}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {gr.supplier}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/*
                Node.js Backend Considerations for Goods Return:
                - API Endpoints:
                    - GET /api/goods-returns: Fetch all goods returns.
                    - POST /api/goods-returns: Create a new goods return.
                - Database Schema: A 'goods_returns' collection/table with fields like `_id`, `return_number`, `return_date`, `item_id`, `quantity`, `reason`, `supplier_id`, `related_grpo_id` (optional).
                - Business Logic:
                    - Decrement `quantity_on_hand` for affected items in `items` collection.
                    - Create a new entry in `stock_transactions` for the outflow.
                    - Potentially generate a credit memo from the supplier.
            */}
    </div>
  );
};

// Dummy Data for AR Invoices
const initialARInvoices = [
  {
    id: "inv-1",
    date: "2025-06-05",
    customer: "Customer X",
    item: "Laptop Pro",
    quantity: 2,
    totalAmount: 2400,
    status: "Outstanding",
  },
  {
    id: "inv-2",
    date: "2025-06-06",
    customer: "Customer Y",
    item: "Wireless Mouse",
    quantity: 5,
    totalAmount: 125,
    status: "Paid",
  },
];

const ARInvoice = () => {
  const [arInvoices, setArInvoices] = useState(initialARInvoices);
  const [newARInvoice, setNewARInvoice] = useState({
    customer: "",
    item: "",
    quantity: "",
    invoiceDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewARInvoice((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddARInvoice = (e) => {
    e.preventDefault();
    if (
      newARInvoice.customer &&
      newARInvoice.item &&
      newARInvoice.quantity &&
      newARInvoice.invoiceDate
    ) {
      // In a real Node.js backend:
      // 1. Send POST request to /api/arinvoices.
      // 2. Backend validates available stock.
      // 3. Backend decrements item stock.
      // 4. Backend creates stockcard entry (outflow).
      // 5. Backend calculates total amount.
      // 6. Backend records receivable.
      const newId = `inv-${
        arInvoices.length
          ? Math.max(...arInvoices.map((i) => parseInt(i.id.split("-")[1]))) + 1
          : 1
      }`;
      // For demo, calculate dummy total amount based on hardcoded price
      const dummyPrice =
        initialItems.find((it) => it.name === newARInvoice.item)?.price || 0;
      const calculatedTotal = parseFloat(newARInvoice.quantity) * dummyPrice;

      setArInvoices((prev) => [
        ...prev,
        {
          ...newARInvoice,
          id: newId,
          quantity: parseInt(newARInvoice.quantity),
          totalAmount: calculatedTotal,
          status: "Outstanding",
        },
      ]);
      setNewARInvoice({
        customer: "",
        item: "",
        quantity: "",
        invoiceDate: "",
      });
    } else {
      console.warn("Please fill in all fields to create an AR Invoice.");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-800 border-b pb-4 mb-4">
        AR Invoice (Accounts Receivable Invoice)
      </h2>
      <p className="text-gray-700">
        This module generates invoices for customers, reflecting goods sold or
        services rendered, and manages outstanding receivables.
      </p>

      {/* Add New AR Invoice Form */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Create New AR Invoice
        </h3>
        <form
          onSubmit={handleAddARInvoice}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label
              htmlFor="arCustomer"
              className="block text-sm font-medium text-gray-700"
            >
              Customer Name
            </label>
            <input
              type="text"
              id="arCustomer"
              name="customer"
              value={newARInvoice.customer}
              onChange={handleInputChange}
              placeholder="e.g., Global Corp."
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="arItem"
              className="block text-sm font-medium text-gray-700"
            >
              Item Name
            </label>
            <input
              type="text"
              id="arItem"
              name="item"
              value={newARInvoice.item}
              onChange={handleInputChange}
              placeholder="e.g., External SSD 1TB"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="arQuantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="arQuantity"
              name="quantity"
              value={newARInvoice.quantity}
              onChange={handleInputChange}
              placeholder="e.g., 3"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              min="1"
              required
            />
          </div>
          <div>
            <label
              htmlFor="arInvoiceDate"
              className="block text-sm font-medium text-gray-700"
            >
              Invoice Date
            </label>
            <input
              type="date"
              id="arInvoiceDate"
              name="invoiceDate"
              value={newARInvoice.invoiceDate}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              required
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Create Invoice
            </button>
          </div>
        </form>
      </div>

      {/* AR Invoice List Table */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Recent AR Invoices
        </h3>
        {arInvoices.length === 0 ? (
          <p className="text-gray-500">No AR Invoices created yet.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {arInvoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {invoice.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {invoice.invoiceDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {invoice.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {invoice.item}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {invoice.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${invoice.totalAmount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                            ${
                                              invoice.status === "Paid"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                            }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/*
                Node.js Backend Considerations for AR Invoice:
                - API Endpoints:
                    - GET /api/arinvoices: Fetch all AR Invoices.
                    - POST /api/arinvoices: Create a new AR Invoice.
                    - PUT /api/arinvoices/:id/status: Update invoice status (e.g., mark as paid).
                - Database Schema: An 'ar_invoices' collection/table with fields like `_id`, `invoice_number`, `invoice_date`, `customer_id`, `items_sold` (array of objects with `item_id`, `quantity`, `unit_price`, `line_total`), `total_amount`, `status` (`Outstanding`, `Paid`, `Partially Paid`), `due_date`.
                - Business Logic:
                    - Link to customer master data.
                    - Upon invoice creation:
                        - Decrement `quantity_on_hand` for affected items in `items` collection.
                        - Create a new entry in `stock_transactions` for the outflow.
                        - Record the receivable in the accounting module.
                        - Calculate `cost_of_goods_sold` based on the item's costing method.
            */}
    </div>
  );
};

// Export the main App component as default
export default App;
