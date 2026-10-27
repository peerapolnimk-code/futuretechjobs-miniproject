// Data Definitions
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
        experience: "2+ ปี ด้าน Machine Learning / Deep Learning",
        benefits: ["โบนัสประจำปีตามผลงาน และกองทุนสำรองเลี้ยงชีพ (PVD)", "ประกันสุขภาพกลุ่ม (IPD/OPD) คุ้มครองครอบครัว", "งบสนับสนุนสอบ Certify สากล (AWS, GCP, Azure)", "รูปแบบการทำงาน Hybrid (เข้าออฟฟิศ 2 วัน/สัปดาห์)"],
        responsibilities: ["พัฒนา ปรับปรุง และ Deploy โมเดล Machine Learning เข้าสู่ระบบแบงก์กิ้ง", "ออกแบบสถาปัตยกรรม MLOps และสร้าง Data Pipeline สำหรับประมวลผล Big Data", "ทำงานร่วมกับ Data Scientist และ Software Engineer"]
    },
    2: {
        title: "Senior Data Scientist",
        company: "True Digital Group Co., Ltd. • กรุงเทพฯ",
        salary: "70,000 - 120,000 บาท/เดือน",
        experience: "3+ ปี ด้าน Predictive Modeling & Analytics",
        benefits: ["สวัสดิการส่วนลดบริการในเครือ", "ประกันสุขภาพถั่วเฉลี่ยครอบครัว", "งบฝึกอบรมและสัมมนาต่างประเทศ"],
        responsibilities: ["วิเคราะห์ข้อมูลพฤติกรรมผู้บริโภคขนาดใหญ่", "สร้าง Predictive Analytics Models เพื่อสนับสนุนกลยุทธ์ธุรกิจดิจิทัล"]
    },
    3: {
        title: "Prompt Engineer & LLM Specialist",
        company: "SCB 10X • กรุงเทพฯ",
        salary: "60,000 - 100,000 บาท/เดือน",
        experience: "1+ ปี ประสบการณ์ตรงกับ Generative AI / LLMs",
        benefits: ["Flexible Working Hours", "MacBook Pro สำหรับทำงาน", "งบสวัสดิการยืดหยุ่น (Flexible Benefits)"],
        responsibilities: ["ออกแบบและทดสอบ Prompt Structure สำหรับ Enterprise LLM", "พัฒนาระบบ RAG (Retrieval-Augmented Generation) ร่วมกับ Vector Databases"]
    },
    4: {
        title: "Full-Stack AI Developer",
        company: "LINE Man Wongnai • กรุงเทพฯ",
        salary: "55,000 - 95,000 บาท/เดือน",
        experience: "2+ ปี ในการพัฒนา Web Application (React/Next.js + Python/Node.js)",
        benefits: ["Free Lunch & Snacks", "Hybrid Working Option", "ประกันสุขภาพระดับพรีเมียม"],
        responsibilities: ["พัฒนาระบบนิเวศเว็บแอปพลิเคชันเพื่อเชื่อมต่อ AI APIs", "ออกแบบ UX/UI การโต้ตอบกับ AI สำหรับผู้ใช้งานหลักล้านคน"]
    },
    5: {
        title: "Cloud & AI Infrastructure Engineer",
        company: "AIS (Advanced Info Service) • กรุงเทพฯ",
        salary: "65,000 - 110,000 บาท/เดือน",
        experience: "2+ ปี ด้าน Cloud Infrastructure & Kubernetes",
        benefits: ["โบนัสประจำปี 4-6 เดือน", "ค่ารักษาพยาบาลบิดามารดา", "กองทุนสำรองเลี้ยงชีพ"],
        responsibilities: ["บริหารจัดการ GPU Cluster และ Cloud Infrastructure สำหรับงานประมวลผล AI", "ดูแลความปลอดภัยและความเสถียรของระบบตามมาตรฐาน ISO/IEC"]
    }
};

// 1. Page Navigation System
function navigate(pageId) {
    const pages = document.querySelectorAll('.view-page');
    pages.forEach(page => page.classList.remove('active'));

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));

    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) targetPage.classList.add('active');

    const targetBtn = document.getElementById('link-' + pageId);
    if (targetBtn) targetBtn.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 2. Job Detail Modal Handler
