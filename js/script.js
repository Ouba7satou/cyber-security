const quizData = [
    {
        question: "اختر كلمة سر تحمي بها حساباتك",
        a:"1212334154990",
        b:"467@Mo!!-bnyu",
        c:"123212500moh",
        correct: "b",
    },
   {
        question: " هل تحتوي كلمات السر الخاصة بك على أي معلومات شخصية (حيوانك الأليف..أكلة مفضلة ..وغيرها)",
        a:"نعم",
        b:"لا",
        c:"لست متأكدا",
        correct: "b",
    },
    {
        question: "هل تشارك كلمات السر الخاصة بك مع أي شخص تثق به",
        a:"نعم",
        b:"لا",
        c:"لست متأكدا",
        correct: "b",
    },
    {
        question: "  هل تستخدم المصادقة الثنائية (مثل التأكيد برسالة SMS بعد محاولة الدخول لحسابك)",
        a:"نعم",
        b:"لا",
        c:"لا اعرف",
        correct: "a",
    },
    {
        question: "هل تقوم بالنسخ الاحتياطي لبياناتك الهامة سواء عبر نسخها في ذاكرة خارجية أو الخدمات السحابية مثل جوجل درايف وغيرها..؟",
        a:"نعم",
        b:"لا",
        c:"لست متأكدا",
        correct: "a",
    },
    {
        question: "هل تستخدم برامج مكافحة الفيروسات؟",
        a:"نعم",
        b:"لا",
        c:"احيانا",
        correct: "a",
    },
    {
        question: "ما هي مصادر حصولك على التطبيقات والبرامج الخاصة بأجهزتك؟",
        a:"مصادر رسمية مثل المواقع الرسمية و متاجر التطبيقات الشهيرة مثل google play ..app store.. ",
        b:"مصادر غير رسمية  مثل المواقع المجهولة و المنتديات و المدونات",
        c:"كلاهما",
        correct: "a",
    },
    {
        question: "هل تقوم بتحديث برامجك و تطبيقاتك و أنظمة تشغيلك خصوصا عند مطالبتك بذلك؟",
        a:"نعم",
        b:"لا",
        c:"لا اعرف",
        correct: "a",
    },
    {
        question: "هل تتأكد من الاذونات (التراخيص Premmesions) التي تعطيها لبرامجك وتطبيقاتك؟ ",
        a:"نعم",
        b:"لا",
        c:"لا اعرف",
        correct: "a",
    },
    {
        question: " هل تستخدم التطبيقات المعدلة (المهكرة أو المكركة mod) كبديل عن التطبيقات المدفوعة ؟ ",
        a:"نعم",
        b:"لا",
        c:"لا اعرف",
        correct: "b",
    },
    {
        question: " أي من هذه الروابط تابع لشركة جوجل؟",
        a:"https://www.google.om/",
        b:"https://www.google.com/",
        c:"كل ما سبق",
        correct: "b",
    },
    {
        question: " هل يعد VPN وسيلة مفيدة لتشفير الاتصال؟",
        a:"نعم",
        b:"لا",
        c:"لا أعرف",
        correct: "a",
    },
    {
        question: " هل تتأكد من هوية المرسل قبل تحميل أي مرفقات أو الدخول للروابط حين تتلقى الرسائل؟",
        a:"نعم",
        b:"لا",
        c:"احيانا",
        correct: "a",
    },
    {
        question: "هل ترى أن روابط Https اكثر آمانا من Http؟",
        a:"نعم",
        b:"لا",
        c:"لا اعرف",
        correct: "a",
    },
    {
        question: " أي من الآثار الآتية تدل على وجود مشكلة أمنية في جهازك؟",
        a:"عدم انشغال الحاسوب نهائيا حتى مع الضغط على زر التشغيل عشرات المرات",
        b:"اختفاء بعض البرامج والملفات دون سبب واضح",
        c:"كل ما سبق",
        correct: "b",
    },
    {
        question: " بماذا تتميز برامج الفدية Ransomware عن غيرها من البرمجيات الضارة Malware ؟",
        a:"سرقة البيانات",
        b:"تشفير البيانات وطلب مقابل كبدبيل",
        c:"تسجيل نقرات لوحات المفاتيح",
        correct: "b",
    },
    {
        question: " بماذا تتميز الديدان Worms عن غيرها من البرمجيات الضارة Malware؟",
        a:"الانتشار والتشغيل الذاتي",
        b:"الحاجة الى تشغيلها حتى تتنفذ",
        c:"كل ما سبق",
        correct: "a",
    },
    {
        question: " لماذا سميت أحصنة طروادة Trojan horses بهذا الاسم؟",
        a:"لأنها توقف الحاسوب عن العمل",
        b:"لانها تعمل على استغلال موارد الحاسوب للتعدين على العملات الرقمية",
        c:"لأنها تتخفى و تظهر كأنها برامج شرعية وسليمة وهي ليست كذلك",
        correct: "c",
    },
    {
        question: " في حال ظهور رسالة منثبقة من المتصفح تخبرك بأن جهازك تعرض للفيروسات ماذا تفعل؟",
        a:"أتبع خطوات الرسالة لعلاج المشكلة",
        b:"أتجاهلها وأخرج منها",
        c:"لا اعرف ماذا افعل",
        correct: "b",
    },
    {
        question: " هل يعد استخدام شبكة الوايفي العامة (مثل الموجودة في المقاهي والأماكن العامة وغيرها) آمنا؟",
        a:"نعم",
        b:"لا",
        c:"لا اعرف",
        correct: "b",
    }  

];


