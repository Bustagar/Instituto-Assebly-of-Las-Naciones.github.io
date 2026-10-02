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
// Control del menú hamburguesa en dispositivos móviles
if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Opcional: cierra el menú al hacer clic en cualquier enlace de navegación
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}
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
    // --- Notificación flotante para la descarga del calendario ---
    document.addEventListener('DOMContentLoaded', () => {
        const toast = document.getElementById('calendar-toast');
        const triggers = document.querySelectorAll('.download-trigger');

        if (toast && triggers.length > 0) {
            triggers.forEach(btn => {
                btn.addEventListener('click', () => {
                    toast.classList.add('show');
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 5000); // Se oculta automáticamente a los 5 segundos
                });
            });
        }
    });
});
// Base de datos completa del Catecismo de Heidelberg (Domingos 1 al 52)
const catecismoData = [
    {
        categoria: "Introducción",
        seccion: "Día del Señor 1",
        preguntas: [
            {
                num: "1",
                p: "¿Cuál es tu único consuelo en la vida y en la muerte?",
                r: "Que no me pertenezco a mí mismo, sino que pertenezco —en cuerpo y alma, en la vida y en la muerte— a mi fiel Salvador, Jesucristo. Él pagó por completo todos mis pecados con su preciosa sangre, y me liberó de la tiranía del diablo. Además, vela por mí de tal manera que ni un solo cabello de mi cabeza cae sin la voluntad de mi Padre que está en los cielos; de hecho, todas las cosas deben cooperar para mi salvación. Porque le pertenezco, Cristo, por medio de su Espíritu Santo, me asegura la vida eterna y me hace estar dispuesto y preparado de todo corazón para vivir para él de ahora en adelante.",
                ref: "1 Cor. 6:19-20; Rom. 14:7-9; 1 Cor. 3:23; Tito 2:14; 1 Pe. 1:18-19; Jn. 8:34-36; Rom. 8:28"
            },
            {
                num: "2",
                p: "¿Qué debes saber para vivir y morir con la alegría de este consuelo?",
                r: "Tres cosas: primero, cuán grandes son mi pecado y mi miseria; segundo, cómo soy liberado de todos mis pecados y miserias; tercero, cómo debo agradecer a Dios por tal liberación.",
                ref: "Romanos 3:9-10; Juan 17:3; Mateo 5:16"
            }
        ]
    },
    {
        categoria: "Parte I: Miseria",
        seccion: "Día del Señor 2",
        preguntas: [
            {
                num: "3",
                p: "¿Cómo llegas a conocer tu miseria?",
                r: "La ley de Dios me lo dice.",
                ref: "Romanos 3:20; 7:7-25"
            },
            {
                num: "4",
                p: "¿Qué nos exige la ley de Dios?",
                r: "Cristo nos enseña esto en resumen en Mateo 22:37-40: 'Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente... Y el segundo es semejante a este: Amarás a tuo prójimo como a ti mismo'. De estos dos mandamientos dependen toda la ley y los profetas.",
                ref: "Deuteronomio 6:5; Levítico 19:18"
            },
            {
                num: "5",
                p: "¿Puedes estar a la altura de todo esto a la perfección?",
                r: "No. Tengo una tendencia natural a odiar a Dios y a mi prójimo.",
                ref: "Rom. 3:9-20, 23; Génesis 6:5; Jer. 17:9"
            }
        ]
    },
    {
        seccion: "Día del Señor 3",
        preguntas: [
            {
                num: "6",
                p: "¿Creó Dios a las personas tan malvadas y perversas?",
                r: "No. Dios las creó buenas y a su imagen, es decir, en verdadera justicia y santidad, para que conocieran verdaderamente a Dios su creador, lo amaran con todo su corazón y vivieran con Dios en eterna felicidad, para alabarlo y glorificarlo.",
                ref: "Gén. 1:31; Gén. 1:26-27; Ef. 4:24; Col. 3:10; Sal. 8"
            },
            {
                num: "7",
                p: "Entonces, ¿de dónde proviene esta naturaleza humana corrupta?",
                r: "De la caída y la desobediencia de nuestros primeros padres, Adán y Eva, en el Paraíso. Esta caída ha envenenado tanto nuestra naturaleza que todos somos concebidos y nacemos en una condición pecaminosa.",
                ref: "Gén. 3; Rom. 5:12, 18-19; Sal. 51:5"
            },
            {
                num: "8",
                p: "¿Pero estamos tan corruptos que somos totalmente incapaces de hacer el bien e inclinados hacia todo mal?",
                r: "Sí, a menos que nazcamos de nuevo por el Espíritu de Dios.",
                ref: "Génesis 6:5; Isa. 53:6; Juan 3:3-5"
            }
        ]
    },
    {
        seccion: "Día del Señor 4",
        preguntas: [
            {
                num: "9",
                p: "Pero, ¿acaso Dios no nos hace una injusticia al exigir en su ley lo que no podemos hacer?",
                r: "No, Dios creó a los seres humanos con la capacidad de cumplir la ley. Sin embargo, ellos, provocados por el diablo, en desobediencia voluntaria, se privaron a sí mismos y a todos sus descendientes de estos dones.",
                ref: "Génesis 1:31; Efesios 4:24; Génesis 3:13; Romanos 5:12"
            },
            {
                num: "10",
                p: "¿Permite Dios que tal desobediencia y rebeldía queden impunes?",
                r: "Ciertamente no. Dios está terriblemente enojado con el pecado con el que nacemos, así como con los pecados que cometemos personalmente. Como juez justo, Dios los castigará ahora y en la eternidad.",
                ref: "Éx. 34:7; Sal. 5:4-6; Heb. 9:27; Gá. 3:10"
            },
            {
                num: "11",
                p: "¿Pero no es Dios también misericordioso?",
                r: "Ciertamente Dios es misericordioso, pero también justo. La justicia de Dios exige que el pecado, cometido contra su suprema majestad, sea castigado con la pena suprema: el castigo eterno del cuerpo y del alma.",
                ref: "Éxodo 34:6-7; Salmo 103:8-9; Mateo 25:35-46"
            }
        ]
    },
    {
        categoria: "Parte II: Liberación",
        seccion: "Día del Señor 5",
        preguntas: [
            {
                num: "12",
                p: "Según el justo juicio de Dios, merecemos castigo tanto ahora como en la eternidad: ¿cómo podemos, entonces, escapar de este castigo y volver al favor de Dios?",
                r: "Dios exige que su justicia sea satisfecha. Por lo tanto, las exigencias de esta justicia deben ser pagadas en su totalidad, ya sea por nosotros mismos o por otro.",
                ref: "Éx. 23:7; Rom. 2:1-11; Isa. 53:11"
            },
            {
                num: "13",
                p: "¿Podemos realizar este pago nosotros mismos?",
                r: "Por supuesto que no. De hecho, nuestra deuda aumenta cada día.",
                ref: "Mateo 6:12; Romanos 2:4-5"
            },
            {
                num: "14",
                p: "¿Puede alguna otra criatura pagar esta deuda por nosotros?",
                r: "No. Para empezar, Dios no castigará a ninguna otra criatura por lo que un ser humano es culpable. Además, ninguna criatura puede soportar el peso de la ira eterna de Dios contra el pecado y librar a otros de ella.",
                ref: "Ezeq. 18:4, 20; Heb. 2:14-18; Sal. 49:7-9"
            },
            {
                num: "15",
                p: "¿Qué clase de mediador y libertador debemos buscar entonces?",
                r: "Uno que sea un ser humano verdadero y justo, pero más poderoso que todas las criaturas, es decir, uno que también sea verdadero Dios.",
                ref: "Rom. 1:3; Isa. 53:9; Isa. 7:14; Juan 1:1"
            }
        ]
    },
    {
        seccion: "Día del Señor 6",
        preguntas: [
            {
                num: "16",
                p: "¿Por qué el mediador debe ser un ser humano verdadero y justo?",
                r: "La justicia de Dios exige que la naturaleza humana, que ha pecado, pague por el pecado; pero un ser humano pecador jamás podría pagar por los demás.",
                ref: "Rom. 5:12, 15; 1 Cor. 15:21; Heb. 7:26-27"
            },
            {
                num: "17",
                p: "¿Por qué el mediador también debe ser verdadero Dios?",
                r: "Para que el mediador, por el poder de su divinidad, pudiera soportar el peso de la ira de Dios en su humanidad y ganar para nosotros y restaurarnos la justicia y la vida.",
                ref: "Isa. 53; Juan 3:16; 2 Cor. 5:21"
            },
            {
                num: "18",
                p: "Entonces, ¿quién es este mediador, verdadero Dios y a la vez un hombre verdadero y justo?",
                r: "Nuestro Señor Jesucristo, quien nos fue dado para librarnos completamente y reconciliarnos con Dios.",
                ref: "Mateo 1:21-23; Lucas 2:11; 1 Corintios 1:30"
            },
            {
                num: "19",
                p: "¿Cómo llegas a saber esto?",
                r: "El santo evangelio me lo dice. Dios comenzó a revelar el evangelio ya en el Paraíso; más tarde Dios lo proclamó por medio de los santos patriarcas y profetas y lo prefiguró mediante los sacrificios y otras ceremonias de la ley; y finalmente Dios lo cumplió por medio de su amado Hijo.",
                ref: "Génesis 3:15; Isa. 53; Rom. 10:4"
            }
        ]
    },
    {
        seccion: "Día del Señor 7",
        preguntas: [
            {
                num: "20",
                p: "¿Se salvan entonces todas las personas por medio de Cristo, así como se perdieron por medio de Adán?",
                r: "No. Solo se salvan aquellos que, mediante la verdadera fe, son injertados en Cristo y aceptan todos sus beneficios.",
                ref: "Mat. 7:14; Juan 3:16, 18, 36"
            },
            {
                num: "21",
                p: "¿Qué es la verdadera fe?",
                r: "La verdadera fe no es solo un conocimiento seguro por el cual considero verdadero todo lo que Dios nos ha revelado en las Escrituras; es también una confianza sincera, que el Espíritu Santo crea en mí por medio del evangelio, de que Dios ha concedido gratuitamente, no solo a otros sino también a mí, el perdón de los pecados, la justicia eterna y la salvación.",
                ref: "Juan 17:3; Rom. 4:18-21; Mat. 16:15-17; Ef. 2:8-10"
            },
            {
                num: "22",
                p: "¿Qué debe creer entonces un cristiano?",
                r: "Todo lo que se nos promete en el evangelio, cuyo resumen se nos enseña en los artículos de nuestra fe cristiana universal e indiscutible.",
                ref: "Mateo 28:18-20; Juan 20:30-31"
            },
            {
                num: "23",
                p: "¿Qué son estos artículos?",
                r: "Creo en Dios, Padre todopoderoso, creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor... Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén.",
                ref: "Credo de los Apóstoles"
            }
        ]
    },
    {
        seccion: "Día del Señor 8",
        preguntas: [
            {
                num: "24",
                p: "¿Cómo se dividen estos artículos?",
                r: "En tres partes: Dios Padre y nuestra creación; Dios Hijo y nuestra liberación; y Dios Espíritu Santo y nuestra santificación.",
                ref: "Estructura Trinitaria del Credo"
            },
            {
                num: "25",
                p: "Puesto que solo hay un ser divino, ¿por qué hablas de tres: Padre, Hijo y Espíritu Santo?",
                r: "Porque así es como Dios se ha revelado en su Palabra: estas tres personas distintas son un solo Dios verdadero y eterno.",
                ref: "Deut. 6:4; 1 Cor. 8:4, 6; Mt. 3:16-17; 28:18-19"
            }
        ]
    },
    {
        categoria: "Dios Padre",
        seccion: "Día del Señor 9 ",
        preguntas: [
            {
                num: "26",
                p: "¿Qué crees cuando dices: «Creo en Dios, Padre todopoderoso, creador del cielo y de la tierra»?",
                r: "Que el Padre eterno de nuestro Señor Jesucristo, que de la nada creó el cielo y la tierra y todo lo que hay en ellos, que aún los sustenta y gobierna con su eterno designio y providencia, es mi Dios y Padre por causa de Cristo el Hijo. Confío tanto en Dios que no dudo que proveerá todo lo necesito para mi cuerpo y mi alma, y convertirá en mi bien cualquier adversidad.",
                ref: "Génesis 1-2; Salmo 104; Romanos 8:28; Mateo 7:9-11"
            }
        ]
    },
    {
        seccion: "Día del Señor 10",
        preguntas: [
            {
                num: "27",
                p: "¿Qué entiende usted por la providencia de Dios?",
                r: "El poder omnipotente y siempre presente de Dios por el cual Dios sostiene, como con su mano, el cielo y la tierra y todas las criaturas, y los gobierna de tal manera que todas las cosas nos llegan no por casualidad sino por su mano paternal.",
                ref: "Jer. 23:23-24; Heb. 1:3; Prov. 16:33; Mat. 10:29"
            },
            {
                num: "28",
                p: "¿Cómo nos ayuda el conocimiento de la creación y la providencia de Dios?",
                r: "Podemos ser pacientes cuando las cosas van mal, agradecidos cuando van bien, y para el futuro podemos tener buena confianza en nuestro fiel Dios y Padre, sabiendo que nada en la creación nos separará de su amor.",
                ref: "Job 1:21-22; Santiago 1:3; Rom. 8:38-39"
            }
        ]
    },
    {
        categoria: "Dios Hijo",
        seccion: "Día del Señor 11 ",
        preguntas: [
            {
                num: "29",
                p: "¿Por qué se llama al Hijo de Dios “Jesús”, que significa “salvador”?",
                r: "Porque nos salva de nuestros pecados, y porque la salvación no debe buscarse ni puede encontrarse en nadie más.",
                ref: "Mateo 1:21; Hechos 4:11-12; Isaías 43:11"
            },
            {
                num: "30",
                p: "¿Acaso quienes buscan su salvación en los santos, en sí mismos o en otro lugar realmente creen en el único salvador, Jesús?",
                r: "No. Aunque se jactan de ser suyos, con sus acciones niegan al único salvador, Jesús. O bien Jesús no es un salvador perfecto, o bien aquellos que con verdadera fe aceptan a este salvador tienen en él todo lo que necesitan para su salvación.",
                ref: "1 Cor. 1:12-13; Col. 1:19-20; 2:10"
            }
        ]
    },
    {
        seccion: "Día del Señor 12",
        preguntas: [
            {
                num: "31",
                p: "¿Por qué se le llama “Cristo”, que significa “ungido”?",
                r: "Porque ha sido ordenado por Dios Padre y ungido con el Espíritu Santo para ser nuestro profeta y maestro principal, nuestro único sumo sacerdote, y nuestro rey eterno.",
                ref: "Lucas 4:14-19; Heb. 7:17; Mat. 28:18-20"
            },
            {
                num: "32",
                p: "¿Pero por qué se le llama cristiano?",
                r: "Porque por la fe soy miembro de Cristo y, por lo tanto, participo de su unción. He sido ungido para confesar su nombre, para presentarme a él como sacrificio vivo de acción de gracias, para luchar con una conciencia libre contra el pecado...",
                ref: "1 Corintios 12:12-27; Romanos 12:1; Mateo 10:32"
            }
        ]
    },
    {
        seccion: "Día del Señor 13",
        preguntas: [
            {
                num: "33",
                p: "¿Por qué se le llama el “Hijo unigénito” de Dios si nosotros también somos hijos de Dios?",
                r: "Porque solo Cristo es el Hijo eterno y natural de Dios. Nosotros, en cambio, somos hijos adoptivos de Dios, adoptados por gracia mediante Cristo.",
                ref: "Juan 1:1-3, 14, 18; Juan 1:12; Ef. 1:5-6"
            },
            {
                num: "34",
                p: "¿Por qué lo llaman “nuestro Señor”?",
                r: "Porque —no con oro ni plata, sino con su preciosa sangre— nos ha liberado del pecado y de la tiranía del diablo, y nos ha redimido, en cuerpo y alma, para que seamos suyos.",
                ref: "1 Pe. 1:18-19; Col. 1:13-14; 1 Cor. 6:20"
            }
        ]
    },
    {
        seccion: "Día del Señor 14",
        preguntas: [
            {
                num: "35",
                p: "¿Qué significa que “fue concebido por obra del Espíritu Santo y nació de la virgen María”?",
                r: "Que el Hijo eterno de Dios, que es y permanece verdadero y eterno Dios, tomó sobre sí, por obra del Espíritu Santo, de la carne y la sangre de la virgen María, una naturaleza verdaderamente humana...",
                ref: "Juan 1:1; Lucas 1:35; Heb. 2:14-17"
            },
            {
                num: "36",
                p: "¿Cómo te beneficia la santa concepción y nacimiento de Cristo?",
                r: "Él es nuestro mediador y, ante los ojos de Dios, cubre con su inocencia y perfecta santidad mi pecado en el cual fui concebido.",
                ref: "1 Tim. 2:5-6; Rom. 8:3-4; 2 Cor. 5:21"
            }
        ]
    },
    {
        seccion: "Día del Señor 15",
        preguntas: [
            {
                num: "37",
                p: "¿Qué entiende usted por la palabra “sufrió”?",
                r: "Que durante toda su vida en la tierra, pero especialmente al final, Cristo soportó en cuerpo y alma la ira de Dios contra el pecado de toda la raza humana para librarnos de la condenación eterna.",
                ref: "Isa. 53; 1 Pe. 2:24; Rom. 3:25"
            },
            {
                num: "38",
                p: "¿Por qué sufrió “bajo Poncio Pilato” como juez?",
                r: "Para que él, aunque inocente, fuera condenado por un juez terrenal, y así nos librara del severo juicio de Dios que había de caer sobre nosotros.",
                ref: "Lucas 23:13-24; Isaías 53:4-5"
            },
            {
                num: "39",
                p: "¿Es significativo que fuera “crucificado” en lugar de morir de otra manera?",
                r: "Sí. Por esto estoy convencido de que cargó con la maldición que pesaba sobre mí, ya que la muerte por crucifixión fue maldecida por Dios.",
                ref: "Gál. 3:10-13 (Deut. 21:23)"
            }
        ]
    },
    {
        seccion: "Día del Señor 16",
        preguntas: [
            {
                num: "40",
                p: "¿Por qué tuvo que morir Cristo?",
                r: "Porque la justicia y la verdad de Dios lo exigen: nada más podía pagar por nuestros pecados excepto la muerte del Hijo de Dios.",
                ref: "Gén. 2:17; Rom. 8:3-4; Fil. 2:8"
            },
            {
                num: "41",
                p: "¿Por qué fue “enterrado”?",
                r: "Su entierro atestigua que realmente murió.",
                ref: "Isaías 53:9; Juan 19:38-42; 1 Corintios 15:3-4"
            },
            {
                num: "42",
                p: "Si Cristo murió por nosotros, ¿por qué tenemos que morir nosotros también?",
                r: "Nuestra muerte no paga la deuda de nuestros pecados. Más bien, pone fin a nuestro pecado y es nuestra entrada a la vida eterna.",
                ref: "Salmo 49:7; Juan 5:24; Filipenses 1:21-23"
            },
            {
                num: "43",
                p: "¿Qué beneficio adicional recibimos del sacrificio y la muerte de Cristo en la cruz?",
                r: "Por el poder de Cristo, nuestro viejo yo es crucificado, muerto y sepultado con él, para que los malos deseos de la carne ya no nos dominen.",
                ref: "Rom. 6:5-11; Col. 2:11-12"
            },
            {
                num: "44",
                p: "¿Por qué añade el Credo: «Descendió a los infiernos»?",
                r: "Para asegurarme, durante los ataques de más profundo temor y tentación, que Cristo mi Señor, al sufrir una angustia, un dolor y un terror indescriptibles en la cruz, me ha librado de la angustia y el tormento infernales.",
                ref: "Isa. 53; Mat. 26:36-46; Heb. 5:7-10"
            }
        ]
    },
    {
        seccion: "Día del Señor 17",
        preguntas: [
            {
                num: "45",
                p: "¿Cómo nos beneficia la resurrección de Cristo?",
                r: "Primero, por su resurrección venció a la muerte, para que participáramos de la justicia que obtuvo. Segundo, por su poder nosotros también hemos sido resucitados a una nueva vida. Tercero, es una garantía segura de nuestra bendita resurrección.",
                ref: "Rom. 4:25; 1 Cor. 15:16-20; Ef. 2:4-6"
            }
        ]
    },
    {
        seccion: "Día del Señor 18",
        preguntas: [
            {
                num: "46",
                p: "¿Qué quiere decir con «Ascendió al cielo»?",
                r: "Que Cristo, mientras sus discípulos lo observaban, fue llevado de la tierra al cielo y permanece allí por nosotros hasta que vuelva a juzgar a los vivos y a los muertos.",
                ref: "Lucas 24:50-51; Hechos 1:9-11; Rom. 8:34"
            },
            {
                num: "47",
                p: "¿Pero no está Cristo con nosotros hasta el fin del mundo, como nos prometió?",
                r: "Cristo es verdadero hombre y verdadero Dios. En su naturaleza humana, Cristo no está ahora en la tierra; pero en su divinidad, majestad, gracia y Espíritu, nunca está ausente de nosotros.",
                ref: "Mateo 28:20; Hechos 1:9-11; Juan 14:16-19"
            },
            {
                num: "48",
                p: "Si su humanidad no está presente dondequiera que esté su divinidad, ¿acaso las dos naturalezas de Cristo no están separadas entre sí?",
                r: "Ciertamente no. Dado que la divinidad no tiene límites y está presente en todas partes, es evidente que la divinidad de Cristo está sin duda más allá de los límites de la humanidad, pero al mismo tiempo está en su humanidad y permanece personalmente unida a ella.",
                ref: "Jeremías 23:23-24; Juan 1:14; Colosenses 2:9"
            },
            {
                num: "49",
                p: "¿Cómo nos beneficia la ascensión de Cristo al cielo?",
                r: "En primer lugar, él es nuestro abogado en el cielo. Segundo, tenemos nuestra propia carne en el cielo como garantía de que nos llevará consigo. Tercero, nos envía su Espíritu a la tierra como garantía correspondiente.",
                ref: "Rom. 8:34; Juan 14:2; 2 Corintios 1:21-22"
            }
        ]
    },
    {
        seccion: "Día del Señor 19",
        preguntas: [
            {
                num: "50",
                p: "¿Por qué las siguientes palabras: “y está sentado a la diestra de Dios”?",
                r: "Porque Cristo ascendió al cielo para mostrar allí que él es la cabeza de su iglesia, aquel por medio del cual el Padre gobierna todas las cosas.",
                ref: "Efesios 1:20-23; Mateo 28:18; Juan 5:22-23"
            },
            {
                num: "51",
                p: "¿Cómo nos beneficia esta gloria de Cristo, nuestra cabeza?",
                r: "Primero, por medio de su Espíritu Santo, derrama dones del cielo sobre nosotros. Segundo, con su poder nos defiende y nos mantiene a salvo de todos los enemigos.",
                ref: "Hechos 2:33; Salmos 110:1-2; Juan 10:27-30"
            },
            {
                num: "52",
                p: "¿Cómo te consuela el regreso de Cristo “para juzgar a los vivos y a los muertos”?",
                r: "En medio de toda angustia y persecución, espero con confianza al mismo juez que ya se ha ofrecido al juicio de Dios en mi lugar y ha librado de mí toda maldición, para llevarme al gozo y la gloria del cielo.",
                ref: "Lucas 21:28; Rom. 8:22-25; Mateo 25:31-46"
            }
        ]
    },
    {
        categoria: "Dios El Espíritu Santo",
        seccion: "Día del Señor 20",
        preguntas: [
            {
                num: "53",
                p: "¿Qué cree usted acerca del “Espíritu Santo”?",
                r: "Primero, que el Espíritu, junto con el Padre y el Hijo, es Dios eterno. Segundo, que también a mí me es dado el Espíritu, para que, por medio de la fe verdadera, me haga partícipe de Cristo y de todos sus beneficios y me consuele.",
                ref: "Génesis 1:1-2; Mateo 28:19; 1 Corintios 6:19; Juan 14:16-17"
            }
        ]
    },
    {
        seccion: "Día del Señor 21",
        preguntas: [
            {
                num: "54",
                p: "¿Qué cree usted acerca de “la santa iglesia católica”?",
                r: "Creo que el Hijo de Dios, por medio de su Espíritu y su Palabra, reúne, protege y preserva para sí una comunidad escogida para la vida eterna y unida en la verdadera fe. Y de esta comunidad soy y siempre seré un miembro vivo.",
                ref: "Juan 10:14-16; Hechos 20:28; Mateo 16:18; Efesios 4:1-6"
            },
            {
                num: "55",
                p: "¿Qué entiende usted por “la comunión de los santos”?",
                r: "En primer lugar, que todos los creyentes participan de Cristo y de todos sus tesoros y dones. Segundo, que cada miembro considere un deber usar estos dones con prontitud y alegría para el servicio y enriquecimiento de los demás.",
                ref: "Rom. 8:32; 1 Cor. 12:4-7; Fil. 2:4-8"
            },
            {
                num: "56",
                p: "¿Qué cree usted acerca del “perdón de los pecados”?",
                r: "Creo que Dios, debido a la satisfacción de Cristo, ya no recordará ninguno de mis pecados ni mi naturaleza pecaminosa, y por gracia me concede la justicia de Cristo.",
                ref: "Salmo 103:3-4; Miqueas 7:18-19; 2 Corintios 5:18-21"
            }
        ]
    },
    {
        seccion: "Día del Señor 22",
        preguntas: [
            {
                num: "57",
                p: "¿Cómo le consuela “la resurrección del cuerpo”?",
                r: "No solo mi alma será llevada inmediatamente a Cristo, sino que también mi propia carne resucitará por el poder de Cristo y será hecha semejante al glorioso cuerpo de Cristo.",
                ref: "Lucas 23:43; 1 Corintios 15:20, 42-46; Filipenses 3:21"
            },
            {
                num: "58",
                p: "¿Cómo le consuela el artículo sobre la “vida eterna”?",
                r: "Así como ya experimento en mi corazón el comienzo del gozo eterno, así también después de esta vida tendré una bienaventuranza perfecta para alabar a Dios por siempre.",
                ref: "Romanos 14:17; Juan 17:3; 1 Corintios 2:9"
            }
        ]
    },
    {
        seccion: "Día del Señor 23",
        preguntas: [
            {
                num: "59",
                p: "¿De qué te sirve creer todo esto?",
                r: "En Cristo soy justo ante Dios y heredero de la vida eterna.",
                ref: "1 Juan 3:36; Romanos 5:1-2"
            },
            {
                num: "60",
                p: "¿Cómo eres justo ante Dios?",
                r: "Solo por la verdadera fe en Jesucristo. Aunque mi conciencia me acusa, Dios me concede y me acredita la perfecta satisfacción, justicia y santidad de Cristo, como si nunca hubiera pecado.",
                ref: "Rom. 3:21-28; 2 Cor. 5:21; Efesios 2:8-9"
            },
            {
                num: "61",
                p: "¿Por qué dice usted que solo por la fe es justo?",
                r: "No porque agrade a Dios por la dignidad de mi fe, sino porque solo la satisfacción, la justicia y la santidad de Cristo me hacen justo ante Dios.",
                ref: "1 Corintios 1:30-31; Romanos 10:10"
            }
        ]
    },
    {
        seccion: "Día del Señor 24",
        preguntas: [
            {
                num: "62",
                p: "¿Por qué nuestras buenas obras no pueden ser nuestra justicia ante Dios, o al menos una parte de ella?",
                r: "Porque la justicia que puede pasar el juicio de Dios debe ser completamente perfecta y ajustarse a la ley divina. Pero nuestras mejores obras en esta vida son imperfectas y están manchadas por el pecado.",
                ref: "Rom. 3:20; Gál. 3:10; Isaías 64:6"
            },
            {
                num: "63",
                p: "¿Cómo se puede decir que nuestras buenas obras no merecen nada cuando Dios promete recompensarlas?",
                r: "Esta recompensa no se gana; es un don de la gracia.",
                ref: "Lucas 17:10; 2 Timoteo 4:7-8"
            },
            {
                num: "64",
                p: "¿Pero acaso esta enseñanza no vuelve a la gente indiferente y malvada?",
                r: "No. Es imposible que aquellos injertados en Cristo mediante la verdadera fe no produzcan frutos de gratitud.",
                ref: "Lucas 6:43-45; Juan 15:5"
            }
        ]
    },
    {
        categoria: "Los Sacramentos",
        seccion: "Día del Señor 25",
        preguntas: [
            {
                num: "65",
                p: "Es solo por la fe que participamos de Cristo: ¿de dónde proviene esa fe?",
                r: "El Espíritu Santo la produce en nuestros corazones mediante la predicación del santo evangelio, y la confirma mediante el uso de los santos sacramentos.",
                ref: "Juan 3:5; Romanos 10:17; Mateo 28:19-20"
            },
            {
                num: "66",
                p: "¿Qué son los sacramentos?",
                r: "Los sacramentos son signos y sellos visibles y sagrados instituidos por Dios para hacernos comprender más claramente la promesa del evangelio y sellarla.",
                ref: "Génesis 17:11; Romanos 4:11"
            },
            {
                num: "67",
                p: "¿Acaso tanto la Palabra como los sacramentos tienen como propósito centrar nuestra fe en el sacrificio de Cristo?",
                r: "¡Sí! En el Evangelio, el Espíritu Santo nos enseña y confirma que toda nuestra salvación se basa en el único sacrificio de Cristo por nosotros en la cruz.",
                ref: "Rom. 6:3; 1 Cor. 11:26; Gál. 3:27"
            },
            {
                num: "68",
                p: "¿Cuántos sacramentos instituyó Cristo en el Nuevo Testamento?",
                r: "Dos: el santo bautismo y la santa cena.",
                ref: "Mateo 28:19-20; 1 Corintios 11:23-26"
            }
        ]
    },
    {
        categoria: "Santo Bautismo",
        seccion: "Día del Señor 26",
        preguntas: [
            {
                num: "69",
                p: "¿Cómo te recuerda y te asegura el santo bautismo que el sacrificio de Cristo te beneficia?",
                r: "Cristo instituyó este lavamiento externo prometiendo que, así como el agua lava la suciedad del cuerpo, su sangre y su Espíritu lavan la impureza de mi alma.",
                ref: "Hechos 2:38; Mateo 3:11; Romanos 6:3-10"
            },
            {
                num: "70",
                p: "¿Qué significa ser lavado con la sangre y el Espíritu de Cristo?",
                r: "Significa que Dios nos ha perdonado los pecados por gracia (sangre) y nos ha renovado y santificado mediante el Espíritu Santo para morir al pecado.",
                ref: "Zac. 13:1; Ef. 1:7-8; Ezeq. 36:25-27"
            },
            {
                num: "71",
                p: "¿Dónde promete Cristo que somos lavados con su sangre y su Espíritu?",
                r: "En la institución del bautismo: «Id y haced discípulos... bautizándolos en el nombre del Padre y del Hijo y del Espíritu Santo».",
                ref: "Mateo 28:19; Marcos 16:16; Tito 3:5"
            }
        ]
    },
    {
        seccion: "Día del Señor 27",
        preguntas: [
            {
                num: "72",
                p: "¿Acaso este lavado externo con agua elimina los pecados?",
                r: "No, solo la sangre de Jesucristo y el Espíritu Santo nos limpian de todos los pecados.",
                ref: "Mateo 3:11; 1 Pedro 3:21; 1 Juan 1:7"
            },
            {
                num: "73",
                p: "¿Por qué el Espíritu Santo llama al bautismo el lavamiento del nuevo nacimiento?",
                r: "Dios quiere enseñarnos que la sangre y el Espíritu quitan nuestros pecados y asegurarnos mediante esta señal que somos limpios espiritualmente.",
                ref: "1 Corintios 6:11; Apocalipsis 1:5; Romanos 6:3-4"
            },
            {
                num: "74",
                p: "¿Deben bautizarse también los bebés?",
                r: "Sí, tanto los bebés como los adultos están incluidos en el pacto y el pueblo de Dios, y a ellos se les promete la liberación del pecado y el Espíritu Santo.",
                ref: "Génesis 17:7; Mateo 19:14; Hechos 2:38-39"
            }
        ]
    },
    { 
        categoria: "La Santa Cena de Jesucristo",  
        seccion: "Día del Señor 28",
        preguntas: [
            {
                num: "75",
                p: "¿Cómo te recuerda y te asegura la Santa Cena que participas del sacrificio de Cristo?",
                r: "Cristo mandó comer este pan partido y beber esta copa en su memoria, prometiendo que su cuerpo fue ofrecido y su sangre derramada por mí, y que alimenta mi alma para la vida eterna.",
                ref: "Mateo 26:26-28; 1 Corintios 11:23-25"
            },
            {
                num: "76",
                p: "¿Qué significa comer el cuerpo crucificado de Cristo y beber su sangre?",
                r: "Significa aceptar con un corazón creyente todo el sufrimiento y muerte de Cristo y recibir el perdón y la vida eterna, uniéndonos más a su bendito cuerpo por el Espíritu Santo.",
                ref: "Juan 6:35, 40; 1 Corintios 12:13; Efesios 5:29-30"
            },
            {
                num: "77",
                p: "¿Dónde promete Cristo nutrir y refrescar a los creyentes con su cuerpo y su sangre?",
                r: "En la institución de la Cena del Señor: «El Señor Jesús tomó un pan... Esto es mi cuerpo, que por ustedes es entregado...».",
                ref: "1 Corintios 11:23-26; 10:16-17"
            }
        ]
    },
    {
        seccion: "Día del Señor 29",
        preguntas: [
            {
                num: "78",
                p: "¿El pan y el vino se convierten en el verdadero cuerpo y sangre de Cristo?",
                r: "No. El pan sagrado de la Cena no se convierte en el verdadero cuerpo de Cristo, aunque se le llame así conforme al lenguaje de los sacramentos.",
                ref: "Efesios 5:26; Mateo 26:26-29; 1 Corintios 10:16-17"
            },
            {
                num: "79",
                p: "¿Por qué Cristo llama al pan su cuerpo y a la copa su sangre?",
                r: "Para enseñarnos que así como el pan y el vino sustentan la vida física, su cuerpo crucificado y su sangre son el verdadero alimento de nuestras almas para la vida eterna.",
                ref: "Juan 6:51, 55; 1 Corintios 10:16"
            }
        ]
    },
    {
        seccion: "Día del Señor 30",
        preguntas: [
            {
                num: "80",
                p: "¿En qué se diferencia la Cena del Señor de la Misa católica romana?",
                r: "La Cena declara el perdón completo por el único sacrificio de Cristo realizado una vez en la cruz. La Misa enseña que se necesita el sacrificio diario de los sacerdotes y que Cristo está presente corporalmente en el pan y vino para ser adorado, lo cual es una negación del sacrificio de Cristo.",
                ref: "Hebreos 7:27; 9:12; 10:10-18"
            },
            {
                num: "81",
                p: "¿Quiénes deben venir a la mesa del Señor?",
                r: "Aquellos que están disgustados consigo mismos por sus pecados, pero confían en que son perdonados por Cristo y desean fortalecer su fe y llevar una vida mejor.",
                ref: "1 Corintios 11:28-29"
            },
            {
                num: "82",
                p: "¿Deben ser admitidos aquellos que demuestran ser incrédulos e impíos?",
                r: "No, eso deshonraría el pacto de Dios. La iglesia tiene el deber de excluir a tales personas mediante las llaves del reino hasta que reformen sus vidas.",
                ref: "1 Corintios 11:17-32; Mateo 18:15-17"
            }
        ]
    },
    {
        seccion: "Día del Señor 31",
        preguntas: [
            {
                num: "83",
                p: "¿Cuáles son las llaves del reino?",
                r: "La predicación del santo evangelio y la disciplina cristiana hacia el arrepentimiento.",
                ref: "Mateo 16:19; Juan 20:22-23"
            },
            {
                num: "84",
                p: "¿Cómo abre y cierra la predicación del evangelio el reino de los cielos?",
                r: "Proclamando públicamente a los creyentes el perdón por el mérito de Cristo, y advirtiendo a los incrédulos que la ira de Dios permanece sobre ellos mientras no se arrepientan.",
                ref: "Mateo 16:19; Juan 3:31-36"
            },
            {
                num: "85",
                p: "¿Cómo se abre y se cierra el reino mediante la disciplina cristiana?",
                r: "Excluyendo de los sacramentos y de la comunidad a quienes profesan vidas anticristianas y no atienden las amonestaciones, hasta que demuestren una reforma genuina.",
                ref: "Mateo 18:15-20; 1 Corintios 5:3-5"
            }
        ]
    },
    {
        categoria: "Parte III: Gratitud",
        seccion: "Día del Señor 32",
        preguntas: [
            {
                num: "86",
                p: "¿Por qué debemos hacer buenas obras si fuimos librados por gracia?",
                r: "Porque Cristo nos restaura a su imagen para que con toda nuestra vida mostremos gratitud a Dios, él sea glorificado, tengamos certeza de nuestra fe y ganemos a otros para Cristo.",
                ref: "Rom. 6:13; 12:1-2; Mat. 5:16"
            },
            {
                num: "87",
                p: "¿Pueden salvarse aquellos que no se vuelven a Dios dejando su ingratitud?",
                r: "De ninguna manera. Ningún impuro, idólatra, adúltero o ladrón heredará el reino de Dios.",
                ref: "1 Corintios 6:9-10; Gálatas 5:19-21"
            }
        ]
    },
    {
        seccion: "Día del Señor 33",
        preguntas: [
            {
                num: "88",
                p: "¿Qué implica el arrepentimiento o la conversión genuina?",
                r: "Dos cosas: la desaparición del viejo yo y el surgimiento del nuevo.",
                ref: "Romanos 6:1-11; Efesios 4:22-24"
            },
            {
                num: "89",
                p: "¿Qué es la desaparición del viejo yo?",
                r: "Sentir verdadero arrepentimiento por el pecado y, cada vez más, odiarlo y huir de él.",
                ref: "Salmos 51:3-4; Joel 2:12-13; 2 Corintios 7:10"
            },
            {
                num: "90",
                p: "¿Qué es el renacimiento de la nueva vida?",
                r: "Gozo sincero en Dios a través de Cristo y amor y deleite por vivir según la voluntad de Dios haciendo toda clase de buenas obras.",
                ref: "Salmo 51:8, 12; Romanos 6:10-11; Gálatas 2:20"
            },
            {
                num: "91",
                p: "¿Qué son las buenas obras?",
                r: "Solo aquellas que se realizan por verdadera fe, se ajustan a la ley de Dios y se hacen para su gloria.",
                ref: "Juan 15:5; Hebreos 11:6; 1 Corintios 10:31"
            }
        ]
    },
    {
        categoria: "Los Diez Mandamientos",
        seccion: "Día del Señor 34",
        preguntas: [
            {
                num: "92-93",
                p: "¿Cuál es la ley de Dios y cómo se divide?",
                r: "Los Diez Mandamientos dados en Éxodo 20. Se dividen en dos tablas: los primeros cuatro enseñan nuestra relación con Dios; los últimos seis enseñan lo que debemos al prójimo.",
                ref: "Éxodo 20:1-17; Mateo 22:37-39"
            },
            {
                num: "94",
                p: "¿Qué exige el Señor en el primer mandamiento?",
                r: "Evitar toda idolatría, superstición y oración a los santos, conociendo al único Dios verdadero, confiando solo en él y amándolo con todo el corazón.",
                ref: "1 Cor. 6:9-10; Mat. 4:10; Jer. 17:5"
            },
            {
                num: "95",
                p: "¿Qué es la idolatría?",
                r: "Es tener o inventar algo en lo que uno confía en lugar del único Dios verdadero.",
                ref: "Efesios 5:5; Filipenses 3:19"
            }
        ]
    },
    {
        seccion: "Día del Señor 35",
        preguntas: [
            {
                num: "96-98",
                p: "¿Cuál es la voluntad de Dios en el segundo mandamiento?",
                r: "Que no hagamos ninguna imagen de Dios ni lo adoremos de otra forma que la mandada en su Palabra. Dios no debe ser representado visiblemente.",
                ref: "Deuteronomio 4:15-19; Levítico 10:1-7"
            }
        ]
    },
    {
        seccion: "Día del Señor 36",
        preguntas: [
            {
                num: "99-100",
                p: "¿Cuál es el objetivo del tercer mandamiento?",
                r: "No blasfemar ni abusar del nombre de Dios mediante maldiciones, perjurio o juramentos innecesarios, usándolo solo con reverencia y temor.",
                ref: "Levítico 24:10-17; Mateo 5:37; Colosenses 3:17"
            }
        ]
    },
    {
        seccion: "Día del Señor 37",
        preguntas: [
            {
                num: "101-102",
                p: "¿Podemos jurar en nombre de Dios?",
                r: "Sí, cuando el gobierno lo exige o la necesidad lo requiere para mantener la verdad. No podemos jurar por criaturas o santos.",
                ref: "Deuteronomio 6:13; Mateo 5:34-37"
            }
        ]
    },
    {
        seccion: "Día del Señor 38",
        preguntas: [
            {
                num: "103",
                p: "¿Cuál es la voluntad de Dios en el cuarto mandamiento?",
                r: "Que se mantenga el ministerio del evangelio, que asista diligentemente a la asamblea del pueblo de Dios en el día de descanso para aprender su Palabra y participar en los sacramentos, y que descanse de mis malos caminos.",
                ref: "Hebreos 10:23-25; Isaías 66:23"
            }
        ]
    },
    {
        seccion: "Día del Señor 39",
        preguntas: [
            {
                num: "104",
                p: "¿Cuál es la voluntad de Dios en el quinto mandamiento?",
                r: "Que honre, ame y sea leal a mis padres y a todas las autoridades, sometiéndome a su enseñanza y disciplina.",
                ref: "Romanos 13:1-2; Efesios 6:1-9"
            }
        ]
    },
    {
        seccion: "Día del Señor 40",
        preguntas: [
            {
                num: "105-107",
                p: "¿Qué exige el sexto mandamiento?",
                r: "No menospreciar, odiar o matar al prójimo ni de obra ni de pensamiento, desechando la venganza y amando al prójimo como a nosotros mismos.",
                ref: "Mateo 5:21-22; Romanos 12:10; Mateo 7:12"
            }
        ]
    },
    {
        seccion: "Día del Señor 41",
        preguntas: [
            {
                num: "108-109",
                p: "¿Qué nos enseña el séptimo mandamiento?",
                r: "Que Dios condena toda impureza y que debemos vivir vidas castas. Se prohíbe toda acción, mirada, palabra o deseo impuro.",
                ref: "Levítico 18:30; Mateo 5:27-29; 1 Corintios 6:18-20"
            }
        ]
    },
    {
        seccion: "Día del Señor 42",
        preguntas: [
            {
                num: "110-111",
                p: "¿Qué prohíbe y exige el octavo mandamiento?",
                r: "Prohíbe el robo, el engaño, la estafa, la avaricia y el derroche. Exige hacer lo posible por el bien del prójimo y trabajar con diligencia para compartir con los necesitados.",
                ref: "Miqueas 6:9-11; Mateo 7:12; Efesios 4:28"
            }
        ]
    },
    {
        seccion: "Día del Señor 43",
        preguntas: [
            {
                num: "112",
                p: "¿Cuál es el objetivo del noveno mandamiento?",
                r: "Que nunca dé falso testimonio, ni tergiverse palabras, ni difame. Debemos amar la verdad y proteger el buen nombre del prójimo.",
                ref: "Salmo 15; Proverbios 19:5; Efesios 4:25"
            }
        ]
    },
    {
        seccion: "Día del Señor 44",
        preguntas: [
            {
                num: "113-115",
                p: "¿Cuál es el objetivo del décimo mandamiento y por qué se predica la ley?",
                r: "Busca que ni el más mínimo deseo contrario a la ley surja en nuestro corazón. Se predica para conocer nuestra pecaminosidad, anhelar a Cristo y orar por la gracia del Espíritu Santo.",
                ref: "Romanos 7:7-8; 1 Juan 1:9; Filipenses 3:12-14"
            }
        ]
    },
    {
        categoria: "El Padre Nuestro",
        seccion: "Día del Señor 45",
        preguntas: [
            {
                num: "116-119",
                p: "¿Por qué necesitamos orar y qué es la oración modelo?",
                r: "Porque la oración es la parte principal de la gratitud y Dios da su gracia a quienes oran. La oración es el Padrenuestro: 'Padre nuestro que estás en los cielos...'",
                ref: "Salmo 50:14-15; Mateo 6:9-13"
            }
        ]
    },
    {
        seccion: "Día del Señor 46",
        preguntas: [
            {
                num: "120-121",
                p: "¿Qué significan 'Padre nuestro' y 'en el cielo'?",
                r: "'Padre nuestro' despierta confianza en que Dios se ha convertido en nuestro Padre. 'En el cielo' enseña a esperar todo lo necesario de su poder omnipotente.",
                ref: "Mateo 7:9-11; Mateo 6:25-34"
            }
        ]
    },
    {
        seccion: "Día del Señor 47",
        preguntas: [
            {
                num: "122",
                p: "¿Qué significa la primera petición ('Santificado sea tu nombre')?",
                r: "Ayúdanos a conocerte verdaderamente, honrarte y alabarte por tus atributos, dirigiendo nuestra vida para que tu nombre no sea blasfemado.",
                ref: "Jeremías 9:23-24; Mateo 5:16"
            }
        ]
    },
    {
        seccion: "Día del Señor 48",
        preguntas: [
            {
                num: "123",
                p: "¿Qué significa la segunda petición ('Venga tu reino')?",
                r: "Gobérnanos con tu Palabra y tu Espíritu, conserva tu iglesia, destruye la obra del diablo hasta que tu reino llegue plenamente.",
                ref: "Salmo 119:5; Mateo 16:18; Apocalipsis 22:20"
            }
        ]
    },
    {
        seccion: "Día del Señor 49",
        preguntas: [
            {
                num: "124",
                p: "¿Qué significa la tercera petición ('Hágase tu voluntad...')?",
                r: "Ayúdanos a rechazar nuestra propia voluntad y a obedecer la tuya sin replicar, con la misma fidelidad que los ángeles en el cielo.",
                ref: "Mateo 7:21; Romanos 12:1-2; Salmo 103:20-21"
            }
        ]
    },
    {
        seccion: "Día del Señor 50",
        preguntas: [
            {
                num: "125",
                p: "¿Qué significa la cuarta petición ('Danos hoy nuestro pan de cada día')?",
                r: "Cuida de nuestras necesidades físicas para que reconozcamos que eres la única fuente de todo bien y confiemos solo en ti.",
                ref: "Salmo 104:27-30; Hechos 14:17; Salmo 55:22"
            }
        ]
    },
    {
        seccion: "Día del Señor 51",
        preguntas: [
            {
                num: "126",
                p: "¿Qué significa la quinta petición ('Perdónanos nuestras deudas...')?",
                r: "Por la sangre de Cristo, no nos imputes nuestros pecados, perdonándonos así como nosotros estamos decididos a perdonar a nuestros prójimos.",
                ref: "Salmo 51:1-7; Mateo 6:14-15"
            }
        ]
    },
    {
        seccion: "Día del Señor 52",
        preguntas: [
            {
                num: "127-129",
                p: "¿Qué significan la sexta petición, la conclusión y el 'Amén'?",
                r: "Pide que Dios nos sostenga ante las tentaciones y ataques del diablo. La conclusión reconoce que Dios es capaz de darnos todo lo bueno, y el 'Amén' expresa la certeza absoluta de que nuestra oración es escuchada.",
                ref: "Efesios 6:10-13; Romanos 10:11-13; Isaías 65:24"
            }
        ]
    }
];
// ==========================================
// 1. RENDERIZAR MENÚ LATERAL CON CATEGORÍAS Y SCROLL PROPIO
// ==========================================
function renderNav(data = catecismoData) {
    const navList = document.getElementById('navList');
    if (!navList) return;
    
    // Forzar que el menú lateral ocupe exactamente la altura de la pantalla y tenga su propio scroll
    navList.style.cssText = "height: 100vh; overflow-y: auto; overflow-x: hidden; padding-bottom: 80px; box-sizing: border-box;";
    navList.innerHTML = '';
    
    let categoriaAnterior = "";

    data.forEach((item, index) => {
        const originalIndex = catecismoData.findIndex(s => s.seccion === item.seccion);
        
        // Detectar categoría por propiedad manual o extrayéndola de los paréntesis (ej: "Día del Señor 9 (Dios Padre)")
        let categoriaActual = item.categoria || "";
        if (!categoriaActual && item.seccion.includes('(')) {
            const match = item.seccion.match(/\(([^)]+)\)/);
            if (match) categoriaActual = match[1];
        }
        
        // Si hay una categoría nueva y es distinta a la anterior, creamos el título de grupo ARRIBA
        if (categoriaActual && categoriaActual !== categoriaAnterior) {
            categoriaAnterior = categoriaActual;
            
            const categoryHeader = document.createElement('div');
            categoryHeader.textContent = categoriaActual;
            categoryHeader.style.cssText = "padding: 18px 20px 6px 20px; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #4a80f0; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 6px;";
            navList.appendChild(categoryHeader);
        }

        // Limpiar el nombre del día (quitarle los paréntesis para que en el menú aparezca limpio)
        const nombreLimpio = item.seccion.replace(/\s*\(.*?\)/g, '').trim();

        const li = document.createElement('li');
        li.className = 'heidelberg-nav-item';
        li.textContent = nombreLimpio;
        li.style.cssText = "padding: 10px 20px 10px 25px; font-size: 0.9rem; border-bottom: 1px solid rgba(255,255,255,0.03); cursor: pointer; color: #cbd5e1; transition: all 0.2s; display: block; width: 100%; box-sizing: border-box;";
        
        li.onmouseover = () => { if(!li.classList.contains('active')) li.style.background = "rgba(74, 128, 240, 0.1)"; };
        li.onmouseout = () => { if(!li.classList.contains('active')) li.style.background = "transparent"; };
        
        li.onclick = () => {
            loadSection(originalIndex);
        };
        
        navList.appendChild(li);
    });
}

