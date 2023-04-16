import React from "react";
import { toast } from 'react-toastify';
import { GiSave, GiMineExplosion } from 'react-icons/gi'

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
    toast.success(<TemplateToast message={message} icon={<GiSave className="text-4xl" />} />, {
        className: 'border-l-8 border-green-500',
        bodyClassName: 'text-green-900',
        hideProgressBar: true,
        type: 'default'
    });


}
const error = (message: string) => {
    toast.error(<TemplateToast message={message} icon={<GiMineExplosion className="text-4xl" />} />, {
        className: 'border-l-8 border-red-500',
        bodyClassName: 'text-red-900',
        hideProgressBar: true,
        type: 'default'
    });
}


const Toast = {
    success,
    error
}

export default Toast;