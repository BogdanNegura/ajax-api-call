const getResponse = () => {
  const ajaxCall = new XMLHttpRequest()

  ajaxCall.onreadystatechange = () => {
    if(ajaxCall.readyState === 4 && ajaxCall === 200) {
      const response = JSON.parse(ajaxCall.responseText)
      console.log(response)
    }
  }

  ajaxCall.open('GET', 'http://localhost:3344/food')
  ajaxCall.send()
}

const keyList = ["animals", "weather", "food"]
keyList.forEach(key => {
  getResponse(key)
})

getResponse()