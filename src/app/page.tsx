import Image from "next/image";
import Button from '@/components/button';
import Card from '@/components/card';

export default function Home() {
  return (
    <main className="h-[80vh]">
      <div className="flex flex-col md:flex-row justify-between h-[100%] w-[90%] md:w-[85%] mx-auto border border-white-600">
        <div className="h-[40%] w-[100%] md:h-[100%] md:w-[40%] flex flex-col justify-center border border-red-600">
          <h1 className="border border-yellow-600">Know Your Customer’s<br />Churn Status</h1>
          <p className="border border-yellow-600">Know your customers before they leave.</p>
          <p className="border border-yellow-600">
            Understanding churn status helps you take proactive steps to retain valuable customers. 
            With the power of machine learning, you can now predict which customers are likely to churn — quickly and accurately. 
            Upload your customer data and let the model reveal key insights that support smarter, data-driven decisions.
          </p>
        </div>
        <div className="h-[60%] w-[100%] md:h-[100%] md:w-[60%] border border-green-600">
          wdad
        </div>
      </div>
    </main>
  );
}