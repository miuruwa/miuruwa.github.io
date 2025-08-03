import { routes } from "./routes";

export const page = {
    eng: {
        title: "Terms of service",
        headline: "✦Terms of service✦",
        noteMark: "Important",
        note: "Ordering artwork from me, you agree to my terms of service and in the future you cannot make claims against the document.",
        terms: [
            {
                headline: "Payment",
                list: [
                    "Accepted methods of payment: Ko-Fi (USD)",
                    "An invoice will be send prior to starting commission",
                    "Payment upfront is of minimum 50%",
                    "Pricing of special requests shall be discussed based on complexity (special art styles etc)",
                    {
                    headline: "Commercial use fee",
                    list: [
                    "50% of commission price if used to promote any type of social media",
                    "100% if used as 2D model",
                    "200% if used for merchandising"
                    ]
                    },
                    {
                    headline: "Rush fee", 
                    list: ["50-100% of commission price"]
                    },
                    "Transaction fees will be included in the final price",
                    "No refunds (unless I am unable to finish it due to personal reasons)"
                ]
            },
            {
                headline: "Terms",
                list: [
                    "I reserve the right to decline a request",
                    "The artist retains copyright of the commissioned illustration",
                    "Commissions without commercial fee are for personal use only, such as profile pictures, wallpapers and personal prints",
                    "Please send references of the characters and background, if you have any",
                    "Unless requested in advance for privacy by the client I reserve the right to create content and advertise using the commissioned illustration (i.e. posting on social media and streaming)",
                    "You're able to request 2 minor revisions and 1 major revision",
                ]
            }
        ],
        navigate: [
            {
                title: "Home",
                path: routes.home,
            },
            {
                title: "Waitlist",
                path: routes.waitList,
            },
            {
                title: "Commission details",
                path: routes.commissionInfo,
            },
        ]
    },
}