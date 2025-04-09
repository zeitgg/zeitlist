import SplitText from "@/components/ui/split-text";
import { WaitlistForm } from "@/components/waitlist-form";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-center">
      <div className="mb-8">
        <SplitText className="text-5xl tracking-tighter font-medium">
          Get early access
        </SplitText>
        <SplitText className="tracking-tight text-xl">
          Be amongst the first to experience our services.
        </SplitText>
      </div>
      <WaitlistForm />
      <div></div>
    </div>
  );
}
