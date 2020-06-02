export const AppConfigs = {

    appVersion: "2.0.5",
    appName: "Unnati",
    currentEnvironment: 'dev',
    environments: [
        {
            name: 'dev',
            programId: '5dfa1a02ab45a70b9f6c0191'
        },
        {
            name: 'qa',
            programId: '5df77a03df3511bcf7f6b899'
        },
        {
            name: 'prod',
            programId: '5e01da0c0c72d5597433ec7a'
        }
    ],

    // Dev urls
    app_url: "https://dev.shikshalokam.org",
    api_url: "https://devhome.shikshalokam.org",
    api_base_url: "https://devhome.shikshalokam.org/assessment-service/api/v1",
    api_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkYTJiMTA5MWVlMDE0MDQ3OTdhYjRjZDI3ODJmYTFkZCJ9.olC-mJ9JVqeeIf-eyBVYciPIIsqDm46XHbKuO1GgNG0',
    clientId: "sl-ionic-connect",
    environment: "Development",
    //Notification urls
    notification: {
        kendra_base_url: "https://devhome.shikshalokam.org/kendra-service/api/",
        getUnreadNotificationCount: "/notifications/in-app/unReadCount",
        markAsRead: "/notifications/in-app/markAsRead/",
        getAllNotifications: "/notifications/in-app/list",
        registerDevice: "/notifications/push/registerDevice",
        getProfile: "user-extension/getProfile/"
    },

    // QA
    // app_url: "https://qa.shikshalokam.org",
    // api_url: "https://qahome.shikshalokam.org",
    // api_base_url: "https://community.shikshalokam.org/assessment/api/v1",
    // api_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIzZGYxZGEyNDEwYzg0NTA1OGIwODQ2YmZkYjkyMzNjYSJ9.osbihbs4szlRkDI9x70wPBvC0MY3Rwdh6KapmTUFj5U',
    // clientId: "sl-ionic-connect",
    // environment: "qa",
    // notification: {
    //     kendra_base_url: "https://qahome.shikshalokam.org/kendra-service/api/",
    //     getUnreadNotificationCount: "/notifications/in-app/unReadCount",
    //     markAsRead: "/notifications/in-app/markAsRead/",
    //     getAllNotifications: "/notifications/in-app/list",
    //     registerDevice: "/notifications/push/registerDevice",
    // getProfile: "user-extension/getProfile/"
    // },

    //AWS Prod Urls
    // app_url: "https://bodh.shikshalokam.org",
    // api_url: "https://api.shikshalokam.org",
    // api_base_url: "https://community.shikshalokam.org/assessment/api/v1",
    // api_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIzZGYxZGEyNDEwYzg0NTA1OGIwODQ2YmZkYjkyMzNjYSJ9.osbihbs4szlRkDI9x70wPBvC0MY3Rwdh6KapmTUFj5U',
    // clientId: "sl-ionic-connect",
    // environment: "Production",
    // notification: {
    //     kendra_base_url: "https://api.shikshalokam.org/kendra/api/",
    //     getUnreadNotificationCount: "/notifications/in-app/unReadCount",
    //     markAsRead: "/notifications/in-app/markAsRead/",
    //     getAllNotifications: "/notifications/in-app/list",
    //     registerDevice: "/notifications/push/registerDevice",
    //     getProfile: "user-extension/getProfile/"
    // },


    //Staging Urls
    // app_url: "https://dev.shikshalokam.org",
    // api_base_url: "https://staginghome.shikshalokam.org/assessment-service/api/v1",
    // api_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkYTJiMTA5MWVlMDE0MDQ3OTdhYjRjZDI3ODJmYTFkZCJ9.olC-mJ9JVqeeIf-eyBVYciPIIsqDm46XHbKuO1GgNG0',
    // clientId: "sl-ionic-connect",
    // environment: "Staging",

    //Staging Home Urls
    // app_url: "https://staging.shikshalokam.org",
    // api_base_url: "https://staginghome.shikshalokam.org/assessment-service/api/v1",
    // api_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkYTJiMTA5MWVlMDE0MDQ3OTdhYjRjZDI3ODJmYTFkZCJ9.olC-mJ9JVqeeIf-eyBVYciPIIsqDm46XHbKuO1GgNG0',
    // clientId: "sl-ionic-connect",
    // environment: "Staging",
    
    configuration: {
        enableAssessmentListRefresh: true
    },
    keyCloak: {
        getAccessToken: "/auth/realms/sunbird/protocol/openid-connect/token",
        redirection_url: "http://localhost:8100/",
        logout_redirect_url: "http://localhost:8100/project-view/home"
    },
    survey: {
        submission: "/submissions/make/",
        getImageUploadUr: "/files/getImageUploadUrl/",
        feedback: "/feedback/insert",
        getSubmissionStatus: "/submissions/status/",
        submitGeneralQuestions: "/submissions/generalQuestions/",
        checkIfSubmitted: "/submissions/isAllowed/",
        fetchIndividualAssessments: "/assessments/list",
        fetchAssessmentDetails: "/assessments/details/"
    },
    rating: {
        fetchRatingQuestions: '/submissions/fetchRatingQuestions/',
        submitRatings: '/submissions/submitRatingQuestions/'
    },
    flagging: {
        fetchRatedQuestions: '/submissions/fetchCriteriaRatings/',
        submitFlag: '/submissions/flagCriteriaRatings/'
    },
    parentInfo: {
        getParentRegisterForm: "/parentRegistry/form",
        addParentsInfo: "/parentRegistry/add",
        getParentList: "/parentRegistry/list/"
    },
    registry: {
        getLeaderRegisterForm: "/schoolLeaderRegistry/form",
        getTeacherRegisterForm: "/teacherRegistry/form",
        addLeaderInfo: "/schoolLeaderRegistry/add",
        addTeacherInfo: "/teacherRegistry/add",
        getTeacherList: "/teacherRegistry/list/",
        getLeaderList: "/schoolLeaderRegistry/list/"
    },
    feedback: {
        getFeedbackForm: '/feedback/form',
        submitFeedback: '/submissions/feedback/'
    },
    slack: {
        exceptionUrl: "https://hooks.slack.com/services/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",
    },
    help: {
        getHelpToken: "/appAccessToken/verify"
    }
}
export interface imageLocalListName {
    schoolId: string,
    evidenceId: string
}