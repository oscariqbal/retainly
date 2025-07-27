"use client";

import { useState } from "react";
import Card from "@/components/card";
import { motion, AnimatePresence } from "framer-motion";
import FadeInOnScroll from "@/components/fadeinonscroll";
import FileUploadForm from "@/components/fileuploadform";
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Predict(){
  type Response = {
    data: Data;
    status: string;
  };
  type Data = {
    original_filename: string;
    preview: Preview[];
    summary: Summary;
    insights: Insight[];
    output_filename: string;
  };
  type Preview = {
    Age: number;
    Churn: number;
    "Contract Length": string;
    CustomerID: number;
    Gender: string;
    "Last Interaction": number;
    "Payment Delay": number;
    Prediction: number;
    "Subscription Type": string;
    "Support Calls": number;
    Tenure: number;
    "Total Spend": number;
    "Usage Frequency": number;
  };
  type Insight = {
    feature: string;
    insight: string;
  };
  type Summary = {
    "0.0"?: SummaryValue;
    "1.0"?: SummaryValue;
  };
  type SummaryValue = {
  count: number;
  percent: number;
};

  const [result, setResult] = useState<Response | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    const start = Date.now();

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorJson = await response.json();
        setError(errorJson.error);
        setResult(null);
        setLoading(false);
      } else {
        const data = await response.json();
        const duration = Date.now() - start;
        const delay = Math.max(0, 3000 - duration);

        setTimeout(() => {
          setResult(data);
          setLoading(false);
        }, delay);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setResult(null);
      setLoading(false);
    }
  };
  
  return (
    <AnimatePresence mode="wait">

      {!loading && !result && !error && (
        <motion.main
          key="initial"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full flex flex-col"
          style={{ gap: "2vh" }}
        >
          <div className="flex items-center h-[10vh] w-[90%] md:w-[85%] mx-auto">
            <FadeInOnScroll className="h-full w-full">
              <h2>Predict Now!</h2>
            </FadeInOnScroll>
          </div>
          <div className="h-[67vh] w-[90%] md:w-[85%] mx-auto"> 
            <FadeInOnScroll className="h-full w-full" delay={0.3}>
              <Card title="Upload your Dataset Here" className="border border-[var(--foreground-translucent)] h-full w-full">
                <FileUploadForm onSubmit={handleUpload} accept=".csv" maxSizeMB={5} buttonText="Submit"/>
              </Card>
            </FadeInOnScroll>
          </div>
          <div className="h-[14vh] w-[90%] md:w-[85%] mx-auto">
            <FadeInOnScroll className="h-full w-full flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <h3>Not sure hot wo use it?</h3>
              <Link href="/about">
                <Button 
                  className="max-w-[100%] border border-[var(--foreground)] bg-transparent text-[var(--foreground)] cursor-pointer hover:bg-transparent hover:opacity-85"
                  size={"responsive"}
                >
                  Read the Documentation
                </Button>
              </Link>
            </FadeInOnScroll>
          </div>
        </motion.main>
      )}

      {loading && (
        <motion.main
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full flex flex-col"
          style={{ gap: "2vh" }}
        >
          <div className="flex items-center h-[5vh] w-[90%] md:w-[85%] mx-auto">
            <div className="w-full h-[60%] flex items-start justify-center">
              <Skeleton className="h-full w-full bg-[var(--foreground-translucent)]"/>
            </div>
          </div>
          <div className="flex items-center w-[90%] md:w-[85%] mx-auto mb-3">
            <Separator className=" bg-[var(--foreground-translucent)]" />
          </div>
          <div className="h-[150vh] md:h-[110vh] w-[90%] md:w-[85%] mx-auto"> 
            <div className="h-full w-full flex flex-col justify-between">
              <div className="h-[29%] md:h-[43%] w-full">
                <Card className="border border-[var(--foreground-translucent)] h-full w-full">
                  <Skeleton className="h-[10%] w-full bg-[var(--foreground-translucent)]"/>
                  <div className="h-[5%] w-full"></div>
                  <Skeleton className="h-[85%] w-full bg-[var(--foreground-translucent)]"/>
                </Card>
              </div>

              <div className="h-[69%] md:h-[53%] w-full flex flex-col md:flex-row justify-between">
                <div className="h-[45%] w-full md:h-full md:w-[35%]">
                  <Skeleton className="h-[6%] w-full bg-[var(--foreground-translucent)]"/>
                  <div className="h-[5%]"></div>
                  <Card className="border border-[var(--foreground-translucent)] h-[88%] md:h-[85%]">
                    <Skeleton className="h-full w-full bg-[var(--foreground-translucent)]"/>
                  </Card>
                </div>
                <div className="h-[54%] w-full md:h-full md:w-[59%]">
                  <Skeleton className="h-[6%] w-full bg-[var(--foreground-translucent)]"/>
                  <div className="h-[5%]"></div>
                  <Card className="border border-[var(--foreground-translucent)] h-[88%] md:h-[85%] w-full">
                    <Skeleton className="h-full w-full bg-[var(--foreground-translucent)]"/>
                  </Card>
                </div>
              </div>

            </div>
          </div>

          <div className="h-[14vh] w-[90%] md:w-[85%] mx-auto">
            <div className="w-full h-full flex flex-col sm:flex-row justify-end items-start sm:items-end">
              <Skeleton className="h-[30%] w-[30%] md:h-[40%] md:w-[10%] bg-[var(--foreground-translucent)] mb-2 sm:mr-4 sm:mb-0 md:mr-6 md:mb-0 lg:mr-8 lg:mb-0"/>
              <Skeleton className="h-[30%] w-[40%] md:h-[40%] md:w-[15%] bg-[var(--foreground-translucent)]"/>
            </div>
          </div>

        </motion.main>
      )}

      {result && (
        <>
          {(() => {
            const { original_filename, preview, summary, insights, output_filename } = result.data;
            
            const COLORS = ["#93C5FD", "#FCA5A5"];
            const pieData = Object.entries(summary).map(([key, val]) => ({
              name: `${key === "0.0" ? "Not Churn" : "Churn"} (${val.percent}%)`,
              value: val.percent,
              count: val.count,
            }));
            const churnPercent = summary["1.0"]?.percent ?? 0;

            return (
              <motion.main
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex flex-col"
                style={{ gap: "2vh" }}
              >
                <div className="flex items-center h-[5vh] w-[90%] md:w-[85%] mx-auto">
                  <FadeInOnScroll className="h-full w-full">
                    <h3 className="w-full h-full flex items-center">{original_filename}</h3>
                  </FadeInOnScroll>
                </div>
                <div className="flex items-center w-[90%] md:w-[85%] mx-auto mb-3">
                  <Separator className=" bg-[var(--foreground-translucent)]" />
                </div>
                <div className="h-[150vh] md:h-[110vh] w-[90%] md:w-[85%] mx-auto"> 
                  <div className="h-full w-full flex flex-col justify-between">
                    <div className="h-[29%] md:h-[43%] w-full">
                      <FadeInOnScroll className="h-full w-full" delay={0.2}>
                        <Card title={"Preview Dataset"} className="border border-[var(--foreground-translucent)] flex items-center justify-center h-full w-full">
                          <div className="w-full h-full overflow-y-auto">
                            <Table className="border">
                              <TableHeader>
                                <TableRow>
                                  {Object.keys(preview[0]).map((key) => (
                                    <TableHead key={key} className="text-left capitalize text-xs">
                                      {key}
                                    </TableHead>
                                  ))}
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {preview.map((row, rowIndex) => (
                                  <TableRow key={rowIndex}>
                                    {Object.values(row).map((value, colIndex) => (
                                      <TableCell key={colIndex} className="text-xs">
                                        {String(value)}
                                      </TableCell>
                                    ))}
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </Card>
                      </FadeInOnScroll>
                    </div>

                    <div className="h-[69%] md:h-[53%] w-full flex flex-col md:flex-row justify-between">
                      <div className="h-[45%] w-full md:h-full md:w-[35%]">
                        <FadeInOnScroll className="h-full w-full" delay={0.4}>
                          <h3 className="h-[10%] w-full flex items-center">Prediction Result</h3>
                          <div className="h-[2%] md:h-[5%]"></div>
                          <Card className="border border-[var(--foreground-translucent)] h-[88%] md:h-[85%] w-full">
                            <div className="flex flex-row items-center w-full h-full">
                              <div className="w-[55%] h-full">
                                <ResponsiveContainer width="100%" height="100%">
                                  <PieChart>
                                    <Pie
                                      data={pieData}
                                      dataKey="value"
                                      nameKey="name"
                                      cx="50%"
                                      cy="50%"
                                      outerRadius="90%"
                                      labelLine={false}
                                    >
                                      {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                      ))}
                                    </Pie>
                                    <Tooltip />
                                  </PieChart>
                                </ResponsiveContainer>
                              </div>
                              <div className="flex flex-col items-center w-[45%] max-h-[100%]">
                                <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl">{churnPercent}%</div>
                                <div className="flex flex-col gap-1 mt-2 md:mt-3 lg:mt-5">
                                  {pieData.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                                        <span className="text-[8px] sm:[10px] md:text-xs lg:text-sm text-gray-700">{item.name}</span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Card>
                        </FadeInOnScroll>
                      </div>
                      <div className="h-[52%] w-full md:h-full md:w-[62%]">
                        <FadeInOnScroll className="h-full w-full" delay={0.4}>
                          <h3 className="h-[10%] w-full flex items-center">Insights</h3>
                          <div className="h-[2%] md:h-[5%]"></div>
                          <Card className="border border-[var(--foreground-translucent)] w-full"> {/*h-[88%] md:h-[85%]*/}
                            <Accordion type="single" collapsible className="h-full w-full max-h-full">
                              {insights.map((item, idx) => (
                                <AccordionItem value={`item-${idx}`} key={idx}>
                                  <AccordionTrigger className="text-[10px] md:text-xs lg:text-sm">{item.feature}</AccordionTrigger>
                                  <AccordionContent className="text-[10px] md:text-xs lg:text-sm">{item.insight}</AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </Card>
                        </FadeInOnScroll>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[14vh] w-[90%] md:w-[85%] mx-auto">
                  <FadeInOnScroll className="h-full w-full flex flex-col sm:flex-row justify-end items-start sm:items-end" delay={0.2}>
                      <Button
                        onClick={() => {
                          const link = document.createElement("a");
                          link.href = `http://localhost:5000/download?file=${output_filename}`;
                          link.download = `${output_filename}`;
                          link.target = "_blank";
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        className="bg-[var(--foreground)] text-[var(--background)] cursor-pointer hover:bg-[var(--foreground)] hover:opacity-85 mb-2 sm:mr-4 sm:mb-0 md:mr-6 md:mb-0 lg:mr-8 lg:mb-0"
                        size={"responsive"}
                      >
                        Download CSV
                      </Button>
                      <Button 
                        onClick={() => {setResult(null);}} 
                        className="border border-[var(--foreground)] bg-transparent text-[var(--foreground)] cursor-pointer hover:bg-transparent hover:opacity-85"
                        size={"responsive"}
                      >
                        Upload Another File
                      </Button>
                  </FadeInOnScroll>
                </div>
              </motion.main>
            );
          })()}
        </>
      )}

      {error && (
        <motion.main
          key="error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full flex flex-col"
          style={{ gap: "1vh" }}
        >
          <div className="h-[80vh] w-full">
            <div className="h-[16%] sm:h-[10%] w-full bg-[var(--error)] text-[var(--accent-foreground)] border border-red-500 w-[90%] md:w-[85%] mx-auto flex justify-between shadow-sm px-2 py-1 rounded-lg">
              <div className="h-full w:[70%] md:w-[50%] max-h-[100%] flex items-center">
                <div className="bg-red-200 border border-red-200 rounded-sm mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="oklch(63.7% 0.237 25.331)" className="size-8 sm:size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <p className="w-[90%] max-h-[100%]">{error}</p>
              </div>
              <div className="h-full flex items-center">
                <Button onClick={() => setError(null)} className="cursor-pointer bg-transparent text-[var(--accent-foreground)] hover:bg-red-300 h-full rounded-sm shadow-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}