import Layout from "components/Layout";

import "/styles/globals.css";

export const metadata = {
  title: "Homebox Dashboard",
  description: "Simplify Bills. Amplify Life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
