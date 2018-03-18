let nextArticleId = 0
export const addArticle = (text) => ({
  type: 'ADD_ARTICLE',
  id: nextArticleId++,
  text
})
