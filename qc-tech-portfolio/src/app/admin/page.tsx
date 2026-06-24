import AdminProjects from "../../views/AdminProject/AdminProjects";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Administration",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <AdminProjects />;
}
