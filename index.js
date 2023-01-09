// index.js
// Created by Prannaya Gupta
// 3 Dec 2022






const sr = ScrollReveal();




function generateOptions(defaultOptions, bindingValue, bindingModifiers) {
  const options = Object.assign({}, defaultOptions, bindingValue);

  if (bindingModifiers) {
    if (bindingModifiers.reset) {
      options.reset = true;
    }

    if (bindingModifiers.nomobile) {
      options.mobile = false;
    }

    if (bindingModifiers.nodesktop) {
      options.desktop = false;
    }
  }

  return options;
}

const VueScrollReveal = {
  install(Vue, defaultOptions) {
    Vue.directive('scroll-reveal', {
      inserted: (el, binding) => {
        const options = generateOptions(defaultOptions, binding.value, binding.modifiers);

        if (typeof options.class === 'string') {
          el.classList.add(options.class);
          delete options.class;
        }

        sr.reveal(el, options);
      },
      update: (el, binding) => {
        if (binding.value != binding.oldValue) {
          const options = generateOptions(defaultOptions, binding.value, binding.modifiers);

          sr.reveal(el, options);
        }
      },
    });

    const $sr = {
      isSupported() {
        return sr.isSupported();
      },
      sync() {
        sr.sync();
      },
      reveal(target, config, interval, sync) {
        const options = generateOptions(defaultOptions, config);

        sr.reveal(target, config, interval, sync);
      },
    };

    Object.defineProperty(Vue.prototype, '$sr', {
      get() {
        return $sr;
      },
    });
  },
};






const users = [
    {
        num: 0,
        id: "h1810124",
        name: "Prannaya Gupta",
        readme: "Hello, I'm Prannaya! I am an avid researcher, especially in the field of AI!",
        graduationYear: 2023
    },
    {
        num: 1,
        id: "h1810068",
        name: "Karimi Zayan",
        readme: "I am Zayan. Cool Graph Neural Network!",
        graduationYear: 2023
    },
    {
        num: 2,
        id: "h1810166",
        name: "Yap Yuan Xi",
        readme: "I am Yuan Xi. I am a CTFer, IOer, Developer, yet somehow I can't do AI :(.",
        graduationYear: 2023
    },
    {
        num: 3,
        id: "h1810159",
        name: "Vikram Ramanathan",
        readme: "I am Vikram, the mentor rep of 604! I like DnD and stuff.",
        graduationYear: 2023
    },
    {
        num: 4,
        id: "h1910059",
        name: "Kabir Jain",
        readme: "I am Kabir, a resident AI lover and physics lover!",
        graduationYear: 2024
    }
]

const projects = [
    {
        num: 0,
        id: "ES009",
        title: "Optimization of the Telemetry, Tracking and Commmunications System in a CubeSat",
        authors: "Mayukh Das, Prannaya Gupta",
        abstract: "The growing commercialisation of the space industry and novel developments in miniaturisation technology has led to an increase of adoption of Cube-Satellites, a compact and multi-layered system...", 
        reveal: false,
        code: "ES009",
        year: "2023"
    },
    {
        num: 1,
        id: "PH022",
        title: "An Automated Screening System for Trinary Star System Candidates",
        authors: "Cheong Hao'En Ernest Emmanuel, Prannaya Gupta, Vikram Ramanathan, Yap Yuan Xi",
        abstract: "The discovery and cataloguing of trinary star systems is of significant interest to the field of astronomy, with implications from stellar system formation dynamics to satellite star capture frequency...",
        reveal: false,
        code: "PH022",
        year: "2022,2023"
    },
    {
        num: 2,
        id: "BE023",
        title: "Analysing Gait Patterns of PD Patients to Predict FoG using Machine Learning Algorithms",
        authors: "Nallapuraju Ananya, Prannaya Gupta, Ye Chen Rui",
        abstract: "Parkinson's Disease (PD) is a neurodegenerative disease that affects the substantia nigra, a region in the brain. It causes many hindrances to activities of daily living (ADL). A debilitating symptom...",
        reveal: false,
        code: "BE023",
        year: "2023"
    },
    {
        num: 3,
        id: "Cyberbullying",
        title: "Detecting Cyberbullying in Localised Text Messages using a Novel Classroom-Based Noisy Student Training Technique",
        authors: "Kabir Jain, Karimi Jain, Prannaya Gupta",
        abstract: "",
        reveal: false,
        code: "",
        year: "2023"
    },
    {
        num: 4,
        id: "SS028",
        title: "Detecting Malware Samples using a Novel Feature Vector and Deep Learning Methods",
        authors: "Ashwin Lokesh, Ishneet Sukhvinder Singh, Lam Yik Ting, Lim Sue Han Justin, Prannaya Gupta, Yau Le Qi",
        abstract: "Dynamic malware analysis, which has been a major field in malware analysis, involves executing the malware in a controlled environment and observing its behavior. Based on dynamic analysis reports...",
        reveal: false,
        code: "SS028",
        year: "2023"
    },
    {
        num: 5,
        id: "22.011.NUSH.PH",
        title: "Detecting and Simulating Stable Three-Body Systems",
        authors: "Cheong Hao'En Ernest Emmanuel, Prannaya Gupta, Vikram Ramanathan, Yap Yuan Xi",
        abstract: "",
        reveal: false,
        code: "22.011.NUSH.PH",
        year: "2022"
    },
    {
        num: 6,
        id: "21.029.SUTD.CS",
        title: "Embodied AI for computational perception and understanding of spatial designs",
        authors: "Karimi Zayan, Prannaya Gupta",
        abstract: "Semantic Segmentation is a Computer Vision task used to identify specific regions of interest for virtual agents and autonomous robots or vehicles, specifically by assigning a class to every pixel of...",
        reveal: false,
        code: "21.029.SUTD.CS, RO014",
        year: "2022"
    },
    {
        num: 7,
        id: "20.022.NUSE.PH",
        title: "Gait Monitoring and Analysis for Parkinson's Disease Patients",
        authors: "Nallapuraju Ananya, Prannaya Gupta, Ye Chen Rui",
        abstract: "",
        reveal: false,
        code: "20.022.NUSE.PH, BE018",
        year: "2021"
    }
]