// ==========================================
// 2. CARGAR Y MOSTRAR CONTENIDO (DISEÑO ACADÉMICO)
// ==========================================
function loadSection(index) {
    const section = catecismoData[index];
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;
    
    // Marcar activo en el menú lateral
    document.querySelectorAll('.heidelberg-nav-item').forEach((el) => {
        const nombreLimpioSeccion = section.seccion.replace(/\s*\(.*?\)/g, '').trim();
        if(el.textContent === nombreLimpioSeccion) {
            el.classList.add('active');
            el.style.background = "#4a80f0";
            el.style.color = "#ffffff";
            el.style.fontWeight = "600";
        } else {
            el.classList.remove('active');
            el.style.background = "transparent";
            el.style.color = "#cbd5e1";
            el.style.fontWeight = "normal";
        }
    });

    let html = `
        <div class="heidelberg-content-card" style="background: rgba(18, 21, 31, 0.95); border: 1px solid #2d3248; border-radius: 12px; padding: 45px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); margin: 30px;">
            <button class="btn-back-mobile" onclick="volverAlMenuMovil()">
                <i class="fa-solid fa-arrow-left"></i> Volver al menú
            </button>
            <h1 style="color: #ffffff; font-size: 2.2rem; font-weight: 700; margin-bottom: 25px; margin-top: 15px;">${section.seccion}</h1>
    `;
    
    section.preguntas.forEach(qa => {
        let refListHtml = '';
        if (qa.ref) {
            const refsArray = qa.ref.split(';');
            refsArray.forEach((refItem, idx) => {
                if (refItem.trim()) {
                    refListHtml += `
                        <div style="display: flex; align-items: baseline; margin-bottom: 6px;">
                            <span style="color: #4a80f0; font-weight: 600; min-width: 24px; font-size: 0.8rem;">${idx + 1}</span>
                            <span style="color: #9ba0b4; font-size: 0.88rem;">${refItem.trim()}</span>
                        </div>
                    `;
                }
            });
        }

        html += `
            <div class="heidelberg-qa-card" style="margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
                <div style="font-size: 0.9rem; color: #8c93a8; margin-bottom: 8px; font-weight: 500;">Preguntas y respuestas ${qa.num}</div>
                <div class="heidelberg-question" style="font-weight: 700; color: #ffffff; font-size: 1.15rem; margin-bottom: 14px; line-height: 1.4;">
                    P. ${qa.p}
                </div>
                <div class="heidelberg-answer" style="line-height: 1.8; color: #cbd5e1; margin-bottom: 20px; font-size: 1.02rem; text-align: justify;">
                    <strong style="color: #ffffff;">R.</strong> ${qa.r}
                </div>
                
                <div class="heidelberg-references" style="margin-top: 15px; background: rgba(25, 30, 44, 0.7); padding: 14px 18px; border-radius: 6px; border: 1px solid #2d3248;">
                    <div style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.5px; color: #4a80f0; margin-bottom: 8px; font-weight: 600;">Referencias bíblicas</div>
                    ${refListHtml}
                </div>
            </div>
        `;
    });

    html += `</div>`;
    mainContent.innerHTML = html;
    
    // Reinicia el scroll interno del contenido a la cima sin mover la página entera
    mainContent.scrollTop = 0;

    // Lógica para celulares: mostrar contenido y ocultar menú al hacer clic en un día
    if (window.innerWidth <= 768) {
        const layout = document.querySelector('.heidelberg-layout');
        if (layout) layout.classList.add('show-content');
        const mainContainer = document.querySelector('.heidelberg-main');
        if (mainContainer) mainContainer.scrollTop = 0;
    }
}

