const Transactions = artifacts.require("Transactions");

contract("Transactions", (accounts) => {
  let instance;

  const contractor = accounts[1];
  const stateGov = accounts[2];
  const vendor = accounts[3];

  beforeEach(async () => {
    instance = await Transactions.new({ from: accounts[0] });
  });

  it("should deploy the contract", async () => {
    assert.ok(instance.address);
  });

  it("should allow a contractor to add a tender", async () => {
    await instance.add_Tender(
      1,
      "ABC Constructions",
      web3.utils.toWei("5", "ether"),
      { from: contractor }
    );

    const details = await instance.review_details(contractor);
    assert.equal(details[0].toString(), "1");
    assert.equal(details[1], "ABC Constructions");
    assert.equal(details[2].toString(), web3.utils.toWei("5", "ether"));
    assert.equal(details[3], contractor);
  });

  it("should emit and store fund request to state government", async () => {
    const tx = await instance.request_Funds_to_CG(
      stateGov,
      web3.utils.toWei("2", "ether"),
      {
        from: accounts[0],
        value: web3.utils.toWei("2", "ether"),
      }
    );

    assert.equal(tx.logs[0].event, "funds_To_CGG");
    assert.equal(tx.logs[0].args._from, stateGov);
    assert.equal(
      tx.logs[0].args._value.toString(),
      web3.utils.toWei("2", "ether")
    );
  });

  it("should transfer funds from state to contractor", async () => {
    const tx = await instance.funds_To_Contractor(
      contractor,
      web3.utils.toWei("1", "ether"),
      {
        from: stateGov,
        value: web3.utils.toWei("1", "ether"),
      }
    );

    assert.equal(tx.logs[0].event, "funds_To_Contractorr");
    assert.equal(tx.logs[0].args._from, stateGov);
    assert.equal(tx.logs[0].args._to, contractor);
    assert.equal(
      tx.logs[0].args._value.toString(),
      web3.utils.toWei("1", "ether")
    );
  });

  it("should add vendor under a contractor and emit event", async () => {
    await instance.set_contr_4Vend("ContractorABC", { from: contractor });

    const tx = await instance.add_details(
      "VendorCorp",
      "Plumbing",
      web3.utils.toWei("0.5", "ether"),
      {
        from: vendor,
      }
    );

    assert.equal(tx.logs[0].event, "Vendors_under_Contractor");
    assert.equal(tx.logs[0].args._Under_contractor, "ContractorABC");
    assert.equal(tx.logs[0].args.vendor_comp, "VendorCorp");
    assert.equal(tx.logs[0].args.field, "Plumbing");
    assert.equal(
      tx.logs[0].args.value.toString(),
      web3.utils.toWei("0.5", "ether")
    );
    assert.equal(tx.logs[0].args.vendor_addr, vendor);
  });

  it("should allow payment from contractor to vendor", async () => {
    const tx = await instance.payment_from_Contractor(vendor, {
      from: contractor,
      value: web3.utils.toWei("0.3", "ether"),
    });

    assert.equal(tx.logs[0].event, "from_contractor");
    assert.equal(tx.logs[0].args._from, contractor);
    assert.equal(tx.logs[0].args.to, vendor);
    assert.equal(
      tx.logs[0].args.val.toString(),
      web3.utils.toWei("0.3", "ether")
    );
  });
});
