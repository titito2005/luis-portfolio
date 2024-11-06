import React from "react"

export const Experience: React.FC = () => {
    return (
        <div className="flex flex-col text-center justify-center items-center mt-[120px]">
            <p className="text-white text-3xl font-bold">Experience</p>

            <div className="mt-10 text-white p-12
            rounded overflow-hidden  
            bg-transparent
            hover:bg-blue-hover hover:shadow-xl">
                <div className="flex flex-row sm:flex-col md:flex-row">
                    <div className="md:w-[25%] sm:w-full sm:text-left md:text-center">
                        <p className="text-sm text-gray-300 mt-1">JUNE 2023 - PRESENT</p>
                    </div>
                    <div className="text-left md:w-[75%] md:ml-8 sm:w-full sm:ml-0">
                        <p className="text-xl font-bold text-[#92e3a9]">Mid Full Stack Software Developer</p>
                        <p className="text-sm text-gray-300 leading-7">Edify Software Consulting</p>
                        <p className="text-gray-300 leading-7 mt-4">I led the migration of packages from Nexus to GitHub Packages, improving how we manage dependencies. I also handled maintenance tasks for existing projects to ensure they ran smoothly and remained stable. Additionally, I updated libraries and dependencies to enhance security and performance. To increase development speed and improve code quality, I optimized our CI/CD processes using GitHub Actions.</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-white p-12
            rounded overflow-hidden  
            bg-transparent
            hover:bg-blue-hover hover:shadow-xl">
                <div className="flex flex-row sm:flex-col md:flex-row">
                    <div className="md:w-[25%] sm:w-full sm:text-left md:text-center">
                        <p className="text-sm text-gray-300 mt-1">MARCH 2022 - JUNE 2023</p>
                    </div>
                    <div className="text-left md:w-[75%] md:ml-8 sm:w-full sm:ml-0">
                        <p className="text-xl font-bold text-[#92e3a9]">Jr Full Stack Software Developer</p>
                        <p className="text-sm text-gray-300 leading-7">Edify Software Consulting</p>
                        <p className="text-gray-300 leading-7 mt-4">Led educational projects using React, Angular, Python, Node.js, Next.js, Java, Nest.js, and PostgreSQL. Managed front-end and back-end, focusing on user engagement and client needs. Followed Agile methodologies, implemented testing (Jest), ensured accessibility (a11y), integrated i18n, and optimized CI/CD with GitHub Actions. Conducted code reviews, improved performance, and handled maintenance.</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-white p-12
            rounded overflow-hidden  
            bg-transparent
            hover:bg-blue-hover hover:shadow-xl">
                <div className="flex flex-row sm:flex-col md:flex-row">
                    <div className="md:w-[25%] sm:w-full sm:text-left md:text-center">
                        <p className="text-sm text-gray-300 mt-1">MARCH 2021 - JULY 2022</p>
                    </div>
                    <div className="text-left md:w-[75%] md:ml-8 sm:w-full sm:ml-0">
                        <p className="text-xl font-bold text-[#92e3a9]">Software Developer Intern</p>
                        <p className="text-sm text-gray-300 leading-7">Communication Technologies Research Center UCR</p>
                        <p className="text-gray-300 leading-7 mt-4">I contributed to the design and development of various applications using technologies such as Python with Django and Flask, Java for desktop apps, Ionic for mobile app development, and databases like MariaDB and PostgreSQL. I also used Bootstrap for front-end styling. Collaborating closely with other developers, I helped create intuitive user interfaces and features for real-time data visualization and analysis.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


