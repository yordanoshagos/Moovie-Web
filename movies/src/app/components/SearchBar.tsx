"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim().length > 0) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={onSearch} className="m-5 flex">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-7 py-1 w-[110%] text-base border border-gray-300 rounded-4xl focus:outline-none focus:ring"
      />
  
    </form>
  );
}
