import React from "react";
import { toast } from 'react-toastify';
import { TiTickOutline } from 'react-icons/ti'
import { FiAlertCircle } from 'react-icons/fi'
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface TemplateToastProps {
    icon: any;
    message: string;
}

const TemplateToast = ({ icon, message }: TemplateToastProps) => {
    return (
        <div className="flex items-center">
            {icon}
            <span className="ml-6">{message}</span>
        </div>
    )
}

const success = (message: string) => {
    toast.success(<TemplateToast message={message} icon={<TiTickOutline className="text-4xl" />} />, {
        className: 'border-l-8 border-green-500',
        bodyClassName: 'text-green-900',
        hideProgressBar: true,
        type: 'default'
    });


}
const error = (message: string) => {
    toast.error(<TemplateToast message={message} icon={<FiAlertCircle className="text-4xl" />} />, {
        className: 'border-l-8 border-red-500',
        bodyClassName: 'text-red-900',
        hideProgressBar: true,
        type: 'default'
    });
}

const info = (message: string) => {
    toast.info(<TemplateToast message={message} icon={<AiOutlineInfoCircle className="text-4xl" />} />, {
        className: 'border-l-8 border-blue-900',
        bodyClassName: 'text-blue-900',
        hideProgressBar: true,
        type: 'default'
    });
}


const Toast = {
    success,
    error,
    info
}

export default Toast;