const Home = Vue.extend({
    name: "Home",
    template: `
  <v-container fluid
    style="background: url('img/books.jpg') no-repeat center center fixed !important; background-size: cover"
  >
  <section align="center"
      justify="center" :height="height" style="fill-height:100%; margin-top:40vh;">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        align="center"
        justify="center"
      >
        <span style="font-size: 3em">
          arXiv.nush
        </span>
        <span style="font-size: 1.5em" class="text-wrap">
          <br/>Explore Research@NUSH like never before.
        </span>
      </v-col>
    </v-row>
    </section>

    <section v-scroll-reveal.reset>
      <v-row
      align="center"
      justify="center"
    >
      <v-col
        align="center"
        justify="center"
      >
        <span style="font-size: 3em">
          Doing an ARP at NUS High?
        </span>
        <span style="font-size: 1.5em">
          <br/>Compile all your details in one platform.
        </span>
      </v-col>
    </v-row>
    </section>

    <section v-scroll-reveal.reset>
      <v-row
      align="center"
      justify="center"
    >
      <v-col
        align="center"
        justify="center"
      >
        <span style="font-size: 3em">
          Enjoy more comforts!
        </span>
        <span style="font-size: 1.5em">
          <br/>Submit forms, report, poster, all in one platform!
        </span>
      </v-col>
    </v-row>
    </section>
  </v-container>
    `,
    computed: {
        height() {
            return window.innerHeight;
        },
        width() {
        return window.innerWidth;
        },
    },
})

const Dashboard = Vue.extend({
    name: "Dashboard",
    template: `
        <v-flex>
            <v-container fluid>
                    <h1>Your Projects</h1>
                    <v-layout wrap justify-space-around>
                        <v-flex v-for="project in projects" :key="project.num" style="flex-grow: 0; padding-bottom: 40px;">
                            <v-card class="mx-auto pa-4" max-width="400px" height="100%">
                                <v-flex class="text-overline">
                                    <div class="mx-4 d-flex">
                                        {{ project.code }} <v-spacer /> {{ project.year }}
                                    </div>
                                </v-flex>
                                <v-card-title class="text--primary" style="word-break: break-word;">
                                    {{ project.title }}
                                </v-card-title>
                                <v-card-subtitle>{{ project.authors }}</v-card-subtitle>
                                <v-card-actions>
                                    <v-btn
                                        color="primary"
                                        dark :href="'#/projects/'+project.id" target="_blank"
                                    >
                                        Open
                                    </v-btn>
                                    <v-btn
                                        text v-if="!project.reveal"
                                        color="primary"
                                        @click="project.reveal = true"
                                    >
                                        Learn More
                                    </v-btn>
                                </v-card-actions>
                                <v-expand-transition>
                                <div v-if="project.reveal">
                                    <v-card-text class="pb-0">{{project.abstract ? project.abstract : "No Abstract Inserted" }}</v-card-text>
                                    <v-card-actions class="pt-0">
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="project.reveal = false"
                                        >
                                            Close
                                        </v-btn>
                                    </v-card-actions>
                                </div>
                                </v-expand-transition>
                            </v-card>
                        </v-flex>
                    </v-layout>
            </v-container>
        </v-flex>
    `,
    data() {
        return {
            projects: projects
        }
    }

})

