import React, { FunctionComponent, useState } from "react";

interface Props {
    onSearch(username: string): void;
    onClear(): void;
}

const SearchComponent: FunctionComponent<Props> = props => {
  const { onSearch, onClear } = props;
  const [username, setUsername] = useState("");
  //const [song, setSong] = useState("");

  return (
    <div>
      <input
        value={username}
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />
      {/* <input
        value={song}
        placeholder="song"
        onChange={e => setSong(e.target.value)}
      /> */}
      <button
        onClick={() => {
          onSearch(username);
          setUsername("");
    
        }}
      >
        Get User
      </button>
      {/* <button onClick={onClear}>Clear Results</button> */}
    </div>
  );
};

export default SearchComponent;
