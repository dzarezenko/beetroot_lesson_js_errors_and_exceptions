class DataBaseError extends Error {

  name = "DataBaseError";

}

try {
  throw new DataBaseError("Database connection error");
} catch (e) {
  console.log(e.name);
  console.log(e.message);
}
