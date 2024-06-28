'use client'

import Link from 'next/link';

const MathCover: React.FC = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-900 text-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-gray-300 mb-6">Digital SAT Mathematics Practice Test Format</h2>
                <div className="divide-y divide-gray-800">
                    <div className="py-4">
                        <h3 className="text-xl font-semibold mb-2">1. Modules And Timing:</h3>
                        <p className="text-lg text-gray-400">
                        The digital SAT Math test consists of two modules. <br></br>
                        Each module contains 22 questions. <br></br>
                        Each module must be completed in 35 minutes, giving a total of 70 minutes for the entire Math section. <br></br>
                        </p>
                    </div>
                    <div className="py-4">
                        <h3 className="text-xl font-semibold mb-2">2. Question Types and Content:</h3>
                        <p className="text-lg text-gray-400">
                        The math test includes questions on algebra, problem-solving and data analysis, advanced math, and some additional topics (geometry, trigonometry, and complex numbers).
                        There is a focus on real-world problem-solving and data analysis, requiring students to apply mathematical concepts to practical situations.
                        The test assesses mathematical fluency, conceptual understanding, and the ability to apply skills to new contexts.
                        </p>
                    </div>
                    <div className="py-4">
                        <h3 className="text-xl font-semibold mb-2">3. Digital Tools and Interface:</h3>
                        <p className="text-lg text-gray-400">
                        The digital SAT provides tools such as a built-in calculator, a timer, and options to flag questions for review within each module.
                        Students can navigate between questions within a module and change their answers before submitting the module.
                        The interface is designed to be user-friendly, with features that assist in managing time and ensuring a smooth test-taking experience.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
                <h1 className="text-6xl font-bold mb-8">Digital SAT Practice Test</h1>
                <Link href="/mathematics/test" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-2xl">
                    Start the Test
                </Link>
            </div>
        </div>
    );
};

export default MathCover;
