module.exports = {
  name: 'bilan',
  description: 'Bilan des présents',
  execute (message, args, datas) {
    message.channel.send(`Présent lors du dernier appel: ${datas.presents.length}`)
    message.channel.send(`Les absences sont`)
    // console.log(datas.roleTest)
    // console.log(datas.roles[datas.roleTest])
    // console.log(datas.listeMembres[datas.roles[datas.roleTest]])
    let absents = []

    datas.listeMembres[datas.roles[datas.roleTest]].forEach(user => {
      if (datas.presents.includes(user.id))
      {
        //console.log(user.username + ' présent')
      } else {
        absents.push(user)
      }
    })

    //console.log(absents)
    absents.forEach(
       element => message.channel.send(element.nickname))
  }
}
