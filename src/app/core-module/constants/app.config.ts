import { environment } from '../../../environments/environment';
export const AppConfigs = {

    appVersion: "2.1.8",
    appName: "Diksha-projects",
    currentEnvironment: 'prod',
    environments: [
        {
            name: 'prod',
            programId: environment.programId
        }
    ],
    notification: {
        getUnreadNotificationCount: "/notifications/in-app/unReadCount",
        markAsRead: "/notifications/in-app/markAsRead/",
        getAllNotifications: "/notifications/in-app/list",
        registerDevice: "/notifications/push/registerDevice",
        getProfile: "user-extension/getProfile/"
    }
}
export interface imageLocalListName {
}