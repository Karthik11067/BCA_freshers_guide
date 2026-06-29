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
        { q: ["thank you","thanks","thx","ty","thankyou"], a: "You are most welcome!" },
        { q: ["bye","goodbye","see you","cya","see ya"], a: "Goodbye! Feel free to return anytime. Best of luck with your studies!" },
        { q: ["who are you","what are you","introduce yourself"], a: "I am the DGVC BCA Intelligent FAQ Assistant - your academic companion! I can answer questions about fees, attendance, exams, clubs, career guidance, and much more." },
        { q: ["what can you do","help me","what do you know"], a: "I can answer questions on: Admissions & Fees, Attendance & Exams, CIA & ESE Rules, Library & Labs, Clubs & Events, Career & Placements, Python, Java, DBMS and more! Just type your question!" }
    ],

    admissions: [
        { q: ["how to get admission","admission process","how to join bca","bca admission"], a: "Admission to BCA at DGVC is based on your Class 12 marks. Apply through the college admission portal, submit required documents, and attend counselling. Visit the college office for cut-off details." },
        { q: ["what is the eligibility for bca","bca eligibility","who can join bca"], a: "BCA Eligibility: Pass in Class 12 (any stream). Admission is based on merit, and candidates with 80% + aggregate marks have a stronger chance of selection through counselling." },
        { q: ["what documents are needed for admission","documents required"], a: "Required documents: Class 10 and 12 mark sheets, Transfer Certificate (TC), Migration Certificate, Community Certificate, Income Certificate, Passport-size photographs." },
        { q: ["when does admission start","admission dates"], a: "Admissions typically begin in May-July after Class 12 board results are declared. Watch the DGVC official website for exact dates." },
        { q: ["is there an entrance exam for bca","bca entrance"], a: "No, BCA admission at DGVC is based on Class 12 marks only. There is no separate entrance examination." },
        { q: ["bca course duration","how long is bca"], a: "BCA is a 3-year undergraduate program consisting of 6 semesters. At DGVC, it follows the LOCF syllabus of the University of Madras." }
    ],

    fees: [
        { q: ["what is the fee","bca fees","course fees","fee structure","semester fees","tuition fee","fees details"], a: "BCA fee structure at DGVC (approximate): Tuition Fee around 65000-70000 per year." },
        { q: ["what is the exam fee","exam fees"], a: "The semester examination fee is approximately 1500-2000 per semester. This is subject to university revision. Check the DGVC official website for current rates." },
        { q: ["what is the lab fee","lab fees"], a: "Lab fees are included in the overall fee structure. There may be an additional practical exam fee during board exams. Feel free to inquire at the accounts office." },
        { q: ["fee payment mode","how to pay fees"], a: "Fees at DGVC can be paid via Demand Draft at the college counter, online through the college portal. Contact the accounts office for details." },
        { q: ["fine for late fee payment","late fee fine"], a: "A late fine may be levied for delayed fee payments. Submit fees before the deadline to avoid penalties. Check the office for current fine structure." }
    ],

    attendance: [
        { q: ["what is the attendance requirement","attendance rule","minimum attendance","attendance criteria"], a: "You must maintain a minimum of 75% attendance in every subject. Below 75% makes you ineligible to write the semester examination and the CIA exams as well." },
        { q: ["what happens if attendance is low","less than 75","below 75"], a: "If your attendance falls below 75%, you will not be permitted to write the end-semester exam (ESE) for that subject and will be automatically detained." },
        { q: ["how is attendance calculated","attendance calculation"], a: "Attendance is calculated per subject: Total classes attended divided by Total classes held, multiplied by 100. Each subject's attendance is tracked independently." },
        { q: ["attendance condonation","medical attendance","attendance shortage"], a: "In genuine cases such as medical emergencies, the College may consider attendance condonation. Submit a medical certificate and application to the HOD immediately upon returning." },
        { q: ["attendance for sports","sports attendance exemption"], a: "Yes. Students representing the college in inter-collegiate sports or NCC/NSS activities may receive ON DUTY (OD) with proper official documentation." },
        { q: ["how to improve attendance","increase attendance"], a: "To improve attendance: Attend all classes, Submit leave applications in advance, Participate in OD activities, Avoid unnecessary absences, and Request faculty for guidance if you are falling short." },
        { q: ["leave","How do I apply for leave"], a: "Submit a written leave letter signed by your parent to your class coordinator. For medical leave extending beyond three days, a medical certificate must be attached." },
        { q: ["Is medical certificate required for medical leave","medical certificate for leave"], a: "Yes, a medical certificate signed by a registered practitioner is required for medical leaves longer than 3 consecutive days." },
        { q: ["how to check attendance","check my attendance"], a: "Your attendance is tracked by each subject faculty. You can check it through the department's internal register or in the LMS." }
    ],

    examinations: [
        { q: ["what is ese","end semester exam","board exam"], a: "ESE stands for End Semester Examination, conducted by the University of Madras. It is worth 100 marks and tests your understanding of the full semester syllabus." },
        { q: ["how many exams are there","exam schedule","semester exams"], a: "Each semester has: 2 CIA Cycle Tests (internal), 1 Model Practical Exam, and 1 ESE (External End Semester Exam). Practicals and projects have separate evaluations." },
        { q: ["when is the exam","exam dates","exam time table"], a: "ESE dates are announced by the University of Madras. Typically, odd semester exams are in November-December and even semester exams are in April-May." },
        { q: ["exam pattern","question pattern","exam format"], a: "ESE pattern usually: Section A - Short answers (10 x 2 = 20 marks), Section B - Medium answers (5 x 7 = 35 marks), Section C - Long answers (3 x 15 = 45 marks). Total: 100 marks." },
        { q: ["arrear exam","supplementary exam","back papers"], a: "Students can write arrear exams during subsequent semester examinations. Final-year students get priority in supplementary exams offered by the university." },
        { q: ["what is the pass mark in exams","passing marks"], a: "You need a minimum of 40% in ESE (40 out of 100) AND 40% in CIA (20 out of 50) to pass a subject. Both conditions must be met independently." },
        { q: ["how to avoid arrears","avoid failures","tips to pass exam"], a: "To avoid arrears: Attend all classes regularly, Complete assignments on time, Revise after every class, Practice previous year ESE papers (available in Resources), Clarify doubts with faculty immediately." }
    ],

    cia: [
        { q: ["what is cia","cia marks","internal marks","cia total marks"], a: "CIA stands for Continuous Internal Assessment. It carries 50 marks total. It includes cycle tests, assignments, generic skills, and attendance components." },
        { q: ["how many cycle tests","cycle test marks","number of tests"], a: "There are 2 CIA cycle tests per semester. Each test is for 50 marks (scaled to contribute to the overall 50). The marks contribute to your final CIA score." },
        { q: ["cia pass mark","minimum cia score"], a: "You must score a minimum of 40% in CIA (at least 20 out of 50)." },
        { q: ["what is included in cia","cia components","cia breakdown"], a: "CIA components include: Cycle Test 1 and 2 (primary), Section A - Short answers (10 x 1 = 10 marks), Section B - Medium answers (4 x 5 = 20 marks), Section C - Long answers (2 x 10 = 20 marks). Total: 50 marks." },
        { q: ["can i repeat cia","cia retest","missed cia test"], a: "CIA retests are generally not allowed. Students with valid reasons may submit proof to the HOD for consideration. In certain cases, students with at least 75% attendance may be permitted to take a CIA improvement examination for 100 marks covering the first four units of the syllabus, subject to departmental approval." }
    ],

    results: [
        { q: ["when are results published","results announcement","result date"], a: "ESE results are typically published 4-6 weeks after the ESE. Check the official Student Login portal." },
        { q: ["how to check results","check result online","result portal"], a: "Semester examination results are published on the College Student Portal. Log in using your Register Number and password to view and download your marksheet." },
        { q: ["what is revaluation","apply for revaluation","revaluation process"], a: "If unsatisfied with your marks, apply for revaluation within stipulated period after the result announcement. Fill the form, pay approximately 700 per paper, and submit to the counter section." },
        { q: ["photocopy of answer sheet","answer script copy"], a: "You can apply for a photocopy of your answer script within the stipulated period after results to review where marks were lost. This helps plan for revaluation." },
        { q: ["how is gpa calculated","gpa calculation","what is gpa"], a: "GPA is calculated as: Sum of (Grade Points x Credits) divided by Total Credits. Grade scale: O(10), A+(9), A(8), B+(7), B(6), C(5), RA(0). CGPA is cumulative across all semesters." }
    ],

    bus_pass: [
        { q: ["how to get bus pass","bus pass procedure","student bus pass","mtc bus pass"], a: "To get an MTC student bus pass: 1. Collect form from college office, 2. Fill your personal and route details, 3. Attach photograph, 4. Submit at the college counter, 5. Renew every month at the depot." },
        { q: ["cost of bus pass","bus pass fee","bus pass price"], a: "College bus passes are available at a subsidized rate of approximately ₹280 per month for point-to-point travel. Contact the bus pass counter for route details and application procedures." },
        { q: ["bus pass application","where to submit bus pass application"], a: "Submit your bus pass application at the college counter." },
        { q: ["bus pass for freshers","new student bus pass"], a: "As a fresher, apply for the bus pass in your first week of college. The college office will assist you with the application process. Travel with regular tickets until the pass is ready." }
    ],

    library: [
        { q: ["where is the library","library location"], a: "The College Library is located in the Data Centre building beside the Bhasha Sangam Block and houses over 2,000 books, journals, and reference materials." },
        { q: ["library timings","library hours","when is library open"], a: "The college library is open from 10:00 AM to 5:00 PM on all working days (Monday to Saturday)." },
        { q: ["how many books can i borrow","library books limit","book borrowing limit"], a: "Students are permitted to borrow books from the library for academic purposes. Borrowed books must be handled responsibly and returned in good condition within the prescribed due date" },
        { q: ["digital library","online resources","n-list database"], a: "The library provides access to the N-LIST (National Library and Information Services Infrastructure) database for digital journals, e-books, and research papers free of cost." }
    ],

    lab: [
        { q: ["lab rules","lab regulations","what are lab rules"], a: "No food or drinks inside, No personal USB drives without permission, Keep workstation clean, Log out after use, Maintain silence at all times, mobile phones are strictly prohibited." },
        { q: ["when can i use lab","lab timings","lab hours"], a: "Labs are available during scheduled practical hours. For extra practice, request permission from the lab in-charge or HOD. Labs may be accessible during break or after class with approval." },
        { q: ["what software is in lab","lab software installed"], a: "Lab computers have: GCC/Code::Blocks for C/C++, Python (IDLE, Jupyter), Java (JDK + Eclipse), Oracle/MySQL for DBMS, NetBeans, VS Code, Notepad++, Web browsers and Office Suite." },
        { q: ["lab assistance","lab help","who helps in lab"], a: "Lab assistants and faculty are available during lab hours to help with software issues, debugging, and practical guidance. Always ask for help if you face difficulties." }
    ],

    projects: [
        { q: ["projects in bca","bca project","final year project","project work"], a: "Yes! A major software project is part of the BCA 6th semester curriculum. You develop an application under faculty mentor guidance and present it in a final viva." },
        { q: ["project ideas","project topics","what projects can we do"], a: "Popular BCA project domains: Web Applications (PHP, React), Android Apps (Java), Database Systems (Oracle/MySQL), Machine Learning (Python), E-commerce platforms, Inventory Management, Chatbots." },
        { q: ["project mentor","faculty guide","who guides project"], a: "Each student is assigned a faculty guide for the project. Your guide reviews your abstract, monitors progress at weekly intervals, and evaluates the final submission." },
        { q: ["project timeline","when does project begin"], a: "Project preparation begins at the start of the 6th semester. Abstract submission happens in the first month, followed by weekly reviews and the final viva evaluation." }
    ],

    skills: [

    { q: ["improve skills coding programming development", "help improve technical skills", "faculty seniors guidance skills", "learn coding from beginning", "is skill development support available"], a: "Yes. Faculty members and seniors are always ready to guide you. The department regularly conducts workshops, guest lectures, soft skill training and encourages students to improve both technical and communication skills." },

    { q: ["how improve coding skills", "start programming from first year", "best platform learn coding", "youtube leetcode guidance", "learn development step by step"], a: "Start from your first semester itself. Learn through YouTube, practice coding regularly, solve problems in LeetCode, and seek guidance from seniors whenever needed. Consistency is the key." },

    { q: ["certificate courses available", "extra courses for skills", "web designing devops ethical hacking","department skill courses"], a: "Yes. The department offers certificate courses such as Web Designing, DevOps, Ethical Hacking, JavaScript to help students gain industry-relevant skills." },

    { q: ["spoken tutorial nptel courses", "iit bombay certification", "online courses encouraged", "government certification programs", "additional learning opportunities"], a: "Yes. The department encourages students to participate in IIT Bombay Spoken Tutorial programs and NPTEL courses to enhance their technical knowledge and earn valuable certificates." },

    { q: ["project ideas for beginners", "when start building projects", "should wait master skills", "project development guidance", "best suggestion freshers"], a: "Do not wait until you master a skill. Start building small projects from the beginning. Every project teaches something new. Even if it fails, learn from it and continue improving." }

    ],

    trip: [

    { q: ["college trips available", "department tour conducted", "educational trips bca", "industrial visit available", "college excursion plans"], a: "The department generally does not conduct recreational trips. However, Industrial Visits (IV) are organized to provide exposure to industries and corporate environments." },

    { q: ["when industrial visit conducted", "iv semester details", "industrial visit every year", "company visit schedule", "academic year IV"], a: "Industrial Visits are usually conducted during the even semester of every academic year to help students understand real-world industry practices." },

    { q: ["industrial visit fees", "bus arrangements for iv", "entry ticket charges", "travel expenses iv", "payment required for visit"], a: "If the destination is far, transportation may be arranged by the department. For nearby locations, students may be asked to reach the venue on their own. Any entry fees must be paid by students if applicable." },

    { q: ["benefits of industrial visit", "why attend iv", "importance of company visit", "industry exposure students", "career benefits IV"], a: "Industrial Visits help students understand company operations, workplace culture, industry expectations and practical applications of classroom concepts." },

    { q: ["suggestions for freshers outing", "friends trip college life", "weekend plans with friends", "movie outing suggestions", "balance studies enjoyment"], a: "Enjoy college life responsibly. Plan outings with friends after college hours, obtain parental permission when necessary, and never miss classes unnecessarily." }

    ],

    dress_code: [

    { q: ["jeans allowed in college", "wear denim pants", "ripped jeans permitted", "casual jeans allowed", "dress code jeans"], a: "No. All types of jeans are strictly prohibited inside the campus." },

    { q: ["cargo pants allowed", "wear cargo trousers", "casual cargo dress", "college dress regulations", "cargo permitted"], a: "No. Cargo pants are not permitted as part of the college dress code." },

    { q: ["tshirt allowed in college", "round neck tshirt", "printed tshirt allowed", "casual tshirt permitted", "dress code tshirt"], a: "No. T-shirts of any type are not allowed inside the campus." },

    { q: ["girls dress code", "shal mandatory girls", "college regulations girls", "traditional dress requirement", "girls uniform rules"], a: "Yes. Girls are expected to follow the prescribed dress code and wear a shawl as per college regulations." },

    { q: ["uniform compulsory days", "uniform monday wednesday friday", "colour dress saturday", "uniform schedule students", "college uniform rules"], a: "Uniform is mandatory on Monday, Wednesday and Friday for first-year students. If Saturday is a working day, students may come in colour dress as permitted." }

    ],

    holiday: [

    { q: ["saturday working day", "college working saturday", "weekend classes conducted", "academic calendar saturday", "special working day"], a: "Sometimes Saturdays may be working days. Please refer to the Academic Calendar regularly for updates." },

    { q: ["festival holidays available", "religious festival leave", "festival vacation college", "holiday during festivals", "festival celebration holidays"], a: "Yes. Festival holidays are provided according to the college and government holiday schedule." },

    { q: ["government holidays applicable", "national holiday college", "public holidays leave", "government declared holidays", "official holidays"], a: "Yes. All government-declared holidays are observed by the college." },

    { q: ["where check holidays", "academic calendar information", "holiday schedule details", "semester calendar access", "official holiday updates"], a: "You can find holiday information in the Academic Calendar available in the department resources section." },

    { q: ["unexpected holiday announcements", "holiday updates notification", "class cancellation updates", "important announcements holiday", "where receive updates"], a: "Important holiday announcements are usually communicated through faculty members, class representatives and official student groups." }

    ],

    haircut: [

    { q: ["funk hairstyle allowed", "trendy haircut college", "spike hairstyle permitted", "fashion hairstyle rules", "hair regulations"], a: "Avoid funky hairstyles as they may create unnecessary issues. Maintain a neat and professional appearance." },

    { q: ["recommended hairstyle boys", "hair length regulations", "professional haircut students", "simple hairstyle suggestion", "college appearance rules"], a: "Students are advised to maintain a decent and moderate hairstyle suitable for an academic environment." },

    { q: ["hair colour allowed", "highlighted hair permitted", "fashion colouring rules", "college grooming standards", "student appearance"], a: "It is advisable to avoid flashy hair colours and maintain a professional appearance." },

    { q: ["faculty ask haircut", "hair warning from faculty", "what should i do haircut", "college grooming instruction", "faculty advice hairstyle"], a: "If a faculty member advises you regarding grooming, respectfully accept the suggestion and make the necessary changes." },

    { q: ["importance of grooming", "student professional appearance", "college discipline standards", "personal presentation rules", "good impression college"], a: "Good grooming creates a positive impression and reflects professionalism and discipline." }

    ],

    behaviour: [

    { q: ["how respect faculty", "relationship with teachers", "student faculty interaction", "college discipline behaviour", "professional communication"], a: "Always be respectful and polite while interacting with faculty members. If you face any issue, discuss it calmly and professionally." },

    { q: ["blamed for something", "false accusation faculty", "how respond politely", "misunderstanding with teacher", "student conflict handling"], a: "Stay calm. Listen carefully, avoid arguing, and explain your situation respectfully and clearly." },

    { q: ["faculty asks haircut", "teacher gives warning", "respond to faculty advice", "accept suggestions politely", "discipline instructions"], a: "Respond respectfully and assure them that you will follow the instruction." },

    { q: ["how behave with seniors", "interaction with seniors", "maintain good relationship", "senior junior communication", "campus networking"], a: "Maintain a friendly and respectful relationship with seniors. They can provide valuable guidance throughout your college life." },

    { q: ["best behaviour in college", "professional student attitude", "good conduct campus", "positive reputation college", "successful college life"], a: "Be punctual, respectful, responsible and cooperative. Good behaviour creates opportunities and leaves a positive impression." }

    ],

    clubs: [

    { q: ["can fresher join club", "new student club participation", "experience required clubs", "beginner join activities", "freshers welcome clubs"], a: "Clubs are learning platforms. No prior experience is required to join and participate." },

    { q: ["seniors help in clubs", "club guidance support", "team activities clubs", "learn from seniors", "club mentoring"], a: "Yes. Clubs work as a team where seniors and juniors collaborate, learn and grow together." },

    { q: ["benefits joining clubs", "why participate clubs", "extra curricular activities", "student development clubs", "leadership opportunities"], a: "Clubs help improve leadership, communication, teamwork, networking and organizational skills." },

    { q: ["how select suitable club", "best club for freshers", "club selection guidance", "interest based activities", "student involvement"], a: "Choose a club based on your interests. Explore different activities and continue with the one that excites you most." },

    { q: ["share knowledge in clubs", "learn and teach others", "interaction important clubs", "team learning environment", "student collaboration"], a: "Learning and sharing knowledge together is the main purpose of clubs. Active interaction helps everyone grow." }

    ],

    sports: [

{ q: ["join sports club", "college sports team", "how enter sports", "sports selection process", "play for college"], a: "If you have good talent and dedication, you can definitely represent the college. Participate in selection trials, practice consistently, and make use of every opportunity. Never give up if you are not selected the first time." },

{ q: ["showcase sports talent", "sports competitions", "inter department sports", "prove my skills", "sports events college"], a: "The best way to showcase your talent is by actively participating in inter-department, intra-college and inter-college sports competitions. Perform consistently and stay disciplined during practice sessions." },

{ q: ["not district player", "not state player", "can beginners join sports", "sports without certificates", "sports talent only"], a: "Absolutely. You do not need to be a district or state-level player. If you have strong skills, determination and perform well during selections, you have a good chance of representing the college." },

{ q: ["sports practice timings", "where practice sports", "sports coach available", "training for players", "college sports facilities"], a: "Practice sessions are usually organized by the Physical Education Department. Contact the Physical Director or your seniors for the latest practice schedules and selection information." },

{ q: ["sports benefits", "why join sports", "sports and academics", "college sports advantages", "sports career opportunities"], a: "Sports improve fitness, teamwork, leadership, confidence and discipline. They also help build your resume and can open opportunities in university-level competitions and other achievements." }

],

