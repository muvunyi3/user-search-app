import axios from "axios";

interface userResponse {
  login: string;
  id: string;
  name: string;
  avatar_url: string;
}

export async function fetchUser(
  username: string
): Promise<userResponse> {
  return await axios.get(` https://api.github.com/users/${username}`);
}
