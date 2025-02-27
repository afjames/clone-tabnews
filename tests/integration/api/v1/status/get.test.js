test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://glorious-invention-x67976447qf65v9-3000.app.github.dev/api/v1/status",
  );
  expect(response.status).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});
