import React from "react";

function Check() {
  return (
    <>
      {" "}
      <h6 className="credit mt-20">Income Verification:</h6>
      <ul className="pointcheck mt-10">
        <p>Pay stubs for the last 30 days</p>
        <p>W-2 forms for the last two years</p>
        <p>Tax return for the last two years</p>
        <p>
          Child support/alimony â€” friend of the court printout or 12 monthsâ€™
          of cancelled checks*
        </p>
        <p>Awards letter for Social Security and 1099 for disability income</p>
        <p>
          When income is derived from rental property, commission, interest, or
          other sources of income besides salary, tax returns may be required
        </p>
      </ul>
      <h6 className="credit mt-10 mb-10">Sources of Funds/Down Payment:</h6>
      <ul className="pointcheck">
        <p>
          Bank statements for the last three months, including savings,
          checking, and investment accounts
        </p>
        <p>Stock and securities account statements for the last three months</p>
        <p>HUD settlement statement if using funds from the sale of property</p>
        <p>
          Sale of asset â€” proof of ownership, proof of sale, and proof of
          funds transfer
        </p>
        <p>
          For gift funds â€” a gift letter, evidence of transfer, and sometimes
          evidence of withdrawal
        </p>
      </ul>
      <h6 className="credit mt-10 mb-10">If You Are Self-Employed:</h6>
      <ul className="pointcheck mb-10">
        <p>
          Signed completed tax returns for the past two years, including
          personal, partnership, and corporate if applicable; please include all
          schedules
        </p>
        <p>
          Business profit-and-loss statement year-to-date for the current year
          if more than three months have passed since the end of the tax year
        </p>
        <p>Current balance sheet</p>
        <p>Copies of the last two years of business license</p>
      </ul>
      <h6 className="credit mt-10 mb-10">Payment history:</h6>
      <ul className="pointcheck mb-10">
        <p>
          Cancelled rent or mortgage payment checks for past 12 months, if not
        </p>
        <p>Available on credit report</p>
        <p>Copy of land contract, if applicable</p>
        <p>Child support/alimony</p>
        <p>Bankruptcy/Consumer Credit counseling proof, if received</p>
      </ul>
      <h6 className="credit mt-10 mb-10">
        Additional information, if applicable:
      </h6>
      <ul className="pointcheck mb-10">
        <p>
          Purchase agreement, including legal property descriptions and any
          addendum
        </p>
        <p>Divorce decree</p>
        <p>Explanation of discrepancies in credit</p>
      </ul>
      <ul className="pointcheck mb-10">
        <p>
          Alimony, child support or separate maintenance income need not be
          included if it’s not to be considered as income available to repay the
          loan. Child support or alimony income may be used if you received it
          for the past 12 months and it will continue for at least three years
          into the loan period.
        </p>
      </ul>
    </>
  );
}

export default Check;
