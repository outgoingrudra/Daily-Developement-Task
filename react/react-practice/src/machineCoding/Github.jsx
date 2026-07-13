import React, { useEffect, useState } from "react";

export default function Github() {
  const [input, setInput] = useState("rudra");
  const [users, setUsers] = useState([]);
  const [cache, setCache] = useState({});
  const [loading, setLoading] = useState(false);
  const [showAllUsers, setShowAllUsers] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const timer = setTimeout(() => {
      fetchUser(controller.signal);
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [input]);

  async function fetchUser(signal) {
    const query = input.trim();

    if (!query) {
      setUsers([]);
      setShowAllUsers(false);
      return;
    }

    // Return cached data
    if (cache[query]) {
      console.log("Returned from Cache:", query);
      setUsers(cache[query]);
      setShowAllUsers(false);
      return;
    }

    try {
      setLoading(true);
      setShowAllUsers(false);

      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`,
        { signal }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const result = await response.json();

      setUsers(result.items);

      setCache((prev) => ({
        ...prev,
        [query]: result.items,
      }));

      console.log("Fetched:", query);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error(err);
        setUsers([]);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="text-center text-3xl my-3">Find User</h1>

      <div className="flex justify-center items-center h-20">
        <input
          type="text"
          placeholder="@username"
          value={input}
          className="border-2 rounded-lg w-1/2 px-3 py-2 text-lg"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {loading ? (
        <h2 className="text-center text-xl font-semibold">Loading...</h2>
      ) : (
        <>
          {users.length === 0 ? (
            <h3 className="text-2xl text-center text-green-700">
              No Users Found
            </h3>
          ) : (
            users
              .slice(0, showAllUsers ? users.length : 5)
              .map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  input={input.trim()}
                />
              ))
          )}

          {users.length > 5 && (
            <div className="text-center my-4">
              <button
                className="border px-4 py-2 bg-green-400 rounded-lg cursor-pointer"
                onClick={() => setShowAllUsers((prev) => !prev)}
              >
                Show {showAllUsers ? "Less" : "More"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function UserCard({ user, input }) {
  const name = user.login;
  const index = name.toLowerCase().indexOf(input.toLowerCase());

  let before = "";
  let match = "";
  let after = "";

  if (index !== -1) {
    before = name.slice(0, index);
    match = name.slice(index, index + input.length);
    after = name.slice(index + input.length);
  }

  return (
    <div className="flex items-center border px-3 py-2">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="h-10 w-10 rounded-full"
      />

      <div className="px-3 text-xl">
        {index === -1 ? (
          name
        ) : (
          <>
            <span>{before}</span>
            <span className="bg-yellow-300 font-bold px-1 rounded">
              {match}
            </span>
            <span>{after}</span>
          </>
        )}
      </div>

      <div className="flex justify-end w-full">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border px-3 py-2 rounded-xl text-green-600">
            Link
          </button>
        </a>
      </div>
    </div>
  );
}