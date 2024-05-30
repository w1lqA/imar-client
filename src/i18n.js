import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: 'en',
    returnObjects: true,
    resources: {
    en: {
        translation: {
            navbar: {
              main: 'Main', 
              projects: 'Projects',
              services: 'Services',
              career: 'Career'
            },
            headerButton: 'about us',
            activitiesSectionTitle: 'Areas of Our Activity',
            activities: [
            {
                title: 'Civil Engineering',
                description: 'Shaping the landscape with visionary architecture and robust civil engineering.',
            },
            {
                title: 'Construction of infrastructure facilities',
                description: 'Building essential connections through transportation, utilities, and urban development projects.',
            },
            {
                title: 'Construction of power engineering and alternative energy facilities',
                description: 'Empowering communities with sustainable electricity and renewable energy initiatives.',
            },
            {
                title: 'Industrial construction',
                description: 'Expertly navigating the world of energy extraction, processing, and distribution.',
            },
            {
                title: 'Construction of marine  structures',
                description: 'Harnessing the power of the seas with advanced maritime solutions.',
            },
            ],
            about: {
            title: 'ABOUT US',
            listElements: [
                {
                boldText: 'Expert Construction Services',
                description: 'A team of specialists in the field of construction and technical engineering for the implementation of projects of any scale and complexity.',
                },
                {
                boldText: 'Sustainable Development Leaders',
                description: 'In each project, we strive to bring true value to the client and a high level of service, which determine the approach to our work.',
                },
                {
                boldText: 'Project Success Through Experience',
                description: 'We help the world develop safely and efficiently, moving towards a sustainable future.',
                },
                {
                boldText: 'Global Engineering Adaptability',
                description: 'We implement projects on a global scale, following developing technologies and engineering approaches, we adapt to the technical and administrative peculiarities of the country.',
                },
            ],
            paragraphs: [
                '➤ By creating cost-effective and technologically advanced solutions, we help you reduce the cost of installation, design and operation of your facility, while providing convenience in work processes.',
                '➤ We make it easier for you to implement your projects by sharing our experience with you. With proper management of personnel, materials and finances, we carry out the processes of implementing your project without any failures.',
                '➤ We take over the management of all processes during construction in accordance with design drawings, general and special specifications, as well as within the framework of the rules of engineering ethics and occupational safety requirements.',
            ],
            consultation: 'Leave a request and we will contact you',
            contactFormButton: 'contact form',
            },
            servicesSectionTitle: 'OUR DIVISIONS AND SERVICES PROVIDED',
            services: [
                {
                    title: 'CONSTRUCTION ENGINEERING',
                    description: [
                        'Turnkey construction and installation works',
                        'Attracting a full staff of employees to the facility',
                        'Quick mobilization and high-quality coordinated work of the team',
                    ],
                },
                {
                    title: 'DESIGNING',
                    description: [
                        'Design of engineering system drawings',
                        'Delivery of the complete list of documentation to the customer',
                        'Support during the construction process',
                    ],
                },
                {
                    title: 'EXPLOITATION',
                    description: [
                        'Professional service',
                        'Efficient maintenance technology',
                        'Saving of effort and money as a result of proper operation',
                    ],
                },
            ],
            hero: {
                description: "We are an international construction and engineering company, we accompany our clients in the implementation of infrastructure, industrial and development projects at every stage of their life cycle.",
                button: "ABOUT US"
            },
            projects: {
                project1: "RESIDENTIAL COMPLEX",
                project2: "AMUR GPP",
                project3: "RESIDENTIAL DISTRICT",
                project4: "AMUR GCC",
                project5: "KUZMINKI MALL",
                project6: "G-DRIVE ARENA",
                project7: "Industrial Park",
                project8: "«Magadan» Airport",
                description1: "Electrical and mechanical work",
                description2: "Construction and installation works",
                projectCardButton: "See more"
            },
            projectsSectionTitle: "OUR PROJECTS",
            geographyTitle: "GEOGRAPHY OF THE PROJECTS",
            career: {
                title: "We are always on the lookout for ambitious people",
                description: "If you would like to join the IMAR GROUP, please leave an application form and we will contact you.",
                button: "learn more"
            },
            contacts: {
                title1: 'contact us',
                title2: 'career in imar',
                location: '109004, Moscow, Zemlyanoy Val str., 64, p. 2, room 1/7',
                phone: '+7 (991) 773-48-28',
                email: 'info@imar-group.com',
            },
            contactForm: {
                errorMessages: {
                    0: ' ',
                    1: 'Fill in all the fields to continue',
                    2: 'Accept the user agreement to continue',
                    3: 'Your message is successfully sent!',
                    4: 'Something went wrong :('
                },
                agreement: 'I accept the user agreement and privacy policy',
                labelName: 'Name',
                labelEmail: 'Email',
                labelPhone: 'Phone',
                button: 'Send',
            },
            footer: {
              phone: 'Phone',
              email: 'Email',
              copyright: 'All rights reserved'
            },
            projectInfoSection: { title: 'ABOUT THIS PROJECT' },
            projectPage: {
              header: {
                title: [
                  'Start / Finish: ',
                  'Scope of Works: ',
                  'Client: '
                ]
              },
              projectInfo: [
                {
                  title: ['SYMBOL', 'RESIDENTIAL COMPLEX'],
                  headerInfo: ['2022-2023', 'Electrical and mechanical work', 'LIMAKMARASH'],
                  description: [
                    'Multifunctional residential complex with underground parking, "Symbol" residential complex, buildings 16-17-18 in Moscow.',
                    'Three buildings connected by a two-story podium and a single two-level underground parking for 449 cars. The total project area is 93,729 square meters.',
                    'The courtyard area is fenced and equipped with vehicle access control through a checkpoint. The residential complex includes a supermarket, a built-in sports and fitness center, catering establishments with up to 50 seats each, and office spaces.'
                  ]
                },
                {
                  title: ['AMUR GAS PROCESSING PLANT'],
                  headerInfo: ['2018-2022', 'Electrical and mechanical work', 'YAMATA'],
                  description: [
                    'The main construction site of the plant covers about 900 hectares (comparable to 1,100 football fields). During construction, over 430,000 cubic meters of concrete were poured, and over 170,000 tons of steel structures were installed (comparable to the weight of 23 Eiffel Towers).',
                    'The design processing capacity is 42 billion cubic meters of natural gas per year. Large-scale infrastructure was created in adjacent areas for the construction: 27 km of access roads, a quay on the Zea River, and about 40 km of railway tracks.',
                    'Construction of the Amur Gas Processing Plant in the Svobodny district of the Amur region has been ongoing since October 2015 as part of Gazprom\'s Eastern Gas Program.'
                  ]
                },
                {
                  title: ['RESIDENTIAL DISTRICT', 'Svobodny'],
                  headerInfo: ['2020-2021', 'Construction and installation works', 'GORIZONT'],
                  description: [
                    'Residential district for employees of the Amur Gas Processing Plant. The "Alekseevsky" residential district in Svobodny was built for 5,000 residents. It includes 42 five-story buildings with 1,540 apartments and 36 townhouses with 148 apartments. All housing has improved layouts, high ceilings, furniture, household appliances, mirrors, and chandeliers. The area is equipped with parking lots and sports/playgrounds.',
                    'The district also includes a kindergarten with an indoor pool for 350 children, a school for 900 students, a clinic with adult and children\'s departments, a cultural and leisure center, a universal store, a service center, and a universal sports training complex.',
                    'Artesian wells were drilled for water supply, and water purification systems and modern wastewater treatment facilities were installed. Heating and hot water are provided by an in-house gas boiler. All facilities are designed for the Far East climate with temperature variations from -40 to +40 degrees.'
                  ]
                },
                {
                  title: ['AMUR GAS CHEMICAL COMPLEX'],
                  headerInfo: ['2024-Until now', 'Electrical and mechanical work', 'ESTA Construction'],
                  description: [
                    'The Amur Gas Chemical Complex (AGCC) is a joint venture between SIBUR and China Petroleum & Chemical Corporation (Sinopec) for the production of polyethylene and polypropylene for the Russian and global markets. The complex\'s production capacity will be up to 2.7 million tons of finished products per year.',
                    'The construction area of the Amur GHK exceeds 300 hectares. The complex is being built in the Svobodnensky district, 15 km from the city of Svobodny.',
                    'The largest pyrolysis units in the world by single capacity - 2.3 million tons per year, with 9 pyrolysis furnaces, 8 main and 1 reserve.'
                  ]
                },
                {
                  title: ['KUZMINKI MALL'],
                  headerInfo: ['2023-2024', 'Electrical and mechanical work', 'LIMAKMARASH'],
                  description: [
                    'Project for the construction of the new Kuzminki Mall shopping and entertainment center in Moscow. Kuzminki Mall is located 200 meters from Kuzminki metro station on one of the city\'s main transport arteries.',
                    'The mall has become a central shopping location. It includes a supermarket, popular fashion and sports brands, and a gastronomic area with cafes and restaurants. In front of the main entrance, there is a landscaped square with atmospheric lighting, and inside there are spacious atriums with lounge areas.'
                  ]
                },
                {
                  title: ['G-DRIVE ARENA'],
                  headerInfo: ['2021-2022', 'Electrical and mechanical work', 'LIMAKMARASH'],
                  description: [
                    'The multifunctional sports complex "G-DRIVE Arena" is intended for: Hockey matches under the auspices of the KHL, VHL, and MCHM; Training processes for hockey; Mass ice skating; Other sports and entertainment events.',
                    'In the free time from sports events, the area around the sports complex is used for walks and relaxation for residents, as well as for citywide cultural and mass events.'
                  ]
                },
                {
                  title: ['Industrial Park “Chernyakhovsk”'],
                  headerInfo: ['2023-Until now','Electrical and mechanical work','LIMAKMARASH'],
                  description: [
                    'Construction of a production complex for silicon wafers and photovoltaic converters located in Chernyakhovsk, Kaliningrad Region (Industrial Park “Chernyakhovsk”). This is the largest solar wafer and cell manufacturing plant in Eastern Europe.',
                    'In the course of the project implementation, the project documentation was adjusted and passed the state expert review, working documentation was developed in BIM, turnkey construction works were performed, including the full scope of electromechanical works.',
                  ],
                },
                {
                  title: ['«Magadan» Airport'],
                  headerInfo: ['2024-Until now','Electrical and mechanical work','LIMAKMARASH'],
                  description: [
                    'As part of the project implementation, construction of a new air terminal complex for domestic airlines of Magadan International Airport is underway.',
                    'Construction of a new station square, a new 10kV electrical distribution substation, treatment facilities and other auxiliary facilities.',
                    'The new terminal of Magadan International Airport will be equipped with 2 telescopic ladders and an automatic baggage handling system, it will realize modern technologies of passenger service.',
                  ],
                },
              ]
            },
            servicePage: {
              serviceInfo: [

                {
                  title: 'IMAR ENGINEERING AND CONSTRUCTION',
                  info: [
                    '• TURNKEY CONSTRUCTION AND INSTALLATION WORKS',
                    '• ATTRACTING A FULL STAFF OF EMPLOYEES TO THE FACILITY',
                    '• QUICK MOBILIZATION AND HIGH-QUALITY COORDINATED WORK OF THE TEAM'
                    ],
                  descriptionTitle: 'Provides construction and installation services for electromechanical systems:',
                  description: [
                    ['➤ Installation of industrial equipment',
                    '➤ Installation of process pipelines',
                    '<br/>',
                    '➤ ES: Electrical Supply',
                    '➤ EM: Electrical Equipment',
                    '➤ EG: Lightning Protection and Grounding',
                    '➤ ASCME: Automated System of Control and Metering of Electricity',
                    ],
                    ['➤ Installation of prefabricated buildings and structures',
                    '➤ Installation of metal structures',
                    '<br/>',
                    '➤ APS: Automatic fire alarm system',
                    '➤ ASPS: Smoke protection automation system',
                    '➤ SUE: Smoke alarm system: System of automation of smoke protection',
                    '➤ SUE: System of notification and control of evacuation of people in case of fire',
                    '➤ ACS: Access Control and Management System',
                    '➤ CCTV: Video Surveillance System',
                    '➤ SCS: Structured Cabling System',
                    '➤ SRF: Radio system',
                    '➤ SPP: Automatic Parking System (Paid Parking System)',
                    '➤ OS: Security Alarm System',
                    '➤ TS: Panic alarm system',
                    '➤ EC: Electrical Chasification system',
                    '➤ EES: Emergency communication system for immobile groups of the population'
                    ],
                    ['➤ HVAC: Heating, Ventilation, and Air Conditioning',
                      '➤ HVAC1: Heating and Heat Supply System',
                      '➤ HVAC2: General Exchange Ventilation System',
                      '➤ HVAC3: Air Conditioning System',
                      '➤ HVAC4: Smoke Ventilation System',
                      '➤ WC: Sewerage',
                      '➤ WC1: Internal Sewerage Systems',
                      '➤ WC2: Storm Sewerage',
                      '➤ WC3: Industrial Sewerage',
                      '➤ WS: Water Supply System',
                      '➤ HC: Cold Supply System',
                      '➤ AUPT: Automatic Water Fire Extinguishing Systems',
                      '➤ WFW: Internal Fire-Fighting Water Supply System'
                    ]
                  ],
                  
                },
                {
                  title: 'IMAR PROJECT',
                  info: [ '• DESIGN OF ENGINEERING SYSTEM DRAWINGS',
                      '• DELIVERY OF THE COMPLETE LIST OF DOCUMENTATION TO THE CUSTOMER',
                      '• SUPPORT DURING THE CONSTRUCTION PROCESSS'],
                  descriptionTitle: 'Provides electromechanical system design services:',
                  description: [
                      ['➤ ES: Electrical Supply',
                      '➤ EM: Electrical Equipment',
                      '➤ EG: Lightning Protection and Grounding',
                      '➤ ASCME: Automated System of Control and Metering of Electricity'
                      ],
                      ['➤ APS: Automatic fire alarm system',
                      '➤ ASPS: Smoke protection automation system',
                      '➤ SUE: Smoke alarm system: System of automation of smoke protection',
                      '➤ SUE: System of notification and control of evacuation of people in case of fire',
                      '➤ ACS: Access Control and Management System',
                      '➤ CCTV: Video Surveillance System',
                      '➤ SCS: Structured Cabling System',
                      '➤ SRF: Radio system',
                      '➤ SPP: Automatic Parking System (Paid Parking System)',
                      '➤ OS: Security Alarm System',
                      '➤ TS: Panic alarm system',
                      '➤ EC: Electrical Chasification system',
                      '➤ EES: Emergency communication system for immobile groups of the population'
                      ],
                      ['➤ HVAC: Heating, Ventilation, and Air Conditioning',
                      '➤ HVAC1: Heating and Heat Supply System',
                      '➤ HVAC2: General Exchange Ventilation System',
                      '➤ HVAC3: Air Conditioning System',
                      '➤ HVAC4: Smoke Ventilation System',
                      '➤ WC: Sewerage',
                      '➤ WC1: Internal Sewerage Systems',
                      '➤ WC2: Storm Sewerage',
                      '➤ WC3: Industrial Sewerage',
                      '➤ WS: Water Supply System',
                      '➤ HC: Cold Supply System',
                      '➤ AUPT: Automatic Water Fire Extinguishing Systems',
                      '➤ WFW: Internal Fire-Fighting Water Supply System'
                      ],
                  ],
                  
                },
                {
                  title: 'IMAR MANAGEMENT',
                  info: [
                    '• DESIGN OF ENGINEERING SYSTEM DRAWINGS',
                    '• DELIVERY OF THE COMPLETE LIST OF DOCUMENTATION TO THE CUSTOMER',
                    '• SUPPORT DURING THE CONSTRUCTION PROCESS'],
                  descriptionTitle: 'Provides commercial real estate maintenance services:',
                  description: [
                    ['➤ Maintenance of engineering systems and operation and repair activities',
                    '➤ Round-the-clock dispatch, emergency and technical services',
                    '➤ Development and implementation of preventive maintenance activities',
                    '➤ Ensuring daily uninterrupted and safe operation of the facility',
                    '➤ Administrative services',
                    '➤ Ensuring security of the facility',
                    '➤ Recommendations for additional services to make the facility more attractive to potential clients and investors for potential customers and investors',
                    '➤ Guarantor of a full range of high-quality services in the sphere of real estate management',
                    "➤ Due to the unique experience gained in the course of many years of practice, as well as professionalism and qualification of the company's personnel",
                    '➤ We save effort and money due to competent operation, timely implementation of preventive measures',
                    '➤ We work according to the scheme of trust cooperation, when all functions are delegated to our employees, but the main strategic decisions and unified control of the object remain in the hands of the owner'
                    ],
                  ],
                  
                },
            ]
            }

        },
      },
      ru: {
        translation: {
            headerButton: 'о нас',
            navbar: {
              main: 'Главная', 
              projects: 'Проекты',
              services: 'Услуги',
              career: 'Карьера'
            },
            activitiesSectionTitle: 'сферы деятельности',
            activities: [
                {
                    title: 'Гражданское строительство',
                    description: 'Формирование ландшафта с помощью видения архитектуры и надежного гражданского проектирования.',
                },
                {
                    title: 'Строительство объектов инфраструктуры',
                    description: 'Построение необходимых связей через транспорт, коммунальные услуги и проекты городского развития.',
                },
                {
                    title: 'Строительство объектов энергетики и альтернативных источников энергии',
                    description: 'Повышение благосостояния обществ с помощью устойчивой электроэнергии и инициатив по возобновляемой энергии.',
                },
                {
                    title: 'Промышленное строительство',
                    description: 'Опытное управление миром добычи, переработки и распределения энергии.',
                },
                {
                    title: 'Строительство морских сооружений',
                    description: 'Использование сил морей с помощью передовых морских решений.',
                },
            ],
            about: {
                title: 'О НАС',
                listElements: [
                    {
                        boldText: 'Экспертные строительные услуги',
                        description: 'Команда специалистов в области строительства и технического проектирования для реализации проектов любого масштаба и сложности.',
                    },
                    {
                        boldText: 'Лидеры в области устойчивого развития',
                        description: 'В каждом проекте мы стремимся приносить реальную ценность клиенту и высокий уровень сервиса, который определяет подход к нашей работе.',
                    },
                    {
                        boldText: 'Успех проекта через опыт',
                        description: 'Мы помогаем миру развиваться безопасно и эффективно, двигаясь в сторону устойчивого будущего.',
                    },
                    {
                        boldText: 'Глобальная инженерная адаптивность',
                        description: 'Мы реализуем проекты в масштабах мирового уровня, следуя развивающимся технологиям и инженерным подходам, адаптируясь к техническим и административным особенностям страны.',
                    },
                ],
                paragraphs: [
                    '➤ Создавая экономически эффективные и технологически продвинутые решения, мы помогаем вам снизить затраты на установку, проектирование и эксплуатацию вашего объекта, обеспечивая удобство в рабочих процессах.',
                    '➤ Мы упрощаем для вас реализацию ваших проектов, делая это, поделившись с вами нашим опытом. С правильным управлением персоналом, материалами и финансами мы проводим процессы реализации вашего проекта без каких-либо сбоев.',
                    '➤ Мы берем на себя управление всеми процессами во время строительства в соответствии с чертежами, общими и специальными спецификациями, а также в рамках правил инженерной этики и требований безопасности труда.',
                ],
                consultation: 'Оставьте заявку, и мы свяжемся с вами',
                contactFormButton: 'оставить заявку',
            },
            servicesSectionTitle: 'НАШИ ПОДРАЗДЕЛЕНИЯ И ПРЕДОСТАВЛЯЕМЫЕ УСЛУГИ',
            services: [
              {
                title: 'Строительный инжиниринг',
                description: [
                  'Комплекс строительно-монтажных работ "под ключ"',
                  'Привлечение полного штата сотрудников на объект',
                  'Быстрая мобилизация и высококачественная согласованная работа команды',
                ],
              },
              {
                title: 'ПРОЕКТИРОВАНИЕ',
                description: [
                  'Проектирование чертежей инженерных систем',
                  'Поставка полного списка документации заказчику',
                  'Поддержка в процессе строительства',
                ],
              },
              {
                title: 'ЭКСПЛУАТАЦИЯ',
                description: [
                  'Профессиональное обслуживание',
                  'Эффективные технологии обслуживания',
                  'Экономия усилий и денег в результате правильной эксплуатации',
                ],
              },
            ],
            hero: {
              description: "Мы - международная строительная и инженерная компания, сопровождаем наших клиентов на всех этапах их жизненного цикла при реализации инфраструктурных, промышленных и развития проектов.",
              button: "О НАС"
            },
            projects: {
              project1: "ЖИЛОЙ КОМПЛЕКС",
              project2: "АМУРСКИЙ ГПЗ",
              project3: "ЖИЛОЙ МИКРОРАЙОН",
              project4: "АМУРСКИЙ ГХК",
              project5: "КУЗЬМИНКИ МОЛЛ",
              project6: "АРЕНА G-DRIVE",
              project7: "Индустриальный парк",
              project8: "Аэропорт «Магадан»",
              description1: "Электромонтажные и механические работы",
              description2: "Строительно-монтажные работы",
              projectCardButton: "Подробнее"
            },
            projectsSectionTitle: "НАШИ ПРОЕКТЫ",
            geographyTitle: "ГЕОГРАФИЯ ПРОЕКТОВ",
            career: {
              title: "Мы всегда в поисках амбициозных людей",
              description: "Если вы хотите присоединиться к команде IMAR, пожалуйста, оставьте заявку, и мы свяжемся с вами.",
              button: "Узнать больше"
            },
            contacts: {
              title1: 'Свяжитесь с нами',
              title2: 'Карьера в IMAR',
              location: '109004, Москва, ул. Земляной Вал, д. 64, стр. 2, ком. 1/7',
              phone: '+7 (991) 773-48-28',
              email: 'info@imar-group.com',
            },
            contactForm: {
              errorMessages: {
                0: ' ',
                1: 'Заполните все поля, чтобы продолжить',
                2: 'Примите пользовательское соглашение, чтобы продолжить',
                3: 'Ваше сообщение успешно отправлено!',
                4: 'Что-то пошло не так :('
              },
              agreement: 'Я принимаю пользовательское соглашение и политику конфиденциальности',
              labelName: 'Имя',
              labelEmail: 'Email',
              labelPhone: 'Телефон',
              button: 'Отправить',
            },
            footer: {
              phone: 'Телефон',
              email: 'Email',
              copyright: 'Все права защищены'
            },
            projectInfoSection: {title: 'О ПРОЕКТЕ'},
            projectPage: {
              header: {title: [
                'Начало / Конец: ',
                'Тип работ: ',
                'Заказчик: '
              ]},
              projectInfo:[
                {
                  title: ['ЖК СИМВОЛ'],
                  headerInfo: ['2022-2023','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'МНОГОФУНКЦИОНАЛЬНАЯ КОМПЛЕКСНАЯ ЖИЛАЯ ЗАСТРОЙКА С ПОДЗЕМНОЙ АВТОСТОЯНКОЙ, ЖК «СИМВОЛ», КОРПУСА 16-17-18 в г.МОСКВА',
                    'Три корпуса объединены двухэтажным стилобатом и единым двухуровневым подземным паркингом на 449 машиномест. Общая площадь проекта составляет 93 729 квадратных метров.',
                    'Территория внутреннего двора домов огорожена и оборудована контролем доступа автотранспорта через КПП.На территории застройки, в жилом комплексе, предполагается разме- стить:пристроенный супермаркет;встроенно-пристроенный физкультурно-оздоровительный комплекс (ФОК);предприятия общественного питания до 50 посадочных мест каждое;офисные помещения.',
                  ],
                },
                {
                  title: ['АМУРСКИЙ ГПЗ'],
                  headerInfo: ['2018-2022','Электрические и механические работы','YAMATA'],
                  description: [
                    'Размер основной строительной площадки завода — порядка 900 га (сравнимо с площадью 1100 футбольных полей). В ходе строительства залито более 430 тыс. куб. м бетона, смонтировано более 170 тыс. тонн металлоконструкций (сопоставимо с весом 23 Эйфелевых башен).',
                    'Проектная мощность переработки — 42 млрд куб. м природного газа в год. Для строительства Амурского ГПЗ на прилегающих территориях создана масштабная инфраструктура: 27 км подъездных автодорог, причал на р. Зее, порядка 40 км железнодорожных путей.',
                    'Строительство Амурского газоперерабатывающего завода в районе г. Свободного Амурской области ведется с октября 2015 года в рамках реализации Восточной газовой программы «Газпрома»',
                  ],
                },
                {
                  title: ['МИКРОРАЙОН','г.СВОБОДНЫЙ'],
                  headerInfo: ['2020-2021','Строительные и монтажные работы','GORIZONT'],
                  description: [
                    'Жилой микрорайон для сотрудников Амурского ГПЗ.Для эксплуатационного персонала Амурского ГПЗ в г. Свободном построен жилой микрорайон «Алексеевский» на 5 тыс. жителей. Всего возведено 42 пятиэтажных дома на 1540 квартир и 36 таунхаусов на 148 квартир. Всё жилье улучшенной планировки, с высокими потолками, мебелью, бытовой техникой, зеркалами и люстрами. Придомовая территория оснащена автопарковками и спортивно-игровыми комплексами.',
                    'Также на территории микрорайона разместятся детский сад с крытым бассейном на 350 мест, школа на 900 учащихся, поликлиника со взрослым и детским отделениями, Центр культуры и досуга, универсальный магазин, центр бытового обслуживания, универсальный спортивно-тренировочный комплекс. ',
                    'Для водоснабжения микрорайона пробурены артезианские скважины. Предусмотрены комплекс очистки воды и современные очистные сооружения хозяйственно-бытовых стоков. Тепло и горячую воду поставляет собственная газовая котельная. Все объекты рассчитаны на дальневосточный климат с перепадом температур от минус 40, до плюс 40 градусов.',
                  ],
                },
                {
                  title: ['Амурский ГХК'],
                  headerInfo: ['2024 - настоящее время','Электромонтажные и механические работы','ESTA Construction'],
                  description: [
                    'Амурский газохимический комплекс (АГХК) - совместное предприятие СИБУРа и China Petroleum & Chemical Corporation (Sinopec) по производству полиэтилена и полипропилена востребованных на российском и мировом рынках марок. Производственная мощность комплекса составит до 2,7 миллионов тонн готовой продукции в год.',
                    'Площадь объектов строительства Амурского ГХК - более 300 гектаров. Комплекс возводится на территории Свободненского района, в 15 км отг. Свободный.',
                    'Крупнейшие в мире установки пиролиза по единичной мощности - 2,3 млн тонн в год, построены 9 печей пиролиза, 8 основных и 1 резервная.',
                  ],
                },
                {
                  title: ['ТРЦ', 'КУЗЬМИНКИ МОЛЛ'],
                  headerInfo: ['2023-2024','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'Проект строительства нового торгово-развлекательного центра «Кузьминки Молл» в г.Москве. Кузьминки Молл - расположен в 200 метрах от станции метро «Кузьминки» на одной из основных транспортных артерий города. ',
                    'Торгово-развлекательный центр стал центральным местом шоппинга.ТЦ включает супермаркет, популярные fashion и спортивные бренды, а также гастрономическое пространство с кафе и ресторанами. Перед главным входом в молл расположен благоустроенный сквер с атмосферной подсветкой, внутри - просторные атриумы с просторными лаунж зонами.',
                  ],
                },
                {
                  title: ['Арена G-Drive'],
                  headerInfo: ['2021-2022','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'Многофункциональный спортивный комплекс «G-DRIVE Arena» предназначена для: Хоккейных матчей под эгидой КХЛ, ВХЛ, МЧМ; Учебно-тренировочного процесса по хоккею; Массового катания на коньках; Иных спортивно-зрелищных мероприятий',
                    'В свободное от спортивных мероприятий время территория вокруг спортивного комплекса используется для прогулок и отдыха горожан, а также для проведения общегородских культурно-массовых мероприятий.',
                  ],
                },
                {
                  title: ['Индустриальный парк «Черняховск»'],
                  headerInfo: ['2021-2022','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'Строительство производственного комплекса по выпуску кремниевых пластин и фотоэлектрических преобразователей, расположенного в г. Черняховск Калининградской области (Индустриальный парк «Черняховск»). Это крупнейший в Восточной Европе завод по производству солнечных пластин и ячеек.',
                    'В ходе реализации проекта была выполнена корректировка проектной документации с прохождением государственной экспертизы, разработка рабочей документации в BIM, выполнение строительных работ «под ключ», включая полный объем электромеханических работ.',
                  ],
                },
                {
                  title: ['Аэропорт «Магадан»'],
                  headerInfo: ['2024 - настоящее время','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'В рамках реализации проекта ведётся строительство нового аэровокзального комплекса внутренних воздушных авиалиний Международного аэропорта Магадан.',
                    'Строительство новой привокзальной площади, новой распределительной электрической подстанции 10кВ, очистных сооружений и других вспомогательных объектов.',
                    'Новый терминал Международного аэропорта Магадан будет оснащен 2 телескопическими трапами и автоматической системой обработки багажа, в нем будут реализованы современные технологии обслуживания пассажиров.',
                  ],
                },
              ]
            },

            servicePage: {
              serviceInfo: [
            
                {
                  title: 'IMAR ENGINEERING AND CONSTRUCTION',
                  info: [
                    '• СТРОИТЕЛЬСТВО ПОД КЛЮЧ И МОНТАЖНЫЕ РАБОТЫ',
                    '• ПРИВЛЕЧЕНИЕ ПОЛНОГО ШТАТА СОТРУДНИКОВ НА ОБЪЕКТ',
                    '• БЫСТРАЯ МОБИЛИЗАЦИЯ И ВЫСОКОКАЧЕСТВЕННАЯ СКООРДИНИРОВАННАЯ РАБОТА КОМАНДЫ'
                  ],
                  descriptionTitle: 'Оказывает услуги по строительству и монтажу электромеханических систем:',
                  description: [
                    ['➤ Монтаж промышленного оборудования',
                    '➤ Монтаж технологических трубопроводов',
                    '<br/>',
                    '➤ ЭС: Электроснабжение',
                    '➤ ЭМ: Электрооборудование',
                    '➤ ЭГ: Молниезащита и заземление',
                    '➤ АСКУЭ: Автоматизированная система контроля и учета электроэнергии',
                    ],
                    ['➤ Монтаж сборных зданий и сооружений',
                    '➤ Монтаж металлических конструкций',
                    '<br/>',
                    '➤ АПС: Автоматическая пожарная сигнализация',
                    '➤ АСПС: Автоматизация систем противопожарной защиты',
                    '➤ СОУЭ: Система оповещения и управления эвакуацией при пожаре',
                    '➤ АСДУ: Автоматизация системы дымоудаления',
                    '➤ СКУД: Система контроля и управления доступом',
                    '➤ Видеонаблюдение',
                    '➤ СКС: Структурированная кабельная система',
                    '➤ РС: Радиосистема',
                    '➤ СПП: Система платной парковки',
                    '➤ ОС: Охранная сигнализация',
                    '➤ ТС: Тревожная сигнализация',
                    '➤ ЭЧ: Электрическая классификация',
                    '➤ ССЭ: Система экстренной связи для маломобильных групп населения'
                    ],
                    ['➤ HVAC: Отопление, вентиляция и кондиционирование воздуха',
                      '➤ HVAC1: Система отопления и теплового снабжения',
                      '➤ HVAC2: Система общеобменной вентиляции',
                      '➤ HVAC3: Система кондиционирования воздуха',
                      '➤ HVAC4: Система дымоудаления',
                      '➤ КО: Канализация',
                      '➤ КО1: Внутренние системы канализации',
                      '➤ КО2: Ливневая канализация',
                      '➤ КО3: Промышленная канализация',
                      '➤ ВС: Система водоснабжения',
                      '➤ ХС: Система холодного снабжения',
                      '➤ АУПТ: Автоматические установки пожаротушения',
                      '➤ ВПВ: Внутренний противопожарный водопровод'
                    ]
                  ],
                  
                },
                {
                  title: 'IMAR PROJECT',
                  info: [ '• ПРОЕКТИРОВАНИЕ ЧЕРТЕЖЕЙ ИНЖЕНЕРНЫХ СИСТЕМ',
                      '• ПРЕДОСТАВЛЕНИЕ ПОЛНОГО ПЕРЕЧНЯ ДОКУМЕНТАЦИИ ЗАКАЗЧИКУ',
                      '• СОПРОВОЖДЕНИЕ В ХОДЕ СТРОИТЕЛЬСТВА'],
                  descriptionTitle: 'Оказывает услуги по проектированию электромеханических систем:',
                  description: [
                      ['➤ ЭС: Электроснабжение',
                      '➤ ЭМ: Электрооборудование',
                      '➤ ЭГ: Молниезащита и заземление',
                      '➤ АСКУЭ: Автоматизированная система контроля и учета электроэнергии'
                      ],
                      ['➤ АПС: Автоматическая пожарная сигнализация',
                      '➤ АСПС: Автоматизация систем противопожарной защиты',
                      '➤ СОУЭ: Система оповещения и управления эвакуацией при пожаре',
                      '➤ АСДУ: Автоматизация системы дымоудаления',
                      '➤ СКУД: Система контроля и управления доступом',
                      '➤ Видеонаблюдение',
                      '➤ СКС: Структурированная кабельная система',
                      '➤ РС: Радиосистема',
                      '➤ СПП: Система платной парковки',
                      '➤ ОС: Охранная сигнализация',
                      '➤ ТС: Тревожная сигнализация',
                      '➤ ЭЧ: Электрическая классификация',
                      '➤ ССЭ: Система экстренной связи для маломобильных групп населения'
                      ],
                      ['➤ HVAC: Отопление, вентиляция и кондиционирование воздуха',
                      '➤ HVAC1: Система отопления и теплового снабжения',
                      '➤ HVAC2: Система общеобменной вентиляции',
                      '➤ HVAC3: Система кондиционирования воздуха',
                      '➤ HVAC4: Система дымоудаления',
                      '➤ КО: Канализация',
                      '➤ КО1: Внутренние системы канализации',
                      '➤ КО2: Ливневая канализация',
                      '➤ КО3: Промышленная канализация',
                      '➤ ВС: Система водоснабжения',
                      '➤ ХС: Система холодного снабжения',
                      '➤ АУПТ: Автоматические установки пожаротушения',
                      '➤ ВПВ: Внутренний противопожарный водопровод'
                      ],
                  ],
                  
                },
                {
                  title: 'IMAR MANAGEMENT',
                  info: [
                    '• ПРОЕКТИРОВАНИЕ ЧЕРТЕЖЕЙ ИНЖЕНЕРНЫХ СИСТЕМ',
                    '• ПРЕДОСТАВЛЕНИЕ ПОЛНОГО ПЕРЕЧНЯ ДОКУМЕНТАЦИИ ЗАКАЗЧИКУ',
                    '• СОПРОВОЖДЕНИЕ В ХОДЕ СТРОИТЕЛЬСТВА'],
                  descriptionTitle: 'Оказывает услуги по обслуживанию коммерческой недвижимости:',
                  description: [
                    ['➤ Обслуживание инженерных систем и проведение ремонтных работ',
                    '➤ Круглосуточная диспетчерская, аварийная и техническая службы',
                    '➤ Разработка и внедрение профилактических мероприятий',
                    '➤ Обеспечение ежедневной бесперебойной и безопасной работы объекта',
                    '➤ Административные услуги',
                    '➤ Обеспечение безопасности объекта',
                    '➤ Рекомендации по дополнительным услугам для повышения привлекательности объекта для потенциальных клиентов и инвесторов',
                    '➤ Гарант полного спектра качественных услуг в сфере управления недвижимостью',
                    '➤ Благодаря уникальному опыту, полученному в ходе многолетней практики, а также профессионализму и квалификации персонала компании',
                    '➤ Мы экономим усилия и средства за счет грамотной эксплуатации, своевременного выполнения профилактических мер',
                    '➤ Мы работаем по схеме доверительного сотрудничества, когда все функции делегированы нашим сотрудникам, но основные стратегические решения и единый контроль объекта остаются в руках собственника'
                    ],
                  ],
                  
                },
              ]
            }
            
            
          },
      }
    },
  });

export default i18n;
