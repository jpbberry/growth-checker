exports.name = 'Bot To User Ratio (> 70%)'

/**
 * @param {import('discord.js').Guild} guild 
 */
exports.run = (guild) => {
    const ratio = guild.members.cache.filter(x => x.user.bot).size / guild.members.cache.size

    if (ratio > 0.7) return true

    return false
}
