const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSovmkSqKJOd-1AuFmsNcXEeilFdFV5WXY2hgVbUfYQx5-CUTB9r0XPjAWYLwrE2WzXVjJWpHaLOIwB/pub?output=csv";

const i18n = {
    es: {
        loginTitle: "Iniciar Sesión",
        loginSubtitle: "Ingresa tus credenciales para acceder a la plataforma",
        lblEmail: "Correo Electrónico",
        lblPassword: "Contraseña",
        btnSubmit: "Ingresar",
        btnVerifying: "Verificando...",
        brandName: "Instituto Middle Assembly of Las Naciones",
        brandSub: "Departamento de Desarrollo y Liderazgo",
        navHome: "Inicio",
        navClasses: "Clases",
        navResources: "Recursos",
        navCalendar: "Calendario",
        navTasks: "Tareas",
        navForum: "Foro",
        navNotices: "Avisos",
        navProfile: "Mi Perfil",
        navSupport: "Soporte",
        sectionTitle: "Más Recursos",
        welcomeTitle: "Bienvenido a la Plataforma Educativa",
        welcomeMsg: "Explora tus materias, recursos de estudio y fechas importantes desde el menú superior.",
        calendarMsg: "Próximas clases y eventos programados.",
        underConstTitle: "Sección en Construcción",
        underConstMsg: "Estamos trabajando para habilitar esta herramienta muy pronto.",
        card1: "El Credo de los apóstoles",
        card2: "El Credo de Nicea",
        card3: "El Credo de Atanasio",
        card4: "El Catecismo de Heidelberg",
        card5: "La Confesión Belga",
        card6: "Los Cánones de Dort",
        card7: "La confesión Belhar",
        logout: "Salir",
        emailNotFound: "El correo electrónico ingresado no está registrado.",
        incorrectPassword: "La contraseña es incorrecta.",
        serverError: "Ocurrió un error al conectar con la base de datos de estudiantes."
    },
    en: {
        loginTitle: "Log In",
        loginSubtitle: "Enter your credentials to access the platform",
        lblEmail: "Email Address",
        lblPassword: "Password",
        btnSubmit: "Log In",
        btnVerifying: "Verifying...",
        brandName: "Middle Assembly Institute of Las Naciones",
        brandSub: "Development and Leadership Department",
        navHome: "Home",
        navClasses: "Classes",
        navResources: "Resources",
        navCalendar: "Calendar",
        navTasks: "Tasks",
        navForum: "Forum",
        navNotices: "Announcements",
        navProfile: "My Profile",
        navSupport: "Support",
        sectionTitle: "More Resources",
        welcomeTitle: "Welcome to the Educational Platform",
        welcomeMsg: "Explore your subjects, study resources, and important dates from the top menu.",
        calendarMsg: "Upcoming classes and scheduled events.",
        underConstTitle: "Section Under Construction",
        underConstMsg: "We are working to bring you this feature very soon.",
        card1: "The Apostles' Creed",
        card2: "The Nicene Creed",
        card3: "The Athanasian Creed",
        card4: "The Heidelberg Catechism",
        card5: "The Belgic Confession",
        card6: "The Canons of Dort",
        card7: "The Belhar Confession",
        logout: "Logout",
        emailNotFound: "The email address entered is not registered.",
        incorrectPassword: "The password is incorrect.",
        serverError: "Connection error with the student database."
    },
    ht: {
        loginTitle: "Konekte",
        loginSubtitle: "Antre enfòmasyon ou yo pou w ka gen aksè ak platfòm nan",
        lblEmail: "Imèl",
        lblPassword: "Mopas",
        btnSubmit: "Konekte",
        btnVerifying: "N ap verifye...",
        brandName: "Enstiti Middle Assembly of Las Naciones",
        brandSub: "Depatman Devlopman ak Lidèchip",
        navHome: "Akèy",
        navClasses: "Klas yo",
        navResources: "Resous yo",
        navCalendar: "Kalandriye",
        navTasks: "Twa yo",
        navForum: "Forum",
        navNotices: "Anons yo",
        navProfile: "Profil mwen",
        navSupport: "Sipò",
        sectionTitle: "Plis Resous",
        welcomeTitle: "Byenvini nan Platfòm Edikasyonèl la",
        welcomeMsg: "Eksplore matyè ou yo ak dat enpòtan yo nan meni anwo a.",
        calendarMsg: "Klas ak evènman ki gen pou vini yo.",
        underConstTitle: "Seksyon an nan Konstriksyon",
        underConstMsg: "N ap travay pou n ba ou aksè ak zouti sa a trè vit.",
        card1: "Kredo Apòt yo",
        card2: "Kredo Nikè a",
        card3: "Kredo Atanaz la",
        card4: "Katekism Heidelberg la",
        card5: "Konfesyon Bèlj la",
        card6: "Kanon Dort yo",
        card7: "Konfesyon Belhar la",
        logout: "Sòti",
        emailNotFound: "Imèl ou antre a pa anregistre nan sistèm nan.",
        incorrectPassword: "Mopas la pa kòrèk.",
        serverError: "Gen yon erè ki fèt pandan koneksyon ak baz donnididyan yo."
    },
    ko: {
        loginTitle: "로그인",
        loginSubtitle: "플랫폼에 액세스하려면 자격 증명을 입력하세요",
        lblEmail: "이메일 주소",
        lblPassword: "비밀번호",
        btnSubmit: "로그인",
        btnVerifying: "확인 중...",
        brandName: "Middle Assembly of Las Naciones 연구소",
        brandSub: "개발 및 리더십 부서",
        navHome: "홈",
        navClasses: "수업",
        navResources: "자료",
        navCalendar: "일정표",
        navTasks: "과제",
        navForum: "포럼",
        navNotices: "공지사항",
        navProfile: "내 프로필",
        navSupport: "지원",
        sectionTitle: "추가 자료",
        welcomeTitle: "교육 플랫폼에 오신 것을 환영합니다",
        welcomeMsg: "상단 메뉴에서 과목, 학습 자료 및 주요 일정을 확인하세요.",
        calendarMsg: "다오는 수업 및 예정된 행사.",
        underConstTitle: "공사 중인 섹션",
        underConstMsg: "곧 이 기능을 사용할 수 있도록 준비 중입니다.",
        card1: "사도신경",
        card2: "니케아 신경",
        card3: "아타나시오 신경",
        card4: "하이델베르크 요리문답",
        card5: "벨직 신앙고백",
        card6: "돌트 신조",
        card7: "벨하 신앙고백",
        logout: "로그아웃",
        emailNotFound: "입력하신 이메일 주소는 등록되어 있지 않습니다.",
        incorrectPassword: "비밀번호가 올바르지 않습니다.",
        serverError: "학생 데이터베이스 연결 중 오류가 발생했습니다."
    },
    zh: {
        loginTitle: "登入",
        loginSubtitle: "請輸入您的憑據以訪問平台",
        lblEmail: "電子郵件",
        lblPassword: "密碼",
        btnSubmit: "登入",
        btnVerifying: "驗證中...",
        brandName: "Middle Assembly of Las Naciones 學院",
        brandSub: "發展與領導力部門",
        navHome: "首頁",
        navClasses: "課程",
        navResources: "資源",
        navCalendar: "日曆",
        navTasks: "作業",
        navForum: "論壇",
        navNotices: "公告",
        navProfile: "個人檔案",
        navSupport: "支援",
        sectionTitle: "更多資源",
        welcomeTitle: "歡迎來到教育平台",
        welcomeMsg: "從頂部功能表探索您的科目、學習資源和重要日期。",
        calendarMsg: "即將到來的課程與排定活動。",
        underConstTitle: "頁面建設中",
        underConstMsg: "我們正努力儘快為您開放此功能。",
        card1: "使徒信經",
        card2: "尼西亞信經",
        card3: "亞他那修信經",
        card4: "海德堡要理問答",
        card5: "比利時信條",
        card6: "多特信條",
        card7: "貝爾哈信條",
        logout: "登出",
        emailNotFound: "您輸入的電子郵件地址未註冊。",
        incorrectPassword: "密碼不正確。",
        serverError: "連接學生數據庫時發生錯誤。"
    },
    it: {
        loginTitle: "Accedi",
        loginSubtitle: "Inserisci le tue credenziali per accedere alla piattaforma",
        lblEmail: "Indirizzo Email",
        lblPassword: "Password",
        btnSubmit: "Accedi",
        btnVerifying: "Verifica in corso...",
        brandName: "Istituto Middle Assembly of Las Naciones",
        brandSub: "Dipartimento di Sviluppo e Leadership",
        navHome: "Home",
        navClasses: "Corsi",
        navResources: "Risorse",
        navCalendar: "Calendario",
        navTasks: "Compiti",
        navForum: "Forum",
        navNotices: "Avvisi",
        navProfile: "Il Mio Profilo",
        navSupport: "Supporto",
        sectionTitle: "Altre Risorse",
        welcomeTitle: "Benvenuto nella Piattaforma Educativa",
        welcomeMsg: "Esplora i tuoi corsi, materiali di studio e date importanti dal menu in alto.",
        calendarMsg: "Prossime lezioni ed eventi programmati.",
        underConstTitle: "Sezione in Costruzione",
        underConstMsg: "Stiamo lavorando per rendere disponibile questa funzione al più presto.",
        card1: "Il Credo degli Apostoli",
        card2: "Il Credo Niceno",
        card3: "Il Credo Atanasiano",
        card4: "Il Catechismo di Heidelberg",
        card5: "La Confessione Belgica",
        card6: "I Canoni di Dort",
        card7: "La Confessione di Belhar",
        logout: "Esci",
        emailNotFound: "L'indirizzo email inserito non è registrato.",
        incorrectPassword: "La password è errata.",
        serverError: "Si è verificato un errore di connessione al database degli studenti."
    },
    fr: {
        loginTitle: "Connexion",
        loginSubtitle: "Entrez vos identifiants pour accéder à la plateforme",
        lblEmail: "Adresse e-mail",
        lblPassword: "Mot de passe",
        btnSubmit: "Se connecter",
        btnVerifying: "Vérification...",
        brandName: "Institut Middle Assembly of Las Naciones",
        brandSub: "Département de Développement et Leadership",
        navHome: "Accueil",
        navClasses: "Cours",
        navResources: "Ressources",
        navCalendar: "Calendrier",
        navTasks: "Devoirs",
        navForum: "Forum",
        navNotices: "Annonces",
        navProfile: "Mon Profil",
        navSupport: "Support",
        sectionTitle: "Plus de ressources",
        welcomeTitle: "Bienvenue sur la Plateforme Éducative",
        welcomeMsg: "Explorez vos cours, ressources d'étude et dates importantes depuis le menu supérieur.",
        calendarMsg: "Prochains cours et événements programmés.",
        underConstTitle: "Section en Construction",
        underConstMsg: "Nous travaillons pour mettre cet outil à votre disposition très bientôt.",
        card1: "Le Symbole des Apôtres",
        card2: "Le Symbole de Nicée",
        card3: "Le Symbole d'Athanase",
        card4: "Le Catéchisme de Heidelberg",
        card5: "La Confession de Foi Belge",
        card6: "Les Canons de Dort",
        card7: "La Confession de Belhar",
        logout: "Déconnexion",
        emailNotFound: "L'adresse e-mail saisie n'est pas enregistrée.",
        incorrectPassword: "Le mot de passe est incorrect.",
        serverError: "Une erreur est survenue lors de la connexion à la base de données des étudiants."
    },
    pt: {
        loginTitle: "Entrar",
        loginSubtitle: "Insira suas credenciais para acessar a plataforma",
        lblEmail: "E-mail",
        lblPassword: "Senha",
        btnSubmit: "Entrar",
        btnVerifying: "Verificando...",
        brandName: "Instituto Middle Assembly of Las Naciones",
        brandSub: "Departamento de Desenvolvimento e Liderança",
        navHome: "Início",
        navClasses: "Aulas",
        navResources: "Recursos",
        navCalendar: "Calendário",
        navTasks: "Tarefas",
        navForum: "Fórum",
        navNotices: "Avisos",
        navProfile: "Meu Perfil",
        navSupport: "Suporte",
        sectionTitle: "Mais Recursos",
        welcomeTitle: "Bem-vindo à Plataforma Educacional",
        welcomeMsg: "Explore suas disciplinas, recursos de estudo e datas importantes pelo menu superior.",
        calendarMsg: "Próximas aulas e eventos agendados.",
        underConstTitle: "Seção em Construção",
        underConstMsg: "Estamos trabalhando para disponibilizar esta ferramenta em breve.",
        card1: "O Credo dos Apóstolos",
        card2: "O Credo Niceno",
        card3: "O Credo Atanasiano",
        card4: "O Catecismo de Heidelberg",
        card5: "A Confissão Belga",
        card6: "Os Cânones de Dort",
        card7: "A Confissão de Belhar",
        logout: "Sair",
        emailNotFound: "O e-mail inserido não está registrado.",
        incorrectPassword: "A senha está incorreta.",
        serverError: "Ocorreu um erro ao conectar ao banco de dados de estudantes."
    },
    de: {
        loginTitle: "Anmelden",
        loginSubtitle: "Geben Sie Ihre Anmeldedaten ein, um auf die Plattform zuzugreifen",
        lblEmail: "E-Mail-Adresse",
        lblPassword: "Passwort",
        btnSubmit: "Anmelden",
        btnVerifying: "Überprüfen...",
        brandName: "Institut Middle Assembly of Las Naciones",
        brandSub: "Abteilung für Entwicklung und Führung",
        navHome: "Startseite",
        navClasses: "Klassen",
        navResources: "Ressourcen",
        navCalendar: "Kalender",
        navTasks: "Aufgaben",
        navForum: "Forum",
        navNotices: "Mitteilungen",
        navProfile: "Mein Profil",
        navSupport: "Unterstützung",
        sectionTitle: "Weitere Ressourcen",
        welcomeTitle: "Willkommen auf der Bildungsplattform",
        welcomeMsg: "Erkunden Sie Ihre Fächer, Lernressourcen und wichtige Termine über das obere Menü.",
        calendarMsg: "Anstehende Kurse und geplante Veranstaltungen.",
        underConstTitle: "Bereich im Aufbau",
        underConstMsg: "Wir arbeiten daran, dieses Funktionselement in Kürze bereitzustellen.",
        card1: "Das Apostolische Glaubensbekenntnis",
        card2: "Das Glaubensbekenntnis von Nicäa",
        card3: "Das Athanasianische Glaubensbekenntnis",
        card4: "Der Heidelberger Katechismus",
        card5: "Das Belgische Glaubensbekenntnis",
        card6: "Die Lehrregeln von Dort",
        card7: "Das Bekenntnis von Belhar",
        logout: "Abmelden",
        emailNotFound: "Die eingegebene E-Mail-Adresse ist nicht registriert.",
        incorrectPassword: "Das Passwort ist falsch.",
        serverError: "Verbindungsfehler zur Studentendatenbank."
    },
    ru: {
        loginTitle: "Войти",
        loginSubtitle: "Введите свои данные для доступа к платформе",
        lblEmail: "Электронная почта",
        lblPassword: "Пароль",
        btnSubmit: "Войти",
        btnVerifying: "Проверка...",
        brandName: "Институт Middle Assembly of Las Naciones",
        brandSub: "Отдел развития и лидерства",
        navHome: "Главная",
        navClasses: "Занятия",
        navResources: "Ресурсы",
        navCalendar: "Календарь",
        navTasks: "Задания",
        navForum: "Форум",
        navNotices: "Объявления",
        navProfile: "Мой профиль",
        navSupport: "Поддержка",
        sectionTitle: "Другие ресурсы",
        welcomeTitle: "Добро пожаловать на образовательную платформу",
        welcomeMsg: "Изучайте предметы, учебные материалы и важные даты в верхнем меню.",
        calendarMsg: "Предстоящие занятия и запланированные мероприятия.",
        underConstTitle: "Раздел в разработке",
        underConstMsg: "Мы работаем над тем, чтобы предоставить этот раздел в ближайшее время.",
        card1: "Aпостольский Символ веры",
        card2: "Никейский Символ веры",
        card3: "Афанасьевский Символ веры",
        card4: "Гейдельбергский катехизис",
        card5: "Бельгийское исповедание",
        card6: "Дортские каноны",
        card7: "Белхарское исповедание",
        logout: "Выйти",
        emailNotFound: "Введенный адрес электронной почты не зарегистрирован.",
        incorrectPassword: "Неверный пароль.",
        serverError: "Ошибка подключения к базе данных студентов."
    },
    ar: {
        loginTitle: "تسجيل الدخول",
        loginSubtitle: "أدخل بيانات الاعتماد الخاصة بك للوصول إلى المنصة",
        lblEmail: "البريد الإلكتروني",
        lblPassword: "كلمة المرور",
        btnSubmit: "دخول",
        btnVerifying: "جاري التحقق...",
        brandName: "معهد Middle Assembly of Las Naciones",
        brandSub: "قسم التطوير والقيادة",
        navHome: "الرئيسية",
        navClasses: "الدروس",
        navResources: "الموارد",
        navCalendar: "التقويم",
        navTasks: "المهام",
        navForum: "المنتدى",
        navNotices: "الإعلانات",
        navProfile: "ملفي الشخصي",
        navSupport: "الدعم",
        sectionTitle: "المزيد من الموارد",
        welcomeTitle: "مرحبًا بك في المنصة التعليمية",
        welcomeMsg: "استكشف المواد والموارد التعليمية والمواعيد الهامة من القائمة العلوية.",
        calendarMsg: "الدروس القادمة والفعاليات المجدولة.",
        underConstTitle: "القسم قيد الإنشاء",
        underConstMsg: "نحن نعمل على توفير هذه الأداة قريبًا جداً.",
        card1: "قانون الإيمان للرسل",
        card2: "قانون الإيمان النقاوي",
        card3: "قانون الإيمان الأثناسيوسي",
        card4: "تعليم هايدلبرغ",
        card5: "الاعتراف البلجيكي",
        card6: "قوانين دوردريخت",
        card7: "اعتراف بيلهار",
        logout: "خروج",
        emailNotFound: "البريد الإلكتروني المدخل غير مسجل.",
        incorrectPassword: "كلمة المرور غير صحيحة.",
        serverError: "حدث خطأ أثناء الاتصال بقاعدة بيانات الطلاب."
    },
    ja: {
        loginTitle: "ログイン",
        loginSubtitle: "プラットフォームにアクセスするには資格情報を入力してください",
        lblEmail: "メールアドレス",
        lblPassword: "パスワード",
        btnSubmit: "ログイン",
        btnVerifying: "確認中...",
        brandName: "Middle Assembly of Las Naciones 研究所",
        brandSub: "開発・リーダーシップ部門",
        navHome: "ホーム",
        navClasses: "クラス",
        navResources: "リソース",
        navCalendar: "カレンダー",
        navTasks: "課題",
        navForum: "フォーラム",
        navNotices: "お知らせ",
        navProfile: "マイプロフィール",
        navSupport: "サポート",
        sectionTitle: "その他のリソース",
        welcomeTitle: "教育プラットフォームへようこそ",
        welcomeMsg: "上部メニューから科目、学習リソース、重要日程をご確認ください。",
        calendarMsg: "今後のクラスおよび予定されているイベント。",
        underConstTitle: "準備中のセクション",
        underConstMsg: "間もなくご利用いただけるよう準備を進めております。",
        card1: "使徒信条",
        card2: "ニケア信条",
        card3: "アタナシオス信条",
        card4: "ハイデルベルク信仰問答",
        card5: "ベルギー信仰告白",
        card6: "ドルト信条",
        card7: "ベルハー信仰告白",
        logout: "ログアウト",
        emailNotFound: "入力されたメールアドレスは登録されていません。",
        incorrectPassword: "パスワードが正しくありません。",
        serverError: "学生データベースへの接続エラーが発生しました。"
    },
    hi: {
        loginTitle: "लॉग इन करें",
        loginSubtitle: "प्लेटफ़ॉर्म तक पहुँचने के लिए अपने क्रेडेंशियल दर्ज करें",
        lblEmail: "ईमेल पता",
        lblPassword: "पासवर्ड",
        btnSubmit: "प्रवेश करें",
        btnVerifying: "सत्यापित किया जा रहा है...",
        brandName: "Middle Assembly of Las Naciones संस्थान",
        brandSub: "विकास और नेतृत्व विभाग",
        navHome: "होम",
        navClasses: "कक्षाएं",
        navResources: "संसाधन",
        navCalendar: "कैलेण्डर",
        navTasks: "कार्य",
        navForum: "मंच",
        navNotices: "सूचनाएं",
        navProfile: "मेरा प्रोफ़ाइल",
        navSupport: "सहायता",
        sectionTitle: "अधिक संसाधन",
        welcomeTitle: "शैक्षणिक मंच पर आपका स्वागत है",
        welcomeMsg: "शीर्ष मेनू से अपने विषयों, अध्ययन संसाधनों और महत्वपूर्ण तिथियों का अन्वेषण करें।",
        calendarMsg: "आगामी कक्षाएं और निर्धारित कार्यक्रम।",
        underConstTitle: "अनुभाग निर्माणाधीन है",
        underConstMsg: "हम बहुत जल्द इस सुविधा को उपलब्ध कराने के लिए काम कर रहे हैं।",
        card1: "प्रेरितों का धर्मसार",
        card2: "निकिया का धर्मसार",
        card3: "अथानासियस का धर्मसार",
        card4: "हाइडेलबर्ग कैटेकिस्म",
        card5: "बेल्जिक स्वीकारोक्ति",
        card6: "डॉर्ट के कैनन",
        card7: "बेलहार स्वीकारोक्ति",
        logout: "बाहर जाएं",
        emailNotFound: "दर्ज किया गया ईमेल पता पंजीकृत नहीं है।",
        incorrectPassword: "पासवर्ड गलत है।",
        serverError: "छात्र डेटाबेस से कनेक्ट करने में त्रुटि।"
    },
    tr: {
        loginTitle: "Giriş Yap",
        loginSubtitle: "Platforma erişmek için bilgilerinizi girin",
        lblEmail: "E-posta Adresi",
        lblPassword: "Şifre",
        btnSubmit: "Giriş Yap",
        btnVerifying: "Doğrulanıyor...",
        brandName: "Middle Assembly of Las Naciones Enstitüsü",
        brandSub: "Gelişim ve Liderlik Departmanı",
        navHome: "Ana Sayfa",
        navClasses: "Dersler",
        navResources: "Kaynaklar",
        navCalendar: "Takvim",
        navTasks: "Ödevler",
        navForum: "Forum",
        navNotices: "Duyurular",
        navProfile: "Profilim",
        navSupport: "Destek",
        sectionTitle: "Daha Fazla Kaynak",
        welcomeTitle: "Eğitim Platformuna Hoş Geldiniz",
        welcomeMsg: "Üst menüden derslerinizi, çalışma kaynaklarınızı ve önemli tarihleri inceleyin.",
        calendarMsg: "Yaklaşan dersler ve planlanan etkinlikler.",
        underConstTitle: "Bölüm Yapım Aşamasında",
        underConstMsg: "Bu özelliği çok yakında kullanıma sunmak için çalışıyoruz.",
        card1: "Elçilerin İman Açıklaması",
        card2: "İznik İman Açıklaması",
        card3: "Athanasius İman Açıklaması",
        card4: "Heidelberg Kateşizmi",
        card5: "Belçika İman Açıklaması",
        card6: "Dort Kanunları",
        card7: "Belhar İman Açıklaması",
        logout: "Çıkış Yap",
        emailNotFound: "Girilen e-posta adresi kayıtlı değil.",
        incorrectPassword: "Şifre yanlış.",
        serverError: "Öğrenci veritabanına bağlanırken bir hata oluştu."
    },
    nl: {
        loginTitle: "Inloggen",
        loginSubtitle: "Voer uw gegevens in om toegang te krijgen tot het platform",
        lblEmail: "E-mailadres",
        lblPassword: "Wachtwoord",
        btnSubmit: "Inloggen",
        btnVerifying: "Controleren...",
        brandName: "Instituut Middle Assembly of Las Naciones",
        brandSub: "Departement Ontwikkeling en Leiderschap",
        navHome: "Home",
        navClasses: "Lessen",
        navResources: "Bronmateriaal",
        navCalendar: "Kalender",
        navTasks: "Taken",
        navForum: "Forum",
        navNotices: "Mededelingen",
        navProfile: "Mijn Profiel",
        navSupport: "Ondersteuning",
        sectionTitle: "Meer Bronnen",
        welcomeTitle: "Welkom op het Educatief Platform",
        welcomeMsg: "Verken uw vakken, studiemateriaal en belangrijke datums via het bovenste menu.",
        calendarMsg: "Komende lessen en geplande evenementen.",
        underConstTitle: "Sectie in Opbouw",
        underConstMsg: "We werken er aan om deze functie binnenkort beschikbaar te maken.",
        card1: "De Apostolische Geloofsbelijdenis",
        card2: "De Geloofsbelijdenis van Nicaea",
        card3: "De Geloofsbelijdenis van Athanasius",
        card4: "De Heidelbergse Catechismus",
        card5: "De Nederlandse Geloofsbelijdenis",
        card6: "De Dordtse Leerregels",
        card7: "De Belhar Belijdenis",
        logout: "Uitloggen",
        emailNotFound: "Het ingevoerde e-mailadres is niet geregistreerd.",
        incorrectPassword: "Het wachtwoord is onjuist.",
        serverError: "Verbindingsfout met de studentendatabase."
    }
};

