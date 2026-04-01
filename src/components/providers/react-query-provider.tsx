import { ReactNode } from "react";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

export default function ReactQueryProvider({ children }: { children: ReactNode }) {
    return (<QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>)
}