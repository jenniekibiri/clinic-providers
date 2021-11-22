import supertest from "supertest";
import server from "../index.js";

describe("get clinics", () => {
  const clinics = [
    {
      name: "Good Health Home",
      stateName: "Alaska",
      availability: { from: "10:00", to: "19:30" },
    },
    {
      name: "Mayo Clinic",
      stateName: "Florida",
      availability: { from: "09:00", to: "20:00" },
    },
  ];
  it("should return a list of all clinics", async () => {
    const response = await supertest(server).get("/clinics");
    expect(response.status).toBe(200);
    expect(response.body[0].name).toEqual(clinics[0].name);
    expect(response.body[0].stateName).toEqual(clinics[0].stateName);
    expect(response.body).toHaveLength(10);
  });
});

describe("get clinics", () => {
  const clinics = [
    {
      name: "Good Health Home",
      stateName: "Alaska",
      availability: { from: "10:00", to: "19:30" },
    },
    {
      name: "Mayo Clinic",
      stateName: "Florida",
      availability: { from: "09:00", to: "20:00" },
    },
  ];
  it("should return a list of all clinics that match the search criteria", async () => {
    const clinics = [
      {
        name: "Good Health Home",
        stateName: "Alaska",
        availability: { from: "10:00", to: "19:30" },
      },
    ];
    const response = await supertest(server).get(
      "/clinics/search?name=Good+Health+Home"
    );
    expect(response.status).toBe(200);
    expect(response.body[0].name).toEqual(clinics[0].name);
    expect(response.body[0].stateName).toEqual(clinics[0].stateName);
    expect(response.body).toHaveLength(1);
  });
});
