import questions from './api/questions'
import '../scss/exports/default.scss'

new Vue({
  el: '#briza-app',
  data: {
    results: null
  },
  mounted() {
    const fetchQuestions = async () => {
      const response = await questions.get('/api/questions')
      if (response.status === 200) {
        this.results = response.data
      } else {
        throw new Error('Error getting cards')
      }
    }
    fetchQuestions()
  }
})