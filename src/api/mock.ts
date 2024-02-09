const fakeResponse = (userName) => ({
  code: 200,
  user: {
    id: 42,
    userName,
  },
});

let a = 0;

const api = {
  '/signup': function (userName: string, email: string, password: string) {
    a++;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (a % 2 === 0) {
          return resolve(fakeResponse(userName));
        } else {
          return reject(
            new Error(
              `Username "${userName}" is already taken. Please try another one.`
            )
          );
        }
      }, 500);
    });
  },
};

export default api;
