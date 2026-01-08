import React, { useState } from "react";
import { inventoryList } from "../../data/mockData";

export default function Inventory() {
  const [filters, setFilters] = useState({
    name: "",
    brand: "",
    category: ""
  });
  const [sortKey, setSortKey] = useState("");
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 5;

  const filtered = inventoryList
    .filter(p =>
      p.name.toLowerCase().includes(filters.name.toLowerCase())
    )
    .filter(p =>
      p.brand.toLowerCase().includes(filters.brand.toLowerCase())
    )
    .filter(p =>
      p.category.toLowerCase().includes(filters.category.toLowerCase())
    );

  const sorted = [...filtered].sort((a, b) => {
    if (!sortKey) return 0;
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
  const paginated = sorted.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div>
      <h1>Inventory</h1>

      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        <input
          placeholder="Product name"
          onChange={e =>
            setFilters({ ...filters, name: e.target.value })
          }
        />
        <input
          placeholder="Brand"
          onChange={e =>
            setFilters({ ...filters, brand: e.target.value })
          }
        />
        <input
          placeholder="Category"
          onChange={e =>
            setFilters({ ...filters, category: e.target.value })
          }
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th onClick={() => setSortKey("price")}>Price ⇅</th>
            <th onClick={() => setSortKey("quantity")}>Qty ⇅</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.brand}</td>
              <td>{p.category}</td>
              <td>₹{p.price}</td>
              <td>{p.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "12px" }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span style={{ margin: "0 8px" }}>
          {page} / {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
