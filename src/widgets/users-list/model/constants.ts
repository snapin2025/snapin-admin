export const UserActions = {
    BAN: "ban",
    UNBAN: "unban",
    DELETE: "delete",
} as const

export type UserAction = (typeof UserActions)[keyof typeof UserActions]

export const BanReasons = {
    BAD_BEHAVIOR: "Bad behavior",
    ADVERTISING: "Advertising placement",
    OTHER: "Another reason",
} as const

export type BanReason = (typeof BanReasons)[keyof typeof BanReasons]