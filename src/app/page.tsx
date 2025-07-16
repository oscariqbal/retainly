import Image from "next/image";
import ButtonLink from '@/components/buttonlink';

export default function Home() {
  return (
    <main className="h-[80vh]">
      <div className="flex flex-col md:flex-row justify-between h-[100%] w-[90%] md:w-[85%] mx-auto">
        
        <div className="h-[100%] w-[100%] md:w-[40%] flex flex-col md:pr-2 lg:pr-3">
          <div className="md:mt-[10%]">
            <h1 className="mb-8">
              Know Your Customer's<br />Churn Status
            </h1>
            <p className="my-5 font-bold">
              Know your customers before they leave.
            </p>
            <p className="mb-8">
              Understanding churn status helps you take proactive steps to retain valuable customers. 
              With the power of machine learning, you can now predict which customers are likely to churn — quickly and accurately. 
              Upload your customer data and let the model reveal key insights that support smarter, data-driven decisions.
            </p>
            <ButtonLink href="/predict" asButton className="w-[45%] sm:w-[20%] md:w-[50%] lg:w-[45%]">Predict Now!</ButtonLink>
        </div>
        </div>

        <div className="relative hidden md:block items-end h-[60%] w-[100%] md:h-[100%] md:w-[60%]">
          <Image
              className="md:pl-2 lg:pl-3 ml-auto"
              src="/img/robot_with_circuit.png"
              alt="thinking_robot.png"
              width={550}
              height={200}
              priority
            />
        </div>
      </div>
    </main>
  );
}