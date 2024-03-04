import { createTercero } from "@/lib/actions/tercero.actions";
import React from "react";

const page = async () => {
  await createTercero();

  return (
    <>
      <h1>Crear Tercero</h1>
    </>
  );
};

export default page;
