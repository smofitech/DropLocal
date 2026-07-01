/**
 * ==========================================================================
 * DropLocal Landing Page Client Script
 * Features: Multi-lingual rendering (EN, FR, ES, AR), RTL direction support,
 * OS detection & personalization, interactive FAQ accordions, and menu control.
 * ==========================================================================
 */

// 1. Localization Dictionary
const translations = {
  en: {
    "announcement": "New: Version 2.0 with Smart TV & Steam Deck support is out!",
    "nav-features": "Features",
    "nav-how": "How it Works",
    "nav-download": "Download",
    "nav-faq": "FAQ",
    "nav-cta": "Download App",
    "hero-badge": "⚡ 100% Offline Sharing",
    "hero-title": "Local wireless file sharing, simplified.",
    "hero-subtitle": "Transfer files over local Wi-Fi, without Internet. Direct Wi-Fi or Hotspot transfer with zero size limits.",
    "detected-platform": "Detected your platform",
    "download-for": "Download for",
    "view-all-platforms": "View All Platforms",
    "stat-data": "Data Usage",
    "stat-limits": "Size Limits",
    "stat-secure": "Offline & Secure",
    "features-title": "Why use DropLocal?",
    "features-subtitle": "Ditch the cables and the cloud. Here is how we make offline sharing a breeze.",
    "feature-1-title": "No Internet, No Limits",
    "feature-1-desc": "Direct Wi-Fi or Hotspot transfer. No internet, no data usage, and no size limits. Perfect for rural areas, flights, or when saving mobile data.",
    "feature-2-title": "Scan & Send",
    "feature-2-desc": "Instant connection via QR Code. Simply scan the receiver's screen, select files of any type, and transfer instantly without configuration.",
    "feature-3-title": "Privacy & Security",
    "feature-3-desc": "100% offline-first. Your files never pass through external servers, meaning your confidential data stays completely private and secure on your local network.",
    "guide-title": "How to Connect?",
    "guide-subtitle": "DropLocal works locally by establishing a secure direct link. Choose your configuration below.",
    "scenarioATitle": "Option A: Hotspot",
    "scenarioADesc": "Turn on Hotspot on one device and connect the second to it. Ideal when outdoors, on a train, or when no local Wi-Fi router is available.",
    "guide-hotspot-step1-title": "Enable Hotspot",
    "guide-hotspot-step1-desc": "Turn on mobile hotspot on one device (it doesn't need internet/data enabled).",
    "guide-hotspot-step2-title": "Connect Second Device",
    "guide-hotspot-step2-desc": "Join the newly created hotspot network from the settings of your second device.",
    "guide-hotspot-step3-title": "Transfer Directly",
    "guide-hotspot-step3-desc": "Open DropLocal on both devices, scan the QR code to pair, and start sharing at local speeds of up to 50MB/s!",
    "scenarioBTitle": "Option B: Same Wi-Fi",
    "scenarioBDesc": "Connect both devices to the same Wi-Fi network. Recommended for homes, offices, and cafes.",
    "guide-wifi-step1-title": "Join Network",
    "guide-wifi-step1-desc": "Check that your sending and receiving devices are connected to the same Wi-Fi SSID.",
    "guide-wifi-step2-title": "Open App",
    "guide-wifi-step2-desc": "Start DropLocal on both devices. Click 'Receive' on the target device to generate its IP & QR code.",
    "guide-wifi-step3-title": "Scan and Send",
    "guide-wifi-step3-desc": "Click 'Send' on the sender device, scan the receiver's QR Code (or type their IP manually), and watch it transfer!",
    "send": "Send",
    "receive": "Receive",
    "waitingForFile": "Waiting for file...",
    "allFormatsNoLimit": "All formats accepted",
    "receiverIpAddress": "Recipient IP",
    "sendFileButton": "Send file",
    "sendingProgress": "Sending...",
    "connectionIpAddress": "Connection IP Address",
    "stayOnScreen": "Keep this screen open to receive.",
    "download-title": "Download DropLocal",
    "download-subtitle": "Available on all your devices. Install DropLocal today and experience frictionless sharing.",
    "dl-btn-win": "Download .exe",
    "dl-btn-mac": "Download .dmg",
    "dl-btn-deck": "Install via Discover",
    "dl-btn-tv": "Download TV APK",
    "faq-title": "Frequently Asked Questions",
    "faq-subtitle": "Everything you need to know about DropLocal transfers.",
    "faq-q1": "Does DropLocal use my mobile cellular data?",
    "faq-a1": "No, DropLocal does not consume any internet or mobile cellular data. It connects directly over local Wi-Fi router or peer-to-peer Hotspot network. You can even use it with your SIM card removed or on airplane mode!",
    "faq-q2": "Is there any limit to the file size I can send?",
    "faq-a2": "Absolutely zero limits! Since transfers happen locally directly between devices, we do not upload files to servers. You can send a 10MB photo, a 5GB video, or a 50GB file backup without any restrictions.",
    "faq-q3": "How secure are my files with DropLocal?",
    "faq-a3": "DropLocal operates 100% offline-first. Your files are transferred directly between devices on your local network. Your data never leaves your physical environment, protecting it from hackers, cloud leaks, or third-party monitoring.",
    "faq-q4": "How fast are the file transfers?",
    "faq-a4": "DropLocal reaches maximum hardware speed of your local Wi-Fi card (typically between 10MB/s and 70MB/s). It is up to 100 times faster than Bluetooth sharing and doesn't depend on internet speed bottleneck.",
    "faq-q5": "Does it support Tizen or Fire TV?",
    "faq-a5": "Yes! You can install DropLocal on Android TV, Chromecast, Amazon Fire TV stick via sideloading the TV APK. Tizen TV version is available via developer mode in the Tizen store, making it easy to throw files to your living room screen.",
    "footer-desc": "Frictionless, local wireless file sharing over Wi-Fi networks. 100% free and open-source.",
    "footer-col-nav": "Navigation",
    "footer-col-legal": "Legal & Info",
    "footer-privacy": "Privacy Policy",
    "footer-terms": "Terms of Service",
    "footer-rights": "All rights reserved.",
    "secureDataFooter": "100% offline and secure",
    "localWirelessFooter": "Local wireless transfer"
  },
  fr: {
    "announcement": "Nouveau : La version 2.0 avec support Smart TV & Steam Deck est disponible !",
    "nav-features": "Fonctionnalités",
    "nav-how": "Comment ça marche",
    "nav-download": "Téléchargement",
    "nav-faq": "FAQ",
    "nav-cta": "Télécharger l'App",
    "hero-badge": "⚡ Partage 100% Hors-ligne",
    "hero-title": "Partage de fichiers en local, simplifié.",
    "hero-subtitle": "Transférez des fichiers via le Wi-Fi local, sans Internet. Connexion Wi-Fi directe ou Point d'accès, sans aucune limite de taille.",
    "detected-platform": "Votre plateforme détectée",
    "download-for": "Télécharger pour",
    "view-all-platforms": "Voir toutes les plateformes",
    "stat-data": "Consommation Data",
    "stat-limits": "Limites de Taille",
    "stat-secure": "Hors-ligne & Sécurisé",
    "features-title": "Pourquoi choisir DropLocal ?",
    "features-subtitle": "Dites adieu aux câbles et au cloud. Voici comment nous facilitons le partage hors-ligne.",
    "feature-1-title": "Sans Internet, sans limites",
    "feature-1-desc": "Transfert Wi-Fi direct ou Point d'accès. Pas d'internet, pas d'utilisation de données et pas de limites de taille. Idéal en avion, en zones rurales ou pour économiser votre forfait.",
    "feature-2-title": "Scanner & Envoyer",
    "feature-2-desc": "Connexion instantanée par QR Code. Scannez simplement l'écran du destinataire, sélectionnez n'importe quel fichier et transférez instantanément, sans configuration.",
    "feature-3-title": "Confidentialité & Sécurité",
    "feature-3-desc": "100% hors-ligne. Vos fichiers ne transitent jamais par des serveurs externes. Vos données confidentielles restent totalement privées et sécurisées sur votre réseau local.",
    "guide-title": "Comment se connecter ?",
    "guide-subtitle": "DropLocal fonctionne localement en établissant une liaison directe sécurisée. Choisissez votre configuration ci-dessous.",
    "scenarioATitle": "Option A : Point d'accès",
    "scenarioADesc": "Activez le point d'accès sur un appareil et connectez-y le second. Idéal en extérieur, dans le train ou en l'absence de routeur Wi-Fi.",
    "guide-hotspot-step1-title": "Activer le point d'accès",
    "guide-hotspot-step1-desc": "Activez le partage de connexion (Hotspot) sur un appareil (il n'a pas besoin de forfait Internet actif).",
    "guide-hotspot-step2-title": "Connecter le second",
    "guide-hotspot-step2-desc": "Rejoignez le réseau wifi ainsi créé depuis les paramètres de votre second appareil.",
    "guide-hotspot-step3-title": "Transférer directement",
    "guide-hotspot-step3-desc": "Ouvrez DropLocal sur les deux appareils, scannez le code QR pour jumeler, et partagez à des vitesses locales allant jusqu'à 50 Mo/s !",
    "scenarioBTitle": "Option B : Même Wi-Fi",
    "scenarioBDesc": "Connectez les deux appareils au même réseau Wi-Fi. Recommandé pour la maison, le bureau et les cafés.",
    "guide-wifi-step1-title": "Rejoindre le réseau",
    "guide-wifi-step1-desc": "Vérifiez que l'appareil d'envoi et celui de réception sont connectés au même nom de réseau Wi-Fi (SSID).",
    "guide-wifi-step2-title": "Ouvrir l'application",
    "guide-wifi-step2-desc": "Lancez DropLocal sur les deux appareils. Cliquez sur 'Recevoir' sur l'appareil cible pour générer son IP et son code QR.",
    "guide-wifi-step3-title": "Scanner et envoyer",
    "guide-wifi-step3-desc": "Cliquez sur 'Envoyer' sur l'appareil émetteur, scannez le code QR du récepteur (ou saisissez son IP manuellement) et profitez du transfert !",
    "send": "Envoyer",
    "receive": "Recevoir",
    "waitingForFile": "En attente de fichier...",
    "allFormatsNoLimit": "Tous formats acceptés",
    "receiverIpAddress": "IP du destinataire",
    "sendFileButton": "Envoyer le fichier",
    "sendingProgress": "Envoi en cours...",
    "connectionIpAddress": "Adresse IP de connexion",
    "stayOnScreen": "Gardez cet écran ouvert pour recevoir.",
    "download-title": "Télécharger DropLocal",
    "download-subtitle": "Disponible sur tous vos appareils. Installez DropLocal aujourd'hui pour un partage sans friction.",
    "dl-btn-win": "Télécharger .exe",
    "dl-btn-mac": "Télécharger .dmg",
    "dl-btn-deck": "Installer via Discover",
    "dl-btn-tv": "Télécharger l'APK TV",
    "faq-title": "Foire Aux Questions",
    "faq-subtitle": "Tout ce que vous devez savoir sur les transferts DropLocal.",
    "faq-q1": "Est-ce que DropLocal utilise mon forfait mobile ?",
    "faq-a1": "Non, DropLocal ne consomme aucune donnée mobile ou internet. Il connecte les appareils directement via votre routeur Wi-Fi ou un point d'accès réseau local. Vous pouvez même l'utiliser sans carte SIM ou en mode avion !",
    "faq-q2": "Y a-t-il une limite de taille pour l'envoi de fichiers ?",
    "faq-a2": "Absolument aucune limite ! Les transferts s'effectuant localement entre vos appareils, nous n'hébergeons pas vos fichiers sur des serveurs. Vous pouvez envoyer une photo de 10 Mo, une vidéo de 5 Go ou une sauvegarde de 50 Go sans contrainte.",
    "faq-q3": "Mes fichiers sont-ils sécurisés avec DropLocal ?",
    "faq-a3": "DropLocal fonctionne à 100% hors-ligne. Vos fichiers sont transférés directement entre les appareils de votre réseau local. Vos données ne quittent jamais votre environnement physique, vous protégeant ainsi des piratages, des fuites sur le cloud ou des écoutes tierces.",
    "faq-q4": "À quelle vitesse se font les transferts ?",
    "faq-a4": "DropLocal atteint la vitesse maximale matérielle de votre puce Wi-Fi (généralement entre 10 Mo/s et 70 Mo/s). C'est jusqu'à 100 fois plus rapide que le partage Bluetooth et cela ne dépend pas d'un débit internet.",
    "faq-q5": "Est-ce qu'il supporte Tizen ou Fire TV ?",
    "faq-a5": "Oui ! Vous pouvez installer DropLocal sur Android TV, Chromecast, Amazon Fire TV Stick en téléchargeant l'APK TV. La version Tizen TV est disponible en mode développeur sur le Tizen Store, ce qui permet de projeter facilement des fichiers sur l'écran du salon.",
    "footer-desc": "Partage de fichiers en local, sans friction, sur réseaux Wi-Fi. 100% gratuit et open-source.",
    "footer-col-nav": "Navigation",
    "footer-col-legal": "Légal & Infos",
    "footer-privacy": "Politique de confidentialité",
    "footer-terms": "Conditions d'utilisation",
    "footer-rights": "Tous droits réservés.",
    "secureDataFooter": "100% hors-ligne et sécurisé",
    "localWirelessFooter": "Transfert sans fil local"
  },
  es: {
    "announcement": "¡Nuevo: La versión 2.0 con soporte para Smart TV y Steam Deck ya está disponible!",
    "nav-features": "Características",
    "nav-how": "Cómo funciona",
    "nav-download": "Descarga",
    "nav-faq": "FAQ",
    "nav-cta": "Descargar App",
    "hero-badge": "⚡ Compartido 100% sin conexión",
    "hero-title": "Compartir archivos localmente, simplificado.",
    "hero-subtitle": "Transfiere archivos a través de Wi-Fi local, sin Internet. Transferencia directa por Wi-Fi o punto de acceso sin límites de tamaño.",
    "detected-platform": "Tu plataforma detectada",
    "download-for": "Descargar para",
    "view-all-platforms": "Ver todas las plataformas",
    "stat-data": "Consumo de Datos",
    "stat-limits": "Límites de Tamaño",
    "stat-secure": "Seguro y sin conexión",
    "features-title": "¿Por qué usar DropLocal?",
    "features-subtitle": "Olvídate de los cables y la nube. Así es como facilitamos el compartir sin conexión.",
    "feature-1-title": "Sin Internet, sin límites",
    "feature-1-desc": "Transferencia directa por Wi-Fi o punto de acceso. Sin internet, sin consumo de datos y sin límites de tamaño. Perfecto para áreas rurales, vuelos o para ahorrar datos móviles.",
    "feature-2-title": "Escanear y Enviar",
    "feature-2-desc": "Conexión instantánea mediante código QR. Solo escanea la pantalla del receptor, selecciona archivos de cualquier tipo y transfiérelos al instante sin configuraciones.",
    "feature-3-title": "Privacidad y Seguridad",
    "feature-3-desc": "100% local y sin conexión. Tus archivos nunca pasan por servidores externos, lo que significa que tus datos confidenciales permanecen completamente privados y seguros en tu red local.",
    "guide-title": "¿Cómo conectarse?",
    "guide-subtitle": "DropLocal funciona localmente estableciendo un enlace directo seguro. Elige tu configuración a continuación.",
    "scenarioATitle": "Opción A: Punto de acceso",
    "scenarioADesc": "Activa el punto de acceso en un dispositivo y conecta el segundo a él. Ideal para exteriores, trenes o cuando no hay un enrutador Wi-Fi disponible.",
    "guide-hotspot-step1-title": "Activar punto de acceso",
    "guide-hotspot-step1-desc": "Activa el punto de acceso móvil en un dispositivo (no necesita tener internet o datos móviles activos).",
    "guide-hotspot-step2-title": "Conectar segundo dispositivo",
    "guide-hotspot-step2-desc": "Únete a la red de punto de acceso recién creada desde la configuración de tu segundo dispositivo.",
    "guide-hotspot-step3-title": "Transferir directamente",
    "guide-hotspot-step3-desc": "Abre DropLocal en ambos dispositivos, escanea el código QR para emparejar y comienza a compartir a velocidades locales de hasta 50 MB/s.",
    "scenarioBTitle": "Opción B: Mismo Wi-Fi",
    "scenarioBDesc": "Conecta ambos dispositivos a la misma red Wi-Fi. Recomendado para hogares, oficinas y cafeterías.",
    "guide-wifi-step1-title": "Unirse a la red",
    "guide-wifi-step1-desc": "Comprueba que los dispositivos emisor y receptor estén conectados a la misma red Wi-Fi (SSID).",
    "guide-wifi-step2-title": "Abrir la aplicación",
    "guide-wifi-step2-desc": "Inicia DropLocal en ambos dispositivos. Haz clic en 'Recibir' en el dispositivo de destino para generar su IP y código QR.",
    "guide-wifi-step3-title": "Escanear y enviar",
    "guide-wifi-step3-desc": "Haz clic en 'Enviar' en el dispositivo emisor, escanea el código QR del receptor (o escribe su IP manualmente) ¡y mira cómo se transfiere!",
    "send": "Enviar",
    "receive": "Recibir",
    "waitingForFile": "Esperando archivo...",
    "allFormatsNoLimit": "Todos los formatos aceptados",
    "receiverIpAddress": "IP del destinatario",
    "sendFileButton": "Enviar archivo",
    "sendingProgress": "Enviando...",
    "connectionIpAddress": "Dirección IP de conexión",
    "stayOnScreen": "Mantén esta pantalla abierta para recibir.",
    "download-title": "Descargar DropLocal",
    "download-subtitle": "Disponible en todos tus dispositivos. Instala DropLocal hoy y experimenta un intercambio sin fricciones.",
    "dl-btn-win": "Descargar .exe",
    "dl-btn-mac": "Descargar .dmg",
    "dl-btn-deck": "Instalar vía Discover",
    "dl-btn-tv": "Descargar APK para TV",
    "faq-title": "Preguntas Frecuentes",
    "faq-subtitle": "Todo lo que necesitas saber sobre las transferencias de DropLocal.",
    "faq-q1": "¿DropLocal consume mis datos móviles?",
    "faq-a1": "No, DropLocal no consume internet ni datos móviles. Se conecta directamente a través de un enrutador Wi-Fi local o una red de punto de acceso directo. ¡Incluso puedes usarlo sin tarjeta SIM o en modo avión!",
    "faq-q2": "¿Existe algún límite en el tamaño de los archivos que puedo enviar?",
    "faq-a2": "¡Absolutamente ningún límite! Como las transferencias ocurren localmente entre dispositivos, no subimos archivos a servidores. Puedes enviar una foto de 10 MB, un video de 5 GB o una copia de seguridad de 50 GB sin restricciones.",
    "faq-q3": "¿Qué tan seguros están mis archivos con DropLocal?",
    "faq-a3": "DropLocal funciona 100% sin conexión. Tus archivos se transfieren directamente entre dispositivos en tu red local. Tus datos nunca salen de tu entorno físico, protegiéndolos de hackers, filtraciones en la nube o monitoreo de terceros.",
    "faq-q4": "¿Qué tan rápidas son las transferencias de archivos?",
    "faq-a4": "DropLocal alcanza la velocidad máxima del hardware de tu tarjeta Wi-Fi local (normalmente entre 10 MB/s y 70 MB/s). Es hasta 100 veces más rápido que compartir por Bluetooth y no depende de la velocidad de tu internet.",
    "faq-q5": "¿Soporta Tizen o Fire TV?",
    "faq-a5": "¡Sí! Puedes instalar DropLocal en Android TV, Chromecast, Amazon Fire TV Stick mediante la instalación del APK. La versión para Tizen TV está disponible en modo de desarrollador en la tienda Tizen, lo que facilita enviar archivos a la pantalla de tu sala.",
    "footer-desc": "Intercambio de archivos local, sin fricciones, sobre redes Wi-Fi. 100% gratuito y de código abierto.",
    "footer-col-nav": "Navegación",
    "footer-col-legal": "Legal e Info",
    "footer-privacy": "Política de Privacidad",
    "footer-terms": "Términos de Servicio",
    "footer-rights": "Todos los derechos reservados.",
    "secureDataFooter": "100% seguro y sin conexión",
    "localWirelessFooter": "Transferencia inalámbrica local"
  },
  ar: {
    "announcement": "جديد: تم إصدار الإصدار 2.0 مع دعم Smart TV و Steam Deck!",
    "nav-features": "الميزات",
    "nav-how": "كيف يعمل",
    "nav-download": "تنزيل",
    "nav-faq": "الأسئلة الشائعة",
    "nav-cta": "تنزيل التطبيق",
    "hero-badge": "⚡ مشاركة أوفلاين 100%",
    "hero-title": "مشاركة الملفات لاسلكياً ومحلياً، ببساطة.",
    "hero-subtitle": "انقل الملفات عبر شبكة Wi-Fi المحلية، بدون إنترنت. نقل مباشر عبر Wi-Fi أو نقطة الاتصال وبدون حدود للحجم.",
    "detected-platform": "تم اكتشاف نظام التشغيل الخاص بك",
    "download-for": "تنزيل لـ",
    "view-all-platforms": "عرض جميع المنصات",
    "stat-data": "استهلاك البيانات",
    "stat-limits": "حدود الحجم",
    "stat-secure": "أوفلاين وآمن",
    "features-title": "لماذا تستخدم DropLocal؟",
    "features-subtitle": "تخلص من الكابلات والسحابة. إليك كيف نجعل المشاركة أوفلاين سهلة للغاية.",
    "feature-1-title": "لا إنترنت، لا حدود",
    "feature-1-desc": "نقل مباشر عبر Wi-Fi أو نقطة الاتصال. لا إنترنت، لا استهلاك للبيانات، ولا حدود لحجم الملفات. مثالي للمناطق الريفية، الرحلات الجوية، أو لتوفير بيانات الهاتف.",
    "feature-2-title": "المسح والإرسال",
    "feature-2-desc": "اتصال فوري عبر رمز QR. ما عليك سوى مسح شاشة المستلم ضوئياً، واختيار الملفات من أي نوع، ونقلها فوراً دون أي إعدادات معقدة.",
    "feature-3-title": "الخصوصية والأمان",
    "feature-3-desc": "أوفلاين 100% أولاً. لا تمر ملفاتك أبداً عبر خوادم خارجية، مما يعني أن بياناتك السرية تظل خاصة وآمنة تماماً على شبكتك المحلية.",
    "guide-title": "كيفية الاتصال؟",
    "guide-subtitle": "يعمل DropLocal محلياً عن طريق إنشاء رابط مباشر آمن. اختر طريقة الاتصال الخاصة بك أدناه.",
    "scenarioATitle": "الخيار أ: نقطة الاتصال",
    "scenarioADesc": "قم بتشغيل نقطة الاتصال على أحد الأجهزة وتوصيل الجهاز الثاني بها. مثالي للاستخدام في الهواء الطلق، في القطار، أو عند عدم توفر جهاز راوتر Wi-Fi محلي.",
    "guide-hotspot-step1-title": "تفعيل نقطة الاتصال",
    "guide-hotspot-step1-desc": "قم بتشغيل نقطة الاتصال المحمولة على أحد الأجهزة (لا يحتاج إلى تفعيل الإنترنت أو البيانات).",
    "guide-hotspot-step2-title": "توصيل الجهاز الثاني",
    "guide-hotspot-step2-desc": "انضم إلى شبكة نقطة الاتصال التي تم إنشاؤها حديثاً من إعدادات جهازك الثاني.",
    "guide-hotspot-step3-title": "النقل المباشر",
    "guide-hotspot-step3-desc": "افتح DropLocal على كلا الجهازين، وامسح رمز QR للاقتران، وابدأ المشاركة بسرعات محلية تصل إلى 50 ميجابايت/ثانية!",
    "scenarioBTitle": "الخيار ب: نفس شبكة الـ Wi-Fi",
    "scenarioBDesc": "قم بتوصيل كلا الجهازين بنفس شبكة الـ Wi-Fi. موصى به للمنازل والمكاتب والمقاهي.",
    "guide-wifi-step1-title": "الانضمام للشبكة",
    "guide-wifi-step1-desc": "تأكد من أن جهاز الإرسال وجهاز الاستقبال متصلان بنفس شبكة الـ Wi-Fi.",
    "guide-wifi-step2-title": "افتح التطبيق",
    "guide-wifi-step2-desc": "افتح DropLocal على كلا الجهازين. انقر على 'استلام' في الجهاز المستهدف لإنشاء عنوان IP ورمز QR الخاصين به.",
    "guide-wifi-step3-title": "المسح والإرسال",
    "guide-wifi-step3-desc": "انقر على 'إرسال' في جهاز المرسل، وامسح رمز QR الخاص بالمستلم (أو اكتب عنوان IP الخاص به يدوياً)، وشاهد النقل يبدأ!",
    "send": "إرسال",
    "receive": "استلام",
    "waitingForFile": "بانتظار الملف...",
    "allFormatsNoLimit": "جميع الصيغ مقبولة",
    "receiverIpAddress": "IP الخاص بالمستلم",
    "sendFileButton": "إرسال الملف",
    "sendingProgress": "جاري الإرسال...",
    "connectionIpAddress": "عنوان IP للاتصال",
    "stayOnScreen": "أبقِ هذه الشاشة مفتوحة للاستلام.",
    "download-title": "تنزيل DropLocal",
    "download-subtitle": "متوفر على جميع أجهزتك. قم بتثبيت DropLocal اليوم واستمتع بمشاركة خالية من المتاعب.",
    "dl-btn-win": "تنزيل exe.",
    "dl-btn-mac": "تنزيل dmg.",
    "dl-btn-deck": "تثبيت عبر Discover",
    "dl-btn-tv": "تنزيل APK للتلفزيون",
    "faq-title": "الأسئلة الشائعة",
    "faq-subtitle": "كل ما تحتاج إلى معرفته عن نقل الملفات باستخدام DropLocal.",
    "faq-q1": "هل يستهلك DropLocal بيانات الهاتف المحمول الخاصة بي؟",
    "faq-a1": "لا، لا يستهلك DropLocal أي إنترنت أو بيانات هاتف. يتصل مباشرة عبر راوتر Wi-Fi محلي أو شبكة نقطة اتصال مباشرة (Hotspot). يمكنك استخدامه حتى لو كانت بطاقة SIM الخاصة بك خارج الجهاز أو في وضع الطيران!",
    "faq-q2": "هل هناك أي حد لحجم الملف الذي يمكنني إرساله؟",
    "faq-a2": "لا توجد حدود على الإطلاق! نظراً لأن عمليات النقل تتم محلياً وبشكل مباشر بين الأجهزة، فإننا لا نرفع الملفات إلى خوادم. يمكنك إرسال صورة بحجم 10 ميجابايت، أو فيديو بحجم 5 جيجابايت، أو نسخة احتياطية بحجم 50 جيجابايت دون أي قيود.",
    "faq-q3": "ما مدى أمان ملفاتي مع DropLocal؟",
    "faq-a3": "يعمل DropLocal بنظام أوفلاين 100% أولاً. يتم نقل ملفاتك مباشرة بين الأجهزة على شبكتك المحلية. لا تغادر بياناتك محيطك المادي أبداً، مما يحميها من الاختراق، أو تسريبات السحابة، أو المراقبة الخارجية.",
    "faq-q4": "ما هي سرعة نقل الملفات؟",
    "faq-a4": "يصل DropLocal إلى السرعة القصوى لبطاقة الـ Wi-Fi المحلية بجهازك (عادةً تتراوح بين 10 و 70 ميجابايت في الثانية). إنه أسرع بـ 100 مرة من المشاركة عبر البلوتوث ولا يعتمد على سرعة الإنترنت الخاصة بك.",
    "faq-q5": "هل يدعم تلفزيونات Tizen أو Fire TV؟",
    "faq-a5": "نعم! يمكنك تثبيت DropLocal على أجهزة Android TV و Chromecast و Amazon Fire TV Stick عبر تحميل ملف APK الخاص بالتلفزيون. تتوفر نسخة Tizen TV عبر وضع المطور في متجر Tizen، مما يسهل إرسال الملفات إلى شاشة غرفة المعيشة الخاصة بك.",
    "footer-desc": "مشاركة ملفات محلية لاسلكية وخالية من المتاعب عبر شبكات Wi-Fi. مجاني ومفتوح المصدر 100%.",
    "footer-col-nav": "التنقل",
    "footer-col-legal": "المعلومات والقانون",
    "footer-privacy": "سياسة الخصوصية",
    "footer-terms": "شروط الخدمة",
    "footer-rights": "جميع الحقوق محفوظة.",
    "secureDataFooter": "أوفلاين وآمن 100%",
    "localWirelessFooter": "نقل لاسلكي محلي"
  }
};

