import * as XLSX from 'xlsx'

export const parseExcel = async (file) => {
  const data = await file.arrayBuffer()
  const workbook = XLSX.read(data)
  const worksheet = workbook.Sheets[workbook.SheetNames[0]]
  return XLSX.utils.sheet_to_json(worksheet, { header: 1 })
}

export const processData = (data) => {
  // Ignorer la première ligne (en-têtes)
  const rows = data.slice(1)

  const teamMembers = rows.map(row => ({
    name: row[0],
    timestamp: row[1],
    taskType: row[2],
    channel: row[3],
    startDate: row[4],
    endDate: row[5]
  }))

  const channels = [...new Set(teamMembers.map(member => member.channel))].map(channel => {
    const tasks = teamMembers.filter(member => member.channel === channel)
    const progress = calculateChannelProgress(tasks)
    return { name: channel, progress }
  })

  const monthlyStats = calculateMonthlyStats(teamMembers)

  return { teamMembers, channels, monthlyStats }
}

const calculateChannelProgress = (tasks) => {
  // Logique pour calculer la progression du canal
  // Cette fonction devrait être adaptée selon vos besoins spécifiques
  return Math.floor(Math.random() * 100) // Exemple : retourne un pourcentage aléatoire
}

const calculateMonthlyStats = (teamMembers) => {
  // Logique pour calculer les statistiques mensuelles
  // Cette fonction devrait être adaptée selon vos besoins spécifiques
  const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc']
  return months.map(month => ({
    month,
    completedTasks: Math.floor(Math.random() * 50) // Exemple : retourne un nombre aléatoire de tâches complétées
  }))
}