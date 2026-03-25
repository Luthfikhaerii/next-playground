export async function getUser() {
  const res = await fetch("/api/user");
  return res.json();
}