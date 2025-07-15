import Image from "next/image";
import Button from '@/components/button';
import Card from '@/components/card';

export default function Predict() {
  return (
    <main className="h-[80vh]">
      <div className="space-y-4 p-6">
        <Button loading>Loading...</Button>
        <Card
          title="Card dengan tombol"
          description="Predict"
          className="bg-[var(--utility-translucent)]"
        >
          <Button className="bg-[var(--foreground)] text-[var(--utility)]">Default</Button>
        </Card>
      </div>
    </main>
  );
}
