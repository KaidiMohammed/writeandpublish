import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
    // Here we add our providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],

    callbacks: {
        jwt: ({ token, user }: { token: any, user: any }) => {
            // first time jwt callback is run , user object is available
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session: ({ session, token }: { session: any, token: any }) => {
            if (token) {
                // session?.user.image = token.id;
            }
            return session;
        },
    },
    secret: process.env.JWT_SECRET,
};

