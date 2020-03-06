const appWillRenderHere = document.querySelector('#view')
const ce = tag => document.createElement(tag)


const getResponse = lala => {
  const ajaxCall = new XMLHttpRequest()

  ajaxCall.onreadystatechange = () => {
    if(ajaxCall.readyState === 4 && ajaxCall.status === 200) {
      const response = JSON.parse(ajaxCall.responseText)
      render(response)
    }
  }

  ajaxCall.open('GET', `http://localhost:3344/${lala}`)
  ajaxCall.send()
}

const pathList = ["animals", "weather", "food"]
pathList.forEach(path => {
  getResponse(path)
 })

const render = response => {
  console.table(response[0])
  const keyList = Object.keys(response[0])
  console.log(keyList)

  const table = ce('table')
  const tableHead = ce('thead')
  const tableBody = ce('tbody')
  const tableHeadRow = ce('tr')
  keyList.forEach(key => {
    const td = ce('td')
    td.textContent = key
    tableHeadRow.appendChild(td)
  })

  response.forEach(myObject => {
    const tableBodyRow = ce('tr')
    keyList.forEach(key => {
      const td = ce('td')
      td.textContent = myObject[key]
      tableBodyRow.appendChild(td)
    })
    tableBody.appendChild(tableBodyRow)
  })
  
  
  tableHead.appendChild(tableHeadRow)
  table.appendChild(tableHead)
  
  table.appendChild(tableBody)
  appWillRenderHere.appendChild(table)
  appWillRenderHere.className = 'view'
  
}




