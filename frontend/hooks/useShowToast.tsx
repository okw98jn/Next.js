import { useToast } from "@/components/ui/use-toast"
import { AlertTriangle, CheckIcon, Info } from "lucide-react";
import { useCallback } from 'react';

type Props = {
    message: string;
    variant?: 'default' | 'destructive' | 'success';
}

export const useShowToast = () => {
    const { toast } = useToast();
    const showToast = useCallback(({ message, variant = 'default' }: Props) => {
        const icon  = switchIcon(variant);
        const title = createToastMessage(message, icon)
        toast({
            title: title,
            variant: variant,
        });
    }, [toast]);
    return showToast;
}

// variantによってアイコンを変える
const switchIcon = (variant: string) => {
    switch (variant) {
        case 'default':
            return <Info className="mr-2" size={20} />;
        case 'destructive':
            return <AlertTriangle className="mr-2" size={20} />;
        case 'success':
            return <CheckIcon className="mr-2" size={20} />;
        default:
            return <CheckIcon className="mr-2" size={20} />;
    }
}

// メッセージとアイコンを組み合わせる
const createToastMessage = (text: string, icon: React.ReactNode) => (
    <div className="flex items-center">
        {icon}
        <span className="first-letter:capitalize">
            {text}
        </span>
    </div>
);
