export interface ServiceContentInterface {
    bgImage: string,
    text: string,
    subText: string,
    sideIcon: string,
    bgColor: string,
    clickAction: () => void
}

export type ProfileType = "leaderboard" | 'setting' | 'security' 