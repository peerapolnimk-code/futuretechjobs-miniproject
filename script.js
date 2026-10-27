const jobOptions = [
    { value: "AI & Machine Learning Engineer", label: "1. AI & Machine Learning Engineer (KBTG)" },
    { value: "Senior Data Scientist", label: "2. Senior Data Scientist (True Digital)" },
    { value: "Prompt Engineer & LLM Specialist", label: "3. Prompt Engineer & LLM Specialist (SCB 10X)" },
    { value: "Full-Stack AI Developer", label: "4. Full-Stack AI Developer (LINE Man Wongnai)" },
    { value: "Cloud & AI Infrastructure Engineer", label: "5. Cloud & AI Infrastructure Engineer (AIS)" }
];

const courseOptions = [
    { value: "Certified Generative AI & LLM Engineer Masterclass", label: "1. Certified Generative AI & LLM Engineer Masterclass" },
    { value: "Professional Data Science & Big Data Analytics", label: "2. Professional Data Science & Big Data Analytics" },
    { value: "Advanced Prompt Engineering for Enterprise AI", label: "3. Advanced Prompt Engineering for Enterprise AI" },
    { value: "Full-Stack AI Application Developer Bootcamp", label: "4. Full-Stack AI Application Developer Bootcamp" },
    { value: "Cloud & AI Infrastructure DevOps Masterclass", label: "5. Cloud & AI Infrastructure DevOps Masterclass" },
    { value: "AI Cybersecurity & Data Privacy Governance", label: "6. AI Cybersecurity & Data Privacy Governance" },
    { value: "Business Intelligence & AI for Executive Leaders", label: "7. Business Intelligence & AI for Executive Leaders" },
    { value: "UI/UX Design for AI-Powered Products & Web", label: "8. UI/UX Design for AI-Powered Products & Web" }
];

