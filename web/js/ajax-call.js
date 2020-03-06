const getResponse = lala => {
  const ajaxCall = new XMLHttpRequest()

  ajaxCall.onreadystatechange = () => {
    if(ajaxCall.readyState === 4 && ajaxCall.status === 200) {
      const response = JSON.parse(ajaxCall.responseText)
      console.log(response)
    }
  }

  ajaxCall.open('GET', `http://localhost:3344/${lala}`)
  ajaxCall.send()
}

const pathList = ["animals", "weather", "food"]
pathList.forEach(path => {
  getResponse(path)
 })


