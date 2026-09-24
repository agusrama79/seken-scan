(function(){
  // ==========================================================
  // DATASET: IPHONE MODELS BY SERIES & ACCURATE HARDWARE SPECS
  // ==========================================================
  var IPHONE_MODELS = [
    // 17 Series
    { 
      id: 'ip17pm', 
      name: 'iPhone 17 Pro Max', 
      series: '17', 
      year: 2025, 
      chip: 'A19 Pro', 
      screen: '6.9″ Super Retina XDR OLED (120Hz ProMotion)',
      displayType: 'oled-120',
      displayCutout: 'dynamic-island',
      portType: 'usb-c-3',
      buttonType: 'action-button',
      hasCameraControl: true,
      biometrics: 'face-id',
      cameraSetup: 'triple-5x',
      hasLidar: true,
      hasMacro: true,
      has48MP: true,
      materialFrame: 'aluminum',
      hasNativeCycleCount: true,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang', 'TrueDepth', 'Kaca Belakang'],
      officialCodes: 'A3250, A3251, A3252',
      tags: ['Aluminium Unibody', '48MP Periskop 5x', 'ProMotion 120Hz', 'Camera Control'], 
      desc: 'Cek sasis bodi aluminium unibody baru, modul kamera plateau lebar, sensor Camera Control, & port USB-C 3.0.',
      knownFlaws: [
        '<strong>Rangka Aluminium Unibody Baru</strong>: Apple beralih dari Titanium ke Aluminium pada 17 Pro Max demi efisiensi termal dan bobot lebih ringan. Periksa frame dari risiko baret dan dent benturan pada sudut sasis aluminium.',
        '<strong>Modul Kamera Belakang Lebar (Camera Plateau)</strong>: Cek kerataan dan kebersihan sela-sela housing kamera belakang aluminium unibody baru.',
        '<strong>Sensor Camera Control</strong>: Uji respon sensor kapasitif sentuh geser di sisi kanan bawah untuk zoom kamera serta klik haptic shutter.',
        '<strong>Cycle Count Baterai Asli</strong>: Cek langsung di Pengaturan > Baterai > Kesehatan & Pengisian Baterai untuk melihat riwayat siklus produksi riil pabrik.'
      ]
    },
    { 
      id: 'ip17p', 
      name: 'iPhone 17 Pro', 
      series: '17', 
      year: 2025, 
      chip: 'A19 Pro', 
      screen: '6.3″ Super Retina XDR OLED (120Hz ProMotion)',
      displayType: 'oled-120',
      displayCutout: 'dynamic-island',
      portType: 'usb-c-3',
      buttonType: 'action-button',
      hasCameraControl: true,
      biometrics: 'face-id',
      cameraSetup: 'triple-5x',
      hasLidar: true,
      hasMacro: true,
      has48MP: true,
      materialFrame: 'aluminum',
      hasNativeCycleCount: true,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang', 'TrueDepth', 'Kaca Belakang'],
      officialCodes: 'A3245, A3246, A3247',
      tags: ['Aluminium Unibody', '48MP Triple 5x', 'ProMotion 120Hz', 'Camera Control'], 
      desc: 'Cek rangka aluminium unibody baru, refresh rate 120Hz ProMotion, modul kamera plateau, & Camera Control.',
      knownFlaws: [
        '<strong>Rangka Aluminium Unibody</strong>: Seri 17 Pro mengadopsi rangka aluminium demi pelepasan panas chip A19 Pro yang lebih optimal. Cek sudut bodi dari benturan keras.',
        '<strong>Tombol Camera Control & Action</strong>: Pastikan tombol responsif tanpa macet dan sensor haptic memberikan umpan balik presisi.',
        '<strong>Sensor LiDAR & Macro Mode</strong>: Buka app Pengukur dan dekatkan kamera 2cm untuk memastikan transisi fokus makro mulus.',
        '<strong>Parts & Service History</strong>: Periksa riwayat penggantian TrueDepth dan Layar pada menu Mengenai.'
      ]
    },
    { 
      id: 'ip17air', 
      name: 'iPhone 17 Air', 
      series: '17', 
      year: 2025, 
      chip: 'A19', 
      screen: '6.6″ Super Retina XDR OLED (120Hz ProMotion)',
      displayType: 'oled-120',
      displayCutout: 'dynamic-island',
      portType: 'usb-c-2',
      buttonType: 'action-button',
      hasCameraControl: true,
      biometrics: 'face-id',
      cameraSetup: 'single',
      hasLidar: false,
      hasMacro: false,
      has48MP: true,
      materialFrame: 'titanium',
      hasNativeCycleCount: true,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang', 'Kaca Belakang'],
      officialCodes: 'A3260, A3261',
      tags: ['Ultra Slim 5.6mm', 'Titanium Grade 5 Frame', 'ProMotion 120Hz', 'Camera Control'], 
      desc: 'Cek rangka Titanium ultra-kuat untuk mencegah risiko bengkok pada bodi 5.6mm, ketahanan baterai, & layar 120Hz.',
      knownFlaws: [
        '<strong>Rangka Titanium Anti-Bengkok (Anti-Bend)</strong>: Pada bodi setipis 5.6mm, Apple menggunakan rangka Titanium Grade 5 demi mempertahankan rigiditas. Letakkan ponsel di meja datar untuk memastikan bodi tetap lurus sempurna.',
        '<strong>Kamera Tunggal 48MP Fusion</strong>: Pastikan in-sensor crop zoom 2x tajam dan autofocus tidak hunting.',
        '<strong>Konektor USB-C Ultra Slim</strong>: Periksa lubang port dari kotoran atau kerenggangan kabel.'
      ]
    },
    { 
      id: 'ip17', 
      name: 'iPhone 17', 
      series: '17', 
      year: 2025, 
      chip: 'A19', 
      screen: '6.3″ Super Retina XDR OLED (120Hz ProMotion)',
      displayType: 'oled-120',
      displayCutout: 'dynamic-island',
      portType: 'usb-c-2',
      buttonType: 'action-button',
      hasCameraControl: true,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: true,
      has48MP: true,
      materialFrame: 'aluminum',
      hasNativeCycleCount: true,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang', 'Kaca Belakang'],
      officialCodes: 'A3240, A3241, A3242',
      tags: ['Layar 120Hz Baru', 'Dual 48MP Fusion', 'Camera Control', 'Aluminium'], 
      desc: 'Cek panel 120Hz ProMotion pertama di seri reguler, tombol Camera Control, modul dual kamera, & True Tone.',
      knownFlaws: [
        '<strong>Panel 120Hz ProMotion Baru</strong>: Pastikan scrolling mulus dan bandingkan dengan Low Power Mode (cap 60Hz).',
        '<strong>Sensor Sentuh Camera Control</strong>: Geser untuk zoom kamera bawaan tanpa delay.',
        '<strong>Cycle Count Baterai</strong>: Verifikasi jumlah siklus pengisian riil di Pengaturan Baterai.'
      ]
    },

    // 16 Series
    { 
      id: 'ip16pm', 
      name: 'iPhone 16 Pro Max', 
      series: '16', 
      year: 2024, 
      chip: 'A18 Pro', 
      screen: '6.9″ Super Retina XDR OLED (120Hz ProMotion)',
      displayType: 'oled-120',
      displayCutout: 'dynamic-island',
      portType: 'usb-c-3',
      buttonType: 'action-button',
      hasCameraControl: true,
      biometrics: 'face-id',
      cameraSetup: 'triple-5x',
      hasLidar: true,
      hasMacro: true,
      has48MP: true,
      materialFrame: 'titanium',
      hasNativeCycleCount: true,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang', 'TrueDepth', 'Kaca Belakang'],
      officialCodes: 'A3084, A3295, A3296, A3297',
      tags: ['Titanium Grade 5', 'Camera Control', '48MP Fusion 5x', 'USB-C 3.0'], 
      desc: 'Cek sensor Camera Control baru, frame Titanium, lensa periskop 5x, & kelancaran port USB-C 3.0.',
      knownFlaws: [
        '<strong>Tombol Camera Control Sapphire</strong>: Uji gesture gesek (slide zoom/exposure) dan half-press fokus di aplikasi Kamera.',
        '<strong>Lensa Periskop 5x Tetraprism</strong>: Pindah ke 5x optical zoom, pastikan lensa tidak buram dan OIS stabil.',
        '<strong>Cycle Count Baterai Bawaan</strong>: Cek di Pengaturan > Baterai (siklus, tanggal pembuatan, tanggal pertama pakai).'
      ]
    },
    { 
      id: 'ip16p', 
      name: 'iPhone 16 Pro', 
      series: '16', 
      year: 2024, 
      chip: 'A18 Pro', 
      screen: '6.3″ Super Retina XDR OLED (120Hz ProMotion)',
      displayType: 'oled-120',
      displayCutout: 'dynamic-island',
      portType: 'usb-c-3',
      buttonType: 'action-button',
      hasCameraControl: true,
      biometrics: 'face-id',
      cameraSetup: 'triple-5x',
      hasLidar: true,
      hasMacro: true,
      has48MP: true,
      materialFrame: 'titanium',
      hasNativeCycleCount: true,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang', 'TrueDepth', 'Kaca Belakang'],
      officialCodes: 'A3083, A3292, A3293, A3294',
      tags: ['Titanium Grade 5', 'Camera Control', '48MP Fusion 5x', 'Action Button'], 
      desc: 'Cek respons Camera Control, ketahanan baterai, layar 120Hz ProMotion, & Face ID.',
      knownFlaws: [
        '<strong>Sensor Camera Control</strong>: Pastikan tombol terpasang rata dengan frame dan tidak oblak/macet.',
        '<strong>Lensa 5x Telephoto Baru di 16 Pro</strong>: Uji zoom 5x, foto jarak jauh dengan pencahayaan cukup.',
        '<strong>Action Button & Port USB-C 3</strong>: Uji charging bolak-balik dan konfigurasi pintasan tombol.'
      ]
    },
    { 
      id: 'ip16plus', 
      name: 'iPhone 16 Plus', 
      series: '16', 
      year: 2024, 
      chip: 'A18', 
      screen: '6.7″ Super Retina XDR OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'dynamic-island',
      portType: 'usb-c-2',
      buttonType: 'action-button',
      hasCameraControl: true,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: true,
      has48MP: true,
      materialFrame: 'aluminum',
      hasNativeCycleCount: true,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang', 'Kaca Belakang'],
      officialCodes: 'A3082, A3289, A3290, A3291',
      tags: ['Layar 6.7"', 'Camera Control', 'Action Button', 'Dual Fusion'], 
      desc: 'Cek bodi aluminium, tombol Action & Camera Control, serta kesehatan baterai jumbo.',
      knownFlaws: [
        '<strong>Camera Control & Action Button</strong>: Uji kedua tombol fisik baru tersebut.',
        '<strong>Kamera Vertikal Baru</strong>: Uji perekaman Spatial Video dan transisi Ultra Wide ke Wide.',
        '<strong>Baterai Cycle Count</strong>: Cek jumlah siklus pengisian bawaan di menu Baterai.'
      ]
    },
    { 
      id: 'ip16', 
      name: 'iPhone 16', 
      series: '16', 
      year: 2024, 
      chip: 'A18', 
      screen: '6.1″ Super Retina XDR OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'dynamic-island',
      portType: 'usb-c-2',
      buttonType: 'action-button',
      hasCameraControl: true,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: true,
      has48MP: true,
      materialFrame: 'aluminum',
      hasNativeCycleCount: true,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang', 'Kaca Belakang'],
      officialCodes: 'A3081, A3286, A3287, A3288',
      tags: ['Layar 6.1"', 'Camera Control', 'Action Button', 'Dual Fusion'], 
      desc: 'Cek kerapatan bezel, kamera vertikal baru, respon sentuh layar, & Camera Control.',
      knownFlaws: [
        '<strong>Tombol Camera Control</strong>: Pastikan kaca kristal safir tombol bebas baret dalam.',
        '<strong>Macro Mode di Seri Reguler</strong>: Dekatkan 2cm ke objek, pastikan makro otomatis aktif.',
        '<strong>Cycle Count Baterai Asli</strong>: Cek tanggal rilis vs jumlah siklus pengisian.'
      ]
    },

    // 15 Series
    { 
      id: 'ip15pm', 
      name: 'iPhone 15 Pro Max', 
      series: '15', 
      year: 2023, 
      chip: 'A17 Pro', 
      screen: '6.7″ Super Retina XDR OLED (120Hz ProMotion)',
      displayType: 'oled-120',
      displayCutout: 'dynamic-island',
      portType: 'usb-c-3',
      buttonType: 'action-button',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'triple-5x',
      hasLidar: true,
      hasMacro: true,
      has48MP: true,
      materialFrame: 'titanium',
      hasNativeCycleCount: true,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang', 'TrueDepth', 'Kaca Belakang'],
      officialCodes: 'A2849, A3105, A3106, A3108',
      tags: ['Titanium Grade 5', 'Action Button', 'USB-C 3.0', 'Telephoto 5x'], 
      desc: 'Cek baret pada frame Titanium, tombol Action Button, port USB-C, dan lensa 5x periskop.',
      knownFlaws: [
        '<strong>Frame Titanium & Dent Sudut</strong>: Cek sudut frame dari penyok benturan keras dan perubahan warna sidik jari.',
        '<strong>Lensa Periskop 5x Tetraprism</strong>: Uji zoom 5x, pastikan tidak buram dan fokus cepat.',
        '<strong>Baterai Cycle Count & Limit 80%</strong>: Seri 15 pertama yang menampilkan siklus cas asli di menu Baterai.'
      ]
    },
    { 
      id: 'ip15p', 
      name: 'iPhone 15 Pro', 
      series: '15', 
      year: 2023, 
      chip: 'A17 Pro', 
      screen: '6.1″ Super Retina XDR OLED (120Hz ProMotion)',
      displayType: 'oled-120',
      displayCutout: 'dynamic-island',
      portType: 'usb-c-3',
      buttonType: 'action-button',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'triple-3x',
      hasLidar: true,
      hasMacro: true,
      has48MP: true,
      materialFrame: 'titanium',
      hasNativeCycleCount: true,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang', 'TrueDepth', 'Kaca Belakang'],
      officialCodes: 'A2848, A3101, A3102, A3104',
      tags: ['Titanium Grade 5', 'Action Button', 'USB-C 3.0', 'ProMotion 120Hz'], 
      desc: 'Cek suhu bodi, Action Button, TrueDepth Face ID, dan mulusnya refresh rate 120Hz.',
      knownFlaws: [
        '<strong>Action Button Haptic</strong>: Tekan dan tahan tombol aksi, pastikan getaran solid dan pintasan jalan.',
        '<strong>Port USB-C 3.0</strong>: Uji koneksi data USB 3 dan colokan kabel pas tanpa goyang.',
        '<strong>Kamera Telephoto 3x</strong>: Uji zoom 3x optik, pastikan bebas bercak jamur debu.'
      ]
    },
    { 
      id: 'ip15plus', 
      name: 'iPhone 15 Plus', 
      series: '15', 
      year: 2023, 
      chip: 'A16 Bionic', 
      screen: '6.7″ Super Retina XDR OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'dynamic-island',
      portType: 'usb-c-2',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: false,
      has48MP: true,
      materialFrame: 'aluminum',
      hasNativeCycleCount: true,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang', 'Kaca Belakang'],
      officialCodes: 'A2847, A3093, A3094, A3096',
      tags: ['Dynamic Island', '48MP Main', 'USB-C', 'Baterai Jumbo'], 
      desc: 'Cek keaslian layar Dynamic Island, bodi aluminium, dan fungsi charging Type-C.',
      knownFlaws: [
        '<strong>Dynamic Island Interaktif</strong>: Jalankan musik/timer, ketuk pulau untuk expand.',
        '<strong>Port USB-C Universal</strong>: Cek lubang port bersih dari debu/serat kain.',
        '<strong>Cycle Count Baterai Bawaan</strong>: Cek jumlah siklus asli di Pengaturan > Baterai.'
      ]
    },
    { 
      id: 'ip15', 
      name: 'iPhone 15', 
      series: '15', 
      year: 2023, 
      chip: 'A16 Bionic', 
      screen: '6.1″ Super Retina XDR OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'dynamic-island',
      portType: 'usb-c-2',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: false,
      has48MP: true,
      materialFrame: 'aluminum',
      hasNativeCycleCount: true,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang', 'Kaca Belakang'],
      officialCodes: 'A2846, A3089, A3090, A3092',
      tags: ['Dynamic Island', '48MP Main', 'USB-C', 'Matte Glass'], 
      desc: 'Cek tekstur kaca belakang matte, Dynamic Island, dan keaslian modul kamera 48MP.',
      knownFlaws: [
        '<strong>Sensor Kamera 48MP Baru</strong>: Uji in-sensor zoom 2x, pastikan tidak pecah.',
        '<strong>Kaca Belakang Matte Berwarna</strong>: Cek baret atau retak di sekitar logo Apple.',
        '<strong>Varian US Tanpa SIM Tray</strong>: Jika unit US (LL/A), pastikan tidak ada lubang SIM hasil bor manual.'
      ]
    },

    // 14 Series
    { 
      id: 'ip14pm', 
      name: 'iPhone 14 Pro Max', 
      series: '14', 
      year: 2022, 
      chip: 'A16 Bionic', 
      screen: '6.7″ Super Retina XDR OLED (120Hz ProMotion)',
      displayType: 'oled-120',
      displayCutout: 'dynamic-island',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'triple-3x',
      hasLidar: true,
      hasMacro: true,
      has48MP: true,
      materialFrame: 'stainless-steel',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang'],
      officialCodes: 'A2651, A2893, A2894, A2896',
      tags: ['Dynamic Island', 'Always-On Display', '48MP Triple', 'Stainless Steel'], 
      desc: 'Cek fitur Always-On Display, burn-in layar OLED, Dynamic Island, dan port Lightning.',
      knownFlaws: [
        '<strong>Getar OIS Kamera (Camera Rattle)</strong>: Buka kamera di Instagram/TikTok, pastikan lensa tidak bergetar berisik.',
        '<strong>Burn-in Layar Always-On Display</strong>: Cek di layar abu-abu/hitam apakah bayangan jam membekas.',
        '<strong>Frame Stainless Steel</strong>: Cek baret mikro (swirl marks) pada bezel mengkilap.'
      ]
    },
    { 
      id: 'ip14p', 
      name: 'iPhone 14 Pro', 
      series: '14', 
      year: 2022, 
      chip: 'A16 Bionic', 
      screen: '6.1″ Super Retina XDR OLED (120Hz ProMotion)',
      displayType: 'oled-120',
      displayCutout: 'dynamic-island',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'triple-3x',
      hasLidar: true,
      hasMacro: true,
      has48MP: true,
      materialFrame: 'stainless-steel',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang'],
      officialCodes: 'A2650, A2889, A2890, A2892',
      tags: ['Dynamic Island', 'Always-On Display', 'ProMotion 120Hz', 'LiDAR'], 
      desc: 'Cek baret di bezel stainless steel, fungsi sensor LiDAR, Dynamic Island, dan keaslian layar.',
      knownFlaws: [
        '<strong>Getar OIS Kamera di Aplikasi Medsos</strong>: Uji modul kamera di Instagram/TikTok/WhatsApp.',
        '<strong>Sensor LiDAR 3D</strong>: Uji dengan aplikasi bawaan Pengukur (Measure).',
        '<strong>ProMotion 120Hz Mulus</strong>: Pastikan tidak ada lag scrolling dan True Tone aktif.'
      ]
    },
    { 
      id: 'ip14plus', 
      name: 'iPhone 14 Plus', 
      series: '14', 
      year: 2022, 
      chip: 'A15 Bionic', 
      screen: '6.7″ Super Retina XDR OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'aluminum',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang', 'Kaca Belakang'],
      officialCodes: 'A2632, A2885, A2886, A2888',
      tags: ['Layar 6.7"', 'Dual Cam', 'Kaca Belakang Modular', 'Baterai Awet'], 
      desc: 'Cek bodi lebar dari benturan/bengkok, autofocus kamera ganda, dan True Tone.',
      knownFlaws: [
        '<strong>Kelurusan Bodi Lebar 6.7″</strong>: Pastikan sasis aluminium tidak melengkung akibat tekanan kantong.',
        '<strong>Kaca Belakang Desain Modular</strong>: Cek celah sela kaca belakang dan frame.',
        '<strong>Model US eSIM Only</strong>: Jika berkode LL/A, unit resmi tidak memiliki baki SIM fisik sama sekali.'
      ]
    },
    { 
      id: 'ip14', 
      name: 'iPhone 14', 
      series: '14', 
      year: 2022, 
      chip: 'A15 Bionic', 
      screen: '6.1″ Super Retina XDR OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'aluminum',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang', 'Kaca Belakang'],
      officialCodes: 'A2649, A2881, A2882, A2884',
      tags: ['Photonic Engine', 'Action Mode Video', 'OLED Super Retina', 'Lightning'], 
      desc: 'Cek keaslian layar Super Retina XDR, baut bawah, True Tone, dan respon tombol.',
      knownFlaws: [
        '<strong>Stabilisasi Action Mode</strong>: Uji mode Action di kamera video, pastikan penstabil gambar mulus.',
        '<strong>Riwayat Servis Display</strong>: Cek di Pengaturan > Mengenai dari indikasi layar Unknown Part.',
        '<strong>Port Lightning</strong>: Periksa kebersihan pin dari korosi.'
      ]
    },

    // 13 Series
    { 
      id: 'ip13pm', 
      name: 'iPhone 13 Pro Max', 
      series: '13', 
      year: 2021, 
      chip: 'A15 Bionic', 
      screen: '6.7″ Super Retina XDR OLED (120Hz ProMotion)',
      displayType: 'oled-120',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'triple-3x',
      hasLidar: true,
      hasMacro: true,
      has48MP: false,
      materialFrame: 'stainless-steel',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang'],
      officialCodes: 'A2484, A2641, A2643, A2645',
      tags: ['ProMotion 120Hz', 'Macro Mode', 'Triple 3x', 'Stainless Steel'], 
      desc: 'Waspadai isu White/Green Screen pada layar 120Hz, uji lensa Macro, dan cek baut pentalobe.',
      knownFlaws: [
        '<strong>⚠️ RISIKO WSOD (White/Green Screen of Death)</strong>: Sangat rawan terjadi pada panel 120Hz seri 13 Pro akibat jalur display rapuh. Wajib tes kecerahan 100% pada latar putih solid dan restart unit berkali-kali!',
        '<strong>Lensa Macro Otomatis</strong>: Dekatkan kamera 2cm dari tulisan, pastikan otomatis beralih tajam.',
        '<strong>Telephoto 3x Optical Zoom</strong>: Cek mode 3x, pastikan tidak ada bintik debu di dalam lensa.'
      ]
    },
    { 
      id: 'ip13p', 
      name: 'iPhone 13 Pro', 
      series: '13', 
      year: 2021, 
      chip: 'A15 Bionic', 
      screen: '6.1″ Super Retina XDR OLED (120Hz ProMotion)',
      displayType: 'oled-120',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'triple-3x',
      hasLidar: true,
      hasMacro: true,
      has48MP: false,
      materialFrame: 'stainless-steel',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang'],
      officialCodes: 'A2483, A2636, A2638, A2640',
      tags: ['ProMotion 120Hz', 'Macro Mode', 'Triple 3x', 'LiDAR'], 
      desc: 'Waspadai riwayat servis layar 120Hz, uji stabilitas autofocus kamera, dan Face ID.',
      knownFlaws: [
        '<strong>⚠️ RISIKO WSOD (White Screen / Layar Hijau)</strong>: Cek riwayat servis layar di Pengaturan > Mengenai. Jika layar pernah jumper teknisi, risiko kambuh sangat tinggi.',
        '<strong>Sensor LiDAR & Portrait Malam</strong>: Pastikan fokus cepat di ruangan remang-remang.',
        '<strong>True Tone & ProMotion</strong>: Pastikan kedua fitur aktif tanpa glitch.'
      ]
    },
    { 
      id: 'ip13', 
      name: 'iPhone 13', 
      series: '13', 
      year: 2021, 
      chip: 'A15 Bionic', 
      screen: '6.1″ Super Retina XDR OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'aluminum',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang'],
      officialCodes: 'A2482, A2631, A2633, A2635',
      tags: ['Diagonal Dual Cam', 'Sensor-Shift OIS', 'Cinematic Video'], 
      desc: 'Cek True Tone, baut pentalobe bawah, dan pastikan kamera tidak bergetar saat OIS aktif.',
      knownFlaws: [
        '<strong>Cinematic Mode Video</strong>: Uji perpindahan fokus wajah otomatis pada video Cinematic.',
        '<strong>Notch Lebih Kecil 20%</strong>: Pastikan earpiece speaker atas bersih dan suara telepon lantang.',
        '<strong>Riwayat Parts & Service</strong>: Cek status baterai & display di menu Mengenai.'
      ]
    },
    { 
      id: 'ip13mini', 
      name: 'iPhone 13 mini', 
      series: '13', 
      year: 2021, 
      chip: 'A15 Bionic', 
      screen: '5.4″ Super Retina XDR OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'aluminum',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang'],
      officialCodes: 'A2481, A2626, A2628, A2630',
      tags: ['Compact 5.4"', 'Dual Cam', 'MagSafe', 'Lightning'], 
      desc: 'Cek kapasitas maksimum baterai, keaslian layar compact, dan fungsi speaker.',
      knownFlaws: [
        '<strong>Kapasitas Baterai Kompak (2406 mAh)</strong>: Cek Battery Health di atas 80%, model mini lebih cepat aus baterainya.',
        '<strong>Respons Sentuh di Ujung Sudut Layar</strong>: Pastikan layar mungil responsif terhadap ketukan jempol.',
        '<strong>True Tone & Kerapatan OLED</strong>: Pastikan panel original tanpa dead pixel.'
      ]
    },

    // 12 Series
    { 
      id: 'ip12pm', 
      name: 'iPhone 12 Pro Max', 
      series: '12', 
      year: 2020, 
      chip: 'A14 Bionic', 
      screen: '6.7″ Super Retina XDR OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'triple-2.5x',
      hasLidar: true,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'stainless-steel',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang'],
      officialCodes: 'A2342, A2410, A2411, A2412',
      tags: ['Sensor-Shift OIS', 'LiDAR Sensor', 'Flat Edge', 'Triple 2.5x'], 
      desc: 'Cek bezel stainless steel, sensor LiDAR, True Tone, dan kerapatan layar OLED flat edge.',
      knownFlaws: [
        '<strong>Sensor-Shift OIS Kamera Utama</strong>: Cek foto malam hari dan video, pastikan sensor stabil tanpa blur berlebih.',
        '<strong>Sensor LiDAR 3D</strong>: Uji aplikasi Pengukur untuk mendeteksi kontur ruangan.',
        '<strong>Bezel Stainless Steel Lebar</strong>: Cek baret mikro dan kelurusan bodi besar.'
      ]
    },
    { 
      id: 'ip12p', 
      name: 'iPhone 12 Pro', 
      series: '12', 
      year: 2020, 
      chip: 'A14 Bionic', 
      screen: '6.1″ Super Retina XDR OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'triple-2x',
      hasLidar: true,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'stainless-steel',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang'],
      officialCodes: 'A2341, A2406, A2407, A2408',
      tags: ['LiDAR Sensor', 'Triple Cam', 'Ceramic Shield', 'Stainless Steel'], 
      desc: 'Cek bodi kaca belakang, fungsi 3 lensa kamera, kelayakan baterai, dan Face ID.',
      knownFlaws: [
        '<strong>⚠️ ISU RECEIVER SPEAKER TELEPON</strong>: Model 12 & 12 Pro punya riwayat program servis resmi akibat modul speaker kuping mati (tidak keluar suara saat nelpon biasa). Wajib coba lakukan panggilan telepon biasa!',
        '<strong>Green Tint pada Layar OLED Gelap</strong>: Buka gambar abu-abu pada kecerahan rendah di ruangan gelap, pastikan tidak ada rona kehijauan abnormal.'
      ]
    },
    { 
      id: 'ip12', 
      name: 'iPhone 12', 
      series: '12', 
      year: 2020, 
      chip: 'A14 Bionic', 
      screen: '6.1″ Super Retina XDR OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'aluminum',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang'],
      officialCodes: 'A2172, A2402, A2403, A2404',
      tags: ['OLED Super Retina', 'MagSafe', 'Dual Cam', 'Flat Edge'], 
      desc: 'Cek layar dari green tint / burn-in, riwayat servis Display di Mengenai, dan speaker penerima suara telepon.',
      knownFlaws: [
        '<strong>⚠️ ISU SPEAKER KUPING MATI (No Sound from Receiver)</strong>: Lakukan panggilan telepon langsung tanpa speakerphone, pastikan suara penelepon terdengar jernih dan keras.',
        '<strong>Pemasangan Layar Flat Edge</strong>: Seri pertama dengan frame datar, pastikan tidak ada sela celah antara layar dan frame aluminium.'
      ]
    },
    { 
      id: 'ip12mini', 
      name: 'iPhone 12 mini', 
      series: '12', 
      year: 2020, 
      chip: 'A14 Bionic', 
      screen: '5.4″ Super Retina XDR OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'aluminum',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar', 'Kamera Belakang'],
      officialCodes: 'A2176, A2398, A2399, A2400',
      tags: ['Compact 5.4"', 'MagSafe', 'Dual Cam', 'OLED Flat'], 
      desc: 'Periksa battery health secara teliti (kapasitas bawaan kecil 2227 mAh) dan sensitivitas sentuhan.',
      knownFlaws: [
        '<strong>Kapasitas Baterai Cepat Menurun (2227 mAh)</strong>: Cek apakah unit cepat panas saat browsing/video.',
        '<strong>Respons Sentuh Lockscreen dengan Case</strong>: Pastikan sentuhan lockscreen lancar tanpa lag grounding.'
      ]
    },

    // 11 Series
    { 
      id: 'ip11pm', 
      name: 'iPhone 11 Pro Max', 
      series: '11', 
      year: 2019, 
      chip: 'A13 Bionic', 
      screen: '6.5″ Super Retina XDR OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'triple-2x',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'stainless-steel',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar'],
      officialCodes: 'A2161, A2218, A2220',
      tags: ['Midnight Green', 'Triple Cam 2x', 'Matte Back', 'OLED 6.5"'], 
      desc: 'Cek baret di kaca kamera, keaslian layar OLED (bukan ganti LCD murah), dan Face ID.',
      knownFlaws: [
        '<strong>Layar Palsu (Diganti LCD Murah)</strong>: Banyak unit rekondisi yang layarnya diganti panel LCD KW. Cek deep black dan True Tone!',
        '<strong>Face ID Rentan Kena Air</strong>: Pastikan Face ID tidak disabled akibat korosi di sensor atas.'
      ]
    },
    { 
      id: 'ip11p', 
      name: 'iPhone 11 Pro', 
      series: '11', 
      year: 2019, 
      chip: 'A13 Bionic', 
      screen: '5.8″ Super Retina XDR OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'triple-2x',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'stainless-steel',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar'],
      officialCodes: 'A2160, A2215, A2217',
      tags: ['Triple Cam 2x', 'Matte Back', 'Super Retina XDR', 'Compact Pro'], 
      desc: 'Cek kelayakan baterai, 3 mode lensa kamera, dan riwayat Parts and Service History.',
      knownFlaws: [
        '<strong>Kamera 3 Lensa</strong>: Pindah 0.5x, 1x, 2x, pastikan ketiga lensa menyala dan fokus jernih.',
        '<strong>Kaca Belakang Matte</strong>: Cek retak halus di sela modul kamera segitiga.'
      ]
    },
    { 
      id: 'ip11', 
      name: 'iPhone 11', 
      series: '11', 
      year: 2019, 
      chip: 'A13 Bionic', 
      screen: '6.1″ Liquid Retina HD (LCD IPS)',
      displayType: 'lcd',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'aluminum',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai', 'Layar'],
      officialCodes: 'A2111, A2221, A2223',
      tags: ['Liquid Retina LCD', 'Dual Cam', 'Aluminium', 'Face ID'], 
      desc: 'Model paling banyak beredar second. Waspadai layar ganti KW tebal, cek baut bawah & True Tone.',
      knownFlaws: [
        '<strong>⚠️ LAYAR LCD KW TEBAL (BEZEL TIDAK RATA)</strong>: iPhone 11 paling sering diganti layar LCD non-ori murah dengan bezel hitam tebal dan touch delay.',
        '<strong>True Tone Hilang</strong>: Cek di Pusat Kontrol; jika tombol True Tone tidak ada, layar pasti pernah diganti tanpa copy serial.'
      ]
    },

    // X / XS / XR & SE Series
    { 
      id: 'ipxsmax', 
      name: 'iPhone XS Max', 
      series: 'x-se', 
      year: 2018, 
      chip: 'A12 Bionic', 
      screen: '6.5″ Super Retina HD OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'stainless-steel',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai'],
      officialCodes: 'A1921, A2101, A2102, A2104',
      tags: ['OLED 6.5"', 'Dual Cam 2x', 'Stainless Steel', 'Face ID'], 
      desc: 'Cek True Tone, Face ID (rawan mati jika pernah kena air), dan keaslian layar OLED.',
      knownFlaws: [
        '<strong>Face ID Mati Akibat Keringat/Air</strong>: Uji pendaftaran Face ID secara penuh.',
        '<strong>Layar OLED Diganti LCD Murah</strong>: Perhatikan apakah layar terlihat tebal dan warna hitam tidak pekat.'
      ]
    },
    { 
      id: 'ipxs', 
      name: 'iPhone XS', 
      series: 'x-se', 
      year: 2018, 
      chip: 'A12 Bionic', 
      screen: '5.8″ Super Retina HD OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'stainless-steel',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai'],
      officialCodes: 'A1920, A2097, A2098, A2100',
      tags: ['OLED 5.8"', 'Dual Cam 2x', 'Stainless Steel', 'Face ID'], 
      desc: 'Cek fungsi Face ID, keutuhan baut pentalobe, True Tone, dan kondisi baterai.',
      knownFlaws: [
        '<strong>Baterai Cepat Drop</strong>: Cek kapasitas maksimum baterai di Pengaturan.',
        '<strong>Green Line OLED</strong>: Periksa apakah ada garis vertikal hijau di layar akibat benturan.'
      ]
    },
    { 
      id: 'ipxr', 
      name: 'iPhone XR', 
      series: 'x-se', 
      year: 2018, 
      chip: 'A12 Bionic', 
      screen: '6.1″ Liquid Retina HD (LCD IPS)',
      displayType: 'lcd',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'single',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'aluminum',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai'],
      officialCodes: 'A1984, A2105, A2106, A2108',
      tags: ['Liquid Retina LCD', 'Single Cam 12MP', 'Aluminium', 'Face ID'], 
      desc: 'Cek keaslian layar LCD, True Tone, fungsi Face ID, dan nomor model regional.',
      knownFlaws: [
        '<strong>Layar LCD Gantian Kualitas Buruk</strong>: Cek kerataan lampu backlight di tepi layar.',
        '<strong>Haptic Touch</strong>: Seri pertama tanpa 3D Touch fisik, uji respon getaran saat menekan ikon.'
      ]
    },
    { 
      id: 'ipx', 
      name: 'iPhone X', 
      series: 'x-se', 
      year: 2017, 
      chip: 'A11 Bionic', 
      screen: '5.8″ Super Retina HD OLED (60Hz)',
      displayType: 'oled-60',
      displayCutout: 'notch',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'face-id',
      cameraSetup: 'dual',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'stainless-steel',
      hasNativeCycleCount: false,
      partsHistory: [],
      officialCodes: 'A1865, A1901, A1902',
      tags: ['OLED Pertama', 'Dual Cam', 'Stainless Steel', 'Face ID Generasi 1'], 
      desc: 'Periksa ghost touch pada layar, fungsi Face ID, dan kelayakan kapasitas baterai.',
      knownFlaws: [
        '<strong>⚠️ ISU TOUCH SCREEN / GHOST TOUCH</strong>: iPhone X memiliki riwayat modul touch screen error/mengetik sendiri. Gerakkan ikon aplikasi ke seluruh sudut layar!',
        '<strong>Face ID Mati Permanen</strong>: Sangat umum pada unit X bekas karena sensor TrueDepth generasi pertama sangat sensitif debu/air.'
      ]
    },
    { 
      id: 'ipse3', 
      name: 'iPhone SE (Gen 3)', 
      series: 'x-se', 
      year: 2022, 
      chip: 'A15 Bionic', 
      screen: '4.7″ Retina HD (LCD IPS)',
      displayType: 'lcd',
      displayCutout: 'bezels',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'touch-id',
      cameraSetup: 'single',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'aluminum',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai'],
      officialCodes: 'A2595, A2782, A2783, A2784, A2785',
      tags: ['Touch ID Home', 'Single Cam 12MP', '5G Network', 'Compact 4.7"'], 
      desc: 'Cek fungsi Touch ID pada tombol Home fisik, True Tone, koneksi 5G, dan kesehatan baterai.',
      knownFlaws: [
        '<strong>⚠️ TOMBOL HOME & TOUCH ID ASLI</strong>: Sensor sidik jari terikat ke motherboard. Jika tombol pernah diganti pihak ketiga, Touch ID mati selamanya!',
        '<strong>Daya Tahan Baterai Mungil (2018 mAh)</strong>: Cek persentase Battery Health, jangan beli jika di bawah 78% tanpa potongan harga.'
      ]
    },
    { 
      id: 'ipse2', 
      name: 'iPhone SE (Gen 2)', 
      series: 'x-se', 
      year: 2020, 
      chip: 'A13 Bionic', 
      screen: '4.7″ Retina HD (LCD IPS)',
      displayType: 'lcd',
      displayCutout: 'bezels',
      portType: 'lightning',
      buttonType: 'mute-switch',
      hasCameraControl: false,
      biometrics: 'touch-id',
      cameraSetup: 'single',
      hasLidar: false,
      hasMacro: false,
      has48MP: false,
      materialFrame: 'aluminum',
      hasNativeCycleCount: false,
      partsHistory: ['Baterai'],
      officialCodes: 'A2275, A2296, A2298',
      tags: ['Touch ID Home', 'Single Cam 12MP', 'Lightning', 'Compact 4.7"'], 
      desc: 'Cek sensor Touch ID, baut bawah, keaslian layar LCD, dan daya tahan baterai.',
      knownFlaws: [
        '<strong>Sensor Touch ID Asli</strong>: Uji pemindaian sidik jari dan respon getar klik tombol Home.',
        '<strong>Baterai Kecil (1821 mAh)</strong>: Sangat cepat habis jika health sudah di bawah 80%.'
      ]
    }
  ];

  var currentSelectedModel = null;
  var activeSeriesFilter = 'all';
  var modelSearchQuery = '';

  var SECTION_LABELS = {body:'Bodi Luar', camera:'Kamera', model:'Asal Negara', screen:'Layar & Baterai'};

  var CODES = [
    {code:'LL', country:'Amerika Serikat', flag:'\uD83C\uDDFA\uD83C\uDDF8', note:'Beredar global. Pada iPhone 14 ke atas, unit US adalah varian eSIM Only tanpa lubang SIM fisik!'},
    {code:'VC', country:'Kanada', flag:'\uD83C\uDDE8\uD83C\uDDE6'},
    {code:'ZP', country:'Hong Kong & Macau', flag:'\uD83C\uDDED\uD83C\uDDF0', note:'Banyak beredar dual physical nano-SIM (dua kartu fisik bolak-balik).'},
    {code:'ZA', country:'Singapura', flag:'\uD83C\uDDF8\uD83C\uDDEC', note:'Garansi regional Apple Store Orchard Road Singapura.'},
    {code:'J', country:'Jepang', flag:'\uD83C\uDDEF\uD83C\uDDF5', note:'Suara shutter kamera otomatis senyap jika memakai SIM card operator Indonesia (iOS 15+).'},
    {code:'KH', country:'Korea Selatan', flag:'\uD83C\uDDF0\uD83C\uDDF7', note:'Suara shutter kamera otomatis senyap jika memakai SIM card operator Indonesia (iOS 15+).'},
    {code:'TA', country:'Taiwan', flag:'\uD83C\uDDF9\uD83C\uDDFC'},
    {code:'CH', country:'Tiongkok', flag:'\uD83C\uDDE8\uD83C\uDDF3', note:'Dual nano-SIM fisik, tidak ada fitur FaceTime Audio bawaan pabrik.'},
    {code:'X', country:'Australia & Selandia Baru', flag:'\uD83C\uDDE6\uD83C\uDDFA'},
    {code:'B', country:'Inggris (UK)', flag:'\uD83C\uDDEC\uD83C\uDDE7'},
    {code:'MY', country:'Malaysia', flag:'\uD83C\uDDF2\uD83C\uDDFE'},
    {code:'PA', country:'Indonesia', flag:'\uD83C\uDDEE\uD83C\uDDE9', note:'Distribusi resmi TAM / iBox / Digimap / Erafone. Bergaransi resmi Indonesia & IMEI otomatis aman seumur hidup.'},
    {code:'ID', country:'Indonesia', flag:'\uD83C\uDDEE\uD83C\uDDE9', note:'Distribusi resmi Indonesia non-TAM (seperti GDN / Blibli). IMEI aman & resmi terdaftar.'},
    {code:'SA', country:'Indonesia', flag:'\uD83C\uDDEE\uD83C\uDDE9', note:'Distribusi resmi Indonesia jalur distributor era lama.'}
  ];

  // ==========================================================
  // DYNAMIC INSPECTION SECTION BUILDER (ADAPTIVE TO MODEL SPECS)
  // ==========================================================
  function buildModelInspectionSections(model) {
    var frameName = model.materialFrame === 'titanium' ? 'Titanium' : (model.materialFrame === 'stainless-steel' ? 'Baja Mengkilap (Stainless)' : 'Aluminium');
    var frameDesc = '';
    if (model.materialFrame === 'titanium') {
      frameDesc = 'Raba keempat sudut dan pinggiran HP dengan jari. Pastikan bodi mulus tanpa ada bekas jatuh keras yang dalam atau bodi melengkung. Bekas minyak sidik jari pada pinggiran titanium wajar dan mudah dibersihkan dengan dilap kain.';
    } else if (model.materialFrame === 'stainless-steel') {
      frameDesc = 'Raba sekeliling bodi dengan jari. Goresan halus pemakaian sehari-hari adalah hal wajar, namun pastikan sudut-sudutnya tidak penyok keras dan kaca layar masih menempel rapat tanpa ada celah renggang.';
    } else {
      frameDesc = 'Raba pinggiran dan sudut bodi HP. Pastikan tidak ada penyok akibat jatuh keras, bodi tidak melengkung, dan tidak ada bintik putih bekas jamur casing.';
    }

    var portItem = null;
    if (model.portType === 'usb-c-3' || model.portType === 'usb-c-2') {
      portItem = {
        id: 'b_port_usbc',
        title: 'Lubang Cas (Port USB-C)',
        desc: 'Colokkan kabel cas secara bolak-balik (coba kedua sisi kabel). Pastikan cas langsung masuk dengan lancar, pas di colokan, dan pengisian baterai tidak putus saat kabel digerakkan pelan.',
        tag: 'Lubang Cas',
        tagType: 'hardware'
      };
    } else {
      portItem = {
        id: 'b_port_lightning',
        title: 'Lubang Cas (Port Lightning)',
        desc: 'Colokkan kabel cas bolak-balik. Pastikan aliran listrik langsung masuk dan tidak putus-nyambung saat kabel digerakkan pelan. Intip lubang cas, pastikan bersih dari kotoran atau kuningan yang patah.',
        tag: 'Lubang Cas',
        tagType: 'hardware'
      };
    }

    var buttonItem = null;
    if (model.buttonType === 'action-button') {
      buttonItem = {
        id: 'b_action_btn',
        title: 'Tombol Aksi (Action Button)',
        desc: 'Tekan dan tahan tombol kecil di atas tombol volume. HP harus bergetar sedikit dan fungsi pintasannya (misal senter atau kamera) langsung aktif seketika.',
        tag: 'Tombol Aksi',
        tagType: 'pro'
      };
    } else if (model.biometrics === 'touch-id') {
      buttonItem = {
        id: 'b_home_btn',
        title: 'Tombol Home & Sidik Jari (Touch ID)',
        desc: 'Tekan tombol bulat di bawah layar saat HP menyala. Tombol harus bergetar mantap saat diklik, dan sensor sidik jari harus bisa membaca jari Anda dengan cepat tanpa gagal.',
        tag: 'Sidik Jari',
        tagType: 'critical'
      };
    } else {
      buttonItem = {
        id: 'b_mute_switch',
        title: 'Saklar Geser Hening (Mute Switch)',
        desc: 'Geser saklar di sisi kiri atas HP ke atas dan ke bawah. Saat digeser ke bawah hingga garis warna oranye terlihat, HP harus bergetar satu kali menandakan mode hening aktif.',
        tag: 'Saklar Hening',
        tagType: 'hardware'
      };
    }

    // Body items
    var bodyItems = [
      {
        id: 'b_chassis',
        title: 'Kondisi Sudut & Pinggiran Bodi (' + frameName + ')',
        desc: frameDesc,
        tag: 'Fisik Bodi',
        tagType: 'hardware'
      },
      {
        id: 'b_pentalobe',
        title: '2 Baut Kecil di Bawah (Dekat Lubang Cas)',
        desc: 'Amati 2 baut kecil di samping lubang cas. Baut asli pabrik bentuk bintangnya rapi dan mulus. Jika kepala baut lecet, gompal, berkarat, atau ada bekas diputar obeng secara paksa, berarti HP sudah pernah dibongkar.',
        tag: 'Tanda Bongkar',
        tagType: 'critical'
      },
      portItem,
      buttonItem
    ];

    if (model.hasCameraControl) {
      bodyItems.push({
        id: 'b_camera_ctrl',
        title: 'Tombol Kamera Samping (Camera Control)',
        desc: 'Tekan tombol kamera di sisi kanan bawah untuk membuka kamera. Usap jari Anda di atas tombol tersebut untuk mencoba zoom gambar. Gerakannya harus terasa mulus dan responsif.',
        tag: 'Tombol Kamera',
        tagType: 'pro'
      });
    }

    bodyItems.push({
      id: 'b_sim_tray',
      title: 'Tempat Kartu SIM & Tanda Bekas Air',
      desc: 'Tusuk dan keluarkan tempat kartu SIM. Terangi lubang slot SIM dengan senter HP lain: jika terlihat titik stiker berwarna putih/perak berarti aman; jika titiknya berwarna merah/pink berarti HP pernah kemasukan air atau tercebur. (Khusus iPhone versi Amerika/LL seri 14 ke atas tidak memiliki lubang SIM karena memakai eSIM).',
      tag: 'Segel Air',
      tagType: 'critical'
    });

    bodyItems.push({
      id: 'b_back_glass',
      title: 'Kaca Bodi Belakang & Logo Apple',
      desc: 'Raba permukaan kaca bodi belakang, terutama di sekitar tonjolan kamera. Kaca belakang asli terasa sangat halus, menyatu rapat dengan bingkai samping, dan tidak ada bau lem menyengat bekas gantian kaca tiruan.',
      tag: 'Kaca Belakang',
      tagType: 'hardware'
    });

    // Camera items
    var cameraItems = [];
    var camTitle = '';
    var camDesc = '';
    if (model.cameraSetup === 'single') {
      camTitle = 'Kamera Utama Belakang';
      camDesc = 'Buka aplikasi Kamera bawaan. Pastikan tampilan gambar jernih, warna alami, dan tidak macet saat mengambil foto atau merekam video.';
    } else if (model.cameraSetup === 'dual') {
      camTitle = 'Kamera Sudut Lebar (0.5x) & Normal (1x)';
      camDesc = 'Buka aplikasi Kamera bawaan. Ketuk angka 0.5x (kamera lebar) dan 1x secara bergantian. Gambar harus berpindah seketika tanpa layar berkedip hitam, buram, atau jeda macet.';
    } else if (model.cameraSetup === 'triple-5x') {
      camTitle = 'Perpindahan Lensa Kamera (0.5x, 1x, 2x, hingga 5x Zoom)';
      camDesc = 'Buka aplikasi Kamera bawaan. Ketuk angka 0.5x, 1x, 2x, dan 5x zoom optik. Gambar harus berpindah mulus antar lensa tanpa layar berkedip hitam atau gambar menjadi kabur/goyang.';
    } else if (model.cameraSetup === 'triple-3x') {
      camTitle = 'Perpindahan Lensa Kamera (0.5x, 1x, 2x, hingga 3x Zoom)';
      camDesc = 'Buka aplikasi Kamera bawaan. Ketuk angka 0.5x, 1x, 2x, dan 3x zoom optik. Gambar harus berpindah mulus antar lensa tanpa layar berkedip hitam atau delay gambar.';
    } else {
      camTitle = 'Perpindahan Lensa Kamera (0.5x, 1x, hingga 2x Zoom)';
      camDesc = 'Buka aplikasi Kamera bawaan. Ketuk angka 0.5x, 1x, dan 2x zoom. Pastikan semua lensa kamera aktif dan gambarnya jernih.';
    }

    cameraItems.push({
      id: 'c_lensa_array',
      title: camTitle,
      desc: camDesc,
      tag: 'Lensa Kamera',
      tagType: 'hardware'
    });

    var afDesc = 'Arahkan kamera ke telapak tangan dari jarak 10 cm, lalu arahkan ke benda yang jauh. Kamera harus langsung mengunci fokus tajam seketika. ';
    if (model.id === 'ip14p' || model.id === 'ip14pm') {
      afDesc += 'Waspadai masalah getar pada iPhone 14 Pro: buka juga kamera lewat aplikasi Instagram atau TikTok, pastikan lensa kamera tidak bergetar sendiri atau berbunyi mendengung!';
    } else {
      afDesc += 'Pastikan saat memotret atau merekam video, gambar stabil dan kamera tidak bergetar abnormal.';
    }

    cameraItems.push({
      id: 'c_autofocus',
      title: 'Fokus Kamera & Gambar Stabil',
      desc: afDesc,
      tag: (model.id === 'ip14p' || model.id === 'ip14pm') ? 'Uji Getar OIS' : 'Fokus Kamera',
      tagType: (model.id === 'ip14p' || model.id === 'ip14pm') ? 'critical' : 'hardware'
    });

    if (model.hasLidar) {
      cameraItems.push({
        id: 'c_lidar',
        title: 'Sensor Pengukur Ruang (LiDAR Seri Pro)',
        desc: 'Buka aplikasi bawaan Apple bernama "Pengukur" (Measure). Arahkan kamera ke lantai atau meja. Titik pengukur harus langsung muncul dalam hitungan detik untuk membaca jarak benda secara instan.',
        tag: 'Sensor Pengukur',
        tagType: 'pro'
      });
    }

    if (model.hasMacro) {
      cameraItems.push({
        id: 'c_macro',
        title: 'Foto Jarak Sangat Dekat (Mode Makro)',
        desc: 'Dekatkan kamera ke tulisan kecil di kertas atau permukaan koin (jarak sekitar 2 cm). Ikon bunga kuning kecil akan otomatis menyala di pojok layar dan detail tulisan kecil langsung terlihat sangat tajam.',
        tag: 'Foto Makro',
        tagType: 'pro'
      });
    }

    if (model.has48MP) {
      cameraItems.push({
        id: 'c_48mp',
        title: 'Kualitas & Ketajaman Foto Resolusi Tinggi (48MP)',
        desc: 'Ambil satu foto di ruangan yang cukup cahaya. Setelah foto tersimpan, buka fotonya lalu perbesar (zoom) sedekat mungkin. Gambar harus tetap jernih dan detail kecilnya terbaca jelas tanpa buram pecah-pecah.',
        tag: 'Ketajaman Foto',
        tagType: 'hardware'
      });
    } else if (model.name.indexOf('Pro') !== -1 && (model.series === '12' || model.series === '13')) {
      cameraItems.push({
        id: 'c_proraw_12mp',
        title: 'Ketajaman Foto Asli Tanpa Kompresi (Apple ProRAW)',
        desc: 'Buka Pengaturan > Kamera > Format, aktifkan Apple ProRAW. Buka kamera, pastikan tombol "RAW" menyala di pojok kanan atas, lalu ambil foto. Hasil foto harus jernih dengan detail warna yang sangat alami.',
        tag: 'Apple ProRAW',
        tagType: 'pro'
      });
    }

    cameraItems.push({
      id: 'c_flash',
      title: 'Lampu Kilat (Flash) & Senter',
      desc: 'Buka Pusat Kontrol (usap layar dari pojok kanan atas ke bawah) lalu nyalakan senter. Coba juga ambil foto dengan lampu kilat menyala. Lampu harus menyala terang stabil tanpa berkedip-kedip.',
      tag: 'Lampu Flash',
      tagType: 'hardware'
    });

    if (model.biometrics === 'face-id') {
      cameraItems.push({
        id: 'c_truedepth',
        title: 'Kamera Depan & Sensor Wajah (Face ID)',
        desc: 'Buka kamera depan untuk tes selfie jernih. Lalu buka menu Pengaturan > Face ID & Kode Sandi dan coba daftarkan wajah Anda. Sensor harus mengenali wajah Anda tanpa muncul tulisan peringatan "Face ID Dinonaktifkan".',
        tag: 'Face ID Wajah',
        tagType: 'critical'
      });
    } else {
      cameraItems.push({
        id: 'c_front_cam',
        title: 'Kamera Depan (Selfie)',
        desc: 'Buka kamera depan, pastikan foto selfie jernih, tidak ada noda debu di balik kaca layar depan, dan mikrofon depan merekam suara dengan jelas.',
        tag: 'Kamera Depan',
        tagType: 'hardware'
      });
    }

    // Model items
    var modelItems = [
      {
        id: 'm_model_num',
        title: 'Kecocokan Tipe iPhone di Sistem',
        desc: 'Buka menu Pengaturan > Umum > Mengenai. Pastikan nama model yang tertulis di layar memang benar sama persis dengan tipe fisik iPhone yang sedang Anda pegang.',
        tag: 'Tipe Model',
        tagType: 'hardware'
      },
      {
        id: 'm_region_code',
        title: 'Asal Negara HP & Keamanan Sinyal (PA/A vs Inter)',
        desc: 'Lihat 2 huruf sebelum tanda garis miring pada Nomor Model (contoh: PA/A). Kode PA/A atau ID/A adalah garansi resmi Indonesia (paling aman). Jika kodenya dari luar negeri (seperti LL/A atau ZP/A), wajib masukkan kartu SIM Anda untuk membuktikan sinyal telepon dan internetnya tidak terblokir.',
        tag: 'Garansi & Sinyal',
        tagType: 'critical'
      }
    ];

    // Screen items
    var screenItems = [];
    screenItems.push({
      id: 's_parts_history',
      title: 'Laporan Riwayat Servis dari Apple',
      desc: 'Buka menu Pengaturan > Umum > Mengenai. Lihat apakah ada bagian bertuliskan "Riwayat Komponen dan Servis". Jika muncul tulisan "Unknown Part (Komponen Tidak Dikenal)" dengan tanda seru, berarti komponen tersebut sudah pernah diganti suku cadang tiruan / bukan resmi Apple.',
      tag: 'Riwayat Servis',
      tagType: 'critical'
    });

    screenItems.push({
      id: 's_true_tone',
      title: 'Penyetel Warna Layar Otomatis (True Tone)',
      desc: 'Tarik layar dari pojok kanan atas ke bawah untuk membuka Pusat Kontrol. Tekan dan tahan tombol pengatur kecerahan layar (bar cahaya). Pastikan tombol bundar bertuliskan "True Tone" ada di pojok kanan bawah. Jika tombol True Tone hilang, hampir pasti layar sudah pernah diganti.',
      tag: 'True Tone Layar',
      tagType: 'critical'
    });

    if (model.displayType === 'oled-120') {
      if (model.id === 'ip13p' || model.id === 'ip13pm') {
        screenItems.push({
          id: 's_wsod_13p',
          title: '⚠️ Uji Layar Putih (Khusus Seri 13 Pro)',
          desc: 'Buka gambar putih polos dengan layar paling terang selama 1–2 menit. Pastikan layar tetap jernih dan TIDAK mendadak berubah menjadi putih/hijau polos tanpa gambar sama sekali (masalah layar paling sering terjadi pada seri 13 Pro).',
          tag: 'Uji Layar Putih',
          tagType: 'critical'
        });
      } else {
        screenItems.push({
          id: 's_promotion',
          title: 'Kelancaran Gerakan Layar (120Hz)',
          desc: 'Geser menu Pengaturan naik-turun dengan cepat. Layar harus terasa sangat licin, responsif, dan tidak ada gerakan yang patah-patah atau tersendat.',
          tag: 'Layar 120Hz',
          tagType: 'pro'
        });
      }
    } else if (model.displayType === 'lcd') {
      screenItems.push({
        id: 's_lcd_lightbleed',
        title: 'Kecerahan & Warna Layar Bersih',
        desc: 'Buka gambar putih dan hitam polos. Pastikan pencahayaan layar rata, tidak ada bintik putih terang (white spot), dan tidak ada warna kekuningan di sudut-sudut layar.',
        tag: 'Layar Bersih',
        tagType: 'hardware'
      });
    } else {
      screenItems.push({
        id: 's_oled_burnin',
        title: 'Kejernihan Layar & Bebas Bayangan Bekas (Burn-in)',
        desc: 'Buka gambar putih polos dan abu-abu polos. Amati seluruh permukaan layar: pastikan tidak ada bayangan samar keyboard atau logo aplikasi yang membekas permanen di layar.',
        tag: 'Layar Jernih',
        tagType: 'hardware'
      });
    }

    if (model.displayCutout === 'dynamic-island') {
      screenItems.push({
        id: 's_dynamic_island',
        title: 'Pulau Notifikasi Layar (Dynamic Island)',
        desc: 'Buka aplikasi Jam, pasang Timer 1 menit, lalu kembali ke layar utama. Lingkaran hitam di atas kamera harus membesar menampilkan hitungan mundur. Ketuk pulau tersebut untuk membuka aplikasinya.',
        tag: 'Dynamic Island',
        tagType: 'pro'
      });
    }

    screenItems.push({
      id: 's_kerataan_layar',
      title: 'Kerapatan Pasang Layar dengan Bingkai',
      desc: 'Amati pinggiran layar dari samping setinggi mata. Layar asli pabrik posisinya rata dan presisi dengan bingkai bodi. Jika layar terasa sedikit menonjol ke atas atau terlihat ada bekas lem hitam di celahnya, berarti layar pernah dilepas/diganti.',
      tag: 'Kerapatan Layar',
      tagType: 'hardware'
    });

    screenItems.push({
      id: 's_baret_kaca',
      title: 'Goresan Kaca & Debu di Bawah Layar',
      desc: 'Matikan layar HP, lalu sinari permukaannya dengan senter HP lain dari arah miring. Pastikan tidak ada baret dalam yang terasa kasar di kuku, dan tidak ada butiran debu yang terperangkap di bawah kaca layar.',
      tag: 'Kaca Layar',
      tagType: 'hardware'
    });

    screenItems.push({
      id: 's_touch_response',
      title: 'Kelancaran Sentuhan Layar di Seluruh Sudut',
      desc: 'Tekan dan tahan salah satu ikon aplikasi di layar utama sampai semua ikon bergoyang. Sambil tetap ditekan, seret ikon tersebut mengitari seluruh sudut layar dan bagian bawah dekat keyboard. Ikon tidak boleh lepas dari jari Anda di area mana pun.',
      tag: 'Sentuhan Layar',
      tagType: 'critical'
    });

    if (model.hasNativeCycleCount) {
      screenItems.push({
        id: 's_battery_cycle',
        title: 'Jumlah Pemakaian Baterai (Siklus / Cycle Count)',
        desc: 'Buka menu Pengaturan > Baterai > Kesehatan & Pengisian Baterai. Lihat angka "Jumlah Siklus". HP yang sudah dipakai 1 tahun normalnya memiliki 250–500 siklus. Jika penjual mengaku HP second pemakaian lama tapi siklusnya baru belasan kali, waspadai baterai sudah di-reset/diakali.',
        tag: 'Siklus Baterai',
        tagType: 'critical'
      });
    } else {
      screenItems.push({
        id: 's_battery_health',
        title: 'Kesehatan Baterai (Battery Health)',
        desc: 'Buka menu Pengaturan > Baterai > Kesehatan Baterai. Pastikan persentase kapasitas maksimum masih terbaca jelas (idealnya di atas 80%). Waspada jika angkanya hanya berupa tanda strip (-) atau muncul tulisan "Pesan Penting Mengenai Baterai", itu tanda baterai tiruan/diganti non-resmi.',
        tag: 'Kesehatan Baterai',
        tagType: 'critical'
      });
    }
    return {
      body: bodyItems,
      camera: cameraItems,
      model: modelItems,
      screen: screenItems
    };
  }

  // ==========================================================
  // SVG DIAGRAM GENERATOR FOR ALL CHECKPOINTS
  // ==========================================================
  function svg(viewBox, inner){
    return '<svg viewBox="'+viewBox+'" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">'+inner+'</svg>';
  }

  function settingsNav(header, rows, hi){
    var y0=46, rh=27;
    var rowsSvg = rows.map(function(r,i){
      var ry = y0 + i*rh;
      var isHl = i===hi;
      return '<g>'+
        (isHl ? '<rect x="12" y="'+(ry-18)+'" width="196" height="24" rx="6" fill="#EFF6FF" stroke="#0066FF" stroke-width="1.2" class="hl-pulse"/>' : '')+
        '<text x="26" y="'+ry+'" font-size="10" fill="'+(isHl?'#0066FF':'#475569')+'" font-family="Plus Jakarta Sans, sans-serif" font-weight="'+(isHl?'700':'500')+'">'+r+'</text>'+
        '<text x="203" y="'+ry+'" font-size="11" fill="#94A3B8" text-anchor="end">\u203A</text>'+
      '</g>';
    }).join('');
    return '<rect x="10" y="10" width="200" height="150" rx="14" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>'+
      '<text x="110" y="27" font-size="10" text-anchor="middle" fill="#0F172A" font-family="Plus Jakarta Sans, sans-serif" font-weight="700">'+header+'</text>'+
      '<line x1="10" y1="36" x2="210" y2="36" stroke="#E2E8F0" stroke-width="1"/>'+
      rowsSvg;
  }

  var APPLE_LOGO = 
    '<g transform="translate(62, 136) scale(0.82)">'+
      '<path d="M15.5 10.2c-.1-2.5 2-3.7 2.1-3.8-1.2-1.7-3-2-3.6-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.3.9 1.3 1.9 2.7 3.3 2.6 1.3-.1 1.9-.9 3.5-.9s2.1.9 3.5.8c1.4 0 2.4-1.3 3.2-2.6 1-1.5 1.4-3 1.5-3.1-.1-.1-2.8-1.1-2.8-4.2zM12.7 3c.7-.9 1.2-2.1 1.1-3.3-1 .1-2.3.7-3 1.6-.6.8-1.2 2-1 3.2 1.2.1 2.2-.6 2.9-1.5z" fill="#94A3B8"/>'+
    '</g>';

  var CAMERA_BUMP_PRO =
    '<rect x="24" y="18" width="48" height="48" rx="14" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.5"/>'+
    // Lensa 1 (Ultra Wide - kiri atas)
    '<circle cx="36" cy="30" r="9" fill="#CBD5E1" stroke="#64748B" stroke-width="1.2"/>'+
    '<circle cx="36" cy="30" r="6.5" fill="#0F172A"/>'+
    '<circle cx="36" cy="30" r="3.5" fill="#1E293B"/>'+
    '<circle cx="34.8" cy="28.8" r="1.2" fill="#38BDF8" opacity="0.85"/>'+
    // Lensa 2 (Main Wide - kiri bawah)
    '<circle cx="36" cy="54" r="9" fill="#CBD5E1" stroke="#64748B" stroke-width="1.2"/>'+
    '<circle cx="36" cy="54" r="6.5" fill="#0F172A"/>'+
    '<circle cx="36" cy="54" r="3.5" fill="#1E293B"/>'+
    '<circle cx="34.8" cy="52.8" r="1.2" fill="#38BDF8" opacity="0.85"/>'+
    // Lensa 3 (Telephoto - kanan tengah)
    '<circle cx="60" cy="42" r="9" fill="#CBD5E1" stroke="#64748B" stroke-width="1.2"/>'+
    '<circle cx="60" cy="42" r="6.5" fill="#0F172A"/>'+
    '<circle cx="60" cy="42" r="3.5" fill="#1E293B"/>'+
    '<circle cx="58.8" cy="40.8" r="1.2" fill="#38BDF8" opacity="0.85"/>'+
    // True Tone Flash (kanan atas)
    '<circle cx="60" cy="24" r="4.5" fill="#FEF3C7" stroke="#CBD5E1" stroke-width="1"/>'+
    '<circle cx="60" cy="24" r="2.2" fill="#F59E0B"/>'+
    // LiDAR Scanner (kanan bawah)
    '<circle cx="60" cy="58" r="4.5" fill="#0F172A" stroke="#475569" stroke-width="1"/>'+
    '<circle cx="60" cy="58" r="2.8" fill="#020617"/>'+
    // Mic hole
    '<circle cx="48" cy="60" r="1" fill="#475569"/>';

  var BACK =
    '<rect x="14" y="8" width="112" height="244" rx="26" fill="#F8FAFC" stroke="#64748B" stroke-width="2"/>'+
    CAMERA_BUMP_PRO +
    APPLE_LOGO;

  var FRONT =
    '<rect x="14" y="8" width="112" height="244" rx="26" fill="#F8FAFC" stroke="#64748B" stroke-width="2"/>'+
    '<rect x="22" y="16" width="96" height="228" rx="18" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>'+
    '<rect x="52" y="22" width="36" height="8" rx="4" fill="#0F172A"/>'+
    '<rect x="57" y="238" width="26" height="3" rx="1.5" fill="#CBD5E1"/>';

  var DIAGRAMS = {
    // Body Diagrams
    b_chassis: svg('0 0 140 110',
      '<path d="M20 60 V32 Q20 20 32 20 H60" fill="none" stroke="#64748B" stroke-width="3" stroke-linecap="round"/>'+
      '<path d="M30 56 V40 Q30 30 40 30 H56" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round"/>'+
      '<line x1="24" y1="24" x2="30" y2="30" stroke="#0066FF" stroke-width="2.5" class="hl-pulse"/>'+
      '<circle cx="27" cy="27" r="3" fill="#0066FF" class="hl-pulse"/>'+
      '<text x="70" y="90" font-size="9" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="600">kerataan sasis</text>'),
    
    b_pentalobe: svg('0 0 220 90',
      '<rect x="10" y="20" width="200" height="50" rx="16" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>'+
      '<rect x="95" y="38" width="30" height="14" rx="4" fill="none" stroke="#CBD5E1" stroke-width="1.5"/>'+
      '<circle cx="34" cy="45" r="1.6" fill="#CBD5E1"/><circle cx="44" cy="45" r="1.6" fill="#CBD5E1"/><circle cx="54" cy="45" r="1.6" fill="#CBD5E1"/>'+
      '<circle cx="166" cy="45" r="1.6" fill="#CBD5E1"/><circle cx="176" cy="45" r="1.6" fill="#CBD5E1"/><circle cx="186" cy="45" r="1.6" fill="#CBD5E1"/>'+
      '<circle cx="78" cy="45" r="5" class="hl-ring hl-pulse"/><circle cx="78" cy="45" r="1.2" fill="#0066FF"/>'+
      '<circle cx="142" cy="45" r="5" class="hl-ring hl-pulse"/><circle cx="142" cy="45" r="1.2" fill="#0066FF"/>'+
      '<text x="110" y="14" font-size="9" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="600">baut pentalobe</text>'),

    b_port_usbc: svg('0 0 200 90',
      '<rect x="10" y="20" width="180" height="50" rx="16" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>'+
      '<rect x="75" y="36" width="50" height="18" rx="9" fill="#EFF6FF" stroke="#0066FF" stroke-width="2" class="hl-pulse"/>'+
      '<rect x="87" y="43" width="26" height="4" rx="2" fill="#0066FF"/>'+
      '<text x="100" y="14" font-size="9" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="600">port USB-C</text>'),

    b_port_lightning: svg('0 0 200 90',
      '<rect x="10" y="20" width="180" height="50" rx="16" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>'+
      '<rect x="78" y="38" width="44" height="14" rx="4" fill="#EFF6FF" stroke="#0066FF" stroke-width="2" class="hl-pulse"/>'+
      '<line x1="88" y1="45" x2="112" y2="45" stroke="#0066FF" stroke-width="2"/>'+
      '<text x="100" y="14" font-size="9" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="600">port Lightning 8-pin</text>'),

    b_action_btn: svg('0 0 100 240',
      '<rect x="35" y="10" width="30" height="220" rx="14" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>'+
      '<rect x="16" y="44" width="19" height="18" rx="4" fill="#EFF6FF" stroke="#0066FF" stroke-width="2" class="hl-pulse"/>'+
      '<rect x="16" y="74" width="19" height="26" rx="4" fill="#CBD5E1"/>'+
      '<rect x="16" y="106" width="19" height="26" rx="4" fill="#CBD5E1"/>'+
      '<text x="50" y="170" font-size="8.5" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="600">Action Btn</text>'),

    b_mute_switch: svg('0 0 100 240',
      '<rect x="35" y="10" width="30" height="220" rx="14" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>'+
      '<rect x="16" y="46" width="19" height="12" rx="3" fill="#FFFBEB" stroke="#D97706" stroke-width="1.8" class="hl-pulse"/>'+
      '<circle cx="22" cy="52" r="2" fill="#D97706"/>'+
      '<rect x="16" y="72" width="19" height="26" rx="4" fill="#CBD5E1"/>'+
      '<rect x="16" y="104" width="19" height="26" rx="4" fill="#CBD5E1"/>'+
      '<text x="50" y="170" font-size="8.5" text-anchor="middle" fill="#D97706" font-family="JetBrains Mono, monospace" font-weight="600">Mute Switch</text>'),

    b_home_btn: svg('0 0 140 240',
      '<rect x="14" y="8" width="112" height="224" rx="22" fill="#FFFFFF" stroke="#64748B" stroke-width="2.2"/>'+
      '<rect x="22" y="28" width="96" height="148" rx="4" fill="#0F172A"/>'+
      // Touch ID Sensor Ring
      '<circle cx="70" cy="202" r="16" fill="#F8FAFC" stroke="#0066FF" stroke-width="2.5" class="hl-pulse"/>'+
      '<circle cx="70" cy="202" r="12" fill="none" stroke="#CBD5E1" stroke-width="1.2"/>'+
      '<path d="M64 198 Q70 194 76 198 Q70 206 64 198" fill="none" stroke="#0066FF" stroke-width="1.2"/>'+
      '<circle cx="70" cy="202" r="3" fill="#0066FF" opacity="0.4"/>'+
      '<text x="70" y="105" font-size="9" text-anchor="middle" fill="#64748B" font-family="JetBrains Mono, monospace">Retina LCD</text>'+
      '<text x="70" y="228" font-size="8" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="700">TOUCH ID HOME</text>'),

    b_camera_ctrl: svg('0 0 120 240',
      '<rect x="40" y="10" width="36" height="220" rx="16" fill="#F8FAFC" stroke="#64748B" stroke-width="2.2"/>'+
      // Flush recessed plain sapphire crystal button (NO text printed on glass)
      '<rect x="70" y="130" width="12" height="46" rx="6" fill="#F1F5F9" stroke="#334155" stroke-width="1.5"/>'+
      '<rect x="72" y="133" width="8" height="40" rx="4" fill="#CBD5E1" stroke="#0066FF" stroke-width="1.8" class="hl-pulse"/>'+
      // Side gesture arrows cue outside the phone body
      '<path d="M102 135 L102 171" stroke="#0066FF" stroke-width="1.8" stroke-dasharray="2 2"/>'+
      '<polygon points="102,130 98,137 106,137" fill="#0066FF"/>'+
      '<polygon points="102,176 98,169 106,169" fill="#0066FF"/>'+
      '<text x="58" y="60" font-size="9" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="700">Camera Control</text>'+
      '<text x="58" y="74" font-size="7.5" text-anchor="middle" fill="#64748B" font-family="JetBrains Mono, monospace">kristal safir polos</text>'+
      '<text x="58" y="86" font-size="7" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace">‹ geser sentuh zoom ›</text>'),

    b_sim_tray: svg('0 0 200 100',
      '<rect x="10" y="30" width="180" height="30" rx="10" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>'+
      '<rect x="140" y="20" width="50" height="16" rx="3" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>'+
      '<circle cx="150" cy="28" r="2" fill="#94A3B8"/>'+
      '<circle cx="175" cy="28" r="5" class="hl-ring hl-pulse"/><circle cx="175" cy="28" r="1.5" fill="#0066FF"/>'+
      '<text x="165" y="55" font-size="9" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="600">slot SIM & LCI</text>'),

    b_back_glass: svg('0 0 140 260',
      BACK+
      '<rect x="14" y="8" width="112" height="244" rx="26" fill="none" stroke="#0066FF" stroke-width="2.5" class="hl-pulse"/>'+
      '<text x="70" y="215" font-size="8.5" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="700">KACA BELAKANG MATTE</text>'+
      '<text x="70" y="228" font-size="7.5" text-anchor="middle" fill="#64748B" font-family="JetBrains Mono, monospace">cek retak & lem ganti</text>'),

    // Camera Diagrams (100% Authentic Clean iPhone Pro Triangular Layout)
    c_lensa_array: svg('0 0 160 160',
      '<rect x="8" y="8" width="144" height="144" rx="32" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>'+
      // Lensa 1: Ultra Wide (Top-Left)
      '<circle cx="48" cy="48" r="23" fill="#E2E8F0" stroke="#64748B" stroke-width="2"/>'+
      '<circle cx="48" cy="48" r="17" fill="#0F172A"/>'+
      '<circle cx="48" cy="48" r="11" fill="#020617"/>'+
      '<path d="M42 42 A 10 10 0 0 1 52 38" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" opacity="0.9"/>'+
      '<circle cx="43" cy="43" r="1.5" fill="#FFFFFF"/>'+
      '<circle cx="48" cy="48" r="25" fill="none" stroke="#0066FF" stroke-width="1.8" class="hl-pulse"/>'+
      // Lensa 2: Main Wide (Bottom-Left)
      '<circle cx="48" cy="108" r="23" fill="#E2E8F0" stroke="#64748B" stroke-width="2"/>'+
      '<circle cx="48" cy="108" r="17" fill="#0F172A"/>'+
      '<circle cx="48" cy="108" r="11" fill="#020617"/>'+
      '<path d="M42 102 A 10 10 0 0 1 52 98" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" opacity="0.9"/>'+
      '<circle cx="43" cy="103" r="1.5" fill="#FFFFFF"/>'+
      '<circle cx="48" cy="108" r="25" fill="none" stroke="#0066FF" stroke-width="1.8" class="hl-pulse"/>'+
      // Lensa 3: Telephoto (Middle-Right)
      '<circle cx="112" cy="78" r="23" fill="#E2E8F0" stroke="#64748B" stroke-width="2"/>'+
      '<circle cx="112" cy="78" r="17" fill="#0F172A"/>'+
      '<circle cx="112" cy="78" r="11" fill="#020617"/>'+
      '<path d="M106 72 A 10 10 0 0 1 116 68" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" opacity="0.9"/>'+
      '<circle cx="107" cy="73" r="1.5" fill="#FFFFFF"/>'+
      '<circle cx="112" cy="78" r="25" fill="none" stroke="#0066FF" stroke-width="1.8" class="hl-pulse"/>'+
      // True Tone Flash (Top-Right)
      '<circle cx="112" cy="34" r="10" fill="#FEF3C7" stroke="#CBD5E1" stroke-width="1.2"/>'+
      '<circle cx="112" cy="34" r="5" fill="#F59E0B"/>'+
      // LiDAR Scanner (Bottom-Right)
      '<circle cx="112" cy="122" r="10" fill="#0F172A" stroke="#475569" stroke-width="1.2"/>'+
      '<circle cx="112" cy="122" r="6" fill="#020617"/>'+
      // Mic hole
      '<circle cx="82" cy="122" r="2.2" fill="#475569"/>'+
      // Bottom Label Banner (Clean, Outside Lenses)
      '<rect x="14" y="137" width="132" height="15" rx="4" fill="#0F172A"/>'+
      '<text x="80" y="148" font-size="7" text-anchor="middle" fill="#93C5FD" font-family="JetBrains Mono, monospace" font-weight="700">3 LENSA KAMERA PRO</text>'),

    c_autofocus: svg('0 0 160 150',
      '<rect x="10" y="10" width="140" height="100" rx="12" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>'+
      '<path d="M55 45 h-10 v10" fill="none" stroke="#0066FF" stroke-width="2.5" class="hl-pulse"/>'+
      '<path d="M105 45 h10 v10" fill="none" stroke="#0066FF" stroke-width="2.5" class="hl-pulse"/>'+
      '<path d="M55 75 h-10 v-10" fill="none" stroke="#0066FF" stroke-width="2.5" class="hl-pulse"/>'+
      '<path d="M105 75 h10 v-10" fill="none" stroke="#0066FF" stroke-width="2.5" class="hl-pulse"/>'+
      '<circle cx="80" cy="60" r="3" fill="#0066FF"/>'+
      '<circle cx="80" cy="130" r="10" fill="none" stroke="#64748B" stroke-width="2"/>'),

    c_lidar: svg('0 0 160 160',
      '<rect x="8" y="8" width="144" height="144" rx="32" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>'+
      // 3 Lenses background (Subtle, Clean)
      '<circle cx="48" cy="48" r="23" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.8"/>'+
      '<circle cx="48" cy="48" r="16" fill="#1E293B"/>'+
      '<circle cx="48" cy="108" r="23" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.8"/>'+
      '<circle cx="48" cy="108" r="16" fill="#1E293B"/>'+
      '<circle cx="112" cy="78" r="23" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.8"/>'+
      '<circle cx="112" cy="78" r="16" fill="#1E293B"/>'+
      '<circle cx="112" cy="34" r="10" fill="#FEF3C7" stroke="#CBD5E1" stroke-width="1"/>'+
      // Highlighted LiDAR Scanner (Bottom-Right)
      '<circle cx="112" cy="122" r="22" fill="none" stroke="#0066FF" stroke-width="1.5" stroke-dasharray="3 3" class="hl-pulse"/>'+
      '<circle cx="112" cy="122" r="15" fill="rgba(0, 102, 255, 0.18)"/>'+
      '<circle cx="112" cy="122" r="10" fill="#0F172A" stroke="#0066FF" stroke-width="2.2" class="hl-pulse"/>'+
      '<circle cx="112" cy="122" r="5" fill="#020617"/>'+
      // Bottom Label Banner (Clean, Outside Lenses)
      '<rect x="14" y="137" width="132" height="15" rx="4" fill="#0F172A"/>'+
      '<text x="80" y="148" font-size="7" text-anchor="middle" fill="#60A5FA" font-family="JetBrains Mono, monospace" font-weight="700">LiDAR 3D SCANNER</text>'),

    c_macro: svg('0 0 140 140',
      '<rect x="10" y="10" width="120" height="120" rx="12" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>'+
      '<circle cx="70" cy="70" r="22" fill="none" stroke="#0066FF" stroke-width="2" class="hl-pulse"/>'+
      '<circle cx="70" cy="70" r="8" fill="#F59E0B"/>'+
      '<circle cx="70" cy="50" r="6" fill="#F59E0B" opacity="0.6"/>'+
      '<circle cx="70" cy="90" r="6" fill="#F59E0B" opacity="0.6"/>'+
      '<circle cx="50" cy="70" r="6" fill="#F59E0B" opacity="0.6"/>'+
      '<circle cx="90" cy="70" r="6" fill="#F59E0B" opacity="0.6"/>'+
      '<text x="70" y="118" font-size="8.5" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="600">makro 2 cm</text>'),

    c_48mp: svg('0 0 150 120',
      '<rect x="10" y="10" width="130" height="100" rx="10" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>'+
      '<rect x="35" y="28" width="80" height="50" rx="4" fill="#EFF6FF" stroke="#0066FF" stroke-width="1.8" class="hl-pulse"/>'+
      '<text x="75" y="58" font-size="13" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="700">48 MP</text>'+
      '<text x="75" y="98" font-size="8.5" text-anchor="middle" fill="#64748B" font-family="JetBrains Mono, monospace">sensor crop 2x</text>'),

    c_proraw_12mp: svg('0 0 150 120',
      '<rect x="10" y="10" width="130" height="100" rx="10" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>'+
      '<rect x="35" y="28" width="80" height="50" rx="4" fill="#EFF6FF" stroke="#0066FF" stroke-width="1.8" class="hl-pulse"/>'+
      '<text x="75" y="58" font-size="12" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="700">ProRAW</text>'+
      '<text x="75" y="98" font-size="8.5" text-anchor="middle" fill="#64748B" font-family="JetBrains Mono, monospace">12MP DNG</text>'),

    c_flash: svg('0 0 160 160',
      '<rect x="8" y="8" width="144" height="144" rx="32" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>'+
      // 3 Lenses background (Clean, Natural)
      '<circle cx="48" cy="48" r="23" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.8"/>'+
      '<circle cx="48" cy="48" r="16" fill="#1E293B"/>'+
      '<circle cx="48" cy="108" r="23" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.8"/>'+
      '<circle cx="48" cy="108" r="16" fill="#1E293B"/>'+
      '<circle cx="112" cy="78" r="23" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.8"/>'+
      '<circle cx="112" cy="78" r="16" fill="#1E293B"/>'+
      '<circle cx="112" cy="122" r="10" fill="#0F172A" stroke="#475569" stroke-width="1"/>'+
      // Highlighted True Tone Flash (Top-Right)
      '<circle cx="112" cy="34" r="24" fill="rgba(245, 158, 11, 0.22)"/>'+
      '<circle cx="112" cy="34" r="14" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2.2" class="hl-pulse"/>'+
      '<circle cx="112" cy="34" r="6" fill="#F59E0B"/>'+
      '<line x1="112" y1="14" x2="112" y2="7" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>'+
      '<line x1="132" y1="34" x2="139" y2="34" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>'+
      '<line x1="126" y1="20" x2="132" y2="14" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>'+
      '<line x1="98" y1="20" x2="92" y2="14" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>'+
      // Bottom Label Banner (Clean, Outside Lenses)
      '<rect x="14" y="137" width="132" height="15" rx="4" fill="#0F172A"/>'+
      '<text x="80" y="148" font-size="7" text-anchor="middle" fill="#FBBF24" font-family="JetBrains Mono, monospace" font-weight="700">TRUE TONE FLASH (DUAL-LED)</text>'),

    c_truedepth: svg('0 0 140 260',
      FRONT+
      '<rect x="53" y="18" width="34" height="16" rx="8" fill="none" class="hl-ring hl-pulse"/>'+
      '<text x="70" y="50" font-size="8" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="600">TrueDepth</text>'),

    c_front_cam: svg('0 0 140 240',
      FRONT+
      '<circle cx="70" cy="26" r="5" fill="#0066FF" class="hl-pulse"/>'+
      '<text x="70" y="48" font-size="8" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="600">FaceTime Cam</text>'),

    // Model Diagrams (Clean, Authentic iOS UI - No AI Hallucinations)
    m_model_num: svg('0 0 220 170',
      '<rect x="8" y="8" width="204" height="154" rx="14" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>'+
      '<text x="22" y="26" font-size="10" fill="#94A3B8" font-family="Inter, sans-serif">‹ Umum</text>'+
      '<text x="110" y="26" font-size="11" fill="#FFFFFF" font-family="Inter, sans-serif" font-weight="700" text-anchor="middle">Mengenai</text>'+
      '<line x1="8" y1="36" x2="212" y2="36" stroke="#1E293B" stroke-width="1"/>'+
      '<text x="22" y="54" font-size="9.5" fill="#94A3B8" font-family="Inter, sans-serif">Nama Model</text>'+
      '<text x="198" y="54" font-size="10" fill="#FFFFFF" font-family="Inter, sans-serif" font-weight="600" text-anchor="end">iPhone</text>'+
      '<line x1="22" y1="62" x2="198" y2="62" stroke="#1E293B" stroke-width="0.8"/>'+
      '<rect x="14" y="68" width="192" height="26" rx="6" fill="#1E3A8A" stroke="#3B82F6" stroke-width="1.2" class="hl-pulse"/>'+
      '<text x="22" y="85" font-size="9.5" fill="#93C5FD" font-family="Inter, sans-serif" font-weight="600">Nomor Model</text>'+
      '<text x="198" y="85" font-size="10.5" fill="#FFFFFF" font-family="JetBrains Mono, monospace" font-weight="700" text-anchor="end">MQ9C3<tspan fill="#60A5FA">PA/A</tspan></text>'+
      '<line x1="22" y1="102" x2="198" y2="102" stroke="#1E293B" stroke-width="0.8"/>'+
      '<text x="22" y="118" font-size="9.5" fill="#94A3B8" font-family="Inter, sans-serif">Nomor Seri</text>'+
      '<text x="198" y="118" font-size="9.5" fill="#CBD5E1" font-family="JetBrains Mono, monospace" text-anchor="end">F2LYD982K7</text>'+
      '<rect x="20" y="132" width="180" height="22" rx="5" fill="#064E3B" stroke="#10B981" stroke-width="1"/>'+
      '<text x="110" y="147" font-size="8.5" fill="#6EE7B7" font-family="Inter, sans-serif" font-weight="700" text-anchor="middle">✓ Resmi Indonesia (PA/A, ID/A)</text>'),

    m_region_code: svg('0 0 220 110',
      '<rect x="8" y="8" width="204" height="94" rx="12" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>'+
      '<text x="20" y="32" font-size="10" fill="#94A3B8" font-family="Inter, sans-serif">Nomor Model iOS</text>'+
      '<rect x="18" y="44" width="184" height="34" rx="8" fill="#1E293B" stroke="#3B82F6" stroke-width="1.5"/>'+
      '<text x="32" y="67" font-size="16" fill="#FFFFFF" font-family="JetBrains Mono, monospace" font-weight="600">MQ9C3<tspan fill="#60A5FA" font-weight="700">PA</tspan>/A</text>'+
      '<rect x="146" y="52" width="46" height="18" rx="4" fill="#1E3A8A" stroke="#60A5FA" stroke-width="1" class="hl-pulse"/>'+
      '<text x="169" y="65" font-size="8.5" fill="#BFDBFE" font-family="JetBrains Mono, monospace" font-weight="700" text-anchor="middle">INDONESIA</text>'+
      '<text x="110" y="94" font-size="8.5" fill="#10B981" font-family="Inter, sans-serif" font-weight="600" text-anchor="middle">PA/A atau ID/A = Garansi Resmi iBox / Digimap</text>'),

    m_imei: svg('0 0 220 120',
      '<rect x="8" y="8" width="204" height="104" rx="12" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>'+
      '<text x="20" y="28" font-size="10" fill="#94A3B8" font-family="Inter, sans-serif">Status IMEI Kemenperin / Bea Cukai</text>'+
      '<rect x="18" y="38" width="184" height="30" rx="6" fill="#1E293B" stroke="#475569" stroke-width="1"/>'+
      '<text x="28" y="58" font-size="11" fill="#FFFFFF" font-family="JetBrains Mono, monospace" font-weight="600">35 889210 472918 3</text>'+
      '<rect x="18" y="76" width="184" height="26" rx="6" fill="#064E3B" stroke="#10B981" stroke-width="1"/>'+
      '<text x="110" y="93" font-size="9" fill="#6EE7B7" font-family="Inter, sans-serif" font-weight="700" text-anchor="middle">✓ IMEI Terdaftar di Database Kemenperin</text>'),

    // Screen Diagrams
    s_parts_history: svg('0 0 220 170',
      '<rect x="8" y="8" width="204" height="154" rx="14" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>'+
      '<text x="110" y="26" font-size="10.5" fill="#FFFFFF" font-family="Inter, sans-serif" font-weight="700" text-anchor="middle">Riwayat Komponen & Servis</text>'+
      '<line x1="8" y1="36" x2="212" y2="36" stroke="#1E293B" stroke-width="1"/>'+
      // Genuine Part Box
      '<rect x="16" y="44" width="188" height="38" rx="8" fill="#14532D" stroke="#22C55E" stroke-width="1"/>'+
      '<text x="28" y="60" font-size="10" fill="#FFFFFF" font-family="Inter, sans-serif" font-weight="600">Layar (Display)</text>'+
      '<text x="28" y="73" font-size="8.5" fill="#86EFAC" font-family="Inter, sans-serif">✓ Komponen Asli Apple (Genuine)</text>'+
      // Unknown Part Box
      '<rect x="16" y="90" width="188" height="48" rx="8" fill="#7F1D1D" stroke="#EF4444" stroke-width="1.2" class="hl-pulse"/>'+
      '<text x="28" y="107" font-size="9.5" fill="#FCA5A5" font-family="Inter, sans-serif" font-weight="700">⚠️ Pesan Penting Mengenai Layar</text>'+
      '<text x="28" y="121" font-size="8.5" fill="#FECACA" font-family="Inter, sans-serif">Komponen Tidak Dikenal (Unknown Part)</text>'+
      '<text x="28" y="132" font-size="7.5" fill="#F87171" font-family="Inter, sans-serif">Indikasi layar sudah pernah diganti non-resmi</text>'),

    s_true_tone: svg('0 0 140 200',
      '<rect x="10" y="10" width="120" height="180" rx="12" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>'+
      '<rect x="40" y="30" width="60" height="100" rx="30" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1.5"/>'+
      '<rect x="40" y="60" width="60" height="70" rx="30" fill="#0066FF" opacity="0.85"/>'+
      '<circle cx="70" cy="155" r="12" fill="#EFF6FF" stroke="#0066FF" stroke-width="1.8" class="hl-pulse"/>'+
      '<text x="70" y="185" font-size="8" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="600">True Tone</text>'),

    s_promotion: svg('0 0 160 120',
      '<rect x="10" y="10" width="140" height="100" rx="10" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>'+
      '<path d="M20 60 Q 40 20, 60 60 T 100 60 T 140 60" fill="none" stroke="#0066FF" stroke-width="2.5" class="hl-pulse"/>'+
      '<text x="80" y="94" font-size="11" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="700">120 Hz ProMotion</text>'),

    s_wsod_13p: svg('0 0 160 220',
      '<defs><linearGradient id="wsodGlow" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#ECFDF5"/></linearGradient></defs>'+
      '<rect x="20" y="10" width="120" height="200" rx="18" fill="#1E293B" stroke="#0F172A" stroke-width="3"/>'+
      '<rect x="26" y="16" width="108" height="188" rx="14" fill="url(#wsodGlow)" stroke="#22C55E" stroke-width="2"/>'+
      '<rect x="35" y="70" width="90" height="70" rx="10" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.8"/>'+
      '<path d="M80 82 L96 110 H64 Z" fill="#EF4444"/>'+
      '<line x1="80" y1="91" x2="80" y2="99" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>'+
      '<circle cx="80" cy="104" r="1.2" fill="#FFFFFF"/>'+
      '<text x="80" y="124" font-size="8.5" text-anchor="middle" fill="#EF4444" font-family="JetBrains Mono, monospace" font-weight="700">BAHAYA WSOD</text>'+
      '<text x="80" y="134" font-size="7" text-anchor="middle" fill="#64748B" font-family="JetBrains Mono, monospace">White/Green Screen</text>'),

    s_dynamic_island: svg('0 0 140 240',
      FRONT+
      '<rect x="42" y="24" width="56" height="16" rx="8" fill="#0F172A" stroke="#0066FF" stroke-width="2" class="hl-pulse"/>'+
      '<circle cx="52" cy="32" r="3" fill="#64748B"/>'+
      '<circle cx="86" cy="32" r="2.5" fill="#10B981"/>'+
      '<text x="70" y="60" font-size="7.5" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="600">Dynamic Island</text>'),

    s_lcd_lightbleed: svg('0 0 140 240',
      '<rect x="14" y="8" width="112" height="224" rx="20" fill="#0F172A" stroke="#64748B" stroke-width="2"/>'+
      '<rect x="22" y="16" width="96" height="208" rx="14" fill="#1E293B" stroke="#CBD5E1" stroke-width="1"/>'+
      '<rect x="24" y="18" width="92" height="204" rx="12" fill="none" stroke="#0066FF" stroke-width="2" opacity="0.8" class="hl-pulse"/>'+
      '<text x="70" y="240" font-size="8" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="600">backlight LCD</text>'),

    s_oled_burnin: svg('0 0 140 240',
      '<rect x="14" y="8" width="112" height="224" rx="20" fill="#020617" stroke="#64748B" stroke-width="2"/>'+
      '<rect x="22" y="16" width="96" height="208" rx="14" fill="#020617" stroke="#1E293B" stroke-width="1"/>'+
      '<text x="70" y="120" font-size="8.5" text-anchor="middle" fill="#94A3B8" font-family="JetBrains Mono, monospace">OLED Deep Black</text>'+
      '<text x="70" y="135" font-size="7.5" text-anchor="middle" fill="#64748B" font-family="JetBrains Mono, monospace">cek anti burn-in</text>'),

    s_kerataan_layar: svg('0 0 180 90',
      '<rect x="10" y="55" width="160" height="20" rx="6" fill="#FFFFFF" stroke="#64748B" stroke-width="2"/>'+
      '<rect x="20" y="20" width="140" height="30" rx="4" fill="none" stroke="#CBD5E1" stroke-width="1.5"/>'+
      '<line x1="150" y1="50" x2="150" y2="56" stroke="#0066FF" stroke-width="2.5" class="hl-pulse"/>'+
      '<circle cx="150" cy="53" r="3" fill="#0066FF" class="hl-pulse"/>'+
      '<text x="150" y="15" font-size="9" text-anchor="middle" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="600">celah di tepi</text>'),

    s_baret_kaca: svg('0 0 160 220',
      '<rect x="25" y="15" width="110" height="190" rx="16" fill="#0F172A" stroke="#475569" stroke-width="2"/>'+
      '<polygon points="0,30 65,85 45,140" fill="rgba(245, 158, 11, 0.25)"/>'+
      '<line x1="5" y1="35" x2="55" y2="110" stroke="#F59E0B" stroke-width="2" stroke-dasharray="3 3"/>'+
      '<circle cx="5" cy="35" r="5" fill="#F59E0B"/>'+
      '<text x="18" y="24" font-size="8" fill="#F59E0B" font-family="JetBrains Mono, monospace" font-weight="700">senter 45°</text>'+
      '<line x1="60" y1="95" x2="75" y2="105" stroke="#38BDF8" stroke-width="1.5"/>'+
      '<line x1="65" y1="120" x2="85" y2="135" stroke="#38BDF8" stroke-width="1.5"/>'+
      '<text x="80" y="185" font-size="8" text-anchor="middle" fill="#CBD5E1" font-family="JetBrains Mono, monospace">baret mikro terlihat</text>'),

    s_touch_response: svg('0 0 140 260',
      FRONT+
      '<path d="M70 130 Q40 90 24 30" stroke="#0066FF" stroke-width="2" stroke-dasharray="4 3" fill="none" class="hl-pulse"/>'+
      '<path d="M70 130 Q100 90 116 30" stroke="#0066FF" stroke-width="2" stroke-dasharray="4 3" fill="none" class="hl-pulse"/>'+
      '<path d="M70 130 Q40 170 24 230" stroke="#0066FF" stroke-width="2" stroke-dasharray="4 3" fill="none" class="hl-pulse"/>'+
      '<path d="M70 130 Q100 170 116 230" stroke="#0066FF" stroke-width="2" stroke-dasharray="4 3" fill="none" class="hl-pulse"/>'+
      '<circle cx="70" cy="130" r="4" fill="#0066FF"/>'),

    s_battery_cycle: svg('0 0 220 160', 
      '<rect x="8" y="8" width="204" height="144" rx="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>'+
      '<rect x="8" y="8" width="204" height="36" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1"/>'+
      '<text x="20" y="30" font-size="12" fill="#0F172A" font-family="Inter, sans-serif" font-weight="700">Kesehatan Baterai</text>'+
      '<circle cx="190" cy="26" r="5" fill="#10B981"/>'+
      '<text x="20" y="68" font-size="10" fill="#64748B" font-family="Inter, sans-serif">Jumlah Siklus (Cycle)</text>'+
      '<text x="194" y="68" font-size="11" text-anchor="end" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="700">342</text>'+
      '<line x1="20" y1="80" x2="200" y2="80" stroke="#F1F5F9" stroke-width="1"/>'+
      '<text x="20" y="102" font-size="10" fill="#64748B" font-family="Inter, sans-serif">Kapasitas Maksimum</text>'+
      '<text x="194" y="102" font-size="11" text-anchor="end" fill="#10B981" font-family="JetBrains Mono, monospace" font-weight="700">92%</text>'+
      '<line x1="20" y1="114" x2="200" y2="114" stroke="#F1F5F9" stroke-width="1"/>'+
      '<text x="20" y="136" font-size="9" fill="#0066FF" font-family="JetBrains Mono, monospace" font-weight="600">✓ Data Asli Bawaan iOS 17+</text>'),

    s_battery_health: svg('0 0 220 150', settingsNav('Kesehatan Baterai', ['Kapasitas Maksimum 88%','Kemampuan Puncak','Pengisian Optimal'], 0))
  };

  // ==========================================================
  // DYNAMIC MODEL-SPECIFIC INSPECTION VISUAL ENGINE
  // ==========================================================

  function getIPhone17ProMaxVisual(model, itemId) {
    var name = (model.name || 'iPhone 17 Pro Max');

    if (itemId === 'b_chassis' || itemId === 'b_kerataan') {
      return {
        html: '<img src="images/inspection/ip17_chassis.jpg?v=apple_official_v2" alt="' + name + ' Sasis Unibody Aluminium" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    if (itemId === 'b_pentalobe' || itemId === 'b_port_usbc') {
      return {
        html: '<img src="images/inspection/b_pentalobe.jpg?v=apple_official_v2" alt="' + name + ' Port USB-C 3.0 & Baut Pentalobe" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    if (itemId === 'b_action_btn') {
      return {
        html: '<img src="images/inspection/b_action_btn.jpg?v=apple_official_v2" alt="' + name + ' Action Button" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    if (itemId === 'b_camera_ctrl') {
      return {
        html: '<img src="images/inspection/b_camera_ctrl.jpg?v=apple_official_v2" alt="' + name + ' Camera Control Safir" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    if (itemId === 'b_back_glass') {
      return {
        html: '<img src="images/inspection/ip17_back.jpg?v=apple_official_v2" alt="' + name + ' Bodi Belakang Unibody Aluminium & Kaca Inlay" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    if (itemId === 'c_lensa_array' || itemId === 'c_48mp') {
      return {
        html: '<img src="images/inspection/ip17_camera.jpg?v=apple_official_v2" alt="' + name + ' Triple Kamera 48MP Pro Plateau" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    if (itemId === 'c_flash') {
      return {
        html: '<img src="images/inspection/ip17_flash.jpg?v=apple_official_v2" alt="' + name + ' Adaptive True Tone Flash" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    if (itemId === 'c_lidar') {
      return {
        html: '<img src="images/inspection/ip17_lidar.jpg?v=apple_official_v2" alt="' + name + ' LiDAR 3D Scanner" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    if (itemId === 'c_truedepth') {
      return {
        html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Dynamic Island & TrueDepth Face ID" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    if (itemId === 's_kerataan_layar') {
      return {
        html: '<img src="images/inspection/ip17_chassis.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Kaca Layar ke Sasis Unibody Aluminium" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    if (itemId === 'b_sim_tray') {
      return {
        html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray & Indikator LCI Air" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    if (itemId === 'c_macro') {
      return {
        html: '<img src="images/inspection/c_macro.jpg?v=apple_official_v2" alt="Pemeriksaan Makro Lensa" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    if (itemId === 's_true_tone') {
      return {
        html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="Layar True Tone & Dynamic Island" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    if (itemId === 's_parts_history') {
      return {
        html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    if (itemId === 'm_model_num' || itemId === 'm_region_code') {
      return {
        html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />',
        isRealPhoto: true
      };
    }

    return {
      isRealPhoto: false,
      html: DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''
    };
  }

  function getIPhone17Visual(model, itemId) {
    var name = (model.name || 'iPhone 17');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/ip17_dual_back.jpg?v=apple_official_v2" alt="' + name + ' Bodi Belakang Aluminium Ice Blue & Dual Kamera" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array' || itemId === 'c_48mp') return { html: '<img src="images/inspection/models/ip17_dual_camera.jpg?v=apple_official_v2" alt="' + name + ' Dual Kamera Vertikal Pill 48MP Fusion" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/ip17_dual_camera.jpg?v=apple_official_v2" alt="' + name + ' True Tone Flash Dual Kamera" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/models/ip17_dual_back.jpg?v=apple_official_v2" alt="' + name + ' Sasis Aluminium Modern & Tombol Samping" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_camera_ctrl') return { html: '<img src="images/inspection/b_camera_ctrl.jpg?v=apple_official_v2" alt="' + name + ' Camera Control Safir" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_action_btn') return { html: '<img src="images/inspection/b_action_btn.jpg?v=apple_official_v2" alt="' + name + ' Action Button" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_usbc') return { html: '<img src="images/inspection/b_pentalobe.jpg?v=apple_official_v2" alt="' + name + ' Port USB-C & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_macro') return { html: '<img src="images/inspection/c_macro.jpg?v=apple_official_v2" alt="Makro" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Dynamic Island & Sensor Face ID TrueDepth" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/models/ip17_dual_back.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Kaca Layar ke Sasis Aluminium" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhone17AirVisual(model, itemId) {
    var name = (model.name || 'iPhone 17 Air');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/ip17_air_back.jpg?v=apple_official_v2" alt="' + name + ' Bodi Belakang 5.6mm Ultra-Slim Titanium" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array' || itemId === 'c_48mp') return { html: '<img src="images/inspection/models/ip17_air_camera.jpg?v=apple_official_v2" alt="' + name + ' Kamera Tunggal 48MP Fusion Bar" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/ip17_air_camera.jpg?v=apple_official_v2" alt="' + name + ' True Tone Flash Kamera Tunggal" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/models/ip17_air_back.jpg?v=apple_official_v2" alt="' + name + ' Rangka Titanium 5.6mm Ultra-Slim" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_camera_ctrl') return { html: '<img src="images/inspection/b_camera_ctrl.jpg?v=apple_official_v2" alt="' + name + ' Camera Control Safir" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_action_btn') return { html: '<img src="images/inspection/b_action_btn.jpg?v=apple_official_v2" alt="' + name + ' Action Button" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_usbc') return { html: '<img src="images/inspection/b_pentalobe.jpg?v=apple_official_v2" alt="' + name + ' Port USB-C & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Dynamic Island & Sensor Face ID TrueDepth" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/models/ip17_air_back.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Kaca Layar ke Rangka Titanium 5.6mm" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhone16ProVisual(model, itemId) {
    var name = (model.name || 'iPhone 16 Pro');
    if (itemId === 'b_camera_ctrl') return { html: '<img src="images/inspection/b_camera_ctrl.jpg?v=apple_official_v2" alt="' + name + ' Camera Control Safir" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/b_back_glass.jpg?v=apple_official_v2" alt="' + name + ' Back Glass Titanium Desert" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array' || itemId === 'c_48mp') return { html: '<img src="images/inspection/c_lensa_array.jpg?v=apple_official_v2" alt="' + name + ' Triple Kamera Pro 48MP" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/c_flash.jpg?v=apple_official_v2" alt="' + name + ' Flash" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lidar') return { html: '<img src="images/inspection/c_lidar.jpg?v=apple_official_v2" alt="' + name + ' LiDAR 3D Scanner" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/b_chassis.jpg?v=apple_official_v2" alt="' + name + ' Sasis Titanium Grade 5" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_action_btn') return { html: '<img src="images/inspection/b_action_btn.jpg?v=apple_official_v2" alt="' + name + ' Action Button" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_usbc') return { html: '<img src="images/inspection/b_pentalobe.jpg?v=apple_official_v2" alt="' + name + ' Port USB-C 3.0 & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_macro') return { html: '<img src="images/inspection/c_macro.jpg?v=apple_official_v2" alt="Makro" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Dynamic Island & Sensor Face ID TrueDepth" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/b_chassis.jpg?v=apple_official_v2" alt="' + name + ' Pembesaran 25x Kerataan Layar Ceramic Shield ke Rangka Titanium" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhone16Visual(model, itemId) {
    var name = (model.name || 'iPhone 16');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/ip16_back.jpg?v=apple_official_v2" alt="' + name + ' Bodi Kaca Infused 5 Warna" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array' || itemId === 'c_48mp') return { html: '<img src="images/inspection/models/ip16_camera.jpg?v=apple_official_v2" alt="' + name + ' Dual Kamera Vertikal Pill 48MP" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/ip16_camera.jpg?v=apple_official_v2" alt="' + name + ' True Tone Flash Vertikal" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/models/ip16_camera.jpg?v=apple_official_v2" alt="' + name + ' Sasis Aluminium & Tombol Samping" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_camera_ctrl') return { html: '<img src="images/inspection/b_camera_ctrl.jpg?v=apple_official_v2" alt="' + name + ' Camera Control Safir" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_action_btn') return { html: '<img src="images/inspection/b_action_btn.jpg?v=apple_official_v2" alt="' + name + ' Action Button" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_usbc') return { html: '<img src="images/inspection/b_pentalobe.jpg?v=apple_official_v2" alt="' + name + ' Port USB-C & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_macro') return { html: '<img src="images/inspection/c_macro.jpg?v=apple_official_v2" alt="Makro" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Dynamic Island & Sensor Face ID TrueDepth" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/models/ip16_camera.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Layar Ceramic Shield ke Sasis Aluminium" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhone15ProVisual(model, itemId) {
    var name = (model.name || 'iPhone 15 Pro');
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/b_chassis.jpg?v=apple_official_v2" alt="' + name + ' Sasis Titanium Natural Grade 5" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_action_btn') return { html: '<img src="images/inspection/b_action_btn.jpg?v=apple_official_v2" alt="' + name + ' Action Button" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_usbc') return { html: '<img src="images/inspection/b_pentalobe.jpg?v=apple_official_v2" alt="' + name + ' Port USB-C 3.0 & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/b_back_glass.jpg?v=apple_official_v2" alt="' + name + ' Back Glass Titanium Natural" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array' || itemId === 'c_48mp') return { html: '<img src="images/inspection/c_lensa_array.jpg?v=apple_official_v2" alt="' + name + ' Triple Kamera Pro 48MP" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/c_flash.jpg?v=apple_official_v2" alt="' + name + ' Flash" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lidar') return { html: '<img src="images/inspection/c_lidar.jpg?v=apple_official_v2" alt="' + name + ' LiDAR 3D Scanner" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_macro') return { html: '<img src="images/inspection/c_macro.jpg?v=apple_official_v2" alt="Makro" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Dynamic Island & Sensor Face ID TrueDepth" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/b_chassis.jpg?v=apple_official_v2" alt="' + name + ' Pembesaran 25x Kerataan Layar ke Rangka Titanium Grade 5" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhone15Visual(model, itemId) {
    var name = (model.name || 'iPhone 15');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/ip15_back.jpg?v=apple_official_v3" alt="' + name + ' Kaca Belakang Color-Infused Matte 5 Warna" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array' || itemId === 'c_48mp') return { html: '<img src="images/inspection/models/ip15_camera.jpg?v=apple_official_v3" alt="' + name + ' Dual Kamera Diagonal 48MP Fusion Asli" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/ip15_camera.jpg?v=apple_official_v3" alt="' + name + ' True Tone Flash Belakang" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/models/mute_switch_ip15.jpg?v=apple_official_v2" alt="' + name + ' Sasis Aluminium Contoured Edge Lengkung Lembut" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_mute_switch') return { html: '<img src="images/inspection/models/mute_switch_ip15.jpg?v=apple_official_v2" alt="' + name + ' Sakelar Dering / Hening Contoured Edge" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_usbc') return { html: '<img src="images/inspection/b_pentalobe.jpg?v=apple_official_v2" alt="' + name + ' Port USB-C & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Dynamic Island & Sensor Face ID TrueDepth" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/models/mute_switch_ip15.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Layar ke Tepi Lengkung Contoured Edge" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhone14ProVisual(model, itemId) {
    var name = (model.name || 'iPhone 14 Pro');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/ip14p_back.jpg?v=apple_official_v2" alt="' + name + ' Kaca Belakang Deep Purple Matte" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array' || itemId === 'c_48mp') return { html: '<img src="images/inspection/models/ip14p_camera.jpg?v=apple_official_v2" alt="' + name + ' Triple Kamera 48MP Deep Purple" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/ip14p_camera.jpg?v=apple_official_v2" alt="' + name + ' Adaptive True Tone Flash" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lidar') return { html: '<img src="images/inspection/models/ip14p_camera.jpg?v=apple_official_v2" alt="' + name + ' LiDAR Scanner Sensor" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/ip14_chassis.jpg?v=apple_official_v2" alt="' + name + ' Rangka Stainless Steel Kilap Cermin" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_mute_switch') return { html: '<img src="images/inspection/models/mute_switch_pro.jpg?v=apple_official_v2" alt="' + name + ' Sakelar Dering / Hening Stainless Steel Kilap" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_lightning') return { html: '<img src="images/inspection/b_port_lightning.jpg?v=apple_official_v2" alt="' + name + ' Port Lightning & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_macro') return { html: '<img src="images/inspection/c_macro.jpg?v=apple_official_v2" alt="Makro" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Dynamic Island Pertama & Sensor Face ID TrueDepth" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/ip14_chassis.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Layar ke Rangka Stainless Steel Kilap Cermin" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhone14Visual(model, itemId) {
    var name = (model.name || 'iPhone 14');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/dual_diag_back.jpg?v=apple_official_v2" alt="' + name + ' Kaca Belakang & Modul Dual Kamera Diagonal" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array') return { html: '<img src="images/inspection/models/ip14_camera.jpg?v=apple_official_v2" alt="' + name + ' Dual Kamera Diagonal Blue" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/ip14_camera.jpg?v=apple_official_v2" alt="' + name + ' Flash Dual Kamera" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/models/mute_switch_flat.jpg?v=apple_official_v2" alt="' + name + ' Sasis Aluminium Datar Tepi Tegas" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_mute_switch') return { html: '<img src="images/inspection/models/mute_switch_flat.jpg?v=apple_official_v2" alt="' + name + ' Sakelar Dering / Hening Aluminium Datar" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_lightning') return { html: '<img src="images/inspection/b_port_lightning.jpg?v=apple_official_v2" alt="' + name + ' Port Lightning & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Sensor Face ID TrueDepth (Notch)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/models/mute_switch_flat.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Kaca Layar ke Rangka Aluminium Datar" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhone13ProVisual(model, itemId) {
    var name = (model.name || 'iPhone 13 Pro');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/ip13p_back.jpg?v=apple_official_v2" alt="' + name + ' Kaca Belakang Sierra Blue Matte" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array' || itemId === 'c_proraw_12mp') return { html: '<img src="images/inspection/models/ip13p_camera.jpg?v=apple_official_v2" alt="' + name + ' Triple Kamera Pro Sierra Blue" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/ip13p_camera.jpg?v=apple_official_v2" alt="' + name + ' Flash Triple Kamera" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lidar') return { html: '<img src="images/inspection/models/ip13p_camera.jpg?v=apple_official_v2" alt="' + name + ' LiDAR Scanner Sensor" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/models/ip13p_camera.jpg?v=apple_official_v2" alt="' + name + ' Rangka Stainless Steel Sierra Blue Datar" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_mute_switch') return { html: '<img src="images/inspection/models/mute_switch_pro.jpg?v=apple_official_v2" alt="' + name + ' Sakelar Dering / Hening Stainless Steel Datar" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_lightning') return { html: '<img src="images/inspection/b_port_lightning.jpg?v=apple_official_v2" alt="' + name + ' Port Lightning & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_macro') return { html: '<img src="images/inspection/c_macro.jpg?v=apple_official_v2" alt="Makro" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Sensor Face ID TrueDepth (Notch Reduksi 20%)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/models/ip13p_camera.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Layar ProMotion 120Hz ke Rangka Stainless Steel" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhone13Visual(model, itemId) {
    var name = (model.name || 'iPhone 13');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/dual_diag_back.jpg?v=apple_official_v2" alt="' + name + ' Kaca Belakang & Modul Dual Kamera Diagonal" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array') return { html: '<img src="images/inspection/models/dual_diag_camera.jpg?v=apple_official_v2" alt="' + name + ' Dual Kamera Diagonal 12MP Wide & Ultra Wide" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/dual_diag_camera.jpg?v=apple_official_v2" alt="' + name + ' True Tone Flash Dual Kamera Diagonal" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/models/mute_switch_flat.jpg?v=apple_official_v2" alt="' + name + ' Sasis Aluminium Anodized Datar Tepi Tegas" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_mute_switch') return { html: '<img src="images/inspection/models/mute_switch_flat.jpg?v=apple_official_v2" alt="' + name + ' Sakelar Dering / Hening Aluminium Datar" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_lightning') return { html: '<img src="images/inspection/b_port_lightning.jpg?v=apple_official_v2" alt="' + name + ' Port Lightning & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Sensor Face ID TrueDepth (Notch Reduksi 20%)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/models/mute_switch_flat.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Kaca Layar ke Rangka Aluminium Datar" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhone12ProVisual(model, itemId) {
    var name = (model.name || 'iPhone 12 Pro');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/ip12p_back.jpg?v=apple_official_v2" alt="' + name + ' Kaca Belakang Pacific Blue Matte" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array' || itemId === 'c_proraw_12mp') return { html: '<img src="images/inspection/models/ip12p_camera.jpg?v=apple_official_v2" alt="' + name + ' Triple Kamera Pacific Blue & LiDAR" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/ip12p_camera.jpg?v=apple_official_v2" alt="' + name + ' Flash Triple Kamera" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lidar') return { html: '<img src="images/inspection/models/ip12p_camera.jpg?v=apple_official_v2" alt="' + name + ' Sensor LiDAR Generasi 1" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/models/ip12p_camera.jpg?v=apple_official_v2" alt="' + name + ' Rangka Stainless Steel Datar Kilap" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_mute_switch') return { html: '<img src="images/inspection/models/mute_switch_pro.jpg?v=apple_official_v2" alt="' + name + ' Sakelar Dering / Hening Stainless Steel Datar" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_lightning') return { html: '<img src="images/inspection/b_port_lightning.jpg?v=apple_official_v2" alt="' + name + ' Port Lightning & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Sensor Face ID TrueDepth (Notch)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/models/ip12p_camera.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Kaca Ceramic Shield ke Rangka Datar" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhone12Visual(model, itemId) {
    var name = (model.name || 'iPhone 12');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/ip12_back.jpg?v=apple_official_v2" alt="' + name + ' Kaca Belakang & Dual Kamera Kotak" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array') return { html: '<img src="images/inspection/models/ip12_camera.jpg?v=apple_official_v2" alt="' + name + ' Dual Kamera Kotak Datar" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/ip12_camera.jpg?v=apple_official_v2" alt="' + name + ' Flash Dual Kamera" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/models/ip12_camera.jpg?v=apple_official_v2" alt="' + name + ' Sasis Aluminium Datar Tegas" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_mute_switch') return { html: '<img src="images/inspection/models/mute_switch_flat.jpg?v=apple_official_v2" alt="' + name + ' Sakelar Dering / Hening Aluminium Datar" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_lightning') return { html: '<img src="images/inspection/b_port_lightning.jpg?v=apple_official_v2" alt="' + name + ' Port Lightning & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Sensor Face ID TrueDepth (Notch)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/models/ip12_camera.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Layar Ceramic Shield ke Sasis Datar" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhone11ProVisual(model, itemId) {
    var name = (model.name || 'iPhone 11 Pro');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/ip11p_back.jpg?v=apple_official_v2" alt="' + name + ' Kaca Belakang Midnight Green Matte" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array') return { html: '<img src="images/inspection/models/ip11p_camera.jpg?v=apple_official_v2" alt="' + name + ' Triple Kamera Melengkung Midnight Green" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/ip11p_camera.jpg?v=apple_official_v2" alt="' + name + ' True Tone Flash" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/models/ip11p_camera.jpg?v=apple_official_v2" alt="' + name + ' Rangka Stainless Steel Lengkung Kilap" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_mute_switch') return { html: '<img src="images/inspection/models/mute_switch_curved.jpg?v=apple_official_v2" alt="' + name + ' Sakelar Dering / Hening Stainless Steel Lengkung" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_lightning') return { html: '<img src="images/inspection/b_port_lightning.jpg?v=apple_official_v2" alt="' + name + ' Port Lightning & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Sensor Face ID TrueDepth (Notch)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/models/ip11p_camera.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Kaca Layar ke Rangka Stainless Steel Lengkung" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhone11Visual(model, itemId) {
    var name = (model.name || 'iPhone 11');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/ip11_back.jpg?v=apple_official_v2" alt="' + name + ' Kaca Belakang Aneka Warna Rosette" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array') return { html: '<img src="images/inspection/models/ip11_camera.jpg?v=apple_official_v2" alt="' + name + ' Dual Kamera Kotak Melengkung" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/ip11_camera.jpg?v=apple_official_v2" alt="' + name + ' True Tone Flash" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/models/ip11_camera.jpg?v=apple_official_v2" alt="' + name + ' Sasis Aluminium Lengkung Anodized" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_mute_switch') return { html: '<img src="images/inspection/models/mute_switch_curved.jpg?v=apple_official_v2" alt="' + name + ' Sakelar Dering / Hening Aluminium Lengkung" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_lightning') return { html: '<img src="images/inspection/b_port_lightning.jpg?v=apple_official_v2" alt="' + name + ' Port Lightning & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Sensor Face ID TrueDepth (Notch)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/models/ip11_camera.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Layar Liquid Retina ke Sasis Lengkung" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhoneXVisual(model, itemId) {
    var name = (model.name || 'iPhone X / XS');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/ipx_back.jpg?v=apple_official_v2" alt="' + name + ' Bodi Kaca Belakang & Dual Kamera Pill Vertikal" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array') return { html: '<img src="images/inspection/models/ipx_camera.jpg?v=apple_official_v2" alt="' + name + ' Dual Kamera Vertikal Pill Stainless Steel" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/ipx_camera.jpg?v=apple_official_v2" alt="' + name + ' Quad-LED True Tone Flash di Antara Lensa" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/models/ipx_camera.jpg?v=apple_official_v2" alt="' + name + ' Rangka Surgical Stainless Steel Lengkung Kilap Cermin" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_mute_switch') return { html: '<img src="images/inspection/models/mute_switch_curved.jpg?v=apple_official_v2" alt="' + name + ' Sakelar Dering / Hening Stainless Steel Lengkung" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_lightning') return { html: '<img src="images/inspection/b_port_lightning.jpg?v=apple_official_v2" alt="' + name + ' Port Lightning & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Sensor Face ID TrueDepth Pertama Apple (Notch)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/models/ipx_camera.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Layar OLED ke Rangka Stainless Steel Lengkung" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhoneXRVisual(model, itemId) {
    var name = (model.name || 'iPhone XR');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/xr_back_upright.jpg?v=apple_official_v2" alt="' + name + ' Kaca Belakang Coral & Kamera Tunggal 12MP" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array') return { html: '<img src="images/inspection/models/xr_camera.jpg?v=apple_official_v2" alt="' + name + ' Kamera Tunggal 12MP Safir" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/xr_camera.jpg?v=apple_official_v2" alt="' + name + ' Quad-LED True Tone Flash Bawah Lensa" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/models/xr_chassis.jpg?v=apple_official_v2" alt="' + name + ' Sasis Aluminium Lengkung Seri 7000" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_mute_switch') return { html: '<img src="images/inspection/models/mute_switch_curved.jpg?v=apple_official_v2" alt="' + name + ' Sakelar Dering / Hening Aluminium Lengkung" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_lightning') return { html: '<img src="images/inspection/b_port_lightning.jpg?v=apple_official_v2" alt="' + name + ' Port Lightning & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_truedepth') return { html: '<img src="images/inspection/c_truedepth.jpg?v=apple_official_v2" alt="' + name + ' Sensor Face ID TrueDepth (Notch)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/models/xr_chassis.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Layar Liquid Retina ke Sasis Lengkung" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getIPhoneSEVisual(model, itemId) {
    var name = (model.name || 'iPhone SE');
    if (itemId === 'b_back_glass') return { html: '<img src="images/inspection/models/ipse_back.jpg?v=apple_official_v2" alt="' + name + ' Kaca Belakang & Kamera Tunggal" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_lensa_array') return { html: '<img src="images/inspection/models/ipse_camera.jpg?v=apple_official_v2" alt="' + name + ' Lensa Kamera Tunggal 12MP Belakang" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_flash') return { html: '<img src="images/inspection/models/ipse_camera.jpg?v=apple_official_v2" alt="' + name + ' True Tone Flash Belakang" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_home_btn') return { html: '<img src="images/inspection/models/touch_id_home.jpg?v=apple_official_v2" alt="' + name + ' Tombol Home Touch ID Fisik" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'c_front_cam') return { html: '<img src="images/inspection/models/ipse_chassis.jpg?v=apple_official_v2" alt="' + name + ' Kamera Depan FaceTime HD & Bezel Dahi Klasik" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_chassis' || itemId === 'b_kerataan') return { html: '<img src="images/inspection/models/ipse_chassis.jpg?v=apple_official_v2" alt="' + name + ' Sasis Aluminium Klasik Lengkung & Bezel Layar" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_mute_switch') return { html: '<img src="images/inspection/models/mute_switch_curved.jpg?v=apple_official_v2" alt="' + name + ' Sakelar Dering / Hening Aluminium Lengkung" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_pentalobe' || itemId === 'b_port_lightning') return { html: '<img src="images/inspection/b_port_lightning.jpg?v=apple_official_v2" alt="' + name + ' Port Lightning & Baut Pentalobe" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'b_sim_tray') return { html: '<img src="images/inspection/b_sim_tray.jpg?v=apple_official_v2" alt="SIM Tray" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_kerataan_layar') return { html: '<img src="images/inspection/models/ipse_chassis.jpg?v=apple_official_v2" alt="' + name + ' Kerataan Kaca Layar 2.5D ke Rangka Aluminium Lengkung" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_true_tone') return { html: '<img src="images/inspection/s_true_tone.jpg?v=apple_official_v2" alt="True Tone Display" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 's_parts_history') return { html: '<img src="images/inspection/s_parts_history.jpg?v=apple_official_v2" alt="Riwayat Servis Resmi iOS (Genuine vs Unknown Part)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    if (itemId === 'm_model_num' || itemId === 'm_region_code') return { html: '<img src="images/inspection/m_model_num.jpg?v=apple_official_v2" alt="' + name + ' Nomor Model & Garansi Resmi Indonesia (PA/A)" class="inspection-real-img" loading="lazy" />', isRealPhoto: true };
    return { html: (DIAGRAMS[itemId] || DIAGRAMS['b_chassis'] || ''), isRealPhoto: false };
  }

  function getAdaptiveModelVisual(model, itemId) {
    var name = (model.name || 'iPhone');
    var id = model.id || '';
    return getIPhone14Visual(model, itemId);
  }

  function getModelInspectionVisual(model, itemId) {
    if (!model) model = currentSelectedModel || defaultModel;
    var modelId = model.id || '';

    if (modelId === 'ip17pm' || modelId === 'ip17p') return getIPhone17ProMaxVisual(model, itemId);
    if (modelId === 'ip17air') return getIPhone17AirVisual(model, itemId);
    if (modelId === 'ip17') return getIPhone17Visual(model, itemId);
    if (modelId === 'ip16pm' || modelId === 'ip16p') return getIPhone16ProVisual(model, itemId);
    if (modelId === 'ip16' || modelId === 'ip16plus') return getIPhone16Visual(model, itemId);
    if (modelId === 'ip15pm' || modelId === 'ip15p') return getIPhone15ProVisual(model, itemId);
    if (modelId === 'ip15' || modelId === 'ip15plus') return getIPhone15Visual(model, itemId);
    if (modelId === 'ip14pm' || modelId === 'ip14p') return getIPhone14ProVisual(model, itemId);
    if (modelId === 'ip14' || modelId === 'ip14plus') return getIPhone14Visual(model, itemId);
    if (modelId === 'ip13pm' || modelId === 'ip13p') return getIPhone13ProVisual(model, itemId);
    if (modelId === 'ip13' || modelId === 'ip13mini') return getIPhone13Visual(model, itemId);
    if (modelId === 'ip12pm' || modelId === 'ip12p') return getIPhone12ProVisual(model, itemId);
    if (modelId === 'ip12' || modelId === 'ip12mini') return getIPhone12Visual(model, itemId);
    if (modelId === 'ip11pm' || modelId === 'ip11p') return getIPhone11ProVisual(model, itemId);
    if (modelId === 'ip11') return getIPhone11Visual(model, itemId);
    if (modelId === 'ipxsmax' || modelId === 'ipxs' || modelId === 'ipx') return getIPhoneXVisual(model, itemId);
    if (modelId === 'ipxr') return getIPhoneXRVisual(model, itemId);
    if (modelId === 'ipse3' || modelId === 'ipse2') return getIPhoneSEVisual(model, itemId);

    return getAdaptiveModelVisual(model, itemId);
  }

  // State and active sections container
  var SECTIONS = {};
  var state = {};
  var totalItems = 0;

  function itemSection(id){
    for (var k in SECTIONS){
      for (var i=0; i<SECTIONS[k].length; i++){ 
        if (SECTIONS[k][i].id === id) return k; 
      }
    }
    return null;
  }

  function itemTitle(id){
    var k = itemSection(id);
    if (!k) return id;
    var found = SECTIONS[k].find(function(it){ return it.id === id; });
    return found ? found.title : id;
  }

  function renderList(sectionKey){
    var container = document.getElementById('list-'+sectionKey);
    if (!container || !SECTIONS[sectionKey]) return;
    container.innerHTML = SECTIONS[sectionKey].map(function(it){
      var tagHtml = '';
      if (it.tag) {
        tagHtml = '<span class="check-tag-pill tag-' + (it.tagType || 'hardware') + '">' + it.tag + '</span>';
      }

      var visual = getModelInspectionVisual(currentSelectedModel, it.id);
      var hasRealImgClass = visual.isRealPhoto ? ' has-real-img' : '';
      var cueText = visual.isRealPhoto ? 'HD ZOOM 🔍' : 'DETAIL 🔍';
      var diagramInner = visual.html + '<span class="img-zoom-cue">' + cueText + '</span>';

      return '<div class="check-item status-'+state[it.id]+'" data-id="'+it.id+'">'+
        '<div class="diagram' + hasRealImgClass + '" data-item-id="' + it.id + '" role="button" tabindex="0" title="Klik untuk memperbesar gambar inspeksi">' + diagramInner + '</div>'+
        '<div class="check-item-main">'+
          '<p class="check-item-title">'+it.title + tagHtml + '</p>'+
          '<p class="check-item-desc">'+it.desc+'</p>'+
        '</div>'+
        '<div class="status-toggle" role="group" aria-label="Status '+it.title+'">'+
          '<button class="status-btn b-unset" data-status="unset" aria-pressed="'+(state[it.id]==='unset')+'">Belum</button>'+
          '<button class="status-btn b-ok" data-status="ok" aria-pressed="'+(state[it.id]==='ok')+'">Aman</button>'+
          '<button class="status-btn b-issue" data-status="issue" aria-pressed="'+(state[it.id]==='issue')+'">Masalah</button>'+
        '</div>'+
      '</div>';
    }).join('');
  }

  function renderModelProfile(model) {
    var profileWrap = document.getElementById('modelProfileWrap');
    if (!profileWrap) return;

    var flawsListHtml = (model.knownFlaws || []).map(function(flaw) {
      return '<li>' + flaw + '</li>';
    }).join('');

    var cameraSpecLabel = '';
    if (model.cameraSetup === 'single') cameraSpecLabel = '1 Kamera Belakang';
    else if (model.cameraSetup === 'dual') cameraSpecLabel = 'Kamera Ganda (0.5x & 1x)';
    else if (model.cameraSetup === 'triple-2x') cameraSpecLabel = '3 Kamera (0.5x, 1x, Zoom 2x)';
    else if (model.cameraSetup === 'triple-2.5x') cameraSpecLabel = '3 Kamera (0.5x, 1x, Zoom 2.5x)';
    else if (model.cameraSetup === 'triple-3x') cameraSpecLabel = '3 Kamera (0.5x, 1x, Zoom 3x)';
    else if (model.cameraSetup === 'triple-5x') cameraSpecLabel = '3 Kamera (0.5x, 1x, Zoom Jauh 5x)';

    var portLabel = model.portType === 'usb-c-3' ? 'USB-C Super Cepat' : (model.portType === 'usb-c-2' ? 'USB-C (Tipe Baru)' : 'Lightning (Colokan Pipih Khas Apple)');
    var frameLabel = model.materialFrame === 'titanium' ? 'Titanium (Kuat & Ringan)' : (model.materialFrame === 'stainless-steel' ? 'Baja Stainless Mengkilap' : 'Aluminium Ringan');
    var buttonsLabel = (model.buttonType === 'action-button' ? 'Tombol Aksi (Action Button)' : 'Saklar Geser Hening') + (model.hasCameraControl ? ' + Tombol Kamera Sentuh' : '');
    var biometricsLabel = model.biometrics === 'face-id' ? 'Kunci Wajah (Face ID)' : 'Sidik Jari (Touch ID)';

    profileWrap.innerHTML = 
      '<div class="model-specs-card">' +
        '<div class="specs-card-header">' +
          '<div class="specs-header-left">' +
            '<h3 class="specs-model-title">' + model.name + '</h3>' +
            '<span class="specs-year-pill">Rilis ' + model.year + '</span>' +
            '<span class="specs-chip-pill">' + model.chip + '</span>' +
          '</div>' +
          '<div class="specs-header-right">' +
            '<span class="spec-badge spec-highlight">Kode Model: ' + (model.officialCodes ? model.officialCodes.split(',')[0] : 'Apple') + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="specs-grid">' +
          '<div class="spec-box">' +
            '<span class="spec-box-lbl">Layar & Tampilan</span>' +
            '<div class="spec-box-val">' + model.screen + '</div>' +
          '</div>' +
          '<div class="spec-box">' +
            '<span class="spec-box-lbl">Kamera Belakang</span>' +
            '<div class="spec-box-val">' + cameraSpecLabel + (model.hasLidar ? ' + Sensor Jarak LiDAR' : '') + '</div>' +
          '</div>' +
          '<div class="spec-box">' +
            '<span class="spec-box-lbl">Lubang Cas</span>' +
            '<div class="spec-box-val">' + portLabel + '</div>' +
          '</div>' +
          '<div class="spec-box">' +
            '<span class="spec-box-lbl">Bahan Pinggiran Bodi</span>' +
            '<div class="spec-box-val">' + frameLabel + '</div>' +
          '</div>' +
          '<div class="spec-box">' +
            '<span class="spec-box-lbl">Tombol & Kunci Layar</span>' +
            '<div class="spec-box-val">' + buttonsLabel + ' &bull; ' + biometricsLabel + '</div>' +
          '</div>' +
          '<div class="spec-box">' +
            '<span class="spec-box-lbl">Deteksi Onderdil di HP</span>' +
            '<div class="spec-box-val">' + (model.partsHistory && model.partsHistory.length ? 'Bisa cek: ' + model.partsHistory.join(', ') : 'Cek fisik manual') + '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="model-flaws-card">' +
        '<div class="flaws-card-header">' +
          '<h4 class="flaws-card-title">' +
            '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
              '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>' +
              '<line x1="12" y1="9" x2="12" y2="13"></line>' +
              '<line x1="12" y1="17" x2="12.01" y2="17"></line>' +
            '</svg>' +
            '<span>HAL YANG PERLU DIWASPADAI PADA ' + model.name.toUpperCase() + '</span>' +
          '</h4>' +
          '<span class="flaws-badge">Catatan Khusus</span>' +
        '</div>' +
        '<p class="flaws-card-desc">Setiap seri iPhone memiliki titik sensitif tertentu. Sebelum deal harga, pastikan Anda memeriksa poin-poin penting berikut:</p>' +
        '<ul class="flaws-list">' +
          flawsListHtml +
        '</ul>' +
      '</div>';
  }

  function updatePartsHistoryCallout(model) {
    var txtEl = document.getElementById('partsHistorySupportTxt');
    var noteEl = document.getElementById('partsHistoryModelNote');
    if (!txtEl || !noteEl) return;

    if (model.partsHistory && model.partsHistory.length) {
      var partsList = model.partsHistory.join(', ');
      txtEl.innerHTML = 'Khusus <strong>' + model.name + '</strong>, Anda bisa mengecek langsung riwayat keaslian: <strong>' + partsList + '</strong>.';
      noteEl.innerHTML = 'Caranya sangat mudah: Buka <em>Pengaturan &rsaquo; Umum &rsaquo; Mengenai</em>. Jika ada onderdil yang pernah diganti, Apple akan menampilkannya di sini secara jujur. Jika bertuliskan <strong>Genuine Apple Part</strong> artinya onderdil asli pabrik Apple. Jika bertuliskan <strong>Unknown Part</strong>, berarti onderdil tersebut pernah diganti dengan suku cadang tiruan / bukan resmi Apple.';
    } else {
      txtEl.innerHTML = 'Pada <strong>' + model.name + '</strong>, menu riwayat servis otomatis belum tersedia dari Apple.';
      noteEl.innerHTML = 'Tidak perlu bingung! Anda tetap bisa mengetahuinya dengan mudah lewat panduan di bawah ini: periksa apakah fungsi penyesuai warna layar (True Tone) masih aktif, amati 2 baut kecil di bawah dekat lubang cas, dan cek stiker putih di dalam tempat kartu SIM.';
    }
  }

  function rebuildInspection(model) {
    SECTIONS = buildModelInspectionSections(model);
    state = {};
    totalItems = 0;
    Object.keys(SECTIONS).forEach(function(k){
      SECTIONS[k].forEach(function(it){
        state[it.id] = 'unset';
        totalItems++;
      });
    });

    Object.keys(SECTIONS).forEach(renderList);
    updatePartsHistoryCallout(model);
    updateAll();
  }

  // Setup default model on initial load (iPhone 15 Pro as default)
  var defaultModel = IPHONE_MODELS.find(function(m) { return m.id === 'ip15p'; }) || IPHONE_MODELS[0];
  currentSelectedModel = defaultModel;
  renderModelProfile(defaultModel);
  SECTIONS = buildModelInspectionSections(defaultModel);
  Object.keys(SECTIONS).forEach(function(k){
    SECTIONS[k].forEach(function(it){
      state[it.id] = 'unset';
      totalItems++;
    });
  });
  Object.keys(SECTIONS).forEach(renderList);
  updatePartsHistoryCallout(defaultModel);

  document.querySelectorAll('[id^="list-"]').forEach(function(container){
    container.addEventListener('click', function(e){
      var btn = e.target.closest('.status-btn');
      if (!btn) return;
      var item = e.target.closest('.check-item');
      var id = item.getAttribute('data-id');
      state[id] = btn.getAttribute('data-status');
      updateItemDom(item, id);
      updateAll();
    });
  });

  function updateItemDom(item, id){
    item.className = 'check-item status-'+state[id];
    item.querySelectorAll('.status-btn').forEach(function(b){
      b.setAttribute('aria-pressed', b.getAttribute('data-status')===state[id]);
    });
  }

  function updateAll(){
    var okCount=0, issueCount=0, checked=0;
    var sectionCounts = {};
    Object.keys(SECTIONS).forEach(function(k){
      sectionCounts[k] = {ok:0, issue:0, unset:0, total:SECTIONS[k].length};
      SECTIONS[k].forEach(function(it){
        var s = state[it.id];
        sectionCounts[k][s]++;
        if (s==='ok'){okCount++; checked++;}
        else if (s==='issue'){issueCount++; checked++;}
      });
    });

    Object.keys(SECTIONS).forEach(function(k){
      var c = sectionCounts[k];
      var cntEl = document.getElementById('cnt-'+k);
      if (cntEl) cntEl.textContent = (c.ok+c.issue)+'/'+c.total;
    });

    // Update Top Diagnostic Progress Text
    var diagnosticProgressTxt = document.getElementById('diagnosticProgressTxt');
    if (diagnosticProgressTxt) {
      diagnosticProgressTxt.textContent = checked + ' dari ' + totalItems + ' poin diperiksa';
    }

    renderSummary(sectionCounts, okCount, issueCount, checked);
  }

  function renderSummary(sectionCounts, okCount, issueCount, checked){
    var grid = document.getElementById('sumGrid');
    if (!grid) return;
    var cards = '<div class="sum-card"><div class="lbl">Poin Diperiksa</div><div class="val">'+checked+'/'+totalItems+'</div></div>'+
      '<div class="sum-card"><div class="lbl">Kondisi Normal</div><div class="val ok">'+okCount+'</div></div>'+
      '<div class="sum-card"><div class="lbl">Ada Masalah</div><div class="val issue">'+issueCount+'</div></div>';
    Object.keys(sectionCounts).forEach(function(k){
      var c = sectionCounts[k];
      cards += '<div class="sum-card"><div class="lbl">'+SECTION_LABELS[k]+'</div><div class="val">'+(c.ok+c.issue)+'/'+c.total+'</div></div>';
    });
    grid.innerHTML = cards;

    var verdict = document.getElementById('verdict');
    if (verdict) {
      if (checked===0){
        verdict.style.borderColor = 'var(--border)';
        verdict.style.background = 'var(--surface)';
        verdict.innerHTML = '<span class="title" style="color:var(--text-muted)">Pemeriksaan Belum Dimulai</span><p>Silakan mulai periksa dari Tahap 01 (Bodi Luar). Tandai tombol "Aman" atau "Masalah" di setiap poin untuk melihat kesimpulan kelayakan HP ini.</p>';
      } else if (issueCount>0){
        verdict.style.borderColor = 'var(--fail-border)';
        verdict.style.background = 'var(--fail-soft)';
        verdict.innerHTML = '<span class="title" style="color:var(--fail)">Perhatian: Ditemukan '+issueCount+' Catatan Masalah</span><p>Ada '+issueCount+' bagian yang dicurigai bermasalah atau bukan bawaan asli. Jangan terburu-buru membayar. Diskusikan langsung ke penjual terkait minus ini, minta potongan harga yang wajar, atau batalkan pembelian jika menyangkut fungsi penting (seperti sinyal terblokir, kamera rusak, atau layar tiruan).</p>';
      } else if (checked<totalItems){
        verdict.style.borderColor = 'var(--accent-border)';
        verdict.style.background = 'var(--accent-soft)';
        verdict.innerHTML = '<span class="title" style="color:var(--accent)">Pemeriksaan Belum Selesai (Masih Kurang '+(totalItems-checked)+' Poin)</span><p>Bagian yang sudah Anda cek sejauh ini dalam kondisi normal. Namun masih ada '+(totalItems-checked)+' poin yang belum ditandai. Selesaikan semua poin agar Anda tidak kecolongan kerusakan tersembunyi.</p>';
      } else {
        verdict.style.borderColor = 'var(--ok-border)';
        verdict.style.background = 'var(--ok-soft)';
        verdict.innerHTML = '<span class="title" style="color:var(--ok)">Kondisi Bagus! Semua Poin Lulus Pemeriksaan</span><p>Luar biasa! Seluruh '+totalItems+' poin fisik dan fungsi dalam kondisi normal. Sebagai langkah terakhir sebelum Anda menyerahkan uang, pastikan akun iCloud penjual sudah di-logout total dan coba pasang kartu SIM Anda sendiri untuk memastikan sinyal lancar.</p>';
      }
    }

    var flagArea = document.getElementById('flagArea');
    if (flagArea) {
      var issues = Object.keys(state).filter(function(id){ return state[id]==='issue'; });
      if (issues.length===0){
        flagArea.innerHTML = '<div class="empty-note">Belum ada catatan masalah. Semua bagian yang Anda periksa sejauh ini dalam kondisi normal.</div>';
      } else {
        flagArea.innerHTML = '<div class="flag-list">'+issues.map(function(id){
          return '<div class="flag-item"><span class="t">'+itemTitle(id)+'</span><span class="s">'+SECTION_LABELS[itemSection(id)]+'</span></div>';
        }).join('')+'</div>';
      }
    }
  }

  // Reset Button
  var resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', function(){
      if (confirm('Reset seluruh status pemeriksaan kembali ke awal?')) {
        Object.keys(state).forEach(function(id){ state[id]='unset'; });
        Object.keys(SECTIONS).forEach(renderList);
        updateAll();
      }
    });
  }

  updateAll();

  // Code Table Population
  var codeTable = document.getElementById('codeTable');
  if (codeTable) {
    codeTable.innerHTML = CODES.map(function(c){
      return '<div class="code-row"><span class="code">'+c.code+'/A</span><span class="cn">'+c.flag+' '+c.country+(c.note ? '<small>'+c.note+'</small>' : '')+'</span></div>';
    }).join('');
  }

  // Lookup Tool
  var codeInput = document.getElementById('codeInput');
  var lookupResult = document.getElementById('lookupResult');
  if (codeInput && lookupResult) {
    codeInput.addEventListener('input', function(){
      var raw = codeInput.value.trim().toUpperCase();
      if (!raw){ lookupResult.innerHTML=''; return; }
      var m = raw.match(/([A-Z]{1,3})\/A$/);
      var codePart = m ? m[1] : raw.replace(/\/A$/,'');
      var hit = CODES.filter(function(c){ return c.code===codePart; })[0];
      if (hit){
        lookupResult.innerHTML = '<div class="hit"><span class="flag">'+hit.flag+'</span><div><div class="country">'+hit.country+'</div>'+(hit.note ? '<div class="note">'+hit.note+'</div>' : '')+'</div></div>';
      } else {
        lookupResult.innerHTML = '<div class="miss">Kode "'+codePart+'" tidak ada di daftar referensi ini. Coba cocokkan manual lewat pencarian atau tanyakan langsung ke penjual.</div>';
      }
    });
  }

  // Step Navigation Functionality
  var stepnav = document.getElementById('stepnav');
  function goto(step, scroll){
    if (stepnav) {
      stepnav.querySelectorAll('.step-btn').forEach(function(b){
        var isActive = b.getAttribute('data-step') === step;
        b.classList.toggle('active', isActive);
        if (isActive) {
          try {
            b.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          } catch(e) {}
        }
      });
    }
    var panels = document.querySelectorAll('.panel');
    panels.forEach(function(p){
      p.classList.toggle('active', p.getAttribute('data-panel')===step);
    });
    if (scroll !== false) {
      var targetPanel = document.querySelector('.panel[data-panel="'+step+'"]');
      var topOffset = window.innerWidth <= 768 ? 120 : 80;
      if (targetPanel) {
        var panelPos = targetPanel.getBoundingClientRect().top + window.pageYOffset - topOffset;
        window.scrollTo({top: Math.max(0, panelPos), behavior:'smooth'});
      } else if (stepnav) {
        var offsetTop = stepnav.getBoundingClientRect().top + window.pageYOffset - topOffset;
        window.scrollTo({top: Math.max(0, offsetTop), behavior:'smooth'});
      }
    }
  }

  if (stepnav) {
    stepnav.addEventListener('click', function(e){
      var b = e.target.closest('.step-btn');
      if (!b) return;
      goto(b.getAttribute('data-step'), true);
    });
  }

  document.querySelectorAll('[data-goto]').forEach(function(b){
    b.addEventListener('click', function(){ goto(b.getAttribute('data-goto'), true); });
  });

  // ==========================================================
  // MODEL SELECTION (PILIH TIPE IPHONE) ENGINE
  // ==========================================================
  var modelCardsGrid = document.getElementById('modelCardsGrid');
  var modelSearchInput = document.getElementById('modelSearchInput');
  var clearModelSearch = document.getElementById('clearModelSearch');
  var seriesPillsBar = document.getElementById('seriesPillsBar');

  function renderModelCards() {
    if (!modelCardsGrid) return;
    
    var filtered = IPHONE_MODELS.filter(function(item) {
      var matchesSeries = (activeSeriesFilter === 'all') || (item.series === activeSeriesFilter);
      var query = modelSearchQuery.trim().toLowerCase();
      var matchesSearch = !query || 
        item.name.toLowerCase().indexOf(query) !== -1 ||
        item.chip.toLowerCase().indexOf(query) !== -1 ||
        item.tags.some(function(t) { return t.toLowerCase().indexOf(query) !== -1; }) ||
        String(item.year).indexOf(query) !== -1;
      
      return matchesSeries && matchesSearch;
    });

    if (filtered.length === 0) {
      modelCardsGrid.innerHTML = '<div class="no-model-found"><p style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:6px;">Model iPhone tidak ditemukan</p><p style="font-size:13.5px;color:var(--text-muted);margin:0;">Coba kata kunci pencarian lain atau pilih tab seri di atas.</p></div>';
      return;
    }

    modelCardsGrid.innerHTML = filtered.map(function(item) {
      var tagsHtml = item.tags.map(function(t) {
        return '<span class="model-tag">' + t + '</span>';
      }).join('');

      return '<div class="apple-model-card" data-model-id="' + item.id + '" role="button" tabindex="0">' +
        '<div class="card-head">' +
          '<div class="card-meta">' +
            '<span class="card-year">' + item.year + '</span>' +
            '<span class="card-meta-sep">&bull;</span>' +
            '<span class="card-chip">' + item.chip + '</span>' +
          '</div>' +
          '<h3 class="card-model-title">' + item.name + '</h3>' +
        '</div>' +
        '<div class="card-tags-row">' +
          tagsHtml +
        '</div>' +
        '<p class="card-desc">' + item.desc + '</p>' +
        '<div class="card-action-row">' +
          '<span class="card-action-label">Pilih model ini</span>' +
          '<span class="card-chevron">&rsaquo;</span>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  // Model Cards Click Handler
  if (modelCardsGrid) {
    modelCardsGrid.addEventListener('click', function(e) {
      var card = e.target.closest('.apple-model-card') || e.target.closest('.model-card');
      if (!card) return;
      var modelId = card.getAttribute('data-model-id');
      var selected = IPHONE_MODELS.find(function(m) { return m.id === modelId; });
      if (selected) {
        selectIPhoneModel(selected);
      }
    });

    modelCardsGrid.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        var card = e.target.closest('.apple-model-card') || e.target.closest('.model-card');
        if (card) {
          e.preventDefault();
          var modelId = card.getAttribute('data-model-id');
          var selected = IPHONE_MODELS.find(function(m) { return m.id === modelId; });
          if (selected) selectIPhoneModel(selected);
        }
      }
    });
  }

  function selectIPhoneModel(model) {
    currentSelectedModel = model;

    // Update Selected Unit Badge in Diagnostic Header
    var selectedUnitNameTxt = document.getElementById('selectedUnitNameTxt');
    if (selectedUnitNameTxt) {
      selectedUnitNameTxt.textContent = model.name;
    }

    // Render Dynamic Hardware Specs Profile & Technician Flaws Advisory
    renderModelProfile(model);

    // Rebuild and Render Customized Inspection Sections for this model
    rebuildInspection(model);

    // Transition smoothly to Diagnostic View
    setView('diagnostic', 'body');
  }

  // Search Input Handler
  if (modelSearchInput) {
    modelSearchInput.addEventListener('input', function() {
      modelSearchQuery = modelSearchInput.value;
      if (clearModelSearch) {
        clearModelSearch.style.display = modelSearchQuery ? 'flex' : 'none';
      }
      renderModelCards();
    });
  }

  if (clearModelSearch) {
    clearModelSearch.addEventListener('click', function() {
      modelSearchQuery = '';
      if (modelSearchInput) modelSearchInput.value = '';
      clearModelSearch.style.display = 'none';
      renderModelCards();
      if (modelSearchInput) modelSearchInput.focus();
    });
  }

  // Series Filter Tabs Handler
  if (seriesPillsBar) {
    seriesPillsBar.addEventListener('click', function(e) {
      var pill = e.target.closest('.series-pill');
      if (!pill) return;
      seriesPillsBar.querySelectorAll('.series-pill').forEach(function(p) { p.classList.remove('active'); });
      pill.classList.add('active');
      activeSeriesFilter = pill.getAttribute('data-series');
      renderModelCards();
    });
  }

  renderModelCards();

  // ==========================================================
  // DESKTOP FRAME-BY-FRAME CANVAS AUTO-PLAY LOOP (240 FRAMES)
  // ==========================================================
  var TOTAL_FRAMES = 240;
  var FRAME_PREFIX = 'image-background/ezgif-frame-';
  var frames = new Array(TOTAL_FRAMES);
  var currentFrameIdx = 0;
  var isLoopPlaying = false;
  var animReqId = null;
  var lastTimestamp = 0;
  var TARGET_FPS = 30;
  var frameInterval = 1000 / TARGET_FPS;

  var canvas = document.getElementById('heroFrameCanvas');
  var ctx = canvas ? canvas.getContext('2d') : null;

  function getFrameUrl(num) {
    return FRAME_PREFIX + String(num).padStart(3, '0') + '.png';
  }

  function resizeCanvas() {
    if (!canvas) return;
    var rect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      renderCanvasFrame(currentFrameIdx);
    }
  }

  function preloadFrameSequence() {
    for (var i = 1; i <= Math.min(15, TOTAL_FRAMES); i++) {
      loadSingleFrame(i);
    }

    var nextIdx = 16;
    function loadRemainingBatch() {
      if (nextIdx > TOTAL_FRAMES) return;
      var end = Math.min(nextIdx + 12, TOTAL_FRAMES);
      for (var k = nextIdx; k <= end; k++) {
        loadSingleFrame(k);
      }
      nextIdx = end + 1;
      setTimeout(loadRemainingBatch, 40);
    }
    setTimeout(loadRemainingBatch, 60);
  }

  function loadSingleFrame(idx) {
    if (frames[idx - 1]) return;
    var img = new Image();
    img.src = getFrameUrl(idx);
    img.onload = function() {
      if (idx === 1 && !isLoopPlaying) {
        resizeCanvas();
        renderCanvasFrame(0);
      }
    };
    frames[idx - 1] = img;
  }

  function renderCanvasFrame(idx) {
    if (!ctx || !canvas) return;
    var img = frames[idx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (var b = idx - 1; b >= 0; b--) {
        if (frames[b] && frames[b].complete && frames[b].naturalWidth > 0) {
          img = frames[b];
          break;
        }
      }
    }
    if (img && img.complete && img.naturalWidth > 0) {
      var cw = canvas.width;
      var ch = canvas.height;
      if (cw === 0 || ch === 0) return;

      ctx.clearRect(0, 0, cw, ch);

      var imgRatio = img.naturalWidth / img.naturalHeight;
      var canvasRatio = cw / ch;
      var drawWidth, drawHeight, offsetX, offsetY;

      // On mobile screens (<= 768px), use contain mode so the entire exploded iPhone is visible
      if (window.innerWidth <= 768) {
        if (canvasRatio > imgRatio) {
          drawHeight = ch;
          drawWidth = ch * imgRatio;
          offsetX = (cw - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = cw;
          drawHeight = cw / imgRatio;
          offsetX = 0;
          offsetY = (ch - drawHeight) / 2;
        }
      } else {
        // Desktop cover mode
        if (canvasRatio > imgRatio) {
          drawWidth = cw;
          drawHeight = cw / imgRatio;
          offsetX = 0;
          offsetY = (ch - drawHeight) / 2;
        } else {
          drawWidth = ch * imgRatio;
          drawHeight = ch;
          offsetX = (cw - drawWidth) / 2;
          offsetY = 0;
        }
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  }

  function canvasAnimationLoop(timestamp) {
    if (!isLoopPlaying) return;
    animReqId = requestAnimationFrame(canvasAnimationLoop);

    if (!lastTimestamp) lastTimestamp = timestamp;
    var delta = timestamp - lastTimestamp;

    if (delta >= frameInterval) {
      lastTimestamp = timestamp - (delta % frameInterval);
      renderCanvasFrame(currentFrameIdx);
      currentFrameIdx = (currentFrameIdx + 1) % TOTAL_FRAMES;
    }
  }

  function startFrameAnimation() {
    if (document.body.classList.contains('view-home')) {
      resizeCanvas();
      if (!isLoopPlaying) {
        isLoopPlaying = true;
        lastTimestamp = 0;
        animReqId = requestAnimationFrame(canvasAnimationLoop);
      }
    } else {
      stopFrameAnimation();
    }
  }

  function stopFrameAnimation() {
    isLoopPlaying = false;
    if (animReqId) {
      cancelAnimationFrame(animReqId);
      animReqId = null;
    }
  }

  // Preload frames and start loop for all viewports (desktop & mobile)
  preloadFrameSequence();
  startFrameAnimation();

  window.addEventListener('resize', function() {
    if (!frames[0]) {
      preloadFrameSequence();
    }
    resizeCanvas();
    if (document.body.classList.contains('view-home') && !isLoopPlaying) {
      startFrameAnimation();
    }
  });

  // ==========================================================
  // ==========================================================
  // DYNAMIC 3D SPATIAL VISUALIZATION ENGINE (SELECT-MODEL SCREEN)
  // Apple Keynote-Grade 3D Perspective Wireframe & Spatial Mesh
  // ==========================================================
  var waveCanvas = document.getElementById('modelWaveCanvas');
  var waveCtx = waveCanvas ? waveCanvas.getContext('2d') : null;
  var waveAnimId = null;
  var isWavePlaying = false;
  var lastFrameTimestamp = 0;
  var waveElapsedTime = 0;
  var lastCanvasWidth = 0;
  var lastCanvasHeight = 0;

  // 3D Perspective Camera & Parallax State
  var camera3D = {
    focalLength: 540,
    targetYaw: 0,
    targetPitch: 0,
    yaw: 0,
    pitch: 0,
    roll: 0,
    camX: 0,
    camY: -30,
    camZ: -480
  };

  function resizeWaveCanvas(force) {
    if (!waveCanvas) return;
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (!force && lastCanvasWidth === w && Math.abs(lastCanvasHeight - h) < 90) {
      return;
    }
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    lastCanvasWidth = w;
    lastCanvasHeight = h;
    waveCanvas.width = Math.floor(w * dpr);
    waveCanvas.height = Math.floor(h * dpr);
    waveCanvas.style.width = w + 'px';
    waveCanvas.style.height = h + 'px';
  }

  // 3D Perspective Projection Function
  function project3D(x, y, z, cx, cy, dpr) {
    // 1. Rotate around Y axis (Yaw)
    var cosY = Math.cos(camera3D.yaw);
    var sinY = Math.sin(camera3D.yaw);
    var x1 = x * cosY + z * sinY;
    var z1 = -x * sinY + z * cosY;

    // 2. Rotate around X axis (Pitch)
    var cosP = Math.cos(camera3D.pitch);
    var sinP = Math.sin(camera3D.pitch);
    var y2 = y * cosP - z1 * sinP;
    var z2 = y * sinP + z1 * cosP;

    // 3. Rotate around Z axis (Roll)
    var cosR = Math.cos(camera3D.roll);
    var sinR = Math.sin(camera3D.roll);
    var x3 = x1 * cosR - y2 * sinR;
    var y3 = x1 * sinR + y2 * cosR;

    // Camera offset
    var fz = z2 - camera3D.camZ;
    if (fz <= 30) return null; // Near-plane clipping

    var scale = camera3D.focalLength / fz;
    return {
      sx: cx + (x3 - camera3D.camX) * scale * dpr,
      sy: cy + (y3 - camera3D.camY) * scale * dpr,
      scale: scale,
      depth: fz
    };
  }

  // Generate 3D Spatial Particles (Stardust & Floating Energy Nodes)
  var NUM_PARTICLES = 130;
  var particles3D = [];
  for (var pi = 0; pi < NUM_PARTICLES; pi++) {
    particles3D.push({
      x: (Math.random() - 0.5) * 1400,
      y: (Math.random() - 0.5) * 1000,
      z: Math.random() * 1000 + 40,
      radius: Math.random() * 1.6 + 0.8,
      speedZ: Math.random() * 24 + 14,
      driftX: (Math.random() - 0.5) * 6,
      driftY: (Math.random() - 0.5) * 6,
      seed: Math.random() * Math.PI * 2,
      baseAlpha: Math.random() * 0.35 + 0.35
    });
  }

  // Model 1: 3D iPhone Titanium Frame Geometry
  function createIPhoneWireframe() {
    var fw = 115, fh = 230, fd = 16;
    var r = 22;
    var segs = 4;
    var frontVerts = [];
    var backVerts = [];

    var corners = [
      { cx: fw/2 - r, cy: -fh/2 + r, startAngle: -Math.PI/2 },
      { cx: fw/2 - r, cy: fh/2 - r, startAngle: 0 },
      { cx: -fw/2 + r, cy: fh/2 - r, startAngle: Math.PI/2 },
      { cx: -fw/2 + r, cy: -fh/2 + r, startAngle: Math.PI }
    ];

    corners.forEach(function(c) {
      for (var s = 0; s <= segs; s++) {
        var a = c.startAngle + (s / segs) * (Math.PI / 2);
        var vx = c.cx + Math.cos(a) * r;
        var vy = c.cy + Math.sin(a) * r;
        frontVerts.push({ x: vx, y: vy, z: -fd/2 });
        backVerts.push({ x: vx, y: vy, z: fd/2 });
      }
    });

    // Camera island plateau on back
    var camPlateau = [
      { x: -fw/2 + 8, y: -fh/2 + 8, z: fd/2 + 5 },
      { x: -fw/2 + 62, y: -fh/2 + 8, z: fd/2 + 5 },
      { x: -fw/2 + 62, y: -fh/2 + 62, z: fd/2 + 5 },
      { x: -fw/2 + 8, y: -fh/2 + 62, z: fd/2 + 5 }
    ];

    // 3 Camera lens rings
    var lens1 = [], lens2 = [], lens3 = [];
    for (var a = 0; a < Math.PI * 2; a += Math.PI / 6) {
      lens1.push({ x: -fw/2 + 24 + Math.cos(a) * 11, y: -fh/2 + 24 + Math.sin(a) * 11, z: fd/2 + 7 });
      lens2.push({ x: -fw/2 + 24 + Math.cos(a) * 11, y: -fh/2 + 48 + Math.sin(a) * 11, z: fd/2 + 7 });
      lens3.push({ x: -fw/2 + 46 + Math.cos(a) * 11, y: -fh/2 + 36 + Math.sin(a) * 11, z: fd/2 + 7 });
    }

    return {
      frontVerts: frontVerts,
      backVerts: backVerts,
      camPlateau: camPlateau,
      lensRings: [lens1, lens2, lens3]
    };
  }
  var iphoneWireframe = createIPhoneWireframe();

  // Model 2: 3D Precision Concentric Optical Rings
  function createOpticalRings() {
    var rings = [];
    var radii = [64, 48, 34, 20];
    radii.forEach(function(r, idx) {
      var pts = [];
      var segs = 24;
      for (var i = 0; i <= segs; i++) {
        var a = (i / segs) * Math.PI * 2;
        pts.push({
          x: Math.cos(a) * r,
          y: Math.sin(a) * r,
          z: idx * 9 - 14
        });
      }
      rings.push(pts);
    });
    return rings;
  }
  var opticalRings = createOpticalRings();

  // Model 3: 3D Faceted Octahedron (Bionic Core Crystal)
  var chipOctahedron = {
    verts: [
      { x: 0, y: -42, z: 0 },
      { x: 42, y: 0, z: 0 },
      { x: 0, y: 0, z: 42 },
      { x: -42, y: 0, z: 0 },
      { x: 0, y: 0, z: -42 },
      { x: 0, y: 42, z: 0 }
    ],
    edges: [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [5, 1], [5, 2], [5, 3], [5, 4],
      [1, 2], [2, 3], [3, 4], [4, 1]
    ]
  };

  // 3D Object Transformation Helper
  function transformVert(v, rotX, rotY, rotZ, transX, transY, transZ) {
    // Roll
    var cosR = Math.cos(rotZ);
    var sinR = Math.sin(rotZ);
    var x1 = v.x * cosR - v.y * sinR;
    var y1 = v.x * sinR + v.y * cosR;
    var z1 = v.z;

    // Pitch
    var cosP = Math.cos(rotX);
    var sinP = Math.sin(rotX);
    var y2 = y1 * cosP - z1 * sinP;
    var z2 = y1 * sinP + z1 * cosP;

    // Yaw
    var cosY = Math.cos(rotY);
    var sinY = Math.sin(rotY);
    var x3 = x1 * cosY + z2 * sinY;
    var z3 = -x1 * sinY + z2 * cosY;

    return {
      x: x3 + transX,
      y: y2 + transY,
      z: z3 + transZ
    };
  }

  function renderWaveFrame(timestamp) {
    if (!waveCanvas || !waveCtx) return;
    var w = waveCanvas.width;
    var h = waveCanvas.height;
    if (w === 0 || h === 0) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    if (!lastFrameTimestamp) lastFrameTimestamp = timestamp;
    var dt = Math.min((timestamp - lastFrameTimestamp) / 1000, 0.1);
    lastFrameTimestamp = timestamp;
    waveElapsedTime += dt;

    var cx = w * 0.5;
    var cy = h * 0.46;
    var t = waveElapsedTime;

    // Smooth inertia lerp for camera parallax
    camera3D.yaw += (camera3D.targetYaw - camera3D.yaw) * 0.05;
    camera3D.pitch += (camera3D.targetPitch - camera3D.pitch) * 0.05;
    // Add subtle organic auto-breathing motion
    camera3D.roll = Math.sin(t * 0.3) * 0.02;
    camera3D.camY = -30 + Math.sin(t * 0.5) * 12;

    // 1. Clear Canvas with Deep Space Obsidian
    waveCtx.fillStyle = '#020205';
    waveCtx.fillRect(0, 0, w, h);

    // 2. Ambient Volumetric Atmospheric Spotlights
    var lightAX = cx + Math.sin(t * 0.4) * (w * 0.22);
    var lightAY = cy + Math.cos(t * 0.35) * (h * 0.18);
    var gradA = waveCtx.createRadialGradient(lightAX, lightAY, 10 * dpr, lightAX, lightAY, Math.max(w, h) * 0.65);
    gradA.addColorStop(0, 'rgba(195, 215, 245, 0.07)');
    gradA.addColorStop(0.4, 'rgba(140, 160, 200, 0.03)');
    gradA.addColorStop(1, 'rgba(0, 0, 0, 0)');
    waveCtx.fillStyle = gradA;
    waveCtx.fillRect(0, 0, w, h);

    var lightBX = cx - Math.cos(t * 0.3) * (w * 0.25);
    var lightBY = cy + Math.sin(t * 0.45) * (h * 0.22);
    var gradB = waveCtx.createRadialGradient(lightBX, lightBY, 20 * dpr, lightBX, lightBY, Math.max(w, h) * 0.55);
    gradB.addColorStop(0, 'rgba(160, 140, 210, 0.05)');
    gradB.addColorStop(0.5, 'rgba(90, 80, 130, 0.02)');
    gradB.addColorStop(1, 'rgba(0, 0, 0, 0)');
    waveCtx.fillStyle = gradB;
    waveCtx.fillRect(0, 0, w, h);

    // 3. Render 3D Spatial Waveform Mesh (Quantum Surface Topography)
    var gridCols = 24;
    var gridRows = 16;
    var gridWidth = 1100;
    var gridDepth = 850;
    var gridOriginZ = 60;
    var gridOriginY = 120;

    var meshPoints = [];
    for (var r = 0; r <= gridRows; r++) {
      var row = [];
      var rz = gridOriginZ + (r / gridRows) * gridDepth;
      for (var c = 0; c <= gridCols; c++) {
        var rx = -gridWidth * 0.5 + (c / gridCols) * gridWidth;
        var elevation = Math.sin(rx * 0.005 + t * 0.75) * Math.cos(rz * 0.0045 + t * 0.6) * 52
                      + Math.sin((rx + rz) * 0.004 - t * 0.5) * 28;
        var ry = gridOriginY + elevation;
        var proj = project3D(rx, ry, rz, cx, cy, dpr);
        row.push(proj);
      }
      meshPoints.push(row);
    }

    // Draw 3D Grid Longitudinal Curves (along depth Z)
    for (var c = 0; c <= gridCols; c += 2) {
      waveCtx.beginPath();
      var started = false;
      for (var r = 0; r <= gridRows; r++) {
        var p = meshPoints[r][c];
        if (!p) continue;
        if (!started) {
          waveCtx.moveTo(p.sx, p.sy);
          started = true;
        } else {
          waveCtx.lineTo(p.sx, p.sy);
        }
      }
      var colAlpha = (1 - Math.abs(c - gridCols / 2) / (gridCols / 2)) * 0.22 + 0.05;
      waveCtx.strokeStyle = 'rgba(255, 255, 255, ' + colAlpha + ')';
      waveCtx.lineWidth = 1.0 * dpr;
      waveCtx.stroke();
    }

    // Draw 3D Grid Latitudinal Lines (across X)
    for (var r = 0; r <= gridRows; r += 2) {
      waveCtx.beginPath();
      var started = false;
      for (var c = 0; c <= gridCols; c++) {
        var p = meshPoints[r][c];
        if (!p) continue;
        if (!started) {
          waveCtx.moveTo(p.sx, p.sy);
          started = true;
        } else {
          waveCtx.lineTo(p.sx, p.sy);
        }
      }
      var depthAlpha = Math.max(0, (1 - r / gridRows) * 0.28);
      waveCtx.strokeStyle = 'rgba(235, 240, 255, ' + depthAlpha + ')';
      waveCtx.lineWidth = 1.0 * dpr;
      waveCtx.stroke();
    }

    // Glowing Crest Nodes on the Waveform
    for (var r = 0; r <= gridRows; r += 4) {
      for (var c = 0; c <= gridCols; c += 4) {
        var p = meshPoints[r][c];
        if (!p) continue;
        var nodeAlpha = Math.max(0, (1 - p.depth / 900) * 0.45);
        waveCtx.fillStyle = 'rgba(255, 255, 255, ' + nodeAlpha + ')';
        waveCtx.beginPath();
        waveCtx.arc(p.sx, p.sy, 2.0 * p.scale * dpr, 0, Math.PI * 2);
        waveCtx.fill();
      }
    }

    // 4. Render 3D Floating Geometry Models
    var isMobile = w < 680 * dpr;

    // Object 1: 3D iPhone Titanium Chassis (Floats gracefully on left/mid-left)
    var ipRotY = t * 0.22;
    var ipRotX = 0.32 + Math.sin(t * 0.28) * 0.12;
    var ipRotZ = -0.15 + Math.cos(t * 0.2) * 0.08;
    var ipPosX = isMobile ? -60 : -360;
    var ipPosY = isMobile ? -90 : -20;
    var ipPosZ = isMobile ? 320 : 250;

    var projFront = [];
    var projBack = [];

    iphoneWireframe.frontVerts.forEach(function(v) {
      var tv = transformVert(v, ipRotX, ipRotY, ipRotZ, ipPosX, ipPosY, ipPosZ);
      projFront.push(project3D(tv.x, tv.y, tv.z, cx, cy, dpr));
    });

    iphoneWireframe.backVerts.forEach(function(v) {
      var tv = transformVert(v, ipRotX, ipRotY, ipRotZ, ipPosX, ipPosY, ipPosZ);
      projBack.push(project3D(tv.x, tv.y, tv.z, cx, cy, dpr));
    });

    // Draw Front Frame
    if (projFront.length && projFront[0]) {
      waveCtx.beginPath();
      waveCtx.moveTo(projFront[0].sx, projFront[0].sy);
      for (var fi = 1; fi < projFront.length; fi++) {
        if (projFront[fi]) waveCtx.lineTo(projFront[fi].sx, projFront[fi].sy);
      }
      waveCtx.closePath();
      waveCtx.strokeStyle = 'rgba(255, 255, 255, 0.42)';
      waveCtx.lineWidth = 1.3 * dpr;
      waveCtx.stroke();
    }

    // Draw Back Frame
    if (projBack.length && projBack[0]) {
      waveCtx.beginPath();
      waveCtx.moveTo(projBack[0].sx, projBack[0].sy);
      for (var bi = 1; bi < projBack.length; bi++) {
        if (projBack[bi]) waveCtx.lineTo(projBack[bi].sx, projBack[bi].sy);
      }
      waveCtx.closePath();
      waveCtx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      waveCtx.lineWidth = 1.0 * dpr;
      waveCtx.stroke();
    }

    // Connect corner struts between front and back
    for (var ci = 0; ci < projFront.length; ci += 5) {
      if (projFront[ci] && projBack[ci]) {
        waveCtx.beginPath();
        waveCtx.moveTo(projFront[ci].sx, projFront[ci].sy);
        waveCtx.lineTo(projBack[ci].sx, projBack[ci].sy);
        waveCtx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        waveCtx.lineWidth = 0.9 * dpr;
        waveCtx.stroke();
      }
    }

    // Camera Plateau & Lens Rings
    waveCtx.beginPath();
    var plateauStarted = false;
    iphoneWireframe.camPlateau.forEach(function(v) {
      var tv = transformVert(v, ipRotX, ipRotY, ipRotZ, ipPosX, ipPosY, ipPosZ);
      var p = project3D(tv.x, tv.y, tv.z, cx, cy, dpr);
      if (p) {
        if (!plateauStarted) { waveCtx.moveTo(p.sx, p.sy); plateauStarted = true; }
        else waveCtx.lineTo(p.sx, p.sy);
      }
    });
    waveCtx.closePath();
    waveCtx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    waveCtx.lineWidth = 1.0 * dpr;
    waveCtx.stroke();

    iphoneWireframe.lensRings.forEach(function(ring) {
      waveCtx.beginPath();
      var rStarted = false;
      ring.forEach(function(v) {
        var tv = transformVert(v, ipRotX, ipRotY, ipRotZ, ipPosX, ipPosY, ipPosZ);
        var p = project3D(tv.x, tv.y, tv.z, cx, cy, dpr);
        if (p) {
          if (!rStarted) { waveCtx.moveTo(p.sx, p.sy); rStarted = true; }
          else waveCtx.lineTo(p.sx, p.sy);
        }
      });
      waveCtx.closePath();
      waveCtx.strokeStyle = 'rgba(255, 255, 255, 0.48)';
      waveCtx.lineWidth = 1.1 * dpr;
      waveCtx.stroke();
    });

    // Object 2: 3D Precision Concentric Optical Rings (Right side)
    var optRotY = -t * 0.3;
    var optRotX = 0.42 + Math.cos(t * 0.25) * 0.15;
    var optPosX = isMobile ? 80 : 380;
    var optPosY = isMobile ? -80 : -50;
    var optPosZ = isMobile ? 360 : 310;

    opticalRings.forEach(function(ring, idx) {
      waveCtx.beginPath();
      var started = false;
      ring.forEach(function(v) {
        var tv = transformVert(v, optRotX, optRotY, 0, optPosX, optPosY, optPosZ);
        var p = project3D(tv.x, tv.y, tv.z, cx, cy, dpr);
        if (p) {
          if (!started) { waveCtx.moveTo(p.sx, p.sy); started = true; }
          else waveCtx.lineTo(p.sx, p.sy);
        }
      });
      waveCtx.closePath();
      var ringAlpha = (1 - idx * 0.2) * 0.38;
      waveCtx.strokeStyle = 'rgba(230, 240, 255, ' + ringAlpha + ')';
      waveCtx.lineWidth = (1.4 - idx * 0.2) * dpr;
      waveCtx.stroke();
    });

    // Object 3: 3D Faceted Octahedron (Bionic Chip Core Crystal)
    var chipRotY = t * 0.45;
    var chipRotX = t * 0.35;
    var chipPosX = isMobile ? 0 : 250;
    var chipPosY = isMobile ? 120 : 160;
    var chipPosZ = 440;

    var chipProj = [];
    chipOctahedron.verts.forEach(function(v) {
      var tv = transformVert(v, chipRotX, chipRotY, 0, chipPosX, chipPosY, chipPosZ);
      chipProj.push(project3D(tv.x, tv.y, tv.z, cx, cy, dpr));
    });

    chipOctahedron.edges.forEach(function(edge) {
      var p1 = chipProj[edge[0]];
      var p2 = chipProj[edge[1]];
      if (p1 && p2) {
        waveCtx.beginPath();
        waveCtx.moveTo(p1.sx, p1.sy);
        waveCtx.lineTo(p2.sx, p2.sy);
        waveCtx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        waveCtx.lineWidth = 1.0 * dpr;
        waveCtx.stroke();
      }
    });

    // 5. Render 3D Spatial Stardust Particles
    for (var i = 0; i < particles3D.length; i++) {
      var part = particles3D[i];
      part.z -= part.speedZ * dt;
      part.x += part.driftX * dt;
      part.y += part.driftY * dt;

      if (part.z < 40) {
        part.z = 1050;
        part.x = (Math.random() - 0.5) * 1400;
        part.y = (Math.random() - 0.5) * 1000;
      }

      var pp = project3D(part.x, part.y, part.z, cx, cy, dpr);
      if (!pp) continue;

      var pAlpha = part.baseAlpha * Math.sin(t * 2.2 + part.seed) * 0.25 + part.baseAlpha;
      pAlpha *= Math.min(1, part.z / 150) * Math.max(0, 1 - part.z / 1000);

      var pRad = part.radius * pp.scale * dpr;

      // Near-field bokeh soft glow
      if (part.z < 350) {
        var pGrad = waveCtx.createRadialGradient(pp.sx, pp.sy, 0, pp.sx, pp.sy, pRad * 3.5);
        pGrad.addColorStop(0, 'rgba(255, 255, 255, ' + (pAlpha * 0.8) + ')');
        pGrad.addColorStop(0.5, 'rgba(220, 230, 255, ' + (pAlpha * 0.25) + ')');
        pGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        waveCtx.fillStyle = pGrad;
        waveCtx.beginPath();
        waveCtx.arc(pp.sx, pp.sy, pRad * 3.5, 0, Math.PI * 2);
        waveCtx.fill();
      }

      waveCtx.fillStyle = 'rgba(255, 255, 255, ' + pAlpha + ')';
      waveCtx.beginPath();
      waveCtx.arc(pp.sx, pp.sy, Math.max(0.8 * dpr, pRad), 0, Math.PI * 2);
      waveCtx.fill();
    }

    // 6. Vignette Outer Fade (Ensures pristine contrast for UI cards & text)
    var vigGrad = waveCtx.createRadialGradient(cx, cy, Math.min(w, h) * 0.35, cx, cy, Math.max(w, h) * 0.72);
    vigGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    vigGrad.addColorStop(0.7, 'rgba(2, 2, 5, 0.35)');
    vigGrad.addColorStop(1, 'rgba(0, 0, 0, 0.85)');
    waveCtx.fillStyle = vigGrad;
    waveCtx.fillRect(0, 0, w, h);
  }

  function waveAnimationLoop(timestamp) {
    if (!isWavePlaying) return;
    renderWaveFrame(timestamp);
    waveAnimId = requestAnimationFrame(waveAnimationLoop);
  }

  function startWaveAnimation() {
    if (!waveCanvas) return;
    resizeWaveCanvas(true);
    if (!isWavePlaying) {
      isWavePlaying = true;
      lastFrameTimestamp = 0;
      waveAnimId = requestAnimationFrame(waveAnimationLoop);
    }
  }

  function stopWaveAnimation() {
    isWavePlaying = false;
    if (waveAnimId) {
      cancelAnimationFrame(waveAnimId);
      waveAnimId = null;
    }
    lastFrameTimestamp = 0;
  }

  // Smooth global 3D camera parallax on mouse move
  window.addEventListener('pointermove', function(e){
    var w = window.innerWidth || 1;
    var h = window.innerHeight || 1;
    camera3D.targetYaw = ((e.clientX / w) - 0.5) * 0.45;
    camera3D.targetPitch = ((e.clientY / h) - 0.5) * 0.32;
  }, { passive: true });

  window.addEventListener('pointerleave', function(){
    camera3D.targetYaw = 0;
    camera3D.targetPitch = 0;
  }, { passive: true });

  window.addEventListener('resize', function(){
    if (document.body.classList.contains('view-select-model')) {
      resizeWaveCanvas(false);
    }
  });

  // ==========================================================
  // VIEW MODE SWITCHING (HOME -> SELECT-MODEL -> DIAGNOSTIC)
  // ==========================================================
  function setView(viewMode, step){
    document.body.classList.remove('view-home', 'view-select-model', 'view-diagnostic');

    var navBackBtnSpan = navBackBtn ? navBackBtn.querySelector('span') : null;

    if (viewMode === 'select-model'){
      stopFrameAnimation();
      document.body.classList.add('view-select-model');
      if (navBackBtnSpan) navBackBtnSpan.textContent = 'Beranda';
      startWaveAnimation();
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else if (viewMode === 'diagnostic'){
      stopFrameAnimation();
      stopWaveAnimation();
      document.body.classList.add('view-diagnostic');
      if (navBackBtnSpan) navBackBtnSpan.textContent = 'Ganti Model';
      if (step){
        goto(step, false);
      }
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
      // Default: 'home'
      stopWaveAnimation();
      document.body.classList.add('view-home');
      if (navBackBtnSpan) navBackBtnSpan.textContent = 'Beranda';
      resizeCanvas();
      startFrameAnimation();
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

  // Hero CTA Button -> Goes to Model Selection Page!
  var startCheckBtn = document.getElementById('startCheckBtn');
  if (startCheckBtn) {
    startCheckBtn.addEventListener('click', function(){
      setView('select-model');
    });
  }

  // Hero "Pelajari Cara Kerja Website" Button -> Smooth scroll to Guide Section
  var heroLearnMoreBtn = document.getElementById('heroLearnMoreBtn');
  if (heroLearnMoreBtn) {
    heroLearnMoreBtn.addEventListener('click', function(e){
      e.preventDefault();
      var guideSec = document.getElementById('homeGuideSection');
      if (guideSec) {
        guideSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Guide Section Bottom Primary CTA -> Goes to Model Selection Page!
  var guideStartCheckBtn = document.getElementById('guideStartCheckBtn');
  if (guideStartCheckBtn) {
    guideStartCheckBtn.addEventListener('click', function(){
      setView('select-model');
    });
  }

  // Guide Section Scroll Top Button -> Smooth scroll to top
  var guideScrollTopBtn = document.getElementById('guideScrollTopBtn');
  if (guideScrollTopBtn) {
    guideScrollTopBtn.addEventListener('click', function(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Model Selection Back Button -> Goes back to Home
  var modelSelectBackBtn = document.getElementById('modelSelectBackBtn');
  if (modelSelectBackBtn) {
    modelSelectBackBtn.addEventListener('click', function(){
      setView('home');
    });
  }

  // Diagnostic Back Button -> Goes back to Model Selection
  var diagnosticBackBtn = document.getElementById('diagnosticBackBtn');
  if (diagnosticBackBtn) {
    diagnosticBackBtn.addEventListener('click', function(){
      setView('select-model');
    });
  }

  // Brand Header Click -> Return to Home
  var navBrand = document.getElementById('navBrand');
  if (navBrand) {
    navBrand.addEventListener('click', function(){
      setView('home');
    });
    navBrand.addEventListener('keydown', function(e){
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setView('home');
      }
    });
  }

  // Nav Back Button -> Contextual return
  var navBackBtn = document.getElementById('navBackBtn');
  if (navBackBtn) {
    navBackBtn.addEventListener('click', function(){
      if (document.body.classList.contains('view-diagnostic')) {
        setView('select-model');
      } else {
        setView('home');
      }
    });
  }

  // Lightbox Modal Logic
  var lightboxModal = document.getElementById('lightboxModal');
  var lightboxBackdrop = document.getElementById('lightboxBackdrop');
  var lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  var lightboxPreview = document.getElementById('lightboxPreview');
  var lightboxTitle = document.getElementById('lightboxTitle');
  var lightboxDesc = document.getElementById('lightboxDesc');
  var lightboxBadge = document.getElementById('lightboxBadge');

  function openLightbox(itemId) {
    if (!lightboxModal) return;
    var sectionKey = itemSection(itemId);
    var item = (SECTIONS[sectionKey] || []).find(function(it) { return it.id === itemId; });
    if (!item) return;

    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = item.desc;
    if (lightboxBadge) {
      lightboxBadge.textContent = 'PANDUAN VISUAL • ' + (currentSelectedModel ? currentSelectedModel.name : 'IPHONE');
    }

    if (lightboxPreview) {
      var visual = getModelInspectionVisual(currentSelectedModel, itemId);
      lightboxPreview.innerHTML = visual.html;
    }

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });

  document.addEventListener('click', function(e) {
    var diag = e.target.closest('.diagram');
    if (diag && diag.hasAttribute('data-item-id')) {
      openLightbox(diag.getAttribute('data-item-id'));
    }
  });

  window.__IPHONE_CHECKER__ = {
    IPHONE_MODELS: IPHONE_MODELS,
    buildModelInspectionSections: buildModelInspectionSections,
    getModelInspectionVisual: getModelInspectionVisual
  };

})();

