import { useToast } from "@/components/ui/use-toast"
import { useCallback } from 'react';

type Props = {
    message: string;
    variant?: 'default' | 'destructive' | 'success';
}

function useShowToast() {
    const { toast } = useToast();
    const showToast = useCallback(({ message, variant = 'default' }: Props) => {
        toast({
            title: message,
            variant: variant,
        });
    }, [toast]);

    return showToast;
}

export default useShowToast;