const GitHub = Vue.extend({
    name: "GitHub",
    template: `
        <v-container fluid>
            <v-card>
            <div class="pa-8">

                <v-row justify='center'>
                <v-col cols='auto' align-self="center">
                    <v-text-field v-model="name" label="Username" style="width: auto" v-on:keyup.enter="search" />
                </v-col>
                <v-col cols='auto' align-self="center">
                    <v-btn v-on:click=search style="display: block; margin: auto">SEARCH</v-btn>
                </v-col>
                </v-row>

                <v-data-table :items-per-page="15" :headers=headers :items=repos class="elevation-1"
                            :footer-props="{showFirstLastPage: true, firstIcon: 'mdi-arrow-collapse-left', lastIcon: 'mdi-arrow-collapse-right'}"
                            :loading=loadingRepos>
                </v-data-table>
            </div>
            </v-card>
        </v-container>
    `,
  data() {
    return {
      name: "",
      repos: [],
      loadingRepos: false,
      headers: [{text: "Repo Name", value: "name"},
        {text: "Language", value: "language"},
        {text: "Description", value: "description", sortable: false},
        {text: "Stars", value: "stargazers_count"},
        {text: "Watchers", value: "watchers_count"}]
    };
  },
  methods: {
    async search() {
            if(this.name != "") {
            this.repos = (await (await fetch(`https://api.github.com/users/${this.name}/repos?per_page=100`)).json());
            this.repos = this.repos.filter(
                repo => (!repo.fork && repo.language)
            );
        }
    }
  }
})

const SSEF = Vue.extend({
    name: "SSEF",
    template: `
        <v-container fluid>
            <v-card>
            <div class="pa-8">

                <v-row justify='center'>
                <v-col cols='auto' align-self="center">
                     <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-col>
                </v-row>
                <v-data-table :items-per-page="15" :headers=headers :items=projects class="elevation-1"
                            :footer-props="{showFirstLastPage: true, firstIcon: 'mdi-arrow-collapse-left', lastIcon: 'mdi-arrow-collapse-right'}"
                            :loading=loadingProjects :search="search">
                </v-data-table>
            </div>
            </v-card>
        </v-container>
    `,
  data() {
    return {
      search: "",
      projects: [],
      loadingProjects: false,
      headers: [{text: "Project Code", value: "projectCode"},
        {text: "Title", value: "title"},
        {text: "School", value: "school"},
        {text: "Team Leader", value: "teamLeader"},
        {text: "Last Updated", value: "lastUpdated", filterable: false}]
    };
  },
    async mounted() {
        this.projects = await this.loadProjects();
        console.log(this.projects);
    },
  methods: {
    async loadProjects() {
        let finalData = []
        await axios.post(
            "https://www.ssef.com.sg/website/getProjectListForPublic",
            {  
                'project.ordering':'category',
                resultType:'json'
            }
        ).then(function (response) {
            let data = response.data;
            let start = data.indexOf("{");
            let end = data.lastIndexOf("}")+1;
            data = data.slice(start, end).replace("\t", "");
            start = data.indexOf("[");
            end = data.lastIndexOf("]")+1;
            data = JSON.parse(data.slice(start, end)).filter((it) => it.status == 20).map(
                (object) => {
                    return {
                        projectCode: object.category1 + object.projectCode.toString().padStart(3, "0"),
                        lastUpdated: moment(object.submissionDate, "DD/MM/YYYY hh:mm").toDate(),
                        teamLeader: object.memberName,
                        school: object.school.replace("&#39", "'"),
                        title: object.title.replace("&#39", "'")
                    }
                }
            );
            finalData = data;
        });
        return finalData;
    }
  }
})

const Project = Vue.extend({
    name: "Project",
    template: `
        <v-container fluid>
            <v-flex>
                <v-card class="mx-auto pa-4" height="100%">
                    <v-flex class="text-overline">
                        <div class="mx-4 d-flex">
                            {{ project.code }} <v-spacer /> {{ project.year }}
                        </div>
                    </v-flex>
                    <v-card-title> {{ project.title }} </v-card-title>
                    <v-card-subtitle> {{ project.authors }} </v-card-subtitle>

                    <v-spacer />

                    <v-card-text>
                        <div v-if="!editAbstract">
                            {{ project.abstract  ? project.abstract : "No Abstract Inserted" }}
                            <v-btn
                                append-icon="mdi-magnify"
                                color="primary"
                                @click="editAbstract = true"
                            >
                                Edit
                            </v-btn>
                        </div>

                        <div v-if="editAbstract">
                            <v-textarea
                                clearable
                                auto-grow
                                v-model = "tempAbstract"
                                clear-icon="mdi-close-circle"
                                label="Text"
                                value="This is clearable text."
                            ></v-textarea>
                            <label id="counter">{{ wordCount(tempAbstract) }} words written</label>
                        </div>
                        
                    </v-card-text>
                </v-card>
            </v-flex>

        </v-container>
    `,
    data() {
        return {
            editAbstract: false,
            tempAbstract: ""
            // project: {}
        }
    },
    computed: {
        project() {
            return this.classify(this.$route.params.id);
        }
    },
    methods: {
        classify(id) {
            return projects.filter((it) => (it.id == id))[0];
        },
        wordCount(text) {
            var content = text;
            content = content.replace(/<\S[^><]*>/gi, "");
            return content.match(/\w+/g) ? content.match(/\w+/g).length : 0;
        }
    },
    mounted() {
        // this.project = this.classify(this.$route.params.id);
        this.tempAbstract = this.project.abstract;
    }

})