const jobDetailsData = {
    1: {
        title: "AI & Machine Learning Engineer",
        company: "Kasikorn Business-Technology Group (KBTG) • กรุงเทพฯ",
        salary: "65,000 - 110,000 บาท/เดือน",
        experience: "ประสบการณ์ 2+ ปี ด้าน Machine Learning หรือ AI Development",
        openDate: "15-Oct-26",
        benefits: [
            "โบนัสประจำปีตามผลงาน และกองทุนสำรองเลี้ยงชีพ (PVD)",
            "ประกันสุขภาพกลุ่ม (IPD/OPD) คุ้มครองครอบครัว และตรวจสุขภาพประจำปี",
            "งบสนับสนุนการเรียนรู้คอร์สออนไลน์และสอบ Certify (AWS, Google Cloud)",
            "รูปแบบการทำงาน Hybrid (เข้าออฟฟิศสัปดาห์ละ 2 วัน)"
        ],
        responsibilities: [
            "พัฒนา ปรับปรุง และ Deploy โมเดล Machine Learning/Deep Learning เข้าสู่ระบบการทำงานจริงของธนาคาร",
            "ออกแบบสถาปัตยกรรม MLOps และสร้าง Data Pipeline สำหรับการประมวลผลข้อมูลขนาดใหญ่",
            "ทดสอบวัดประสิทธิภาพของโมเดล และปรับแต่ง Parameter ให้มีความแม่นยำสูง",
            "ทำงานร่วมกับ Data Scientist และ Software Engineer เพื่อส่งมอบฟีเจอร์ AI ใหม่ๆ"
        ],
        qualifications: [
            "ปริญญาตรีขึ้นไป สาขา Computer Science, IT, AI Engineering หรือสาขาที่เกี่ยวข้อง",
            "มีประสบการณ์ 2+ ปีขึ้นไป ในการพัฒนาโปรเจกต์ด้วย Python, PyTorch หรือ TensorFlow",
            "คุ้นเคยกับการใช้งาน Docker, Kubernetes และระบบ Cloud (AWS / GCP / Azure)",
            "มีความเข้าใจอย่างดีเยี่ยมในเรื่อง Machine Learning Algorithms และ Data Structure"
        ]
    },
    2: {
        title: "Senior Data Scientist",
        company: "True Digital Group Co., Ltd. • กรุงเทพฯ",
        salary: "70,000 - 120,000 บาท/เดือน",
        experience: "ประสบการณ์ 3+ ปี ด้าน Data Science หรือ Predictive Modeling",
        openDate: "18-Oct-26",
        benefits: [
            "โบนัสประจำปี, ค่าโทรศัพท์ และเบี้ยเลี้ยงพิเศษ",
            "ประกันสุขภาพระดับพรีเมียม และประกันชีวิตอุบัติเหตุ",
            "สิทธิ์วันลาพักร้อนเริ่มต้น 15 วันต่อปี พร้อม Work from Anywhere สัปดาห์ละ 2 วัน",
            "งบสนับสนุนซื้ออุปกรณ์ IT และคอร์สสัมมนาต่างประเทศ"
        ],
        responsibilities: [
            "วิเคราะห์และสกัดข้อมูล Big Data ขององค์กรเพื่อค้นหา Business Insights",
            "สร้าง Predictive Analytics Models เพื่อสนับสนุนการทำนายพฤติกรรมลูกค้า",
            "จัดทำ Data Visualization และ Dashboard นำเสนอต่อผู้บริหารระดับสูง",
            "เป็นพี่เลี้ยง (Mentor) ให้กับ Junior Data Scientist ในทีม"
        ],
        qualifications: [
            "ปริญญาตรีหรือโท สาขา Data Science, สถิติ, คณิตศาสตร์ หรือคอมพิวเตอร์",
            "เชี่ยวชาญภาษา SQL, Python (Pandas, NumPy, Scikit-Learn, XGBoost)",
            "มีประสบการณ์ใช้เครื่องมือ BI เช่น Tableau, Power BI หรือ Looker Studio",
            "มีทักษะการสื่อสารและการเล่าเรื่องจากข้อมูล (Data Storytelling) ที่ยอดเยี่ยม"
        ]
    },
    3: {
        title: "Prompt Engineer & LLM Specialist",
        company: "SCB 10X (Siam Commercial Bank) • กรุงเทพฯ",
        salary: "60,000 - 100,000 บาท/เดือน",
        experience: "ประสบการณ์ 1-3 ปี ในการพัฒนา AI Chatbot หรือ LLM Integration",
        openDate: "20-Oct-26",
        benefits: [
            "โบนัสผลประกอบการ และสวัสดิการกู้ซื้อที่อยู่อาศัยอัตราดอกเบี้ยพิเศษ",
            "ประกันสุขภาพและทันตกรรมครอบคลุม พร้อมสิทธิ์เบิกค่ารักษาพยาบาลพ่อแม่",
            "นโยบาย Flexible Hours เข้างานยืดหยุ่นได้ และทำงานแบบ Hybrid",
            "บรรยากาศการทำงานระดับ Global Startup Hub (True Digital Park)"
        ],
        responsibilities: [
            "ออกแบบและปรับแต่ง Prompt สำหรับ Generative AI และระบบอัตโนมัติภายในองค์กร",
            "พัฒนาและปรับปรุงสถาปัตยกรรม RAG (Retrieval-Augmented Generation)",
            "ทำ Fine-Tuning โมเดลภาษาขนาดใหญ่ (LLMs) สำหรับธุรกิจการเงินและฟินเทค",
            "ตรวจสอบและควบคุมความปลอดภัยด้าน AI Safety และ Data Privacy"
        ],
        qualifications: [
            "มีประสบการณ์ใช้งานและเข้าใจกลไกของ LLMs (OpenAI, Claude, Llama, Gemini)",
            "คุ้นเคยกับ Framework เช่น LangChain, LlamaIndex และ Vector Databases (Pinecone/Milvus)",
            "สามารถเขียนโปรแกรมภาษา Python และใช้งาน RESTful APIs ได้คล่องแคล่ว",
            "กระตือรือร้นในการติดตามเทคโนโลยี Generative AI ที่อัปเดตใหม่อยู่เสมอ"
        ]
    },
    4: {
        title: "Full-Stack AI Developer",
        company: "LINE Man Wongnai • กรุงเทพฯ",
        salary: "55,000 - 95,000 บาท/เดือน",
        experience: "ประสบการณ์ 2+ ปี ด้าน Web Development และการเชื่อมต่อ API",
        openDate: "21-Oct-26",
        benefits: [
            "ฟรีอาหารกลางวัน กาแฟ ขนม และผลไม้ที่ออฟฟิศตลอดสัปดาห์",
            "กองทุนสำรองเลี้ยงชีพสูงสุด 15% และประกันสุขภาพกลุ่มท็อปเทอม",
            "งบประจำปีสำหรับท่องเที่ยวพักผ่อน หรือซื้ออุปกรณ์ออกกำลังกาย",
            "ทำงานแบบ Hybrid พร้อมอุปกรณ์ MacBook Pro รุ่นล่าสุดให้ใช้งาน"
        ],
        responsibilities: [
            "พัฒนาส่วนติดต่อผู้ใช้ (UI/UX Frontend) ให้มีความลื่นไหล สวยงาม และรองรับ Responsive",
            "พัฒนาระบบ Backend API เพื่อเชื่อมต่อระบบการทำงานกับโมเดล AI และ Microservices",
            "ปรับปรุงประสิทธิภาพเว็บไซต์และแอปพลิเคชันให้โหลดรวดเร็ว รองรับผู้ใช้งานหลักล้าน",
            "ร่วมมือกับทีม Product และ AI Engineer ในการส่งมอบฟีเจอร์ใหม่"
        ],
        qualifications: [
            "ปริญญาตรี สาขา Computer Science, IT หรือสาขาที่เกี่ยวข้อง",
            "มีประสบการณ์ 2+ ปี ในการใช้ HTML, CSS, JavaScript, React.js หรือ Next.js",
            "มีความเชี่ยวชาญด้าน Backend เช่น Node.js, Express หรือ Python (FastAPI/Django)",
            "เข้าใจระบบ Database ทั้ง SQL และ NoSQL รวมถึงระบบ Git Version Control"
        ]
    },
    5: {
        title: "Cloud & AI Infrastructure Engineer",
        company: "AIS (Advanced Info Service) • กรุงเทพฯ",
        salary: "65,000 - 110,000 บาท/เดือน",
        experience: "ประสบการณ์ 3+ ปี ด้าน Cloud Computing, DevOps หรือ Infrastructure",
        openDate: "22-Oct-26",
        benefits: [
            "โบนัสประจำปี, ค่ารักษาพยาบาลครอบครัว และส่วนลดค่าบริการโทรศัพท์/อินเทอร์เน็ต AIS",
            "ประกันชีวิตอุบัติเหตุ ประกันสุขภาพกลุ่ม และตรวจสุขภาพประจำปี",
            "เงินช่วยเหลือกรณีต่างๆ เช่น สมรส คลอดบุตร ฯลฯ",
            "โอกาสเติบโตในสายงานโครงสร้างพื้นฐานโทรคมนาคมและเทคโนโลยีระดับชาติ"
        ],
        responsibilities: [
            "บริหารจัดการและดูแลระบบโครงสร้างพื้นฐานบน Cloud (AWS, GCP, Azure) รองรับระบบ AI",
            "ติดตั้งและตั้งค่าระบบประมวลผลประสิทธิภาพสูง (GPU Cluster) สำหรับงาน Deep Learning",
            "สร้างและดูแลระบบ CI/CD Pipeline เพื่อให้การส่งมอบระบบมีความเสถียรและปลอดภัย",
            "มอนิเตอร์ระบบเครือข่ายและความปลอดภัย คอยแก้ปัญหาเร่งด่วน (Incident Management)"
        ],
        qualifications: [
            "ปริญญาตรี สาขาวิศวกรรมคอมพิวเตอร์, IT หรือสาขาที่เกี่ยวข้อง",
            "มีประสบการณ์ 3+ ปี ในการบริหารจัดการ Cloud Services (AWS หรือ GCP)",
            "เชี่ยวชาญการใช้งาน Docker, Kubernetes, Terraform และ Linux OS",
            "มีใบรับรองวิชาชีพ เช่น AWS Certified Solutions Architect หรือ Kubernetes (CKA) จะพิจารณาเป็นพิเศษ"
        ]
    }
};

