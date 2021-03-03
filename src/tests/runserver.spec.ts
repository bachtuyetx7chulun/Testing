import { expect } from "chai";
import axios from "axios";

describe("Check log", () => {
  it("handle check log", async () => {
    const { data } = await axios.get("http://localhost:5000/");
  });
});
