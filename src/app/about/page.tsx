'use client';

import { useEffect, useState } from "react";
import Card from '@/components/card';
import FadeInOnScroll from '@/components/fadeinonscroll';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Target, BarChart as BarChartIcon, Brain, BookOpen, LayoutDashboard } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart as ReBarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList} from "recharts";
import { Skeleton } from "@/components/ui/skeleton"

export default function About() {
    type Response = {
        status: string;
        data: Data;
    };
    type Data = {
        model_info: ModelInfo;
        feature_importance: FeatureImportance[];
    };
    type ModelInfo = {
        model_name: string;
        n_estimators: number | null;
        max_depth: number | null;
        random_state: number | null;
        trained_on: string;
        train_size: number;
        test_accuracy: number;
        cross_val_score: number;
    }
    type FeatureImportance = {
        feature: string;
        importance: number;
    }

    const [result, setResult] = useState<Response | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchAbout = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://retainlybe-production.up.railway.app/about");
                if (!response.ok) {
                    const errorJson = await response.json();
                    setError(errorJson.error);
                    setResult(null);
                } else {
                    const data = await response.json();
                    setResult(data);
                    setError(null);
                }
            } catch (err) {
                setError((err as Error).message);
                setResult(null);
            } finally {
                setLoading(false);
            }
        };
        fetchAbout();
    }, []);

    return (
        <div className="w-[90%] md:w-[85%] mx-auto">
            <div className="h-[5vh] md:h-[10vh] mb-[2vh] md:mb-[5vh] flex items-center">
                <FadeInOnScroll>
                    <h2>About Retainly</h2>
                </FadeInOnScroll>
            </div>
            <div className="h-[95vh] sm:h-[73vh] md:h-[65vh] flex flex-col justify-between">
                <div>
                    <FadeInOnScroll delay={0.3}>
                        <h3 className="mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5">How Does Retainly Started</h3>
                        <Separator className="bg-[var(--foreground-translucent)]"/>
                        <p className="text-justify mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5">
                            Retaining customers is harder than ever. 
                            While many businesses focus on getting new users, we believe the real growth happens when you understand why people stay or leave. 
                            That&rsquo;s why we built Retainly <span className="font-semibold">&quot;to help teams stop guessing and start acting on real insights&quot;</span>.
                            <br />
                            By combining machine learning with smart design, Retainly turns your user data into clear, actionable predictions. You can now focus on what matters most, building lasting relationships.
                        </p>
                    </FadeInOnScroll>
                </div>
                <div className="h-[40%] sm:h-[50%] md:h-[45%] lg:h-[45%] mt-2 sm:mt-5">
                    <FadeInOnScroll className="h-full w-full flex" delay={0.6}>
                        <Tabs defaultValue="vision" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 bg-[var(--foreground-translucent)]">
                                <TabsTrigger value="vision">Vision</TabsTrigger>
                                <TabsTrigger value="mission">Mission</TabsTrigger>
                            </TabsList>
                            <TabsContent value="vision">
                                <Card className="border border-[var(--foreground-translucent)] pt-4">
                                    To make customer retention as strategic, measurable, and intuitive as user acquisition.
                                </Card>
                            </TabsContent>
                            <TabsContent value="mission">
                                <Card className="border border-[var(--foreground-translucent)] pt-4">
                                    Empowering machine learning to identify at-risk business customers and drive timely retention actions.
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </FadeInOnScroll>
                </div>
            </div>
            <div className="mb-[2.5vh] md:mb-[5vh] flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-[60%] mb-20 sm:mb-15 md:mb-0">
                    <FadeInOnScroll>
                        <div className="w-full mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5">
                            <h3>Who is Retainly For</h3>
                        </div>
                    </FadeInOnScroll>
                    <FadeInOnScroll delay={0.3}>
                    <Separator className="bg-[var(--foreground-translucent)]"/>
                    <div className="flex flex-col justify-between w-full mt-2.5 sm:mt-3 md:mt-3.5 lg:mt-4">
                        <p className="mb-4">
                            Retainly is built for product teams, marketers, and business decision-makers who are serious about reducing churn and increasing customer lifetime value.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>SaaS businesses looking to improve retention metrics</li>
                            <li>E-commerce platforms aiming to understand repeat buyers</li>
                            <li>Subscription-based services monitoring user churn</li>
                            <li>Startups wanting early insight into user behavior</li>
                            <li>Teams that want predictions without needing a data scientist</li>
                        </ul>
                    </div>
                    </FadeInOnScroll>
                </div>
                <div className="w-[100%] md:w-[35%] flex flex-col mb-5 md:mb-0">
                    <FadeInOnScroll>
                        <div className="w-full mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5">
                            <h3>What Retainly Does</h3>
                        </div>
                    </FadeInOnScroll>
                    <Separator className="bg-[var(--foreground-translucent)]"/> 
                    <div className="flex flex-col justify-between w-full mt-2.5 sm:mt-3 md:mt-3.5 lg:mt-4">
                        <FadeInOnScroll delay={0.3}>
                            <Alert className="w-full bg-transparent mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5">
                                <Target className="stroke-[var(--foreground)]"/>
                                <AlertTitle className="text-[var(--foreground)] mb-0.5 md:mb-1">Early Churn Detection</AlertTitle>
                                <AlertDescription>
                                    Retainly helps you identify users who are likely to leave before they actually do.
                                </AlertDescription>
                            </Alert>
                        </FadeInOnScroll>
                        <FadeInOnScroll delay={0.4}>
                            <Alert className="w-full bg-transparent mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5">
                                <BarChartIcon className="stroke-[var(--foreground)]"/>
                                <AlertTitle className="text-[var(--foreground)] mb-0.5 md:mb-1">Retention Driver Insights</AlertTitle>
                                <AlertDescription>
                                    Understand which features or behaviors keep your users coming back.
                                </AlertDescription>
                            </Alert>
                        </FadeInOnScroll>
                        <FadeInOnScroll delay={0.5}>
                            <Alert className="w-full bg-transparent mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5">
                                <Brain className="stroke-[var(--foreground)]"/>
                                <AlertTitle className="text-[var(--foreground)] mb-0.5 md:mb-1">Data-Driven Decisions</AlertTitle>
                                <AlertDescription>
                                    Make smarter business moves by relying on predictive insights.
                                </AlertDescription>
                            </Alert>
                        </FadeInOnScroll>
                        <FadeInOnScroll delay={0.6}>
                            <Alert className="w-full bg-transparent mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5">
                                <BookOpen className="stroke-[var(--foreground)]"/>
                                <AlertTitle className="text-[var(--foreground)] mb-0.5 md:mb-1">Clear Insights</AlertTitle>
                                <AlertDescription>
                                    Get simplified predictions that are easy to read and act, no data science degree required.
                                </AlertDescription>
                            </Alert>
                        </FadeInOnScroll>
                        <FadeInOnScroll delay={0.7}>
                            <Alert className="w-full bg-transparent mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5">
                                <LayoutDashboard className="stroke-[var(--foreground)]"/>
                                <AlertTitle className="text-[var(--foreground)] mb-0.5 md:mb-1">Built for Real-World Use</AlertTitle>
                                <AlertDescription>
                                    Designed for SaaS, e-commerce, and subscription businesses ready to prioritize retention.
                                </AlertDescription>
                            </Alert>
                        </FadeInOnScroll>
                    </div>
                </div>
            </div>
            <div className="h-[5vh] md:h-[10vh] mb-[2.5vh] md:mb-[5vh] flex items-center">
                <Separator className="bg-[var(--foreground-translucent)]"/>
            </div>
            <div className="h-[5vh] md:h-[10vh] mb-[2vh] md:mb-[5vh] flex items-center">
                <FadeInOnScroll>
                    <h2>About Model</h2>
                </FadeInOnScroll>
            </div>
            <FadeInOnScroll delay={0.3}>
                <Card title="Model Information" className="h-[45vh] border border-[var(--foreground-translucent)] mb-[5vh] md:mb-[10vh]">
                    {result?.data.model_info && (
                        <div className="w-full grid grid-cols-2 gap-4 text-xs md:text-sm text-muted-foreground">
                            {Object.entries(result.data.model_info).map(([key, value]) => (
                            <div key={key}>
                                <p className="font-medium truncate text-foreground">
                                {key}
                                </p>
                                <p className="truncate">{value === null ? "-" : value.toString()}</p>
                            </div>
                            ))}
                        </div>
                    )}
                    {loading && (
                        <div className="w-full grid grid-cols-2 gap-4 text-xs md:text-sm text-muted-foreground">
                            <div>
                                <Skeleton className="h-full w-full bg-[var(--foreground-translucent)]"/>
                                <Skeleton className="h-full w-full bg-[var(--foreground-translucent)]"/>
                            </div>
                        </div>
                    )}
                    {error && (
                        <div className="w-full gap-4 text-xs md:text-sm text-muted-foreground">
                            <div>
                                <p className="font-medium truncate text-red-300">Error</p>
                                <p className="truncate text-red-300">{error}</p>
                            </div>
                        </div>
                    )}
                </Card>
            </FadeInOnScroll>
            <div className="mb-[2vh] md:mb-[5vh]">
                <FadeInOnScroll>
                <h3 className="mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5">Feature</h3>
                <Separator className="bg-[var(--foreground-translucent)]"/>
                <p className="text-justify mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 mb-2 sm:mb-4 md:mb-6 lg:mb-8">
                    This predictive model was trained using only five key features: <span className="font-semibold">Support Calls, Total Spend, Contract Length, Age, and Payment Delay</span>.
                    All predictions are based exclusively on these inputs.
                    To ensure accurate results, users must provide data that includes <span className="font-semibold">all five features</span>.
                </p>
                </FadeInOnScroll>
                <div className="flex flex-col md:flex-row h-[90vh] md:h-[52vh] w-full justify-between">
                    <div className="h-[50%] w-full md:h-[50%] sm:w-full md:h-full md:w-[45%] lg:h-full lg:w-[45%]">
                        <FadeInOnScroll delay={0.3} className="h-full w-full">
                            <h3 className="h-[10%] w-full flex items-center">Feature Description</h3>
                            <div className="h-[2%] md:h-[5%]"></div>
                            <Card className="border border-[var(--foreground-translucent)]">
                                <Accordion type="single" collapsible className="h-full w-full max-h-full">
                                    <AccordionItem value="support-calls">
                                        <AccordionTrigger className="text-[10px] md:text-xs lg:text-sm">Support Calls</AccordionTrigger>
                                        <AccordionContent className="text-[10px] md:text-xs lg:text-sm">
                                        <p><strong>Data type:</strong> Numeric</p>
                                        <p>Total number of customer calls to support services. A higher number may indicate dissatisfaction and increased churn risk.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="total-spend">
                                        <AccordionTrigger className="text-[10px] md:text-xs lg:text-sm">Total Spend</AccordionTrigger>
                                        <AccordionContent className="text-[10px] md:text-xs lg:text-sm">
                                        <p><strong>Data type:</strong> Numeric</p>
                                        <p>Total amount the customer has spent since joining. A lower value could signal dissatisfaction.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="contract-length">
                                        <AccordionTrigger className="text-[10px] md:text-xs lg:text-sm">Contract Length</AccordionTrigger>
                                        <AccordionContent className="text-[10px] md:text-xs lg:text-sm">
                                        <p><strong>Data type:</strong> Ordinal Categorical</p>
                                        <p>Categories: 1 Month, 3 Months, 12 Months.</p>
                                        <p>The contract duration reflects the customer&rsquo;s level of commitment to the service.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="age">
                                        <AccordionTrigger className="text-[10px] md:text-xs lg:text-sm">Age</AccordionTrigger>
                                        <AccordionContent className="text-[10px] md:text-xs lg:text-sm">
                                        <p><strong>Data type:</strong> Numeric</p>
                                        <p>The customer&rsquo;s current age. May reflect user experience or affinity for technology.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="payment-delay">
                                        <AccordionTrigger className="text-[10px] md:text-xs lg:text-sm">Payment Delay</AccordionTrigger>
                                        <AccordionContent className="text-[10px] md:text-xs lg:text-sm">
                                        <p><strong>Data type:</strong> Numeric</p>
                                        <p>Average payment delay in days. The longer the delay, the higher the risk of churn.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </Card>
                        </FadeInOnScroll>
                    </div>
                    <div className="h-[45%] w-full md:h-[45%] sm:w-full md:h-full md:w-[50%] lg:h-full lg:w-[50%]">
                        <FadeInOnScroll delay={0.3} className="w-full h-full">
                            <h3 className="h-[10%] w-full flex items-center">Feature Importance</h3>
                            <div className="h-[2%] md:h-[5%]"></div>
                            <Card className="border border-[var(--foreground-translucent)] w-full h-[85%]">
                            {result?.data.feature_importance && (
                                <ResponsiveContainer width="100%" height="100%" className={"p-2 md:text-xs lg:text-sm"}>
                                    <ReBarChart
                                        layout="vertical"
                                        data={result.data.feature_importance}
                                    >
                                        <XAxis 
                                            type="number" 
                                            domain={[0, 0.45]} 
                                            ticks={[ 0.1, 0.2, 0.3, 0.4 ]}
                                            tickFormatter={(v) => v.toFixed(1)}
                                            interval={0}
                                        />
                                        <YAxis type="category" dataKey="feature" />
                                        <Bar
                                            dataKey="importance"
                                            fill="var(--foreground-translucent)"
                                            radius={[0, 4, 4, 0]}
                                        >
                                        <LabelList
                                            dataKey="importance"
                                            position="right"
                                            formatter={(v) => Number(v).toFixed(4)}
                                            style={{ fill: 'currentColor', fontSize: 12 }}
                                        />
                                        </Bar>
                                    </ReBarChart>
                                </ResponsiveContainer>
                            )}
                            {loading && (
                                <div className="h-full w-full p-2">
                                    <div>
                                        <Skeleton className="h-full w-full bg-[var(--foreground-translucent)]"/>
                                    </div>
                                </div>
                            )}
                            {error && (
                                <div className="w-full gap-4 text-xs md:text-sm text-muted-foreground">
                                    <div>
                                        <p className="font-medium truncate text-red-300">Error</p>
                                        <p className="truncate text-red-300">{error}</p>
                                    </div>
                                </div>
                            )}
                            </Card>
                        </FadeInOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
}
