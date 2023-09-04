import NextAuth from "next-auth";
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";

const handler = NextAuth({
    providers: [

        AzureADB2CProvider({
            tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,
            clientId: process.env.AZURE_AD_B2C_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET,
            primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
            authorization: { params: { scope: "offline_access openid" } },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async jwt({ token, account, profile }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.accessToken = account.access_token
                token.id = profile.id
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken
            session.user.id = token.id

            return session
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        }
    }
});

export { handler as GET, handler as POST }