import React from 'react'

const First = () => {
  const { user } = useAuthContext()

  return (
    <>
      <div>Start page</div>
      <p>user: {user}</p>
    </>
  )
}

export default First;