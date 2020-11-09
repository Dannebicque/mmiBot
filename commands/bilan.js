module.exports = {
  name: 'bilan',
  description: 'Bilan des présents',
  execute (message, args, appels, messageAuteur) {
    const nbPresent = appels[message.author.id].presents.length - 1 //retirer le bot...
    const nbEtudiantsGroupe = appels[message.author.id].listeEtudiantsRole.length
    message.channel.send(`Rapport de l\'Oracle : lors du dernier appel: ${nbPresent} présent(s) sur ${nbEtudiantsGroupe}`)
    const nbAbsents = nbEtudiantsGroupe - nbPresent
    if (nbAbsents > 0) {
      message.channel.send(`Les ${nbAbsents} absences sont : `)

      appels[message.author.id].listeEtudiantsRole.forEach(user => {
        if (appels[message.author.id].presents.includes(user.id)) {
        } else {
          appels[message.author.id].absents.push(user)
        }
      })
      appels[message.author.id].absents.forEach(
        element => {
          console.log('********')
          console.log(element)
          console.log('----------')
          if (element !== null && element.nickname !== '') {
            message.channel.send(element.nickname)
          }
        })
    }
  }
}
