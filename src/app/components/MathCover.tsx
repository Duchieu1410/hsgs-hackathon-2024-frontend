'use client'

import Link from 'next/link';

const MathCover: React.FC = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-900 text-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-gray-300 mb-6">Rules for Digital SAT Reading & Writing Test</h2>
                <div className="divide-y divide-gray-800">
                    <div className="py-4">
                        <h3 className="text-xl font-semibold mb-2">1. Prohibited Items</h3>
                        <p className="text-lg text-gray-400">
                            You are not allowed to use any electronic devices, including cell phones, smartwatches, cameras, or any other recording devices. 
                            The use of these items during the test is strictly prohibited and can result in disqualification.
                        </p>
                    </div>
                    <div className="py-4">
                        <h3 className="text-xl font-semibold mb-2">2. No Outside Materials</h3>
                        <p className="text-lg text-gray-400">
                            You are not allowed to bring any books, dictionaries, notes, or other study materials into the test center. 
                            All necessary materials, such as scratch paper and pencils, will be provided.
                        </p>
                    </div>
                    <div className="py-4">
                        <h3 className="text-xl font-semibold mb-2">3. Honesty and Integrity</h3>
                        <p className="text-lg text-gray-400">
                            Any form of cheating, including sharing test content or answers, using unauthorized aids, or attempting to access the test materials before the test, is strictly prohibited. 
                            Violations of these rules can result in score cancellation and further disciplinary action.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-900 text-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-gray-300 mb-6">Test Format</h2>
                <div className="divide-y divide-gray-800">
                    <div className="py-4">
                        <h3 className="text-xl font-semibold mb-2">Format and Structure:</h3>
                        <p className="text-lg text-gray-400">
                        Reading and Writing Module 1: 27 questions, 32 minutes<br></br>
                        Reading and Writing Module 2: 27 questions, 32 minutes<br></br>
                        10-minute break<br></br>
                        Math Module 1: 22 questions, 35 minutes<br></br>
                        Math Module 2: 22 questions, 35 minutes<br></br>
                        </p>
                    </div>
                    <div className="py-4">
                        <h3 className="text-xl font-semibold mb-2">Test Content:</h3>
                        <p className="text-lg text-gray-400">
                        + Evidence-Based Reading and Writing (ERW): <br></br>
                        This section includes a mix of reading comprehension, grammar, and vocabulary questions. 
                        Passages may cover a range of subjects, including literature, history, social studies, and sciences.<br></br>
                        + Math: <br></br>
                        This section covers topics such as algebra, problem-solving and data analysis, and advanced math, including some trigonometry and geometry. 
                        Calculators can be used in this section only.
                        </p>
                    </div>
                    <div className="py-4">
                        <h3 className="text-xl font-semibold mb-2">Testing Interface and Tools:</h3>
                        <p className="text-lg text-gray-400">
                        The digital platform includes tools like a calculator (for the math section), a highlighter, an annotation feature, and a clock to keep track of time. <br></br>
                        Students can navigate through the questions within each module and review or change their answers before submitting the module.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
                <h1 className="text-6xl font-bold mb-8">Get ready</h1>
                <Link href="/english/questions" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-2xl">
                    Start the Test
                </Link>
            </div>
        </div>
    );
};

export default MathCover;
