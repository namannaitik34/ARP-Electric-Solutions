import { Bolt } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <img src="https://firebasestorage.googleapis.com/v0/b/arp-electric-solution.firebasestorage.app/o/Fina%20logo.png?alt=media&token=922fdb3d-0cc3-4347-8e79-717f0f0648f5" alt="ARP Electric Solutions Logo" className="h-20 w-50" />
      <div className="flex flex-col">
        <span className="font-headline text-lg font-bold text-primary">
          
        </span>
        <span className="font-body text-xs text-muted-foreground">
         
        </span>
      </div>
    </Link>
  );
}
