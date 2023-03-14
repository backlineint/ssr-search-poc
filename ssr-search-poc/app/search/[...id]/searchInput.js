"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
 
  const router = useRouter();

  const onSearch = (event) => {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search/${encodedSearchQuery}`);
  };

  return (
    <div>
    <form onSubmit={onSearch} className="justify-center w-2/3">
      <input
        value={searchQuery || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 rounded-full focus:outline-none focus:ring-[1px]"
        placeholder="Search For Articles"
      />
    </form>
    </div>
  );
};

export default SearchInput;