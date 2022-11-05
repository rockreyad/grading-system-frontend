import Link from "next/link";

function ProfileList({ profiles }) {
  return (
    <ul className="flex flex-wrap bg-blue-500 px-2 py-4 rounded-lg justify-evenly">
      {profiles.map((profile, index) => (
        <li key={index}>
          <article>
            <h2>{profile.name}</h2>
            <p className="font-semibold hover:text-rose-400">
              <Link href={`/profiles/${profile.id}`}>Details</Link>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default ProfileList;