activities: [

{ q: ["learn video editing", "video editing club", "editing seniors help", "premiere pro after effects", "editing guidance"], a: "Yes. Many seniors in our department are experienced in video editing. Feel free to approach them for learning resources, software guidance and project-related doubts. Learning by working on department events is one of the best ways to improve." },

{ q: ["short film direction", "film making club", "become director", "short film opportunities", "creative activities"], a: "That's great! Various student teams and clubs look for creative members during event seasons. Attend auditions or interviews whenever announced and actively participate in short films, promotional videos and creative projects." },

{ q: ["ramp walk modelling", "fashion show auditions", "modelling opportunities", "college fashion team", "ramp walk club"], a: "If you're interested in ramp walk or modelling, auditions are conducted during cultural events. You can contact Vansh Aggarwal through Instagram for audition updates or ask your seniors for the latest details and guidance." },

{ q: ["photography content creation", "camera editing team", "media club", "creative media opportunities", "social media team"], a: "Students interested in photography, content creation, designing or social media can join department event teams. Inform your seniors about your interest, and they will guide you whenever opportunities arise." },

{ q: ["how participate activities", "college extracurricular activities", "join creative clubs", "improve talents college", "activity suggestions"], a: "Don't hesitate to participate, even if you're a beginner. College is the best place to explore your interests, build confidence, meet talented people and improve your skills through real experiences." }

],


    academics: [

    { q: ["placement opportunities bca", "campus placement available", "job opportunities after bca", "placement training support", "career guidance"], a: "Yes. The department has a good placement record and provides technical, soft skill and professional skill training to improve employability." },
    { q: ["workshops seminars guest lectures", "industry experts sessions", "latest technology training", "technical events department", "learning beyond classroom"], a: "The department regularly conducts workshops, seminars and guest lectures by industry experts on emerging technologies." },
    { q: ["industrial training compulsory", "institutional training details", "corporate exposure students", "training during course", "industry experience"], a: "Yes. Institutional training is part of academics and helps students gain exposure to the corporate world." },
    { q: ["coding competitions events", "technical symposium participation", "department activities students", "cultural activities available", "student achievements"], a: "Students are encouraged to participate in technical, cultural and extracurricular activities throughout the academic year." },
    { q: ["how become placement ready", "prepare for software jobs", "career development guidance", "skills for placement", "success in bca"], a: "Focus on programming, communication skills, projects, internships, certifications and consistent learning from the first year itself." }
    ],
    python: [
        { q: ["what is python","python language"], a: "Python is a high-level, interpreted programming language known for its clean syntax. It is widely used in web development, data science, AI, automation, and scripting." },
        { q: ["python in bca","python taught in bca","is python in syllabus"], a: "Yes! Python is part of the BCA curriculum with practicals covering data types, loops, functions, file handling, and modules. Check the ESE Question Papers section for past papers." },
        { q: ["python concepts","python topics covered"], a: "Python topics in BCA: Variables and Data Types, Control Flow (if/elif/else, loops), Functions and Recursion, Lists, Tuples, Sets, Dictionaries, String Manipulation, File Handling, Modules." },
        { q: ["python ide","python editor in lab"], a: "We use IDLE (built-in), VS Code, Jupyter Notebook, and PyCharm for Python practicals in the labs." },
        { q: ["python career","jobs with python"], a: "Python careers: Backend Developer, Data Analyst/Scientist, Machine Learning Engineer, Automation Tester, AI Developer, Django/Flask Web Developer." },
        { q: ["how to learn python","python resources"], a: "Learn Python via: W3Schools, GeeksforGeeks, freeCodeCamp YouTube, HackerRank Python track, Codecademy Python Course !" }
    ],

    java: [
        { q: ["java in bca","java course bca","is java taught"], a: "Yes! Java is taught in the 3rd semester as part of Object-Oriented Programming (OOP). It covers core OOP concepts using Java as the implementation language." },
        { q: ["java concepts","what is taught in java","java topics"], a: "Java topics in BCA: Classes and Objects, Inheritance, Polymorphism, Encapsulation, Abstraction, Interfaces and Packages, Exception Handling, Multithreading, JDBC for database connectivity." },
        { q: ["java vs python","difference between java and python"], a: "Python: Interpreted, dynamically typed, concise, best for AI/Data Science. Java: Compiled to bytecode, statically typed, verbose, best for enterprise/Android apps. Both are important for a BCA student!" },
        { q: ["java career","jobs in java"], a: "Java careers: Android Developer, Backend Java Developer (Spring Boot), Full Stack Developer, Software Engineer in MNC, QA Engineer." }
    ],

    dbms: [
        { q: ["what is dbms","database management system","database basics"], a: "DBMS (Database Management System) is software for creating, managing, and querying structured data. Examples include MySQL, Oracle, PostgreSQL, and SQLite." },
        { q: ["dbms in bca","dbms subject"], a: "Yes. DBMS is a core subject in BCA, typically taught in the 4th semester. It covers relational databases, SQL, normalization, transactions, and indexing concepts." },
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
        { q: ["placement record","placement percentage","how many get placed","bca placements"], a: "The DGVC BCA department has a strong placement track record, eligible students placed in reputed IT companies annually." },
        { q: ["which companies recruit","bca recruiters","companies in campus"], a: "Companies that recruit BCA graduates include Wipro, Infosys, TCS, Accenture, HCL, Deloitte and various mid-sized IT firms and startups." },
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
        { q: ["improve communication","communication skills tips"], a: "To improve communication: Participate in our departmental events and clubs, Read English newspapers daily, Practice speaking English with friends, Watch TED talks, Join seminars and debates, Participate in personality development programs." },
        { q: ["soft skills","personality development","important soft skills"], a: "Key soft skills employers look for: Communication (verbal and written), Teamwork and Leadership, Problem-solving, Time Management, Adaptability, and Positive Attitude. Join in any departmental clubs!" }
    ],

    interview_preparation: [
        { q: ["interview preparation","how to prepare for interviews","interview tips"], a: "Interview strategy: Technical - Revise DSA, DBMS, OS, Networks. Coding - Practice on HackerRank and LeetCode. HR - Prepare Tell me about yourself, strengths and weaknesses. Research the company before attending." },
        { q: ["common interview questions","what questions asked in interview"], a: "Common interview questions: Tell me about yourself, Explain OOP concepts, What is SQL and normalization, Reverse a string in Python, What is a deadlock, Where do you see yourself in 5 years." },
        { q: ["resume building","how to make resume","cv tips"], a: "Resume tips for freshers: Keep it to 1 page, Include personal information, List technical skills (languages, tools), Projects, Certifications,, Mention 2-3 projects with descriptions, Include internship experience if any and finally your education details." }
    ],

    student_clubs: [
        { q: ["what clubs are there","student clubs","clubs in bca","list of clubs"], a: "DGVC BCA student clubs: HackHub Club (Debugging), Code Crafters Club (Coding Challenges), Smart Tech Club (Innovation), Pixel Pioneer Club (Design), Eco Chambers Club (Agricultural activities), Unnat Bharat Abhiyan (Community Service). Join one that matches your passion!" },
        { q: ["what is infoca","infoca forum"], a: "INFOCA Forum is the official student association of the BCA Department at DGVC. It organizes Cyberfest, workshops, seminars, ideathons, and various enrichment programs throughout the year." },
        { q: ["hackhub club"], a: "HackHub Club focuses on debugging activities. Members learn to trace and fix bugs in code, participate in debugging competitions, and improve their problem-solving speed under time pressure." },
        { q: ["code crafters club"], a: "Code Crafters Club is for coding enthusiasts. It organizes coding challenges, pair programming sessions, and prepares students for competitive programming events." },
        { q: ["smart tech club"], a: "Smart Tech Club explores emerging technologies like AI, IoT, blockchain, and cloud computing. Members explore and present innovative ideas and cutting-edge tech solutions." },
        { q: ["pixel pioneer club"], a: "Pixel Pioneer Club is for creative minds interested in UI/UX design, graphic design, poster making, and digital creativity using tools like Canva, Figma, and Adobe products." },
        { q: ["eco chambers club"], a: "Eco Chambers Club focuses on farming, environmental conservation, ecosystem awareness, and sustainable practices, inspiring students to become responsible stewards of nature." },
        { q: ["unnat bharat abhiyan"], a: "Unnat Bharat Abhiyan is a government initiative where students engage in rural development, village extension activities, and community service projects, building social responsibility and leadership." }
    ],

    college_rules: [
        { q: ["college dress code","what to wear in college"], a: "DGVC dress code: Girls - Churidar or sari. Boys - Formal shirt and pants. No jeans, No cargo pants, No T-shirts. College ID card must be worn and visible at all times inside campus." },
        { q: ["college timings","shift timings","college time","timing"], a: "DGVC BCA Shift I timings: 9:00 AM to 1:30 PM. Report at least 10 minutes before classes begin. Saturdays may be working days on alternate weeks." },
        { q: ["mobile phone rules","phone policy in college"], a: "Mobile phones are NOT permitted in classrooms or labs. Use phones only during break periods in designated areas. Confiscated phones are returned only to parents or guardians." },
        { q: ["ragging rules","anti ragging policy"], a: "DGVC has ZERO TOLERANCE anti-ragging policy. Any form of ragging leads to immediate expulsion and legal action. Report any incident to the Anti-Ragging Committee immediately." },
        { q: ["id card rules","college id card"], a: "Your college ID card must be worn and visible at all times within the campus. Lost ID cards must be reported immediately and a duplicate obtained from the office with applicable fee." }
    ],

    faculty: [
        { q: ["who is the hod","head of department","hod name","hod bca"], a: "Dr. K. ANGAYARKANNI is the Associate Professor and Head of the Department of Computer Applications (BCA) at DGVC. She holds M.Sc., M.C.A., M.Phil., and Ph.D. qualifications." },
        { q: ["how many faculty","number of faculty members","faculty list"], a: "The BCA Department has 18 staff members: 17 dedicated teaching faculty and 1 non-teaching staff. All faculty are highly qualified with M.C.A., M.Phil., Ph.D., NET, and SET credentials." },
        { q: ["how to contact faculty","faculty contact"], a: "Visit the staff room on the 3rd floor of the IT and BCA Self-Financing block during office hours. You can also contact the department through the official DGVC website." },
        { q: ["are faculty approachable","can i meet faculty"], a: "Absolutely! DGVC BCA faculty maintain open-door hours and are very approachable. Never hesitate to ask questions, clarify doubts, or seek guidance for projects and career decisions." }
    ],

    events: [
        { q: ["what is cyberfest","cyberfest event description"], a: "Cyberfest is the flagship annual technical festival organized by BCA students, staff, and INFOCA Forum. It features inter-collegiate coding, debugging, web design, paper presentations, and gaming competitions." },
        { q: ["Events", "Can first years participate in events"], a: "Yes, first-year students are encouraged to coordinate events to build leadership qualities." },
        { q: ["conduct", "Who conducts Cyberfest"], a: "Cyberfest is organized by the BCA department students, staff, and the INFOCA forum." },
        { q: ["what is ideathon","ideathon event"], a: "An Ideathon is a creative competition where students pitch innovative tech ideas, app solutions, or business concepts to panels of industry experts and faculty judges." },
        { q: ["technical workshops","workshops in bca"], a: "The department organizes regular workshops on Python, Web Development, Android, Cloud Computing, Cyber Security, and Ethical Hacking - all conducted by industry experts and alumni." },
        { q: ["guest lectures","speakers in bca"], a: "INFOCA Forum arranges regular guest lectures by industry professionals, software architects, and alumni who share real-world experience and career insights with students." }
    ],

    hostel: [
    { q: ["Hostel availability","Is there hostel accommodation"], a: "Yes, DGVC provides hostel facilities for boys on campus." },
    { q: ["Hostel timings","What are the hostel timings"], a: "Hostellers must report back to their rooms by 8:30 PM. Outings require written permission from the hostel warden." },
    { q: ["Hostel food","How is the food in the hostel"], a: "The mess serves hygienic vegetarian food daily, with a changing menu supervised by the student hostel committee." },
    { q: ["Hostel application","How to apply for a hostel room"], a: "Apply through the hostel office immediately after college admission is finalized. Rooms are allocated on a first-come, first-served basis." },
    ],

    scholarships: [
    { q: ["Government Scholarships", "Are there scholarships available?"], a: "Yes, government scholarships for SC/ST, MBC, and BC candidates are offered. Private merit scholarships are also facilitated." },
    { q: ["Scholarship Eligibility", "Who is eligible for government scholarships?"], a: "Students belonging to BC/MBC/SC/ST categories whose parental income falls within government limits can apply." },
    { q: ["Scholarship Application", "How to apply for scholarship?"], a: "Collect the scholarship application form from the college office, attach income/community certificates, and submit to the desk." },
    { q: ["Scholarship Documents", "What documents are needed for scholarship?"], a: "Income certificate, community certificate, class 12 marksheet, bank account details, and Aadhaar card copies." }
    ],

    internships: [
        { q: ["is internship mandatory","internship requirement bca"], a: "Yes! A minimum 4-week internship (usually at the end of the 4th semester) is mandatory for BCA students. It earns academic credits and provides real work experience." },
        { q: ["how to find internship","internship tips","internship platforms"], a: "Ways to find internships: Check the placement cell notice board, Apply on Internshala and LinkedIn, Contact faculty for referrals, Attend college career fairs, Network with alumni on LinkedIn." },
        { q: ["internship duration","what is the duration of internship"], a: "The mandatory internship duration is a minimum of 4 weeks, to be completed in a registered IT firm or software company." },
        { q: ["internship paid","are internships paid"], a: "It depends on the company. Some offer stipends while others provide unpaid training. A completion certificate is mandatory for either." },
        { q: ["internship documents","what to submit after internship"], a: "After internship submit: Internship summary and Completion certificate from company. Submit these to the department coordinator for credit evaluation." }
    ],

    freshers_advice: [
        { q: ["advice for freshers","tips for new students","freshers guide","new student"], a: "Welcome to DGVC BCA! Fresher tips: Attend every class (attendance matters!), Get your bus pass in week 1, Join at least 1 student club, Build one small project each semester, Make good friends, Respect all faculty members, Use the library and digital resources, Focus on career goals from day 1!" },
        { q: ["study tips","how to manage studies","study techniques"], a: "Study tips for BCA: Set daily revision targets (1 hour minimum), Revise after every lecture while fresh, Form study groups, Practice coding daily, Use previous year question papers from the Resources section." },
        { q: ["balance college life","academics and activities balance"], a: "Balance tips: Prioritize academics first, Join clubs for skill development (not as distraction), Create a weekly schedule, Use weekends for revision and projects, Stay healthy: sleep well, exercise, and eat nutritious food." },
        { q: ["avoid malpractice","exam malpractice"], a: "DGVC has ZERO tolerance for malpractice. Students caught cheating face: Immediate confiscation of paper, Debarment from exam, Disciplinary committee hearing, Possible expulsion. Always be honest in examinations." },
        { q: ["first semester tips","first year bca tips"], a: "For your first semester: Do not panic! Start steady. Focus on python Programming and Mathematics. Attend every class. Make friends with seniors who can guide you. Use the department library. Be regular and disciplined." }
    ],

    value_added_courses: [
        { q: ["value added courses","certification courses bca"], a: "The BCA department facilitates value-added certification courses on: Robotics, Web Development, Digital Marketing, and Cloud Fundamentals. These complement your degree and boost employability." },
        { q: ["iit bombay spoken tutorial","spoken tutorial course"], a: "DGVC participates in the IIT Bombay Spoken Tutorial Project, offering free online courses in C, C++, Python, Java, PHP, and more with recognized national certificates." },
        { q: ["online courses","where to learn online","online learning"], a: "Recommended online platforms: NPTEL (free, UGC recognized), Coursera and edX (free audit), Udemy (affordable), YouTube: FreeCodeCamp and Traversy Media, HackerRank and LeetCode for practice." }
    ],

    student_life: [
    { q: ["student life","campus life"], a: "DGVC offers a vibrant student life with various clubs, events, and activities to enhance your college experience." },
    { q: ["student activities","what to do in college"], a: "Engage in cultural events, technical workshops, sports competitions, and social initiatives organized by the student council." },
    { q: ["student support","help for students"], a: "The college provides academic support, career counseling, and mental health resources to ensure student well-being." },
    { q: ["student council","how to join student council"], a: "Student council elections are held annually. You can participate by demonstrating leadership and commitment to student welfare." },
    { q: ["alumni network","connect with alumni"], a: "The alumni network offers mentorship opportunities, career guidance, and networking events for current students." }
],

student_life_placeholders_2: [
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" }
],

student_life_placeholders_3: [
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" }
],

student_life_placeholders_4: [
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" }
],

student_life_placeholders_5: [
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" }
],

student_life_placeholders_6: [
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" }
],

student_life_placeholders_7: [
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" }
],

student_life_placeholders_8: [
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" }
],

student_life_placeholders_9: [
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" }
],

student_life_placeholders_10: [
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" },
    { q: [""], a: "" }
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
