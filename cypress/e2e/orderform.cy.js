describe("Order Form Loads", () => {
  beforeEach(() => cy.visit("/"));
  it("Shows the home page", () => {
    cy.get("div.order-form-title h2").should("have.text", "Online Order Form");
  });
});

describe("Order Form Loads", () => {
  let formJson;
  before(() => {
    cy.visit("/");
    cy.fixture("filled-out-form.json").then(function (data) {
      formJson = data;
    });
  });

  it("Order Form Fill", () => {
    cy.get("label#pickup").click();
    cy.get("div.location-selector label").then((labels) => labels[0].click());
    // cy.wait(2000);
  });
  it("Billing", () => {
    const billingFields = [
      "billingAddress",
      "billingCity",
      "billingZip",
      "billingEmail",
      "billingCompany",
      "billingContactName",
      "billingPhone",
    ];

    billingFields.forEach((f) => {
      cy.get(`#billingForm input[name='${f}']`).type(formJson[f]);
      // inputs.map((i) => cy.get(`input[name='${i.name}']`)).type("test");
    });

    cy.get("#billingForm select").select(formJson["billingState"]);
    cy.get("button#btn-next").click();
  });
  it("Generator", () => {
    cy.get("#generatorForm .big-button label").click();
  });
  it("Material Selector", () => {
    cy.get(".material-picker--wrapper .material-picker--selector").each(
      ($el) => {
        cy.wrap($el).click();
      },
    );
    cy.get(".progress-nodes .sub-item--ul li").should("have.length", 6);
    cy.get("button#btn-next").click();
  });

  ["Ballast", "Batteries", "EWaste", "Haz", "Lamps", "Specialty"].map(
    (item) => {
      it(`Fill In: ${item}`, () => {
        cy.get(`.material-holder #${item.toLowerCase()} input[type=text]`).each(
          ($el) => {
            cy.wrap($el).type(200);
          },
        );
        cy.get("button#btn-next").click();
      });
    },
  );
  it("Containers", () => {
    cy.get(`.containers input[type=text]`).each(($el) => {
      cy.wrap($el).type(200);
    });
    cy.get("button#btn-next").click();
  });
  it("Site Details", () => {
    cy.get(`input[name='heightRestrictions']`).type("None");
    cy.get(`input[name='noPallets']`).type(12345);
    cy.get(`input[name='estTotalWeight']`).type(4500);
    cy.get(`textarea[name='comments']`).type(
      `This order was auto generated by cypress testing.`,
    );
    cy.get(`.site-info label`).each(($el) => {
      cy.wrap($el).click();
    });
  });
  it("Can upload file", () => {
    // cy.get("input[type=file]").selectFile("cypress/fixtures/logo.png");
    cy.get("button#btn-submit").click();
  });
  it("Confirm Page", () => {
    cy.get("button#submit-form").click();
  });
});
