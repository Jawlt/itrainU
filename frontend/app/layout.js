import "./globals.css";
import { Auth0Provider } from "@auth0/nextjs-auth0/client";  // For Next.js client-side auth

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Auth0Provider
          domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
          clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
          redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI}
        >
          {children}
        </Auth0Provider>
      </body>
    </html>
  );
}
