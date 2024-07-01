import React from "react";

function Disclosure() {
  return (
    <>
      <div className="container-fluid mt-10">
        <div className="mt-10">
          <h6 className="mb-10 discheading">
            Oregon Reverse Mortgage Disclosure
          </h6>
          <div>
            <div className="disclosurepara">
              <p>
                At the maturity of a reverse mortgage loan, the lender will have
                a claim against your property and you or your heir(s) may need
                to sell the property to repay the loan, or repay the loan from
                other assets in order to retain the property.
              </p>
              <p>
                The lender will charge an origination fee, a mortgage insurance
                premium, closing costs and/or servicing fees, which fees will be
                added to the loan balance.
              </p>
              <p>
                The balance of the mortgage loan grows over time as interest is
                added to the loan balance. As long as you comply with the loan
                terms, you will retain title to the property until you sell or
                otherwise transfer the property, and therefore you are
                responsible for paying property taxes, insurance, maintenance
                and related taxes. Failing to pay these amounts may cause the
                loan to become due and may subject the property to a tax lien or
                other encumbrance and/or to foreclosure.
              </p>
              <p>
                Interest on a reverse mortgage is not deductible from your
                income tax until you repay all or part of the loan.
              </p>
              <p>
                Before obtaining a reverse mortgage, you should consult a
                trusted financial adviser or planner. There are government
                agencies and nonprofit organizations that can give you
                information about reverse mortgages. You can locate these
                resources at:
              </p>
            </div>
          </div>
        </div>
        <div className="disclosurelinks">
          <ul>
            <li>
              <a
                href="https://www.consumer.ftc.gov/articles/0192-reverse-mortgages"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.consumer.ftc.gov/articles/0192-reverse-mortgages
              </a>
            </li>
            <li>
              <a
                href="https://www.irs.gov/faqs/other/for-senior-taxpayers/for-senior-taxpayers"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.irs.gov/faqs/other/for-senior-taxpayers/for-senior-taxpayers
              </a>
            </li>
            <li>
              <a
                href="https://www.consumerfinance.gov/about-us/blog/consumer-advisory-dont-be-misled-by-reverse-mortgage-advertising"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.consumerfinance.gov/about-us/blog/consumer-advisory-dont-be-misled-by-reverse-mortgage-advertising
              </a>
            </li>
          </ul>
        </div>

        <div className="disclosurepara">
          <p>
            Please note that before you can complete an application for a
            Federal Housing Administration-insured Home Equity Conversion
            Mortgage loan, you must undergo counseling with a counseling agency
            approved by the U.S. Department of Housing and Urban Development
            (“HUD”). Your loan originator will provide you with a disclosure of
            available HUD-approved counseling agencies.
          </p>
        </div>
      </div>
    </>
  );
}

export default Disclosure;
