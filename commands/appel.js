const {AUTORISES} = require('../config')

module.exports = {
  name: 'appel',
  description: 'fait l\'appel',
  execute (message, args, datas) {
    //Vérification des rôles autorisés à faire l'appel
    let autorise = false
    AUTORISES.forEach(id => {
      if (message.member.roles.cache.has(id))
      {
        autorise = true;
      }
    })

    if (autorise) {
      datas.listeMembres = []
      if (!args.length) {
        return message.channel.send(`Vous devez spécifier un groupe exemple S1 TPA, S3 TPB, ${message.author}!`)
      } else if (args.length === 1) {
        //liste les étudiants du groupe demandé
        message.guild.roles.fetch()
          .then(roles => {
            roles.cache.each(role => {
              if (role.name === args[0]) {
                datas.roleTest = role
                role.members.each(
                  member => {
                    datas.listeMembres.push(member)
                  }
                )
              }

            })
          }).then(() => {

          datas.presents = []
          console.log(datas.roleTest)
          message.channel.send(`Tous les <@&${datas.roleTest.id}> au rapport (une 🦇 si vous êtes là)`)
            .then((sentMessage) => {
              sentMessage.react('🦇')
              datas.messageAppel = sentMessage
            })
        })


      } else if (args.length === 2) {
        return message.channel.send(args[0] + ', groupe ' + args[1] + ' au rapport (un pouce si vous êtes là)')
      }
    } else {
      message.channel.send('Seul Batman et ses acolytes peuvent executer cette commande')
    }
  }
}
