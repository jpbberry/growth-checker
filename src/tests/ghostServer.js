exports.name = 'Ghost Server (< 3 total members>'

/**
 * @param {import('discord.js').Guild} guild 
 */
exports.run = (guild) => {
    if (guild.members.cache.size < 3) return true

    return false
}