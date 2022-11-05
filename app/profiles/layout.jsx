import { use } from "react";
import ProfileList from "../../components/profiles/ProfileList";

async function getStudent() {
  const res = await fetch("http://localhost:9090/student", {
    cache: "force-cache",
  });
  return res.json();
}

function ProfilesLayout({ children }) {
  // const student = await getStudent();
  /**
   *  Notice how we call use(getStudent()). This is because use is a new React function that accepts a promise and is conceptually similar to await. We need use because it handles the promise returned by a function in a way compatible with components, hooks, and Suspense. The use hook is a part of the React RFC we mentioned earlier.
   *
   * read more
   * https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md#usepromise
   */

  const student = use(getStudent());
  return (
    <div>
      <aside className="bg-blue-700 p-4 text-white">
        <ProfileList profiles={student.allStudent} />
      </aside>
      {children}
    </div>
  );
}

export default ProfilesLayout;
