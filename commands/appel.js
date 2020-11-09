module.exports = {
  name: 'appel',
  description: 'fait l\'appel',
  execute (message, args, datas) {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`)
    } else if (args.length === 1) {
      datas.presents = []
      datas.roleTest = args[0]
      message.channel.send('Tous les @' + args[0] + ' au rapport (un pouce si vous êtes là)')
        .then((sentMessage) => {
          sentMessage.react('👍')
          datas.messageAppel = sentMessage
        })


    } else if (args.length === 2) {
      return message.channel.send(args[0] + ', groupe ' + args[1] + ' au rapport (un pouce si vous êtes là)')
    }
  }
}
