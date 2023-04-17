import React from 'react'

interface LoaderCardProps {
    length?: number;

}

export default function LoaderCard({ length }: LoaderCardProps) {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen px-4 md:px-14'>
            {Array(length).fill('').map((_, index) => (
                <div key={`loader-card-${index}`} className="w-full mb-5 rounded shadow-xl card bg-base-100">
                    <div className="card-body bg-slate-400">
                        <progress className="w-2/3 progress" value='0' max='100'></progress>
                        <progress className="w-1/3 progress" value='0' max='100'></progress>
                        <progress className="w-full progress" value='0' max='100'></progress>
                        <progress className="w-1/2 progress" value='0' max='100'></progress>
                        <progress className="w-1/4 progress" value='0' max='100'></progress>
                        <progress className="w-2/3 progress" value='0' max='100'></progress>
                    </div>
                </div>
            ))}

        </div>
    )
}
