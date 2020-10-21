export const AppConfigs = {

    appVersion: " 2.1.9",
    appName: "Unnati",
    currentEnvironment: 'prod',
    environments: [
        {
            name: 'dev',
            programId: '5dfa1a02ab45a70b9f6c0191'
        },
        {
            name: 'qa',
            programId: '5f4f5c253e489e22a707ae0c'
        },
        {
            name: 'prod',
            programId: '5e01da0c0c72d5597433ec7a'
        },
    ],

   
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