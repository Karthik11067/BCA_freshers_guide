// DGVC BCA Intelligent FAQ Assistant - Knowledge Base
// Organized by intent categories for fuzzy matching

const faqDatabase = {

    general_conversation: [
        { q: ["hi","hello","hey","heyy","hlo","hii"], a: "Hello! Welcome to the DGVC BCA Freshers Guide. I am your Intelligent Academic Assistant. How may I help you today?" },
        { q: ["good morning","gm","morning"], a: "Good morning! Wishing you a productive day ahead. How can I assist you?" },
        { q: ["good afternoon","afternoon"], a: "Good afternoon! Hope your day is going well. Feel free to ask me anything about BCA at DGVC." },
        { q: ["good evening","evening"], a: "Good evening! Ready to answer your questions about the BCA department." },
        { q: ["good night","night"], a: "Good night! Rest well. Remember, revision before sleep helps memory retention." },
        { q: ["how are you","how r u","how are u"], a: "I am doing great, thank you for asking! I am always ready to help BCA freshers navigate their academic journey." },
        { q: ["thank you","thanks","thx","ty","thankyou"], a: "You are most welcome! May your code compile without errors on the very first try!" },
        { q: ["bye","goodbye","see you","cya","see ya"], a: "Goodbye! Feel free to return anytime. Best of luck with your studies!" },
        { q: ["who are you","what are you","introduce yourself"], a: "I am the DGVC BCA Intelligent FAQ Assistant - your academic companion! I can answer questions about fees, attendance, exams, clubs, career guidance, and much more." },
        { q: ["what can you do","help me","what do you know"], a: "I can answer questions on: Admissions & Fees, Attendance & Exams, CIA & ESE Rules, Library & Labs, Clubs & Events, Career & Placements, Python, Java, DBMS and more! Just type your question!" }
    ],

    admissions: [
        { q: ["how to get admission","admission process","how to join bca","bca admission"], a: "Admission to BCA at DGVC is based on your Class 12 marks. Apply through the college admission portal, submit required documents, and attend counselling. Visit the college office for cut-off details." },
        { q: ["what is the eligibility for bca","bca eligibility","who can join bca"], a: "BCA eligibility at DGVC: Pass in Class 12 (any stream), Minimum 50% aggregate marks, Age: 17-22 years generally. Community certificates required for reservation." },
        { q: ["what documents are needed for admission","documents required"], a: "Required documents: Class 10 and 12 mark sheets, Transfer Certificate (TC), Migration Certificate, Community Certificate, Income Certificate, Passport-size photographs, Aadhaar Card." },
        { q: ["when does admission start","admission dates"], a: "Admissions typically begin in June-July after Class 12 board results are declared. Watch the DGVC official website for exact dates." },
        { q: ["is there an entrance exam for bca","bca entrance"], a: "No, BCA admission at DGVC is based on Class 12 marks only. There is no separate entrance examination." },
        { q: ["bca course duration","how long is bca"], a: "BCA is a 3-year undergraduate program consisting of 6 semesters. At DGVC, it follows the LOCF syllabus of the University of Madras." }
    ],

    fees: [
        { q: ["what is the fee","bca fees","course fees","fee structure","semester fees","tuition fee","fees details"], a: "BCA fee structure at DGVC (approximate): Tuition Fee around 25000-30000 per year. Lab Fee, Exam Fee, and other charges are additional. Download the BCA Prospectus from the Resources section for exact fees." },
        { q: ["what is the exam fee","exam fees"], a: "The semester examination fee is approximately 500-800 per semester. This is subject to university revision. Check the office for current rates." },
        { q: ["what is the lab fee","lab fees"], a: "Lab fees are included in the overall fee structure. There may be an additional practical exam fee during board exams. Consult the accounts section." },
        { q: ["fee payment mode","how to pay fees"], a: "Fees at DGVC can be paid via cash at the college counter, online through the college portal, or DD in favour of the Principal. Contact the accounts office for details." },
        { q: ["fine for late fee payment","late fee fine"], a: "A late fine may be levied for delayed fee payments. Submit fees before the deadline to avoid penalties. Check the office for current fine structure." }
    ],

    attendance: [
        { q: ["what is the attendance requirement","attendance rule","minimum attendance","attendance criteria"], a: "You must maintain a minimum of 75% attendance in every subject. Below 75% makes you ineligible to write the semester examination." },
        { q: ["what happens if attendance is low","less than 75","below 75"], a: "If your attendance falls below 75%, you will not be permitted to write the end-semester exam (ESE) for that subject and will be automatically detained." },
        { q: ["how is attendance calculated","attendance calculation"], a: "Attendance is calculated per subject: Total classes attended divided by Total classes held, multiplied by 100. Each subject's attendance is tracked independently." },
        { q: ["attendance condonation","medical attendance","attendance shortage"], a: "In genuine cases such as medical emergencies, the University may consider attendance condonation. Submit a medical certificate and application to the HOD within 7 days of returning." },
        { q: ["attendance for sports","sports attendance exemption"], a: "Yes. Students representing the college in inter-collegiate sports or NCC/NSS activities may receive attendance exemptions with proper official documentation." },
        { q: ["how to check attendance","check my attendance"], a: "Your attendance is tracked by each subject faculty. You can check it through the department's internal register or the college student portal." }
    ],

    examinations: [
        { q: ["what is ese","end semester exam","board exam"], a: "ESE stands for End Semester Examination, conducted by the University of Madras. It is worth 50 marks and tests your understanding of the full semester syllabus." },
        { q: ["how many exams are there","exam schedule","semester exams"], a: "Each semester has: 2 CIA Cycle Tests (internal), 1 Model Practical Exam, and 1 ESE (External End Semester Exam). Practicals and projects have separate evaluations." },
        { q: ["when is the exam","exam dates","exam time table"], a: "ESE dates are announced by the University of Madras. Typically, odd semester exams are in November-December and even semester exams are in April-May." },
        { q: ["exam pattern","question pattern","exam format"], a: "ESE pattern usually: Section A - Short answers (10 x 2 = 20 marks), Section B - Medium answers (5 x 5 = 25 marks), Section C - Long answers (1 x 5 = 5 marks). Total: 50 marks." },
        { q: ["arrear exam","supplementary exam","back papers"], a: "Students can write arrear exams during subsequent semester examinations. Final-year students get priority in supplementary exams offered by the university." },
        { q: ["what is the pass mark in exams","passing marks"], a: "You need a minimum of 40% in ESE (20 out of 50) AND 40% in CIA (20 out of 50) to pass a subject. Both conditions must be met independently." },
        { q: ["how to avoid arrears","avoid failures","tips to pass exam"], a: "To avoid arrears: Attend all classes regularly, Complete assignments on time, Revise after every class, Practice previous year ESE papers (available in Resources), Clarify doubts with faculty immediately." }
    ],

    cia: [
        { q: ["what is cia","cia marks","internal marks","cia total marks"], a: "CIA stands for Continuous Internal Assessment. It carries 50 marks total. It includes cycle tests, assignments, model exams, and attendance components." },
        { q: ["how many cycle tests","cycle test marks","number of tests"], a: "There are 2 CIA cycle tests per semester. Each test is for 50 marks (scaled to contribute to the overall 50). The marks contribute to your final CIA score." },
        { q: ["cia pass mark","minimum cia score"], a: "You must score a minimum of 40% in CIA (at least 20 out of 50) to be eligible to write the ESE examination for that subject." },
        { q: ["what is included in cia","cia components","cia breakdown"], a: "CIA components include: Cycle Test 1 and 2 (primary), Attendance marks, Assignment marks, Seminar or Viva marks, and Model Exam marks." },
        { q: ["can i repeat cia","cia retest","missed cia test"], a: "Retests for CIA are not generally permitted. If you miss a test due to genuine reasons like medical emergencies, submit documentation to the HOD. A retest is at the faculty discretion." }
    ],

    results: [
        { q: ["when are results published","results announcement","result date"], a: "University of Madras results are typically published 4-6 weeks after the ESE. Check the official UoM website (unom.ac.in) and the college student portal." },
        { q: ["how to check results","check result online","result portal"], a: "Results are published on the University of Madras website (unom.ac.in) and the college student ERP portal. Log in with your Roll Number to access your marks." },
        { q: ["what is revaluation","apply for revaluation","revaluation process"], a: "If unsatisfied with your marks, apply for revaluation within 15 days of the result announcement. Fill the form, pay approximately 500 per paper, and submit to the exam section." },
        { q: ["photocopy of answer sheet","answer script copy"], a: "You can apply for a photocopy of your answer script within the stipulated period after results to review where marks were lost. This helps plan for revaluation." },
        { q: ["how is gpa calculated","gpa calculation","what is gpa"], a: "GPA is calculated as: Sum of (Grade Points x Credits) divided by Total Credits. Grade scale: O(10), A+(9), A(8), B+(7), B(6), C(5), RA(0). CGPA is cumulative across all semesters." }
    ],

    bus_pass: [
        { q: ["how to get bus pass","bus pass procedure","student bus pass","mtc bus pass"], a: "To get an MTC student bus pass: 1. Collect form from college office, 2. Fill your personal and route details, 3. Get HOD signature, 4. Attach College ID proof, 5. Submit at MTC bus depot for your route, 6. Renew every semester." },
        { q: ["cost of bus pass","bus pass fee","bus pass price"], a: "Student bus passes are subsidized. Cost varies by route distance but is approximately 200-500 for 6 months. Check the MTC office for current rates." },
        { q: ["bus pass application","where to submit bus pass"], a: "Submit your bus pass application at the MTC bus depot nearest to your route starting point. Carry your college bonafide certificate issued by the office." },
        { q: ["bus pass for freshers","new student bus pass"], a: "As a fresher, apply for the bus pass in your first week of college. The college office issues bonafide certificates for this purpose. Travel with regular tickets until the pass is ready." }
    ],

    library: [
        { q: ["where is the library","library location"], a: "The department library is located on the second floor of the IT and BCA Self-Financing building. It houses over 2000 books, journals, and reference materials." },
        { q: ["library timings","library hours","when is library open"], a: "The department library is open from 10:00 AM to 5:00 PM on all working days (Monday to Saturday)." },
        { q: ["how many books can i borrow","library books limit","book borrowing limit"], a: "BCA students can borrow up to 2 books at a time for a period of 14 days. You can renew if you need more time." },
        { q: ["library fine","late return fine","book fine"], a: "A fine of 2 rupees per day is charged for each book returned after the 14-day due date. Return books on time to avoid fines." },
        { q: ["digital library","online resources","n-list database"], a: "The library provides access to the N-LIST (National Library and Information Services Infrastructure) database for digital journals, e-books, and research papers free of cost." }
    ],

    lab: [
        { q: ["lab rules","lab regulations","what are lab rules"], a: "Lab rules: Wear formal clothes and closed shoes, No food or drinks inside, No personal USB drives without permission, Keep workstation clean, Log out after use, Maintain silence at all times." },
        { q: ["when can i use lab","lab timings","lab hours"], a: "Labs are available during scheduled practical hours. For extra practice, request permission from the lab in-charge or HOD. Labs may be accessible during lunch or after class with approval." },
        { q: ["what software is in lab","lab software installed"], a: "Lab computers have: GCC/Code::Blocks for C/C++, Python (IDLE, Jupyter), Java (JDK + Eclipse), Oracle/MySQL for DBMS, NetBeans, VS Code, Notepad++, Web browsers and Office Suite." },
        { q: ["lab dress code","what to wear in lab"], a: "Formal attire is mandatory in labs. No sleeveless tops, shorts, or casual slippers. Closed shoes are required during all practical sessions." }
    ],

    projects: [
        { q: ["projects in bca","bca project","final year project","project work"], a: "Yes! A major software project is part of the BCA 6th semester curriculum. You develop an application under faculty mentor guidance and present it in a final viva." },
        { q: ["project ideas","project topics","what projects can we do"], a: "Popular BCA project domains: Web Applications (PHP, React), Android Apps (Java), Database Systems (Oracle/MySQL), Machine Learning (Python), E-commerce platforms, Inventory Management, Chatbots." },
        { q: ["project mentor","faculty guide","who guides project"], a: "Each student is assigned a faculty guide for the project. Your guide reviews your abstract, monitors progress at weekly intervals, and evaluates the final submission." },
        { q: ["project timeline","when does project begin"], a: "Project preparation begins at the start of the 6th semester. Abstract submission happens in the first month, followed by weekly reviews and the final viva evaluation." }
    ],

    python: [
        { q: ["what is python","python language"], a: "Python is a high-level, interpreted programming language known for its clean syntax. It is widely used in web development, data science, AI, automation, and scripting." },
        { q: ["python in bca","python taught in bca","is python in syllabus"], a: "Yes! Python is part of the BCA curriculum with practicals covering data types, loops, functions, OOP, file handling, and modules. Check the ESE Question Papers section for past papers." },
        { q: ["python concepts","python topics covered"], a: "Python topics in BCA: Variables and Data Types, Control Flow (if/elif/else, loops), Functions and Recursion, Lists, Tuples, Sets, Dictionaries, String Manipulation, OOP: Classes and Objects and Inheritance, File Handling, Modules." },
        { q: ["python ide","python editor in lab"], a: "We use IDLE (built-in), VS Code, Jupyter Notebook, and PyCharm for Python practicals in the labs." },
        { q: ["python career","jobs with python"], a: "Python careers: Backend Developer, Data Analyst/Scientist, Machine Learning Engineer, Automation Tester, AI Developer, Django/Flask Web Developer." },
        { q: ["how to learn python","python resources"], a: "Learn Python via: W3Schools, GeeksforGeeks, freeCodeCamp YouTube, HackerRank Python track, Codecademy Python Course, and our ESE Question Papers for exam preparation!" }
    ],

    java: [
        { q: ["java in bca","java course bca","is java taught"], a: "Yes! Java is taught in the 3rd semester as part of Object-Oriented Programming (OOP). It covers core OOP concepts using Java as the implementation language." },
        { q: ["java concepts","what is taught in java","java topics"], a: "Java topics in BCA: Classes and Objects, Inheritance, Polymorphism, Encapsulation, Abstraction, Interfaces and Packages, Exception Handling, Multithreading, JDBC for database connectivity." },
        { q: ["java vs python","difference between java and python"], a: "Python: Interpreted, dynamically typed, concise, best for AI/Data Science. Java: Compiled to bytecode, statically typed, verbose, best for enterprise/Android apps. Both are important for a BCA student!" },
        { q: ["java career","jobs in java"], a: "Java careers: Android Developer, Backend Java Developer (Spring Boot), Full Stack Developer, Software Engineer in MNC, QA Engineer." }
    ],

    dbms: [
        { q: ["what is dbms","database management system","database basics"], a: "DBMS (Database Management System) is software for creating, managing, and querying structured data. Examples include MySQL, Oracle, PostgreSQL, and SQLite." },
        { q: ["dbms in bca","dbms subject"], a: "Yes. DBMS is a core subject in BCA, typically taught in the 2nd or 3rd year. It covers relational databases, SQL, normalization, transactions, and indexing concepts." },
        { q: ["what is sql","sql basics","sql commands"], a: "SQL (Structured Query Language) is used to communicate with databases. Key commands: SELECT, INSERT, UPDATE, DELETE, CREATE TABLE, JOIN, GROUP BY, ORDER BY." },
        { q: ["normalization in dbms","what is normalization"], a: "Normalization is organizing a database to reduce redundancy. Normal Forms: 1NF, 2NF, 3NF, BCNF. It ensures data integrity and efficient storage." },
        { q: ["dbms career","database career"], a: "Database careers: Database Administrator (DBA), Data Analyst, SQL Developer, Backend Developer, Data Engineer." }
    ],

    data_structures: [
        { q: ["what is data structures","data structures basics","ds subject"], a: "Data Structures are ways to organize and store data efficiently. Types: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables. Essential for problem solving and interviews." },
        { q: ["what is a linked list","linked list"], a: "A linked list is a linear data structure where elements (nodes) are connected via pointers. Types: Singly, Doubly, and Circular. Allows efficient insertions and deletions." },
        { q: ["what is a stack","stack data structure"], a: "A Stack is a LIFO (Last In First Out) data structure. Operations: push() and pop(). Used in function call management, expression evaluation, and undo operations." },
        { q: ["what is a queue","queue data structure"], a: "A Queue is a FIFO (First In First Out) data structure. Operations: enqueue() and dequeue(). Used in CPU scheduling, buffering, and Breadth First Search algorithms." },
        { q: ["what is a binary tree","binary tree"], a: "A binary tree is a hierarchical data structure where each node has at most 2 children. Types include BST, AVL Tree, and Heap. Used in searching and sorting algorithms." }
    ],

    operating_systems: [
        { q: ["what is operating system","what is os","os subject"], a: "An Operating System (OS) is system software that manages hardware and software resources. Examples: Windows, Linux, macOS, Android." },
        { q: ["os topics","os syllabus","what is taught in os"], a: "OS topics in BCA: Process Management, CPU Scheduling (FCFS, SJF, Round Robin), Memory Management (Paging, Segmentation), File Systems, Deadlocks, Virtual Memory, I/O Management." },
        { q: ["what is deadlock","deadlock in os"], a: "A deadlock occurs when two or more processes are waiting indefinitely for each other to release resources. Four conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait." },
        { q: ["what is paging","paging in os"], a: "Paging divides memory into fixed-size blocks called pages and frames. It eliminates external fragmentation and maps virtual addresses to physical memory through a page table." }
    ],

    networking: [
        { q: ["what is computer networks","networking basics","computer networks subject"], a: "Computer Networks covers how computers communicate and share data. Topics: OSI model, TCP/IP, routing, switching, protocols (HTTP, FTP, DNS), and network security." },
        { q: ["osi model","what is osi layers"], a: "OSI Model has 7 layers: 1.Physical, 2.Data Link, 3.Network, 4.Transport, 5.Session, 6.Presentation, 7.Application. Each layer handles a specific aspect of data transmission." },
        { q: ["tcp ip","what is tcp ip model"], a: "TCP/IP is the foundation protocol of the internet. It has 4 layers: Network Access, Internet (IP), Transport (TCP/UDP), and Application (HTTP, FTP, DNS, SMTP)." },
        { q: ["what is ip address","ip address meaning"], a: "An IP address is a unique numerical label assigned to every device on a network. IPv4 uses 32 bits (e.g., 192.168.1.1) and IPv6 uses 128 bits for more address space." },
        { q: ["networking career","jobs in networking"], a: "Networking careers: Network Administrator, Network Engineer, Cyber Security Analyst, Cloud Infrastructure Engineer, System Administrator." }
    ],

    cloud_computing: [
        { q: ["what is cloud computing","cloud basics"], a: "Cloud computing delivers computing services (servers, storage, databases, networking, software) over the internet. It offers scalability, flexibility, and cost-efficiency." },
        { q: ["what is aws","amazon web services"], a: "AWS (Amazon Web Services) is the world's most comprehensive cloud platform. Key services: EC2 (virtual servers), S3 (storage), RDS (database), Lambda (serverless functions)." },
        { q: ["cloud computing career","cloud jobs"], a: "Cloud careers: Cloud Architect, AWS Solutions Architect, DevOps Engineer, Cloud Security Engineer, Site Reliability Engineer (SRE). High demand and excellent salaries!" }
    ],

    web_development: [
        { q: ["what is web development","web dev basics"], a: "Web development involves building websites and web apps. Frontend covers HTML, CSS, JavaScript. Backend covers Python, PHP, Node.js. Full Stack combines both." },
        { q: ["html basics","what is html"], a: "HTML (HyperText Markup Language) is the standard language for creating web page structure and content using elements like headings, paragraphs, images, forms, and links." },
        { q: ["css basics","what is css"], a: "CSS (Cascading Style Sheets) styles HTML elements: colors, fonts, layout, spacing. Modern CSS includes Flexbox, Grid, animations, and media queries for responsive design." },
        { q: ["javascript basics","what is javascript"], a: "JavaScript is the programming language of the web. It adds interactivity: form validation, dynamic content loading, API calls, and event handling. Runs in all browsers." },
        { q: ["full stack developer","full stack career"], a: "A full-stack developer works on both frontend (React, HTML/CSS) and backend (Node.js, Python, PHP). One of the highest-demand and best-paying roles in IT." }
    ],

    cyber_security: [
        { q: ["what is cyber security","cybersecurity basics"], a: "Cyber Security protects networks, systems, and programs from digital attacks and data theft. It includes network security, cryptography, ethical hacking, and incident response." },
        { q: ["cyberfest","what is cyberfest event"], a: "Cyberfest is the flagship annual technical festival of the DGVC BCA department, organized by students, staff, and the INFOCA Forum. It features inter-collegiate coding, debugging, web design, and paper presentations." },
        { q: ["ethical hacking","ethical hacking career"], a: "Ethical hackers test systems legally to find security vulnerabilities. Top certifications: CEH (Certified Ethical Hacker), CompTIA Security+. High-demand and well-paying career path." }
    ],

    placements: [
        { q: ["placement record","placement percentage","how many get placed","bca placements"], a: "The DGVC BCA department has a strong placement track record with approximately 70% of eligible students placed in reputed IT companies annually." },
        { q: ["which companies recruit","bca recruiters","companies in campus"], a: "Companies that recruit BCA graduates include Cognizant, Wipro, Infosys, TCS, Capgemini, Accenture, HCL, and various mid-sized IT firms and startups." },
        { q: ["average salary after bca","package after bca"], a: "Fresh BCA graduates typically receive packages ranging from 2.5 LPA to 5 LPA, depending on technical skills, communication ability, and the company." },
        { q: ["how to get placed","placement preparation","placement tips"], a: "To get placed: Master at least one programming language (Python/Java), Practice DSA on LeetCode/HackerRank, Build 2-3 projects for your resume, Improve communication and aptitude, Attend all pre-placement training sessions." },
        { q: ["placement eligibility","who is eligible for placement"], a: "Students with no active backlogs, a minimum 60% aggregate CGPA, and good attendance are generally eligible for campus placements. Some companies have specific criteria." }
    ],

    higher_studies: [
        { q: ["what to do after bca","higher studies after bca"], a: "After BCA, popular options: MCA (Master of Computer Applications), M.Sc. Computer Science, MBA (IT/Business), MS Abroad (USA, UK, Canada), AWS/Azure/Google Cloud certifications." },
        { q: ["what is mca","mca after bca"], a: "MCA is a 2-year postgraduate program in Computer Applications. It provides advanced knowledge in software development, algorithms, and project management. Natural continuation after BCA." },
        { q: ["study abroad after bca","ms abroad"], a: "Many BCA graduates pursue MS degrees abroad in USA, UK, Canada, or Germany. You will need GRE or IELTS scores, strong projects, and a well-crafted Statement of Purpose (SOP)." }
    ],

    communication_skills: [
        { q: ["improve communication","communication skills tips"], a: "To improve communication: Participate in Eco Chambers Club discussions, Read English newspapers daily, Practice speaking English with friends, Watch TED talks, Join seminars and debates, Participate in personality development programs." },
        { q: ["soft skills","personality development","important soft skills"], a: "Key soft skills employers look for: Communication (verbal and written), Teamwork and Leadership, Problem-solving, Time Management, Adaptability, and Positive Attitude. Join Eco Chambers and Pixel Pioneer clubs!" }
    ],

    interview_preparation: [
        { q: ["interview preparation","how to prepare for interviews","interview tips"], a: "Interview strategy: Technical - Revise DSA, DBMS, OS, Networks. Coding - Practice on HackerRank and LeetCode. HR - Prepare Tell me about yourself, strengths and weaknesses. Research the company before attending." },
        { q: ["common interview questions","what questions asked in interview"], a: "Common interview questions: Tell me about yourself, Explain OOP concepts, What is SQL and normalization, Reverse a string in Python, What is a deadlock, Where do you see yourself in 5 years." },
        { q: ["resume building","how to make resume","cv tips"], a: "Resume tips for freshers: Keep it to 1 page, Include Objective, Skills, Projects, Certifications, List technical skills (languages, tools), Mention 2-3 projects with descriptions, Include internship experience if any." }
    ],

    student_clubs: [
        { q: ["what clubs are there","student clubs","clubs in bca","list of clubs"], a: "DGVC BCA student clubs: HackHub Club (Debugging), Code Crafters Club (Coding Challenges), Smart Tech Club (Innovation), Pixel Pioneer Club (Design), Eco Chambers Club (Group Discussions), Unnat Bharat Abhiyan (Community Service). Join one that matches your passion!" },
        { q: ["what is infoca","infoca forum"], a: "INFOCA Forum is the official student association of the BCA Department at DGVC. It organizes Cyberfest, workshops, seminars, ideathons, and various enrichment programs throughout the year." },
        { q: ["hackhub club"], a: "HackHub Club focuses on debugging activities. Members learn to trace and fix bugs in code, participate in debugging competitions, and improve their problem-solving speed under time pressure." },
        { q: ["code crafters club"], a: "Code Crafters Club is for coding enthusiasts. It organizes coding challenges, pair programming sessions, and prepares students for competitive programming events." },
        { q: ["smart tech club"], a: "Smart Tech Club explores emerging technologies like AI, IoT, blockchain, and cloud computing. Members explore and present innovative ideas and cutting-edge tech solutions." },
        { q: ["pixel pioneer club"], a: "Pixel Pioneer Club is for creative minds interested in UI/UX design, graphic design, poster making, and digital creativity using tools like Canva, Figma, and Adobe products." },
        { q: ["eco chambers club"], a: "Eco Chambers Club focuses on group discussions, debates, elocution, and communication skill development. Excellent for students who want to improve speaking and analytical reasoning." },
        { q: ["unnat bharat abhiyan"], a: "Unnat Bharat Abhiyan is a government initiative where students engage in rural development, village extension activities, and community service projects, building social responsibility and leadership." }
    ],

    college_rules: [
        { q: ["college dress code","what to wear in college"], a: "DGVC dress code: Girls - Churidar or sari. Boys - Formal shirt and trousers. No jeans, T-shirts, sleeveless tops, or slippers. College ID card must be worn and visible at all times inside campus." },
        { q: ["college timings","shift timings","college time","timing"], a: "DGVC BCA Shift I timings: 9:00 AM to 1:30 PM. Report at least 10 minutes before classes begin. Saturdays may be working days on alternate weeks." },
        { q: ["mobile phone rules","phone policy in college"], a: "Mobile phones are NOT permitted in classrooms or labs. Use phones only during break periods in designated areas. Confiscated phones are returned only to parents or guardians." },
        { q: ["ragging rules","anti ragging policy"], a: "DGVC has ZERO TOLERANCE anti-ragging policy. Any form of ragging leads to immediate expulsion and legal action. Report any incident to the Anti-Ragging Committee immediately." },
        { q: ["id card rules","college id card"], a: "Your college ID card must be worn and visible at all times within the campus. Lost ID cards must be reported immediately and a duplicate obtained from the office with applicable fee." }
    ],

    faculty: [
        { q: ["who is the hod","head of department","hod name","hod bca"], a: "Dr. K. Angayarkkani is the Associate Professor and Head of the Department of Computer Applications (BCA) at DGVC. She holds M.Sc., M.C.A., M.Phil., and Ph.D. qualifications." },
        { q: ["how many faculty","number of faculty members","faculty list"], a: "The BCA Department has 16 staff members: 15 dedicated teaching faculty and 1 non-teaching staff. All faculty are highly qualified with M.C.A., M.Phil., Ph.D., NET, and SET credentials." },
        { q: ["how to contact faculty","faculty contact"], a: "Visit the staff room on the 2nd floor of the IT and BCA Self-Financing block during office hours. You can also contact the department through the official DGVC website." },
        { q: ["are faculty approachable","can i meet faculty"], a: "Absolutely! DGVC BCA faculty maintain open-door hours and are very approachable. Never hesitate to ask questions, clarify doubts, or seek guidance for projects and career decisions." }
    ],

    events: [
        { q: ["what is cyberfest","cyberfest event description"], a: "Cyberfest is the flagship annual technical festival organized by BCA students, staff, and INFOCA Forum. It features inter-collegiate coding, debugging, web design, paper presentations, and gaming competitions." },
        { q: ["what is ideathon","ideathon event"], a: "An Ideathon is a creative competition where students pitch innovative tech ideas, app solutions, or business concepts to panels of industry experts and faculty judges." },
        { q: ["technical workshops","workshops in bca"], a: "The department organizes regular workshops on Python, Web Development, Android, Cloud Computing, Cyber Security, and Ethical Hacking - all conducted by industry experts and alumni." },
        { q: ["guest lectures","speakers in bca"], a: "INFOCA Forum arranges regular guest lectures by industry professionals, software architects, and alumni who share real-world experience and career insights with students." }
    ],

    internships: [
        { q: ["is internship mandatory","internship requirement bca"], a: "Yes! A minimum 4-week internship (usually after the 4th semester) is mandatory for BCA students. It earns academic credits and provides real work experience." },
        { q: ["how to find internship","internship tips","internship platforms"], a: "Ways to find internships: Check the placement cell notice board, Apply on Internshala and LinkedIn, Contact faculty for referrals, Attend college career fairs, Network with alumni on LinkedIn." },
        { q: ["internship documents","what to submit after internship"], a: "After internship submit: Internship diary/logbook, Completion certificate from company, and Internship project report. Submit these to the department coordinator for credit evaluation." }
    ],

    freshers_advice: [
        { q: ["advice for freshers","tips for new students","freshers guide","new student"], a: "Welcome to DGVC BCA! Fresher tips: Attend every class (attendance matters!), Get your bus pass in week 1, Join at least 1 student club, Build one small project each semester, Make good friends, Respect all faculty members, Use the library and digital resources, Focus on career goals from day 1!" },
        { q: ["study tips","how to manage studies","study techniques"], a: "Study tips for BCA: Set daily revision targets (1 hour minimum), Revise after every lecture while fresh, Form study groups, Practice coding daily, Use previous year question papers from the Resources section." },
        { q: ["balance college life","academics and activities balance"], a: "Balance tips: Prioritize academics first, Join clubs for skill development (not as distraction), Create a weekly schedule, Use weekends for revision and projects, Stay healthy: sleep well, exercise, and eat nutritious food." },
        { q: ["avoid malpractice","exam malpractice"], a: "DGVC has ZERO tolerance for malpractice. Students caught cheating face: Immediate confiscation of paper, Debarment from exam, Disciplinary committee hearing, Possible expulsion. Always be honest in examinations." },
        { q: ["first semester tips","first year bca tips"], a: "For your first semester: Do not panic! Start steady. Focus on C Programming and Mathematics. Attend every class. Make friends with seniors who can guide you. Use the department library. Be regular and disciplined." }
    ],

    value_added_courses: [
        { q: ["value added courses","certification courses bca"], a: "The BCA department facilitates value-added certification courses on: Python Programming, Web Development, Tally, Digital Marketing, and Cloud Fundamentals. These complement your degree and boost employability." },
        { q: ["iit bombay spoken tutorial","spoken tutorial course"], a: "DGVC participates in the IIT Bombay Spoken Tutorial Project, offering free online courses in C, C++, Python, Java, PHP, and more with recognized national certificates." },
        { q: ["online courses","where to learn online","online learning"], a: "Recommended online platforms: NPTEL (free, UGC recognized), Coursera and edX (free audit), Udemy (affordable), YouTube: FreeCodeCamp and Traversy Media, HackerRank and LeetCode for practice." }
    ]

};

(function registerFaqKnowledgeBase() {
    function countFaqEntries(database) {
        if (!database || typeof database !== 'object') {
            return 0;
        }

        return Object.values(database).reduce((total, entries) => {
            if (!Array.isArray(entries)) {
                return total;
            }

            return total + entries.reduce((entryTotal, entry) => {
                if (!entry || !Array.isArray(entry.q)) {
                    return entryTotal;
                }

                return entryTotal + entry.q.filter(question => typeof question === 'string' && question.trim()).length;
            }, 0);
        }, 0);
    }

    const faqCount = countFaqEntries(faqDatabase);

    window.faqKnowledgeBase = faqDatabase;
    window.faqKnowledgeBaseCount = faqCount;

    if (faqCount > 0) {
        console.info(`Loaded ${faqCount} FAQ entries successfully.`);
    } else {
        console.warn('FAQ knowledge base loaded, but no valid FAQ entries were found.');
    }

    if (typeof window.registerKnowledgeBase === 'function') {
        window.registerKnowledgeBase(faqDatabase);
    } else {
        window.pendingKnowledgeBase = faqDatabase;
    }
})();