const User = Vue.extend({
    name: "User",
    template: `
        <v-container fluid>
            <v-flex>
                <v-card class="mx-auto pa-4" height="100%">
                    <v-flex class="text-overline">
                        <div class="mx-4 d-flex">
                            {{ user.id.toUpperCase() }} <v-spacer /> y{{ 2029 - user.graduationYear }}
                        </div>
                    </v-flex>
                    <v-card-title> {{ user.name }} </v-card-title>
                    <v-card-subtitle> {{ user.readme }} </v-card-subtitle>
                </v-card>
            </v-flex>

        </v-container>
    `,
    data() {
        return {
            // project: {}
        }
    },
    computed: {
       user() {
            return this.classify(this.$route.params.id);
        }
    },
    methods: {
        classify(id) {
            return users.filter((it) => (it.id == id))[0];
        }
    },
    mounted() {
        // this.project = this.classify(this.$route.params.id);
        // this.tempAbstract = this.project.abstract;
    }

})


const routes = [
    {
        name: "Home",
        path: "/",
        icon: "mdi-home",
        component: Home,
    },
    {
        name: "Dashboard",
        path: "/projects",
        icon: "mdi-file-table-box",
        component: Dashboard,
    },
    {
        name: "GitHub Tracker",
        path: "/github",
        icon: "mdi-github",
        component: GitHub,
    },
    {
        name: "SSEF Tracker",
        path: "/ssef",
        icon: "mdi-flask",
        component: SSEF,
    },
    { 
        path: '/users/:id',
        component: User
    },
    { 
        path: '/projects/:id',
        component: Project
    }
]

Vue.use(Vuetify);
Vue.use(VueScrollReveal);

const vuetify = new Vuetify({
  theme: {
    dark: true
  }
});
const router = new VueRouter({
  routes,
});


var app = new Vue({
    el: '#app',
    vuetify: vuetify,
    router: router,
    data() {
        return {
            loggedIn: true,
            drawerShown: false,
            username: "",
            password: "",
            showPassword: false,
            font: window.innerWidth < 1000 ? 3 * 0.75 : 3,
            hideSubtitle: false,
            imgIsLoaded: false,
            img: "img/books.jpg",
            tab: null,
            loginItems: ["Login", "Register"],
            routes: [
                {
                    name: "Home",
                    path: "/",
                    icon: "mdi-home",
                },
                {
                    name: "Dashboard",
                    path: "/projects",
                    icon: "mdi-file-table-box",
                },
                {
                    name: "GitHub Tracker",
                    path: "/github",
                    icon: "mdi-github",
                },
                {
                    name: "SSEF Tracker",
                    path: "/ssef",
                    icon: "mdi-flask",
                },
                {
                    name: "Profile",
                    path: "/users/h1810124",
                    icon: "mdi-account"
                }
            ]
        };
    },
    methods: {
        login() {
            console.log(`Username: ${this.username}`);
            console.log(`Password: ${this.password}`);
            if(this.username == "root" && this.password == "admin") {
                console.log("Logged In Successfully!");
                this.loggedIn = true;
            }
        },
        register() {
            console.log(`Username: ${this.username}`);
            console.log(`Password: ${this.password}`);
            console.log("Registered Successfully!");
            this.loggedIn = true;
        },
        logout() {
            this.username = "";
            this.password = "";
            this.loggedIn = false;
        },
        onScroll() {
            if (window.scrollY > this.height * 0.8) {
                this.font = 1;
                this.hideSubtitle = true;
            } else {
                this.font = 3;
                this.hideSubtitle = false;
            }
            if (this.width < 1000) {
                this.font *= 0.75;
            }
        },
        imgLoaded() {
            this.imgIsLoaded = true;
        }
    },
    computed: {
        routes() {
            return routes;
        },
        height() {
            return window.innerHeight;
        },
        width() {
        return window.innerWidth;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    }
})