// Language Full Names
const languageNames = {
  en: "English",
  fr: "Français",
  es: "Español",
  ar: "العربية"
};

// 2. State & Dom Elements
let currentLang = 'en';

const langSelectBtn = document.getElementById('lang-select-btn');
const langOptions = document.getElementById('lang-options');
const currentLangLabel = document.getElementById('current-lang-label');
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

// Connection guide tab elements
const toggleWifi = document.getElementById('toggle-wifi');
const toggleHotspot = document.getElementById('toggle-hotspot');
const contentWifi = document.getElementById('content-wifi');
const contentHotspot = document.getElementById('content-hotspot');

// FAQ elements
const faqQuestions = document.querySelectorAll('.faq-question');

// Detected platform elements
const detectedCard = document.getElementById('detected-os-card');
const detectedBtn = document.getElementById('detected-os-btn');
const detectedName = document.getElementById('detected-os-name');
const detectedIcon = document.getElementById('detected-os-icon');

// 3. Functions

/**
 * Update page content dynamically based on selected language
 * @param {string} lang 
 */
function updateLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;

  // Set html properties for structure and SEO
  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  // Update dynamic elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Update document title for SEO
  const titleKey = "hero-title";
  document.title = `DropLocal - ${translations[lang][titleKey]}`;

  // Update language selector label
  currentLangLabel.textContent = languageNames[lang];

  // Sync active class in language menu dropdown list
  document.querySelectorAll('#lang-options li').forEach(li => {
    if (li.getAttribute('data-lang') === lang) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  });

  // Clean URL search param update
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
}

