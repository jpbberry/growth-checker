const { Client } = require('discord.js')

const fs = require('fs')
const path = require('path')

const client = new Client({
  fetchAllMembers: true
})

console.log('Logging in, please wait...')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)

  const res = {}

  const tests = []

  const testFiles = fs.readdirSync(path.resolve(__dirname, './tests'))

  testFiles.forEach(test => {
    const required = require(path.resolve(__dirname, './tests', test))

    tests.push(required)
  })

  client.guilds.cache.forEach(guild => {
    const failures = tests.filter(x => x.run(guild))

    if (failures.length > 0) res[`${guild.id}: ${guild.name}`] = failures.map(x => x.name)
  })

  console.log(res)
})

client.login(process.argv[2])