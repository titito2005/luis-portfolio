import React from "react"

export const Experience: React.FC = () => {
    return (
        <div className="flex flex-col text-center justify-center items-center mt-[120px]">
            <p className="text-white text-3xl font-bold">Experience</p>

            <div className="mt-10 text-white p-12
            rounded overflow-hidden  
            bg-transparent
            hover:bg-blue-hover hover:shadow-xl">
                <div className="flex flex-row">
                    <div className="w-[25%]">
                        <p className="text-sm text-gray-300 mt-1">JUNE 2023 - PRESENT</p>
                    </div>
                    <div className="text-left w-[75%] ml-8">
                        <p className="text-xl font-bold">Mid Full Stack Software Developer</p>
                        <p className="text-sm text-gray-300 leading-7">Edify Software Consulting</p>
                        <p className="text-gray-300 leading-7 mt-4">I led the migration of packages from Nexus to GitHub Packages, improving how we manage dependencies. I also handled maintenance tasks for existing projects to ensure they ran smoothly and remained stable. Additionally, I updated libraries and dependencies to enhance security and performance. To increase development speed and improve code quality, I optimized our CI/CD processes using GitHub Actions.</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-white p-12
            rounded overflow-hidden  
            bg-transparent
            hover:bg-blue-hover hover:shadow-xl">
                <div className="flex flex-row">
                    <div className="w-[25%]">
                        <p className="text-sm text-gray-300 mt-1">MARCH 2022 - JUNE 2023</p>
                    </div>
                    <div className="text-left w-[75%] ml-8">
                        <p className="text-xl font-bold">Jr Full Stack Software Developer</p>
                        <p className="text-sm text-gray-300 leading-7">Edify Software Consulting</p>
                        <p className="text-gray-300 leading-7 mt-4">I managed the development of educational projects using a modern tech stack, including React, Angular, Python, Node.js, Next.js, Java, Nest.js, and PostgreSQL. I worked on both front-end and back-end features, focusing on user engagement and meeting client needs. I managed client communications, gathered feedback, and followed Agile methodologies like Scrum and Kanban to ensure timely delivery. I implemented unit testing with Jest and React Testing Library, followed accessibility guidelines (a11y), and integrated multi-language support with Internationalization (i18n). I optimized deployment with CI/CD using GitHub Actions and automated testing with WebdriverIO. I conducted code reviews with Codacy, improved performance with Lighthouse and ClinicJS, and handled ongoing maintenance to ensure stability.</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-white p-12
            rounded overflow-hidden  
            bg-transparent
            hover:bg-blue-hover hover:shadow-xl">
                <div className="flex flex-row">
                    <div className="w-[25%]">
                        <p className="text-sm text-gray-300 mt-1">MARCH 2021 - JULY 2022</p>
                    </div>
                    <div className="w-[75%] text-left ml-8">
                        <p className="text-xl font-bold">Software Developer Intern</p>
                        <p className="text-sm text-gray-300 leading-7">Communication Technologies Research Center UCR</p>
                        <p className="text-gray-300 leading-7 mt-4">I contributed to the design and development of various applications using technologies such as Python with Django and Flask, Java for desktop apps, Ionic for mobile app development, and databases like MariaDB and PostgreSQL. I also used Bootstrap for front-end styling. Collaborating closely with other developers, I helped create intuitive user interfaces and features for real-time data visualization and analysis.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