// ==========================================
// 3. FUNCIÓN PARA VOLVER AL MENÚ EN MÓVIL
// ==========================================
function volverAlMenuMovil() {
    const layout = document.querySelector('.heidelberg-layout');
    if (layout) {
        layout.classList.remove('show-content');
    }
}

// ==========================================
// 4. FILTRO DE BÚSQUEDA EN TIEMPO REAL
// ==========================================
function filterContent() {
    const inputElement = document.getElementById('searchInput');
    if (!inputElement) return;
    const query = inputElement.value.toLowerCase();
    
    const filtered = catecismoData.map(section => {
        const matchedPreguntas = section.preguntas.filter(qa => 
            qa.p.toLowerCase().includes(query) || 
            qa.r.toLowerCase().includes(query) || 
            qa.num.toLowerCase().includes(query)
        );
        return {
            seccion: section.seccion,
            categoria: section.categoria,
            preguntas: matchedPreguntas
        };
    }).filter(section => section.preguntas.length > 0);

    renderNav(filtered);

    if(filtered.length > 0) {
        const originalIndex = catecismoData.findIndex(s => s.seccion === filtered[0].seccion);
        loadSection(originalIndex);
    } else {
        const mainContent = document.getElementById('mainContent');
        if (mainContent) {
            mainContent.innerHTML = '<div style="background: rgba(18, 21, 31, 0.95); padding: 45px; border-radius: 12px; border: 1px solid #2d3248; margin: 30px;"><h1 style="color: #ffffff; margin-top:0;">Sin resultados</h1><p style="color: #cbd5e1;">No se encontraron preguntas que coincidan con tu búsqueda.</p></div>';
        }
    }
}

// ==========================================
// 5. INICIALIZAR AL CARGAR LA PÁGINA
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    if (typeof catecismoData !== 'undefined') {
        renderNav();
        if (catecismoData.length > 0) {
            // En móvil al cargar la página por primera vez no abrimos automáticamente el primer día para que vea el menú limpio, 
            // pero en PC sí lo cargamos.
            if (window.innerWidth > 768) {
                loadSection(0);
            }
        }
    } else {
        console.error("No se encontró la variable catecismoData.");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
});