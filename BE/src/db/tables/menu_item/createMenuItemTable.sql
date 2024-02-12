CREATE TABLE menu_item (
    id UUID PRIMARY KEY,
    img_src VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    category_id UUID REFERENCES category(id),
    qty_available INT NOT NULL,
    is_available BOOLEAN
);