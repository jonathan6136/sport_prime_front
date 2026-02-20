import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // On appelle ton API Express pour vérifier l'utilisateur
        const res = await fetch("http://localhost:5000/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        });
        
        const user = await res.json();

        // Si l'API renvoie l'utilisateur et le token, on les retourne à NextAuth
        if (res.ok && user) {
          return user; 
        }
        return null;
      }
    })
  ],
 callbacks: {
  async jwt({ token, user }) {
    // Si l'utilisateur vient de se connecter, on ajoute son token d'Express au JWT de NextAuth
    if (user) {
      token.accessToken = (user as any).token; 
    }
    return token;
  },
  async session({ session, token }) {
    // On rend ce token accessible dans l'objet session côté client et serveur
    (session.user as any).token = token.accessToken;
    return session;
  },
}});

export { handler as GET, handler as POST };