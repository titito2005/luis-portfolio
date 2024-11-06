import React from "react";
import Image from 'next/image';

export const Table: React.FC = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg mx-auto mt-[120px]">
            <div className="grid grid-cols-3">
                <div className="border-r last:border-r-0 text-center p-12">
                    <div className="flex justify-center items-center">
                        <div className="w-20 h-20 bg-second-color rounded-full flex justify-center items-center">
                            <Image
                                src="/software-testing.png"
                                alt="Descripción de la imagen"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                    <h2 className="text-gray-800 text-xl font-bold mt-6">Frontend Developer</h2>
                    <p className="text-gray-700 mt-6 leading-7">I’m passionate about creating intuitive and responsive front-end experiences, transforming ideas into dynamic, user-friendly websites.</p>
                    <p className="text-[#92e3a9] text-xl font-bold mt-6 mb-4">Skills:</p>
                    <p className="text-gray-700 leading-7">React</p>
                    <p className="text-gray-700 leading-7">NextJS</p>
                    <p className="text-gray-700 leading-7">Angular</p>
                    <p className="text-gray-700 leading-7">Vue.js</p>
                    <p className="text-gray-700 leading-7">Ionic</p>
                    <p className="text-gray-700 leading-7">Bootstrap</p>
                    <p className="text-gray-700 leading-7">Tailwind</p>
                    <p className="text-gray-700 leading-7">Material UI</p>
                    <p className="text-gray-700 leading-7">Jest</p>
                    <p className="text-gray-700 leading-7">React Testing Library</p>
                </div>
                <div className="border-r last:border-r-0 text-center p-12">
                    <div className="flex justify-center items-center">
                        <div className="w-20 h-20 bg-second-color rounded-full flex justify-center items-center">
                            <Image
                                src="/computer.png"
                                alt="Descripción de la imagen"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                    <h2 className="text-gray-800 text-xl font-bold mt-6">Backend Developer</h2>
                    <p className="text-gray-700 mt-6 leading-7">I focus on developing scalable and secure back-end systems, optimizing performance, and designing efficient and maintainable data architectures.</p>
                    <p className="text-[#92e3a9] text-xl font-bold mt-6 mb-4">Skills:</p>
                    <p className="text-gray-700 leading-7">Node.js</p>
                    <p className="text-gray-700 leading-7">Express.js</p>
                    <p className="text-gray-700 leading-7">Nest.js</p>
                    <p className="text-gray-700 leading-7">MongoDB</p>
                    <p className="text-gray-700 leading-7">MySQL</p>
                    <p className="text-gray-700 leading-7">MariaDB</p>
                    <p className="text-gray-700 leading-7">Firebase</p>
                    <p className="text-gray-700 leading-7">Jest</p>
                </div>
                <div className="text-center p-12">
                    <div className="flex justify-center items-center">
                        <div className="w-20 h-20 bg-second-color rounded-full flex justify-center items-center">
                            <Image
                                src="/cloud.png"
                                alt="Descripción de la imagen"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                    <h2 className="text-gray-800 text-xl font-bold mt-6">Other</h2>
                    <p className="text-gray-700 mt-6 leading-7">I’m committed to leveraging AWS cloud services and automating CI/CD pipelines to ensure scalable, efficient, and seamless application deployments.</p>
                    <p className="text-[#92e3a9] text-xl font-bold mt-6 mb-4">Skills:</p>
                    <p className="text-gray-700 leading-7">AWS</p>
                    <p className="text-gray-700 leading-7">GitHub Actions</p>
                    <p className="text-gray-700 leading-7">WebDriverIO</p>
                    <p className="text-gray-700 leading-7">Docker</p>
                    <p className="text-gray-700 leading-7">GIT</p>
                    <p className="text-gray-700 leading-7">Github</p>
                    <p className="text-gray-700 leading-7">VS Code</p>
                </div>
            </div>
        </div>
    )
}