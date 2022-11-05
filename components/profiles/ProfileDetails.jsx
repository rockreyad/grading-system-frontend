function ProfileDetails({ profile }) {
  return (
    <header>
      <div className="flex flex-col mx-auto items-center bg-gray-700 p-4 text-rose-600 justify-between">
        {profile.status == "SUCCESS" ? (
          <>
            <div className="flex text-blue-200 font-semibold text-2xl">
              <span className="px-2">CGPA:</span>
              {profile.cgpa}
              <span className="text-sm px-1">
                {profile.cgpa && profile.cgpa >= 3.0 ? (
                  <h1 className="text-green-500">Good</h1>
                ) : (
                  <h1 className="text-rose-500">Poor</h1>
                )}
              </span>
            </div>
            <div className="flex justify-between space-x-4 py-4">
              {profile.details.map((course, index) => (
                <div
                  key={index}
                  className="flex flex-col px-8 py-4 mx-auto   bg-gray-200  rounded-md text-gray-500"
                >
                  <h1 className="text-xl text-gray-700 font-bold capitalize">
                    {course.name}
                  </h1>
                  <h1 className="text-lg capitalize">
                    credit:
                    <span className="text-gray-700 font-medium pl-2">
                      {course.credit}
                    </span>
                  </h1>
                  <h1 className="text-lg capitalize">
                    marks:
                    <span className="text-gray-700 font-medium pl-2">
                      {course.marks}
                    </span>
                  </h1>
                  <h1 className="text-gray-600 text-xl font-mono font-medium">
                    {course.marks < 60 ? "Fail" : "Pass"}
                  </h1>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>{profile.message.message}</div>
        )}
      </div>
    </header>
  );
}
export default ProfileDetails;