let currentFormMode = 'job';

function openJobDetail(jobId) {
    const job = jobDetailsData[jobId];
    if (!job) return;

    const htmlContent = `
        <div class="detail-header">
            <h2>${job.title}</h2>
            <p class="detail-company">🏢 <strong>${job.company}</strong></p>
            <p style="color: #10b981; font-weight: 600; margin-top: 0.3rem;">💰 เงินเดือน: ${job.salary}</p>
            <p style="color: #94a3b8; font-size: 0.9rem; margin-top: 0.2rem;">⏱ ประสบการณ์: ${job.experience} | เปิดรับ: ${job.openDate}</p>
        </div>

        <h4 class="detail-section-title">🎁 สวัสดิการและ Benefits:</h4>
        <ul class="detail-list">
            ${job.benefits.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <h4 class="detail-section-title">📋 หน้าที่ความรับผิดชอบ:</h4>
        <ul class="detail-list">
            ${job.responsibilities.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <h4 class="detail-section-title">🎓 คุณสมบัติที่ต้องการ:</h4>
        <ul class="detail-list">
            ${job.qualifications.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <button class="btn-submit-neon" style="margin-top: 2rem; margin-bottom: 1rem;" onclick="closeJobDetail(); openApplyFormForJob('${job.title}')">
            <i class="fa-solid fa-paper-plane"></i> สมัครงานตำแหน่งนี้
        </button>
    `;

    document.getElementById('detailContent').innerHTML = htmlContent;
    document.getElementById('modalDetail').style.display = "flex";
}

