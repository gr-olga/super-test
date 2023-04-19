export interface DataApi {
    "notificationChannels": {
        "email": Notification,
        "iq": Notification,
        "slack": Notification
        "push": Notification,
        "sms": Notification
    },
    "notificationFrequencies": ReadonlyArray<string>,
    "eventTypes": ReadonlyArray<string>
}

export interface Notification {
    "enabled": boolean,
    "label": string
}