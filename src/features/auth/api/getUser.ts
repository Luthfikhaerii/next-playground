export async function getUser(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users",{
    method: "GET"
  })
  return res.json()
}