/**
 * Retrieve current query parameter or default to browser language preference
 */
function detectLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const queryLang = urlParams.get('lang');
  
  if (queryLang && translations[queryLang]) {
    return queryLang;
  }

  // Fallback to client browser preference
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang) {
    const shortLang = browserLang.split('-')[0].toLowerCase();
    if (translations[shortLang]) {
      return shortLang;
    }
  }

  return 'en';
}

/**
 * Automatic OS detection and dynamic highlighting
 */
function detectOS() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  let os = null;
  let downloadLink = '#download';
  let iconClass = 'fa-solid fa-arrow-down-to-bracket';
  let cardId = null;

  // Detect OS pattern
  if (/windows/i.test(userAgent)) {
    os = 'Windows';
    downloadLink = 'downloads/DropLocal_Setup.exe';
    iconClass = 'fa-brands fa-windows';
    cardId = 'card-windows';
  } else if (/macintosh|mac os x/i.test(userAgent)) {
    os = 'macOS';
    downloadLink = 'downloads/DropLocal.dmg';
    iconClass = 'fa-brands fa-apple';
    cardId = 'card-macos';
  } else if (/linux/i.test(userAgent)) {
    os = 'Linux';
    downloadLink = 'downloads/droplocal.deb';
    iconClass = 'fa-brands fa-linux';
    cardId = 'card-linux';
    
    // Check if possibly Steam Deck
    if (/steam/i.test(userAgent) || /deck/i.test(userAgent)) {
      os = 'Steam Deck';
      downloadLink = 'https://flathub.org/apps/details/io.github.droplocal';
      iconClass = 'fa-solid fa-gamepad';
      cardId = 'card-steamdeck';
    }
  } else if (/android/i.test(userAgent)) {
    os = 'Android';
    downloadLink = 'downloads/droplocal.apk';
    iconClass = 'fa-brands fa-android';
    cardId = 'card-android';
  } else if (/iphone|ipad|ipod/i.test(userAgent)) {
    os = 'iOS / iPadOS';
    downloadLink = '#download'; // direct to grid
    iconClass = 'fa-brands fa-apple';
  }

  // If a standard platform was detected, reveal custom CTA and recommendation card
  if (os) {
    detectedName.textContent = os;
    detectedBtn.href = downloadLink;
    detectedIcon.className = iconClass;
    detectedCard.classList.remove('hidden');

    if (cardId) {
      const recCard = document.getElementById(cardId);
      if (recCard) {
        recCard.classList.add('recommended-card');
      }
    }
  }
}