function closeJobDetail() {
    document.getElementById('modalDetail').style.display = "none";
}

function navigate(page) {
    document.querySelectorAll('.view-page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    document.getElementById('page-' + page).classList.add('active');
    document.getElementById('link-' + page).classList.add('active');
}

function openApplyFormForJob(selectedTitle) {
    currentFormMode = 'job';
    document.getElementById('formJobTitle').innerText = "แบบฟอร์มสมัครงาน";
    document.getElementById('targetLabel').innerText = "เลือกตำแหน่งงานที่สนใจ *";
    document.getElementById('resumeFieldGroup').style.display = "block";
    
    const selectElem = document.getElementById('targetSelect');
    selectElem.innerHTML = "";
    
    jobOptions.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.text = opt.label;
        if (opt.value === selectedTitle) option.selected = true;
        selectElem.appendChild(option);
    });

    document.getElementById('modalApply').style.display = "flex";
    document.getElementById('validationError').style.display = "none";
}

function openApplyFormForCourse(selectedTitle) {
    currentFormMode = 'course';
    document.getElementById('formJobTitle').innerText = "แบบฟอร์มลงทะเบียนอบรม / สอบ Certify";
    document.getElementById('targetLabel').innerText = "เลือกหลักสูตรอบรมที่สนใจ *";
    document.getElementById('resumeFieldGroup').style.display = "none";
    
    const selectElem = document.getElementById('targetSelect');
    selectElem.innerHTML = "";
    
    courseOptions.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.text = opt.label;
        if (opt.value === selectedTitle) option.selected = true;
        selectElem.appendChild(option);
    });

    document.getElementById('modalApply').style.display = "flex";
    document.getElementById('validationError').style.display = "none";
}

function closeApplyForm() {
    document.getElementById('modalApply').style.display = "none";
}

function processSubmit(e) {
    e.preventDefault();

    const selectedTarget = document.getElementById('targetSelect').value;
    const fName = document.getElementById('fName').value.trim();
    const lName = document.getElementById('lName').value.trim();
    const email = document.getElementById('uEmail').value.trim();
    const phone = document.getElementById('uPhone').value.trim();
    const gender = document.getElementById('uGender').value;
    const country = document.getElementById('uCountry').value;
    const address = document.getElementById('uAddress').value.trim();
    const zipcode = document.getElementById('uZip').value.trim();
    const resume = document.getElementById('uResume').files[0];

    const alertBox = document.getElementById('validationError');
    let errors = [];

    if (!fName) errors.push("ชื่อ");
    if (!lName) errors.push("นามสกุล");
    if (!email) errors.push("อีเมล");
    if (!phone) errors.push("เบอร์โทรศัพท์");
    if (!gender) errors.push("เพศ");
    if (!country) errors.push("ประเทศ");
    if (!address) errors.push("ที่อยู่");
    if (!zipcode) errors.push("รหัสไปรษณีย์");
    
    if (currentFormMode === 'job' && !resume) {
        errors.push("ไฟล์ Portfolio / Resume");
    }

    if (errors.length > 0) {
        alertBox.style.display = "block";
        alertBox.innerHTML = "⚠ กรอกข้อมูลยังไม่ครบถ้วน ตรวจสอบช่อง: <br>• " + errors.join("<br>• ");
        return;
    }

    alert("🎉 ดำเนินการสำเร็จ!\nระบบบันทึกข้อมูลของคุณเรียบร้อยแล้ว\nรายการ: " + selectedTarget + "\nประเทศผู้สมัคร: " + country);
    closeApplyForm();
    document.getElementById('jobForm').reset();
}