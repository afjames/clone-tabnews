function status(request, response) {
  response.status(404).json({ chave: "" });
}

export default status;
