const fs = require('fs')
const {Client, Collection} = require('discord.js')
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const {PREFIX, TOKEN} = require('./config')

client.commands = new Collection()

//récupération des commandes définies dans commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  client.commands.set(command.name, command)
}

client.once('ready', () => {
  console.log('********Ready!***********')
})

client.login(TOKEN)
let appels = []
let messageAuteur = []


client.on('messageReactionAdd',  (reaction, user) => {
  if (reaction.emoji.name === '🦇' && messageAuteur.hasOwnProperty(reaction.message.id) ) {
    appels[messageAuteur[reaction.message.id]].presents.push(user.id)
  }
})

client.on('message', message => {
  //if(member.roles.cache.has('role-id-here')){}
  if (!message.content.startsWith(PREFIX) || message.author.bot) return

  const args = message.content.slice(PREFIX.length).trim().split(/ +/)
  const command = args.shift().toLowerCase()

  if (!client.commands.has(command)) return

  client.commands.get(command).execute(message, args, appels,messageAuteur)
})
