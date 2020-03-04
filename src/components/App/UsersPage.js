const UsersPage = () => {
    return (
      <>
        <h3>Users Page</h3>
        {users.map((user, index) => (
          <h5 key={index}>
            <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
          </h5>
        ))}
      </>
    );
  };