// 4. Event Listeners

// Language selection drop-down triggers
langSelectBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langOptions.classList.toggle('active');
});

document.addEventListener('click', () => {
  langOptions.classList.remove('active');
});

document.querySelectorAll('#lang-options li').forEach(option => {
  option.addEventListener('click', (e) => {
    const selectedLang = e.currentTarget.getAttribute('data-lang');
    updateLanguage(selectedLang);
  });
});

// Mobile menu toggles
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Close mobile overlay on clicking nav link
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// Guide scenario toggles
toggleWifi.addEventListener('click', () => {
  toggleWifi.classList.add('active');
  toggleHotspot.classList.remove('active');
  contentWifi.classList.add('active');
  contentHotspot.classList.remove('active');
});

toggleHotspot.addEventListener('click', () => {
  toggleHotspot.classList.add('active');
  toggleWifi.classList.remove('active');
  contentHotspot.classList.add('active');
  contentWifi.classList.remove('active');
});

// FAQ Accordion functionality
faqQuestions.forEach(question => {
  question.addEventListener('click', (e) => {
    const item = e.currentTarget.parentNode;
    
    // Close other FAQ items
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    // Toggle current item
    item.classList.toggle('active');
  });
});

// 5. Initial setup trigger
document.addEventListener('DOMContentLoaded', () => {
  // 1. Detect and set user language
  const userLang = detectLanguage();
  updateLanguage(userLang);

  // 2. Perform client OS detection
  detectOS();
});