function openJobDetail(jobId) {
    const modal = document.getElementById('modalDetail');
    const content = document.getElementById('detailContent');
    const job = jobDetailsData[jobId] || {
        title: "ตำแหน่งงานที่ " + jobId,
        company: "องค์กรเทคโนโลยีชั้นนำ",
        salary: "ตามโครงสร้างบริษัท",
        experience: "1+ ปีในสายงานที่เกี่ยวข้อง",
        benefits: ["สวัสดิการมาตรฐานองค์กรชั้นนำ"],
        responsibilities: ["ปฏิบัติงานด้านเทคโนโลยีตามมอบหมาย"]
    };

    if (content) {
        content.innerHTML = `
            <h2 style="color: #38bdf8; margin-bottom: 0.3rem; font-size: 1.4rem;">${job.title}</h2>
            <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 1rem;">🏢 ${job.company}</p>
            
            <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #334155;">
                <p style="margin-bottom: 0.4rem;"><strong>💵 ค่าตอบแทน:</strong> ${job.salary}</p>
                <p><strong>🎯 ประสบการณ์:</strong> ${job.experience}</p>
            </div>

            <h4 style="color: #fff; margin-top: 1rem; margin-bottom: 0.5rem;">สวัสดิการ:</h4>
            <ul style="padding-left: 1.2rem; color: #94a3b8; font-size: 0.88rem; line-height: 1.6;">
                ${job.benefits.map(b => `<li>${b}</li>`).join('')}
            </ul>

            <h4 style="color: #fff; margin-top: 1rem; margin-bottom: 0.5rem;">หน้าที่ความรับผิดชอบ:</h4>
            <ul style="padding-left: 1.2rem; color: #94a3b8; font-size: 0.88rem; line-height: 1.6;">
                ${job.responsibilities.map(r => `<li>${r}</li>`).join('')}
            </ul>

            <div style="margin-top: 1.5rem; text-align: right;">
                <button class="btn-action" style="padding: 0.6rem 1.2rem; font-weight: 600;" onclick="closeJobDetail(); openApplyFormForCourse('${job.title}')">สมัครตำแหน่งนี้ <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        `;
    }

    if (modal) {
        modal.classList.add('is-open');
    }
}

function closeJobDetail() {
    const modal = document.getElementById('modalDetail');
    if (modal) {
        modal.classList.remove('is-open');
    }
}

// 3. Application / Course Registration Form Modal Handler
function openApplyFormForCourse(courseOrJobName) {
    const modal = document.getElementById('modalApply');
    const formTitle = document.getElementById('formJobTitle');
    const selectEl = document.getElementById('targetSelect');

    if (formTitle) {
        formTitle.innerText = "ลงทะเบียน / สมัคร: " + courseOrJobName;
    }

    if (selectEl) {
        const allOptions = [...jobOptions, ...courseOptions];
        selectEl.innerHTML = allOptions.map(opt => `<option value="${opt.value}" ${opt.value === courseOrJobName ? 'selected' : ''}>${opt.label}</option>`).join('');
    }

    if (modal) {
        modal.classList.add('is-open');
    }
}

function closeApplyForm() {
    const modal = document.getElementById('modalApply');
    if (modal) {
        modal.classList.remove('is-open');
    }
}

// 4. Form Validation & Submission Process
function processSubmit(event) {
    event.preventDefault();
    
    const fName = document.getElementById('fName').value.trim();
    const lName = document.getElementById('lName').value.trim();
    const email = document.getElementById('uEmail').value.trim();
    const phone = document.getElementById('uPhone').value.trim();
    const gender = document.getElementById('uGender').value;
    const country = document.getElementById('uCountry').value;
    const address = document.getElementById('uAddress').value.trim();
    const zip = document.getElementById('uZip').value.trim();
    
    const alertBox = document.getElementById('validationError');
    let errors = [];

    if (!fName) errors.push("ชื่อ");
    if (!lName) errors.push("นามสกุล");
    if (!email) errors.push("อีเมล");
    if (!phone) errors.push("เบอร์โทรศัพท์");
    if (!gender) errors.push("เพศ");
    if (!country) errors.push("ประเทศ");
    if (!address) errors.push("ที่อยู่");
    if (!zip) errors.push("รหัสไปรษณีย์");

    if (errors.length > 0) {
        if (alertBox) {
            alertBox.style.display = "block";
            alertBox.innerHTML = "⚠ กรอกข้อมูลยังไม่ครบถ้วน ตรวจสอบช่อง: <br>• " + errors.join("<br>• ");
        }
        return;
    }

    if (alertBox) {
        alertBox.style.display = "none";
    }

    alert("✨ ดำเนินการสำเร็จ!\nระบบบันทึกข้อมูลการสมัครเรียบร้อยแล้ว");
    closeApplyForm();
    
    const jobForm = document.getElementById('jobForm');
    if (jobForm) {
        jobForm.reset();
    }
}