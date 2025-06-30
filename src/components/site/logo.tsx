import { Bolt } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="bg-primary text-primary-foreground p-2 rounded-md">
        <Bolt className="h-6 w-6" />
      </div>
      <div className="flex flex-col">
        <span className="font-headline text-lg font-bold text-primary">
          ARP Electric
        </span>
        <span className="font-body text-xs text-muted-foreground">
          Solutions
        </span>
      </div>
    </Link>
  );
}
