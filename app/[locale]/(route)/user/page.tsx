import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const page = async () => {
  const {
    getAccessToken,
    getBooleanFlag,
    getFlag,
    getIdToken,
    getIntegerFlag,
    getOrganization,
    getPermission,
    getPermissions,
    getStringFlag,
    getUser,
    getUserOrganizations,
    isAuthenticated,
  } = getKindeServerSession();

  const accessToken = await getAccessToken();
  //console.log(accessToken);
  const booleanFlag = await getBooleanFlag("bflag", false);
  const flag = await getFlag("flag", "x", "s");
  //   console.log(flag);
  const integerFlag = await getIntegerFlag("iflag", 99);
  const organization = await getOrganization();
  const permission = await getPermission("eat:chips");
  const permissions = await getPermissions();
  const stringFlag = await getStringFlag("sflag", "test");
  const user = await getUser();
  const organizations = await getUserOrganizations();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <div className="container">
      <div className="card hero">
        <p className="text-display-1 hero-title">
          Let’s start authenticating <br /> with KindeAuth
        </p>
        <p className="text-body-1 hero-tagline">Configure your app</p>

        <Link
          href="https://kinde.com/docs/sdks/nextjs-sdk"
          target="_blank"
          rel="noreferrer"
          className="btn btn-light btn-big"
        >
          Go to docs
        </Link>
        <ul>
          <li>Access token - {JSON.stringify(accessToken)}</li>
          <li>Bollean flag - {booleanFlag}</li>
          <li>Flag - {JSON.stringify(flag)}</li>
          <li>Integer flag - {integerFlag}</li>
          <li>Organization - {JSON.stringify(organization)}</li>
          <li>Permission - {JSON.stringify(permission)}</li>
          <li>Permissions - {JSON.stringify(permissions)}</li>
          <li>String flag - {stringFlag}</li>
          <li>User - {JSON.stringify(user)}</li>
          <li>Organizations - {JSON.stringify(organizations)}</li>
          <li>Is user authenticated - {isUserAuthenticated}</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
