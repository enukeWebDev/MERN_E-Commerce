import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};

// Middleware function isAuth is responsible to fulfill the request of the user
export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (authorization) {
    // Remove the BEARER part of only take the token part
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token!' });
      } else {
        req.user = decode;
        next(); // This will call the expressAsyncHandler function in orderRoutes
      }
    });
  } else {
    res.status(401).send({ message: 'No Token!' });
  }
};
