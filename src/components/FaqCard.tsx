"use client"

import React, {useState} from 'react';

interface Faq{
    question  : string,
    answer : string
}


function FaqCard({question, answer} : Faq) {

    const [open, setOpen] = useState(false);

    return (
        <div
            onClick={() => setOpen((x) => !x)}
            className="faq-card text-left border border-gray-200 rounded-lg p-4 mb-4 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-50"
        >
            <h3 className="text-lg font-semibold text-gray-700">{question}</h3>
            {
                open && <div className="mt-2 text-gray-600">
                    {answer}
                </div>
            }
        </div>
    );
}

export default FaqCard;