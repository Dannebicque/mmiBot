module.exports = {
  name: 'guild',
  description: 'Récupère les étudiants de la guild',
  execute(message, args, datas) {
    console.log('-----guilde----')
      message.guild.members.fetch().then(() => {
        message.guild.roles.fetch()
          .then(roles => {
            roles.cache.each(role => {
              datas.roles[role.name] = role.id
              console.log(role.name + ' '+role.id)
              let membres = []
              role.members.each(
                member => {
                  membres.push(member)
                }
              )
              datas.listeMembres[role.id] = membres
            })
          })
      })
        .catch(console.error)
  }
}
