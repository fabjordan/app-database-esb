const { faker } = require("@faker-js/faker");

const getSingleData = async _ => {
  return {
    key: faker.datatype.uuid(),
    value: {
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }
  }
}

const getBatchData = async totalData => {
  const dataList = [];
  for (let i = 0; i < totalData; i++) {
    dataList.push(await getSingleData());
  }
  return dataList;
}

module.exports = {
  getBatchData
}