let currentLang = localStorage.getItem('user_language') || 'es';

document.addEventListener('DOMContentLoaded', () => {
    const loginModal = document.getElementById('login-modal');
    const appContent = document.getElementById('app-content');
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    const loginLangSelect = document.getElementById('login-language-select');
    const navLangSelect = document.getElementById('nav-language-select');
    const loginError = document.getElementById('login-error');
    const btnText = document.getElementById('btn-text');
    const loginSpinner = document.getElementById('login-spinner');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    const isAuthenticated = localStorage.getItem('user_authenticated') === 'true';

    // Manejo directo de sesión por archivo HTML
    if (isAuthenticated) {
        if (loginModal) loginModal.classList.add('hidden');
        if (appContent) appContent.classList.remove('hidden');
    } else {
        if (loginModal) {
            loginModal.classList.remove('hidden');
        } else {
            window.location.href = "index.html";
            return;
        }
    }

    if (loginLangSelect) loginLangSelect.value = currentLang;
    if (navLangSelect) navLangSelect.value = currentLang;
    updateLanguage(currentLang);

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('email').value.trim().toLowerCase();
            const passwordInput = document.getElementById('password').value.trim();

            loginError.classList.remove('show');
            loginError.textContent = '';
            if (btnText) btnText.textContent = i18n[currentLang].btnVerifying;
            if (loginSpinner) loginSpinner.classList.remove('hidden');

            try {
                const response = await fetch(GOOGLE_SHEET_CSV_URL);
                const csvText = await response.text();
                const rows = csvText.split(/\r?\n/).map(row => row.split(','));

                let emailExists = false;
                let passwordMatch = false;

                for (let i = 1; i < rows.length; i++) {
                    if (rows[i].length >= 5) {
                        const sheetEmail = rows[i][3].trim().replace(/^"|"$/g, '').toLowerCase();
                        const sheetPassword = rows[i][4].trim().replace(/^"|"$/g, '');

                        if (sheetEmail === emailInput) {
                            emailExists = true;
                            if (sheetPassword === passwordInput) {
                                passwordMatch = true;
                            }
                            break;
                        }
                    }
                }

                if (!emailExists) {
                    loginError.textContent = i18n[currentLang].emailNotFound;
                    loginError.classList.add('show');
                } else if (!passwordMatch) {
                    loginError.textContent = i18n[currentLang].incorrectPassword;
                    loginError.classList.add('show');
                } else {
                    localStorage.setItem('user_authenticated', 'true');
                    loginModal.classList.add('hidden');
                    if (appContent) appContent.classList.remove('hidden');
                }

            } catch (error) {
                console.error('Error al conectar con Google Sheets:', error);
                loginError.textContent = i18n[currentLang].serverError;
                loginError.classList.add('show');
            } finally {
                if (btnText) btnText.textContent = i18n[currentLang].btnSubmit;
                if (loginSpinner) loginSpinner.classList.add('hidden');
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('user_authenticated');
            window.location.href = 'index.html';
        });
    }

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    function handleLanguageChange(e) {
        currentLang = e.target.value;
        localStorage.setItem('user_language', currentLang);
        if (loginLangSelect) loginLangSelect.value = currentLang;
        if (navLangSelect) navLangSelect.value = currentLang;
        updateLanguage(currentLang);
    }

    if (loginLangSelect) loginLangSelect.addEventListener('change', handleLanguageChange);
    if (navLangSelect) navLangSelect.addEventListener('change', handleLanguageChange);

    function updateLanguage(lang) {
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key]) {
                element.textContent = i18n[lang][key];
            }
        });

        const loginTitle = document.getElementById('login-title');
        const loginSubtitle = document.getElementById('login-subtitle');
        const lblEmail = document.getElementById('lbl-email');
        const lblPassword = document.getElementById('lbl-password');

        if (loginTitle) loginTitle.textContent = i18n[lang].loginTitle;
        if (loginSubtitle) loginSubtitle.textContent = i18n[lang].loginSubtitle;
        if (lblEmail) lblEmail.innerHTML = `<i class="fa-solid fa-envelope"></i> ${i18n[lang].lblEmail}`;
        if (lblPassword) lblPassword.innerHTML = `<i class="fa-solid fa-lock"></i> ${i18n[lang].lblPassword}`;
        if (btnText) btnText.textContent = i18n[lang].btnSubmit;
    }
});