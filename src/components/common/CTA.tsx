import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ShimmerButton } from "../ui/shimmer-button";

const CTA = () => {
  return (
    <div className="flex justify-center w-full items-center mt-10">
      <div className="max-w-4xl py-10 border-t w-full  mx-auto  text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-[family-name:var(--font-syne)] mb-3">
          Still have questions?
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          We&apos;re here to help. Reach out and we&apos;ll get back to you
          within 24 hours.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link href="/contact">
            <ShimmerButton variant="primary">
              Contact Us
              <ArrowRight size={15} />
            </ShimmerButton>
          </Link>
          <Link href="/pricing">
            <ShimmerButton variant="outline">
              View Pricing
              <ArrowRight size={15} />
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
