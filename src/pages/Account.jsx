import React from "react";
import useStore from "../store";
import PageHeader from "../components/PageHeader";

const Account = () => {
  const user = useStore((state) => state.user);

  return (
    <>
      {/* <!-- Page Header Start --> */}
      <PageHeader title="Account" url="/pages" />
      <div className="container">
        <div className="row" style={{ height: "50vh" }}>
          <div>
            <h2>Profile {!user && "(No login)"}</h2>
            <p>Username: {user && user.username}</p>
            <p>First Name: {user && user.firstName}</p>
            <p>Last Name: {user && user.lastName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
