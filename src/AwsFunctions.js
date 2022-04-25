import * as AWS from 'aws-sdk'

console.log(
  'process.env.REACT_APP_AWS_REGION :>> ',
  process.env.REACT_APP_AWS_REGION
)

const configuration = {
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET,
  region: 'us-west-1',
}
AWS.config.update(configuration)

const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (tableName) => {
  var params = {
    TableName: tableName,
  }

  docClient.scan(params, function (err, data) {
    if (!err) {
      console.log(data)
    } else {
      console.error('Data not found', err)
    }
  })
}

export const putData = (tableName, data) => {
  var params = {
    TableName: tableName,
    Item: data,
  }

  docClient.put(params, function (err, data) {
    if (err) {
      console.log('Error', err)
    } else {
      console.log('Success', data)
    }
  })
}
