import Image from "next/image";
import ButtonLink from '@/components/buttonlink';
import FadeInOnScroll from '@/components/fadeinonscroll';

export default function Home() {
  return (
    <main className="h-[80vh]">
      <div className="flex flex-col md:flex-row justify-between h-[100%] w-[90%] md:w-[85%] mx-auto">
        <div className="h-[100%] w-[100%] md:w-[40%] flex flex-col md:pr-2 lg:pr-3">
          <FadeInOnScroll className="h-full w-full" delay={0.3}>
            <div className="md:mt-[10%]">
              <h1 className="mb-8">
                Know Your Customer&rsquo;s<br />Churn Status
              </h1>
              <p className="my-5 font-bold">
                Know your customers before they leave.
              </p>
              <p className="mb-8">
                Understanding churn status helps you take proactive steps to retain valuable customers. 
                With the power of machine learning, you can now predict which customers are likely to churn — quickly and accurately. 
                Upload your customer data and let the model reveal key insights that support smarter, data-driven decisions.
              </p>
              <ButtonLink href="/predict" asButton className="bg-[var(--foreground)] text-[var(--background)] w-[45%] sm:w-[20%] md:w-[50%] lg:w-[45%]">Predict Now!</ButtonLink>
            </div>
          </FadeInOnScroll>
        </div>

        <div className="relative hidden md:block items-end h-[60%] w-[100%] md:h-[100%] md:w-[60%]">
          <FadeInOnScroll className="h-full w-full" delay={0.3}>
            <Image
                className="md:pl-2 lg:pl-3 ml-auto"
                src="/img/robot_with_circuit.png"
                alt="thinking_robot.png"
                width={550}
                height={200}
                priority
              />
          </FadeInOnScroll>
        </div>
      </div>
    </main>
  );
}