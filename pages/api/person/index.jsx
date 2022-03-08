export default function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    const response = fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    return response;
  }

  //   if (method === "POST") {
  //     const { body } = request;
  //     data.push({ ...body, id: data.length + 1 });
  //     return response.status(200).json(data);
  //   }
}
