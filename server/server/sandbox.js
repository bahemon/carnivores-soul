let name = "Carnivores Soul – FORTUNE Work Jacket – Gold Brown Twill"

const slugify = (str) => str.toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)+/g, '')

// console.log(slugify(name))
const url = process.env.BASE_URL
console.log(url)
