const validateRole = (userRole, requiredRole) => {
  if (requiredRole.includes(userRole)) {
    return;
  } else {
    throw new Error("user is not authorized");
  }
};

module.exports = {
  validateRole,
};
