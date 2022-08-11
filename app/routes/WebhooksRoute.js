const axiosParallel = require('axios-parallel');
const express = require('express');
const router = express.Router();

const { getBatchData } = require('../factory/Database');
const { performance } = require('perf_hooks');


router.post('/send-data', async (req, res) => {
  // Debug
  console.log('Start process...');
  const start = performance.now();

  // response queue and continue...
  res.send('Success');

  // API to send data
  const url = req.body.content.appImportUrl;
  const method = req.body.content.appImportMethod;
  let data;

  // Variables control
  const totalRequest = 500;
  const totalData = 2000;
  const requests = [];

  // Loop to generate requests
  for (let index = 1; index <= totalRequest; index++) {
    console.log('Generate requests', index);
    data = await getBatchData(totalData);
    requests.push({ method, url, data });
  }

  // Execute requests in parallel
  const MAX_PARALLEL_REQUEST_PER_CPU = 80;
  try {
    console.log('Process parallel requests', MAX_PARALLEL_REQUEST_PER_CPU);
    await axiosParallel(requests, MAX_PARALLEL_REQUEST_PER_CPU);
  } catch (error) {
    throw new Error(error);
  }

  // Debug
  const end = performance.now() - start;
  console.log(`Execution time: ${end/1000}s`);
  console.log('Finish process...');
});

module.exports = router;
