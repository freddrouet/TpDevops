import { moteur, portes, vitesse, poids } from "./module";

describe("moteur function", () => {
  it("doit retourner 1200", () => {
    expect(moteur()).toBe("1200");
  });
});

describe("portes function", () => {
  it("doit retourner 4", () => {
    expect(portes()).toBe(4);
  });
});

describe("vitesse function", () => {
  it("doit retourner 100", () => {
    expect(vitesse()).toBe("100");
  });
});

describe("poids function", () => {
  it("doit retourner 900", () => {
    expect(poids()).toBe("900");
  });
});