const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}


function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click" ,() => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++
        
        if (currentQuiz < quizData.length) {
            loadQuiz() 
        } else {

            if (score*5 < 46) {
                quiz.innerHTML=`
                <h2 style="text-align: center; margin: 25px auto ">نتيجتك <span style="color:red">${score*5}%</span>
                </h2>
                <h2 style="text-align: center;margin: 25px auto;line-height: 1.5;font-size: 22px;">ادائك كان ضعيفا ننصحك بأخذ هذه الدورة التوعية حتى تتمكن من حماية نفسك ضمن الفضاء الرقمي
                </h2>
                <div style="display:flex">
                <button onclick="window.open('https://www.edraak.org/programs/course-v1:Edraak+ICS+SP-2019/')

                "style="border-radius: 0 0 10px 0; border-left: 1px solid #817474;background:#ff0202bd">مدخل الى الأمن السيبراني </button>
                <button onclick="location.reload()" style="border-radius: 0 0 0 10px;">بدأ من جديد </button>
                </div>
            `
            }
            else if (score*5 < 60) {
                quiz.innerHTML=`
                <h2 style="text-align: center; margin: 25px auto ">نتيجتك <span style="color:red">${score*5}%</span>
                </h2>
                <h2 style="text-align: center;margin: 25px auto;line-height: 1.5;font-size: 22px;">ادائك كان متوسطا ننصحك بأخذ هذه الدورة التوعية حتى تتمكن من حماية نفسك ضمن الفضاء الرقمي
                </h2>

                <div style="display:flex">
                <button onclick="window.open('https://www.edraak.org/programs/course-v1:Edraak+ICS+SP-2019/');" style="border-radius: 0 0 10px 0; border-left: 1px solid #817474;background:#f44336">مدخل الى الأمن السيبراني </button>

                <button onclick="location.reload()" style="border-radius: 0 0 0 10px;" >بدأ من جديد </button>
                </div>
            `
            }
            else if (score*5 < 80) {
                quiz.innerHTML=`
                <h2 style="text-align: center; margin: 25px auto ">نتيجتك <span style="color:#f44336">${score*5}%</span>
                </h2>
                <h2 style="text-align: center;margin: 25px auto;line-height: 1.5;font-size: 22px;">ادائك كان جيدا ننصحك بأخذ هذه الدورة التوعية حتى تتمكن من حماية نفسك اكثر ضمن الفضاء الرقمي
                </h2>

                <div style="display:flex">
               
                <button onclick="window.open('https://www.edraak.org/programs/course-v1:Edraak+BSC+SP-2019/');"style="border-radius: 0 0 10px 0; border-left: 1px solid #817474;background:#f44336">دورة حول اساسيات الأمن السيبراني </button>

                <button onclick="location.reload()" style="border-radius: 0 0 0 10px;">بدأ من جديد </button>
                </div>
            `
            }
            else {
                quiz.innerHTML=`
                <h2 style="text-align: center; margin: 25px auto ">نتيجتك <span style="color:#4caf50">${score*5}%</span>
                </h2>
                <h2 style="text-align: center;margin: 25px auto;line-height: 1.5;font-size: 22px;">ادائك كان ممتازا ننصحك بالاستمرار على هذا المنوال والبقاء على الاطلاع حول آخر المستجدات
                </h2>

                <div style="display:flex">

                <button onclick="window.open('https://www.edraak.org/programs/specialization/cs101-v1/');" style="border-radius: 0 0 10px 0; border-left: 1px solid #817474;background:#4caf50">مساق كامل حول الأمن السيبراني</button>

                <button onclick="location.reload()" style="border-radius: 0 0 0 10px;">بدأ من جديد </button>
                </div>
            `
            }
        }
    }

})