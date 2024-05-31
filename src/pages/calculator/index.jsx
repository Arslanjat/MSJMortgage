import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';  // Import the dynamic function from Next.js
import MainLayout from '../../layouts/main';
import PageHeader from '../../components/Page-header';

// Dynamically import MortgageCalculator to ensure it's only imported on the client-side
const MortgageCalculator = dynamic(() => import('mortgage-calculator-react'), {
  ssr: false,  // Disable server-side rendering
});

export default function Index() {
  useEffect(() => {
    document.querySelector('body').classList.add('index3');
  }, []);

  return (
    <>
      <PageHeader
        title="Calculator"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Calculator", url: "/calculator" },
        ]}
      />
      <div className="container mt-30 mb-30">
      <MortgageCalculator />
      </div>
      <MainLayout />
    </>
  );
}