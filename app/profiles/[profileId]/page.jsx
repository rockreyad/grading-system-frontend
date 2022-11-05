import ProfileDetails from "../../../components/profiles/ProfileDetails";
import { notFound } from "next/navigation";
import { use } from "react";

async function viewMarks(id) {
  const res = await fetch(`http://localhost:9090/grade/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    //cache: "force-cache",
    next: { revalidate: 10 },
  });
  // await wait(0.5);
  return res.json();
}

function ProfileDetailsPage({ params }) {
  let grade;
  grade = use(viewMarks(params.profileId));
  // try {
  // } catch (error) {
  //   throw new Error("Grade not found!");
  // }

  if (!grade) {
    notFound();
  }
  return <ProfileDetails profile={grade} />;
}

export default ProfileDetailsPage;
