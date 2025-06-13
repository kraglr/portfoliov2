-- SQL Database Schema for ERP Prototype

-- -----------------------------------------------------
-- Table `items`
-- Stores master data for all inventory items (raw materials, components, and finished goods).
-- -----------------------------------------------------
CREATE TABLE items (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    sku VARCHAR(100) NOT NULL UNIQUE,
    unit VARCHAR(50),
    price DECIMAL(10, 2) NOT NULL, -- This is typically the purchase price or standard cost
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Add a function/trigger for updated_at if your SQL dialect supports it
-- For PostgreSQL:
-- CREATE OR REPLACE FUNCTION update_timestamp() RETURNS TRIGGER AS $$
-- BEGIN
--    NEW.updated_at = NOW();
--    RETURN NEW;
-- END;
-- $$ language 'plpgsql';
--
-- CREATE TRIGGER update_items_updated_at
-- BEFORE UPDATE ON items
-- FOR EACH ROW EXECUTE PROCEDURE update_timestamp();

-- -----------------------------------------------------
-- Table `product_assemblies`
-- Defines "parent" items (assembled products or finished goods)
-- that are made up of other components. This acts as the Bill of Materials (BOM) header.
-- -----------------------------------------------------
CREATE TABLE product_assemblies (
    id VARCHAR(50) PRIMARY KEY,
    assembled_item_id VARCHAR(50) NOT NULL UNIQUE, -- Links to the actual assembled item in the 'items' table
    assembly_description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (assembled_item_id) REFERENCES items(id)
);

-- -----------------------------------------------------
-- Table `assembly_components`
-- Defines the "child" items (components) for each product assembly.
-- This table lists the components and their quantities required for one unit of the assembled product.
-- -----------------------------------------------------
CREATE TABLE assembly_components (
    id VARCHAR(50) PRIMARY KEY,
    assembly_id VARCHAR(50) NOT NULL, -- Foreign key to product_assemblies
    component_item_id VARCHAR(50) NOT NULL, -- Foreign key to items table (the component item)
    quantity_required INT NOT NULL CHECK (quantity_required > 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (assembly_id, component_item_id), -- An assembly cannot have the same component listed twice
    FOREIGN KEY (assembly_id) REFERENCES product_assemblies(id),
    FOREIGN KEY (component_item_id) REFERENCES items(id)
);


-- -----------------------------------------------------
-- Table `stock_transactions`
-- Records all movements of inventory for each item (stockcard).
-- This table is critical for stock history and balance calculation.
-- -----------------------------------------------------
CREATE TABLE stock_transactions (
    id VARCHAR(50) PRIMARY KEY,
    transaction_date DATE NOT NULL,
    item_id VARCHAR(50) NOT NULL,
    transaction_type VARCHAR(50) NOT NULL, -- e.g., 'GRPO', 'AR_INVOICE', 'GOODS_RETURN', 'ADJUSTMENT', 'ASSEMBLY_CONSUMPTION', 'ASSEMBLY_PRODUCTION'
    quantity_change INT NOT NULL,         -- Positive for inflow, negative for outflow
    current_balance INT NOT NULL,         -- The balance after this transaction
    source_document_id VARCHAR(50),       -- Links to PR, PO, GRPO, AR_Invoice, Goods_Return, Product_Assembly record
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (item_id) REFERENCES items(id)
);

-- -----------------------------------------------------
-- Table `batches`
-- Manages inventory items that are tracked by batches.
-- -----------------------------------------------------
CREATE TABLE batches (
    id VARCHAR(50) PRIMARY KEY,
    item_id VARCHAR(50) NOT NULL,
    batch_number VARCHAR(100) NOT NULL,
    expiry_date DATE,
    quantity INT NOT NULL CHECK (quantity >= 0),
    location VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (item_id, batch_number), -- Ensures uniqueness per item and batch number
    FOREIGN KEY (item_id) REFERENCES items(id)
);

-- -----------------------------------------------------
-- Table `settings`
-- A simple table to store global settings like the default costing method.
-- In a real ERP, this might be more complex with per-company settings.
-- -----------------------------------------------------
CREATE TABLE settings (
    setting_key VARCHAR(100) PRIMARY KEY,
    setting_value VARCHAR(255) NOT NULL,
    description TEXT
);

-- Insert initial costing method setting
INSERT INTO settings (setting_key, setting_value, description) VALUES
('default_costing_method', 'weighted-average', 'The default inventory costing method (e.g., weighted-average, FIFO, LIFO)');


-- -----------------------------------------------------
-- Table `purchase_requisitions`
-- Records internal requests for goods or services.
-- -----------------------------------------------------
CREATE TABLE purchase_requisitions (
    id VARCHAR(50) PRIMARY KEY,
    pr_number VARCHAR(100) UNIQUE NOT NULL,
    request_date DATE NOT NULL,
    requester_name VARCHAR(255) NOT NULL, -- In a real system, this would be requester_id linking to a users table
    item_details JSONB, -- Stores an array of item objects for the PR, e.g., [{"item_id": "item-1", "quantity": 10}]
    desired_delivery_date DATE,
    status VARCHAR(50) NOT NULL DEFAULT 'Pending Approval', -- 'Pending Approval', 'Approved', 'Rejected', 'Converted to PO'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -----------------------------------------------------
-- Table `purchase_orders`
-- Stores official purchase orders sent to suppliers.
-- -----------------------------------------------------
CREATE TABLE purchase_orders (
    id VARCHAR(50) PRIMARY KEY,
    po_number VARCHAR(100) UNIQUE NOT NULL,
    order_date DATE NOT NULL,
    vendor_name VARCHAR(255) NOT NULL, -- In a real system, this would be vendor_id linking to a vendors table
    items_ordered JSONB, -- Stores an array of item objects for the PO, e.g., [{"item_id": "item-1", "quantity": 10, "unit_price": 1000}]
    total_amount DECIMAL(15, 2) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'Open', -- 'Open', 'Partially Received', 'Closed', 'Cancelled'
    expected_delivery_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -----------------------------------------------------
-- Table `goods_receipt_pos`
-- Records the receipt of goods against a Purchase Order.
-- -----------------------------------------------------
CREATE TABLE goods_receipt_pos (
    id VARCHAR(50) PRIMARY KEY,
    grpo_number VARCHAR(100) UNIQUE NOT NULL,
    receipt_date DATE NOT NULL,
    po_id VARCHAR(50) NOT NULL,
    items_received JSONB, -- Stores an array of item objects received, e.g., [{"item_id": "item-1", "quantity_received": 10, "unit_cost": 1000}]
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (po_id) REFERENCES purchase_orders(id)
);

-- -----------------------------------------------------
-- Table `goods_returns`
-- Records returns of goods to suppliers.
-- -----------------------------------------------------
CREATE TABLE goods_returns (
    id VARCHAR(50) PRIMARY KEY,
    return_number VARCHAR(100) UNIQUE NOT NULL,
    return_date DATE NOT NULL,
    item_returned VARCHAR(255) NOT NULL, -- Simplified for prototype, would be item_id
    quantity INT NOT NULL CHECK (quantity > 0),
    reason TEXT,
    supplier_name VARCHAR(255) NOT NULL, -- Simplified for prototype, would be supplier_id
    related_grpo_id VARCHAR(50), -- Optional link to original GRPO
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -----------------------------------------------------
-- Table `ar_invoices`
-- Stores Accounts Receivable Invoices generated for customers.
-- -----------------------------------------------------
CREATE TABLE ar_invoices (
    id VARCHAR(50) PRIMARY KEY,
    invoice_number VARCHAR(100) UNIQUE NOT NULL,
    invoice_date DATE NOT NULL,
    customer_name VARCHAR(255) NOT NULL, -- In a real system, this would be customer_id linking to a customers table
    items_sold JSONB, -- Stores an array of item objects sold, e.g., [{"item_id": "item-1", "quantity": 2, "unit_price": 1200, "line_total": 2400}]
    total_amount DECIMAL(15, 2) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'Outstanding', -- 'Outstanding', 'Paid', 'Partially Paid', 'Cancelled'
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
