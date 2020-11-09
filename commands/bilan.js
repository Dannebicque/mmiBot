module.exports = {
  name: 'bilan',
  description: 'Bilan des présents',
  execute (message, args, datas) {
    const nbPresent = datas.presents.length - 1 //retirer le bot...
    const nbEtudiantsGroupe = datas.listeMembres.length
    message.channel.send(`Rapport de l\'Oracle : lors du dernier appel: ${nbPresent} présent(s) sur ${nbEtudiantsGroupe}`)
    const nbAbsents = nbEtudiantsGroupe - nbPresent
    if (nbAbsents > 0) {
      message.channel.send(`Les ${nbAbsents} absences sont : `)
      let absents = []

      datas.listeMembres.forEach(user => {
        if (datas.presents.includes(user.id)) {
        } else {
          absents.push(user)
        }
      })
      absents.forEach(
        element => message.channel.send(element.nickname))
    }
  }
}
