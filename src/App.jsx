import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function App() {
  const logout = () => signOut(auth);

  return (
    <Layout
      title={titles[tab]}
      tab={tab}
      setTab={setTab}
      user={user}
      onLogout={logout}
    >
      {pages[tab]}
    </Layout>
  );
}
